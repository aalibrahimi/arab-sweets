"use client"

import { useState } from 'react'
import { useCart } from '../../components/CartProvider'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Checkout() {
  const { cart, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the order to a server
    console.log('Order submitted:', { cart, formData })
    alert('Thank you for your order!')
    clearCart()
    // Redirect to a thank you page or back to the home page
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <nav className="bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center text-rose-600 dark:text-pink-400 hover:text-rose-700 dark:hover:text-pink-500">
            <ArrowLeft className="mr-2" size={20} />
            <span className="text-2xl font-bold">Back to Home</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-rose-700 dark:text-white mb-8">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-rose-600 dark:text-pink-400 mb-4">Order Summary</h2>
            {cart.map((item) => (
              <div key={item.name} className="flex justify-between items-center mb-2">
                <span className="text-gray-800 dark:text-gray-200">
                  {item.name} (x{item.quantity})
                </span>
                <span className="text-rose-600 dark:text-pink-400">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800 dark:text-gray-200">Total:</span>
                <span className="font-bold text-rose-600 dark:text-pink-400">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-rose-600 dark:text-pink-400 mb-4">Shipping Information</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 dark:text-gray-300 mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="city" className="block text-gray-700 dark:text-gray-300 mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-gray-700 dark:text-gray-300 mb-2">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-rose-600 dark:text-pink-400 mb-4 mt-8">Payment Information</h2>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 dark:text-gray-300 mb-2">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="expiryDate" className="block text-gray-700 dark:text-gray-300 mb-2">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700 dark:text-gray-300 mb-2">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
            </div>

            

            <button
              type="submit"
              className="w-full bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition duration-300 mt-6"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}