import React, { useState } from 'react'
import { useCart } from './CartProvider'
import { ShoppingCart, X, Plus, Minus } from 'lucide-react'
import Link from 'next/link'

export function CartDisplay() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="relative">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 right-4 z-50 bg-rose-500 text-white p-2 rounded-full shadow-lg"
        >
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </button>
      )}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 p-4 shadow-lg overflow-y-auto">
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-rose-700 dark:text-white">Your Cart</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.name} className="flex justify-between items-center mb-4 border-b pb-2">
                    <div>
                      <span className="text-gray-800 dark:text-gray-200 font-semibold">{item.name}</span>
                      <div className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)} each</div>
                    </div>
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.name, item.quantity - 1)} 
                        className="text-rose-500 hover:text-rose-700"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-2 text-gray-800 dark:text-gray-200">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.name, item.quantity + 1)} 
                        className="text-rose-500 hover:text-rose-700"
                      >
                        <Plus size={16} />
                      </button>
                      <button onClick={() => removeFromCart(item.name)} className="ml-2 text-red-500 hover:text-red-700">
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-800 dark:text-gray-200">Total:</span>
                    <span className="font-bold text-rose-600 dark:text-pink-400">${totalPrice.toFixed(2)}</span>
                  </div>
                  <Link href="/checkout">
                    <button
                      className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition duration-300 mb-2"
                    >
                      Proceed to Checkout
                    </button>
                  </Link>
                  <button
                    onClick={clearCart}
                    className="w-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}