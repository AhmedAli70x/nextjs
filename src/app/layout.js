import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import ClientSideProviderTest from '@/components/clientSideProviderTest'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "'Next App1 Home Page",
    template: "%s | Next.js 14"
  },
  description: 'Next.js starter app1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
     
       </body>
    </html>
  )
}