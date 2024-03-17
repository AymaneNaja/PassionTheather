import Navbar from '@/Components/Nav/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer/Footer'
import Providers from './Providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Passion Theatre',
  description: 'Always here for your entertainment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html data-theme={'light'} lang="en ">
      <body className={inter.className + 'max-w-lg'}>
        <Providers>
          <Navbar />
          <div className='min-h-screen'>
            {children}
          </div>
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
