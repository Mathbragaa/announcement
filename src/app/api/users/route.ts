import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/utils/dbConnect'
import {crypto} from '@/utils/password'
import UsersModel from '@/models/users'

interface CreateUserRequest {
  name: string
  email: string
  password: string
  passwordCrypto: string
}

export async function GET(req: NextRequest) {
  await dbConnect()
  return NextResponse.json({ success: true })
}

export async function POST(req: NextRequest) {
  await dbConnect()

  const body = await req.text()
  const { name, email, password }: CreateUserRequest = JSON.parse(body)

  const passwordCrypto = await crypto(password)
  
  const user = new UsersModel({ name, email, password:passwordCrypto})

  try {
    await user.save()
    return NextResponse.json({ status: 201, success: true })
  } catch (error) {
    return NextResponse.json({ status: 500, success: false })
  }
}
