import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'RentEase - Find Your Ideal Rental Home',
  description: 'Discover and rent your ideal rental home with RentEase',
  keywords: ['rental', 'home rental', 'real estate', 'apartments', 'homes for rent'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} antialiased min-h-screen bg-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}