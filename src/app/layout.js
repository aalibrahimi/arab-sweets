import './globals.css'

export const metadata = {
  title: 'Arab Sweets',
  description: 'Discover the rich flavors of Middle Eastern desserts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}