"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ShoppingBag, Gift, MapPin, ArrowLeft, Sun, Moon } from 'lucide-react'
import { useCart } from '../../../components/cartprovider'
import { CartDisplay } from '../../../components/cartdisplay'

const categories = [
  { name: "Baklava", items: [
    { name: "Classic Baklava", price: 2.50, description: "Layers of phyllo, honey, and mixed nuts" },
    { name: "Pistachio Baklava", price: 3.00, description: "Filled with crushed pistachios" },
    { name: "Chocolate Baklava", price: 3.50, description: "With a rich chocolate filling" },
  ]},
  { name: "Kunafa", items: [
    { name: "Cheese Kunafa", price: 4.00, description: "Traditional cheese-filled kunafa" },
    { name: "Cream Kunafa", price: 4.50, description: "Filled with sweet cream" },
    { name: "Nutella Kunafa", price: 5.00, description: "Modern twist with Nutella filling" },
  ]},
  { name: "Maamoul", items: [
    { name: "Date Maamoul", price: 1.50, description: "Filled with date paste" },
    { name: "Pistachio Maamoul", price: 2.00, description: "Filled with pistachio paste" },
    { name: "Walnut Maamoul", price: 2.00, description: "Filled with crushed walnuts" },
  ]},
]

const NavItem = ({ href, children, icon: Icon }: { href: any, children: React.ReactNode, icon: any }) => (
  <Link href={href} className="flex items-center text-rose-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition duration-300">
    <Icon className="mr-2" size={20} />
    <span>{children}</span>
  </Link>
)

const MenuItem = ({ item }: { item: any }) => {
  const { addToCart } = useCart()

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold text-rose-700 dark:text-gray-200 mb-2">{item.name}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
      <p className="text-pink-600 dark:text-pink-400 font-bold">${item.price.toFixed(2)}</p>
      <button 
        className="mt-4 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded transition duration-300"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
    </motion.div>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light'
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-50 to-red-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <CartDisplay />
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2" size={20} />
            <span className="text-2xl font-bold text-rose-600 dark:text-pink-400">Back to Home</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavItem href="/menu" icon={ShoppingBag}>Menu</NavItem>
            <NavItem href="/rewards" icon={Gift}>Rewards</NavItem>
            <NavItem href="/locations" icon={MapPin}>Locations</NavItem>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>

      {/* Menu Section */}
      <section className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-rose-700 dark:text-white mb-12">Our Menu</h1>
          
          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 mx-2 rounded-full ${
                  activeCategory === category.name
                    ? 'bg-rose-500 text-white'
                    : 'bg-pink-200 dark:bg-gray-700 text-rose-700 dark:text-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.find(cat => cat.name === activeCategory)?.items.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-700 dark:bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Arab Sweets. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}