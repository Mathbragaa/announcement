'use client'

import { Box, ThemeProvider } from '@mui/system'
import themeDefault from '@/components/Theme/theme'

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
          <body>
            <Box sx={{bgcolor:'background.paper'}}>
              {children}
            </Box>
          </body>
        </html>
    </ThemeProvider>
  )
}
