"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ShoppingBag, Gift, MapPin, Sun, Moon, Instagram } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/components/Footer";
import Menu from "@/MyComponents/menuItems";

const featuredItems = [
  {
    name: "Baklava Delight",
    description: "Layers of flaky phyllo, honey, and pistachios",
    image: "/baklawa.jpg",
    price: 2.5,
  },
  {
    name: "Kunafa Dream",
    description: "Cheese pastry soaked in sweet syrup",
    image: "/kunafa.png",
    price: 4.0,
  },
  {
    name: "Maamoul Magic",
    description: "Date-filled shortbread with a touch of rose water",
    image: "/klaja.jpg",
    price: 1.5,
  },
];

const NavItem = ({
  href,
  children,
  icon: Icon,
}: {
  href: any;
  children: React.ReactNode;
  icon: any;
}) => (
  <Link
    href={href}
    className="flex items-center text-rose-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition duration-300"
  >
    <Icon className="mr-2" size={20} />
    <span>{children}</span>
  </Link>
);

const FeatureCard = ({ item }: { item: any }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-rose-700 dark:text-gray-200 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
        <p className="text-rose-600 dark:text-pink-400 font-bold mt-2">
          ${item.price.toFixed(2)} / lb
        </p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Hero Section */}
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

          {/* Center the button with flex */}
          <div className="flex justify-center">
            <Link
              href="https://www.instagram.com/iraqsweets2024?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white font-medium"
              >
                <Instagram size={20} />
                <span>Follow Us</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <Menu />

      {/* Featured Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-rose-700 dark:text-white mb-12">
            Featured Sweets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <FeatureCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
