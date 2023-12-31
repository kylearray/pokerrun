import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Poker Run - Array Real Estate',
  description: 'Poker Run presented by Array Real Estate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en">
    <body>
      <Header />
      {children}
      <Footer />
      <Analytics/>
    </body>
  </html>
  )
}
