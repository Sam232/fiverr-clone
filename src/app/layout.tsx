import type { Metadata } from 'next';
import './css/globals.css'

export const metadata: Metadata = {
  title: 'fiverr',
  description: 'Marketplace for digital jobs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont">
        {children}
      </body>
    </html>
  )
}
