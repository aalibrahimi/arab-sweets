"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag, Gift, MapPin, Sun, Moon } from 'lucide-react'
import { useCart } from '../components/CartProvider'
import { CartDisplay } from '../components/CartDisplay'


const featuredItems = [
  { name: "Baklava Delight", description: "Layers of flaky phyllo, honey, and pistachios", image: "/pic/baklawa.jpg?text=Baklava&width=400&height=400", price: 2.50 },
  { name: "Kunafa Dream", description: "Cheese pastry soaked in sweet syrup", image: "/pic/kunafa.png?text=Kunafa&width=400&height=400", price: 4.00 },
  { name: "Maamoul Magic", description: "Date-filled shortbread with a touch of rose water", image: "/pic/klaja.jpg?text=Maamoul&width=400&height=400", price: 1.50 },
]

const NavItem = ({ href, children, icon: Icon }) => (
  <Link href={href} className="flex items-center text-rose-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition duration-300">
    <Icon className="mr-2" size={20} />
    <span>{children}</span>
  </Link>
)

const FeatureCard = ({ item }) => {
  const { addToCart } = useCart()

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <Image src={item.image} alt={item.name} width={400} height={400} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-rose-700 dark:text-gray-200 mb-2">{item.name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
        <p className="text-rose-600 dark:text-pink-400 font-bold mt-2">${item.price.toFixed(2)}</p>
        <button 
          className="mt-4 bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition duration-300"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <CartDisplay />
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/placeholder.svg?text=Logo&width=50&height=50" alt="Arab Sweets Logo" width={50} height={50} className="mr-4" />
            <span className="text-2xl font-bold text-rose-600 dark:text-pink-400">Arab Sweets</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavItem href="/menu" icon={ShoppingBag}>Menu</NavItem>
            <NavItem href="/rewards" icon={Gift}>Rewards</NavItem>
            <NavItem href="/locations" icon={MapPin}>Locations</NavItem>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-rose-600 dark:text-pink-400">
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-2">
            <ul className="flex flex-col items-center">
              <NavItem href="/menu" icon={ShoppingBag}>Menu</NavItem>
              <NavItem href="/rewards" icon={Gift}>Rewards</NavItem>
              <NavItem href="/locations" icon={MapPin}>Locations</NavItem>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-red-100 dark:from-gray-800 dark:to-gray-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-rose-700 dark:text-white mb-4"
          >
            Discover the Magic of Middle Eastern Sweets
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-rose-600 dark:text-gray-300 mb-8"
          >
            Indulge in centuries of tradition with every bite
          </motion.p>
          <Link href="/menu">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-600 transition duration-300"
            >
              Explore Our Menu
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-rose-700 dark:text-white mb-12">Featured Sweets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <FeatureCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Program */}
      {/* <section className="bg-pink-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/placeholder.svg?text=Rewards&width=500&height=500" alt="Rewards Program" width={500} height={500} className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-rose-700 dark:text-white mb-4">Join Our Sweet Rewards Program</h2>
            <p className="text-rose-600 dark:text-gray-300 mb-6">Earn points with every purchase and enjoy exclusive offers, free treats, and more!</p>
            <button className="bg-rose-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-rose-600 transition duration-300">
              Sign Up Now
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-rose-700 dark:bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400">Our Story</a></li>
                <li><a href="#" className="hover:text-pink-400">Careers</a></li>
                <li><a href="#" className="hover:text-pink-400">Social Impact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400">Contact Us</a></li>
                {/* <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
                <li><a href="#" className="hover:text-pink-400">Store Locator</a></li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400">Menu</a></li>
                <li><a href="#" className="hover:text-pink-400">Rewards</a></li>
                <li><a href="#" className="hover:text-pink-400">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-pink-400">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-2xl hover:text-pink-400">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-2xl hover:text-pink-400">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>&copy; 2024 Arab Sweets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}