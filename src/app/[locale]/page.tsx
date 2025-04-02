"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ShoppingBag, Gift, MapPin, Sun, Moon } from 'lucide-react'
import { Link } from '@/i18n/navigation'


const featuredItems = [
  { name: "Baklava Delight", description: "Layers of flaky phyllo, honey, and pistachios", image: "/pic/baklawa.jpg?text=Baklava&width=400&height=400", price: 2.50 },
  { name: "Kunafa Dream", description: "Cheese pastry soaked in sweet syrup", image: "/pic/kunafa.png?text=Kunafa&width=400&height=400", price: 4.00 },
  { name: "Maamoul Magic", description: "Date-filled shortbread with a touch of rose water", image: "/pic/klaja.jpg?text=Maamoul&width=400&height=400", price: 1.50 },
]

const NavItem = ({ href, children, icon: Icon }: { href: any, children: React.ReactNode, icon: any }) => (
  <Link href={href} className="flex items-center text-rose-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition duration-300">
    <Icon className="mr-2" size={20} />
    <span>{children}</span>
  </Link>
)

const FeatureCard = ({ item }: { item: any }) => {

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
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">

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
                <li><Link href="#" className="hover:text-pink-400">Our Story</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Careers</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Social Impact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400">Contact Us</Link></li>
                {/* <li><Link href="#" className="hover:text-pink-400">FAQs</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Store Locator</Link></li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400">Menu</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Rewards</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Gift Cards</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-2xl hover:text-pink-400">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link href="#" className="text-2xl hover:text-pink-400">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#" className="text-2xl hover:text-pink-400">
                  <i className="fab fa-twitter"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>&copy; {new Date().getFullYear()} Arab Sweets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}