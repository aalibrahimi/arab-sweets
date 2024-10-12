"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const featuredItems = [
  { name: "Baklava Delight", description: "Layers of flaky phyllo, honey, and pistachios", image: "/placeholder.svg?text=Baklava&width=400&height=400" },
  { name: "Kunafa Dream", description: "Cheese pastry soaked in sweet syrup", image: "/placeholder.svg?text=Kunafa&width=400&height=400" },
  { name: "Maamoul Magic", description: "Date-filled shortbread with a touch of rose water", image: "/placeholder.svg?text=Maamoul&width=400&height=400" },
]

const NavItem = ({ children }) => (
  <li className="mx-4">
    <a href="#" className="text-gray-600 hover:text-pink-600 transition duration-300">
      {children}
    </a>
  </li>
)

const FeatureCard = ({ item }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <Image src={item.image} alt={item.name} width={400} height={400} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
      <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300">
        Order Now
      </button>
    </div>
  </motion.div>
)

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/placeholder.svg?text=Logo&width=50&height=50" alt="Arab Sweets Logo" width={50} height={50} className="mr-4" />
            <span className="text-2xl font-bold text-pink-600">Arab Sweets</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex">
              <NavItem>Menu</NavItem>
              <NavItem>Rewards</NavItem>
              <NavItem>Gift Cards</NavItem>
              <NavItem>Find a Store</NavItem>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <ul className="flex flex-col items-center">
              <NavItem>Menu</NavItem>
              <NavItem>Rewards</NavItem>
              <NavItem>Gift Cards</NavItem>
              <NavItem>Find a Store</NavItem>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-yellow-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Discover the Magic of Middle Eastern Sweets</h1>
          <p className="text-xl text-gray-600 mb-8">Indulge in centuries of tradition with every bite</p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300">
            Explore Our Menu
          </button>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Sweets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <FeatureCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Program */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/placeholder.svg?text=Rewards&width=500&height=500" alt="Rewards Program" width={500} height={500} className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Sweet Rewards Program</h2>
            <p className="text-gray-600 mb-6">Earn points with every purchase and enjoy exclusive offers, free treats, and more!</p>
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300">
              Sign Up Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
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
                <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
                <li><a href="#" className="hover:text-pink-400">Store Locator</a></li>
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