import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import ProviderContainer from '@/redux/services/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Defensa y Justicia Fanpage',
  description: 'Web dedicada a la institucion deportiva Defensa y Justicia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='shortcut icon' href='./favicon.ico' />
      </head>
      
      <body className={inter.className}>
        <ProviderContainer>
          <Navbar />
          {children}
          <Footer />
        </ProviderContainer>
      </body>
    </html>
  )
}
