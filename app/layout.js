import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  keywords: 'Face Plastic Surgery Turkey',
  title: 'Face Plastic Surgery in Turkey | Aesthetic Plastic Surgery MD Mersinlioğlu',
  description: 'Experience the best face aesthetic surgery in Turkey with Dr. Gökhan Mersinlioğlu, M.D. Achieve your desired aesthetic goals and enhance your facial features at Aesthetic & Plastic Surgery.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> 
      </body>
    </html>
  )
}
