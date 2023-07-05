'use client'
import { Box, ThemeProvider } from '@mui/system';

import themeDefault from '@/components/Theme/theme';
import Header from '@/layouts/Header/Header';
import Footer from '@/layouts/Footer/Footer';

import './global.css';

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
              <Header/>
                <Box
                  sx={{
                    bgcolor:'background.paper',
                    py: [8, 6],
                  }}
                >
                  {children}
                </Box>
              <Footer/>
          </body>
        </html>
    </ThemeProvider>
  )
}
