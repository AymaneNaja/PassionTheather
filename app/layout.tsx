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
  authModal
}: {
  children: React.ReactNode,
  authModal: React.ReactNode
}) {


  return (
    <html data-theme={'light'} lang="en ">
      <body className={inter.className + 'max-w-lg'}>
        <Providers>
          <Navbar />
          <div className='min-h-screen'>
            <div>{authModal}</div>
            <div>{children}</div>
          </div>
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
