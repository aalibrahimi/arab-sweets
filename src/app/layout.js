import './globals.css'
import { CartProvider } from '../components/CartProvider'

export const metadata = {
  title: 'Arab Sweets',
  description: 'Discover the rich flavors of Middle Eastern desserts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}