
import { NextResponse } from 'next/server'
import dbConnect from '@/utils/dbConnect'
 
export async function GET(request: Request) {
    
    await dbConnect()
  return NextResponse.json({ success: true})
}