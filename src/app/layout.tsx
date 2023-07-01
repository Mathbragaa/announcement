'use client'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/system'
import themeDefault from '@/components/Theme/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Announcement',
  description: 'Projeto Final',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={themeDefault}>
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  )
}
