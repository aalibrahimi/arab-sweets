"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

// const NavItem = ({
//   href,
//   children,
//   icon: Icon,
// }: {
//   href: any;
//   children: React.ReactNode;
//   icon: any;
// }) => (
//   <Link
//     href={href}
//     className="flex items-center text-rose-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition duration-300"
//   >
//     <Icon className="mr-2" size={20} />
//     <span>{children}</span>
//   </Link>
// );

/* eslint-disable */
const MenuItem = ({ item }: { item: any }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative rounded-lg shadow-lg p-6 overflow-hidden h-64"
      style={{
        backgroundImage: `url(${item.Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-black/40 bg-opacity-40"></div>

      {/* Content with relative positioning to appear above the overlay */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
        <p className="text-gray-200 mb-2">{item.description}</p>
        <p className="text-pink-300 font-bold">${item.price.toFixed(2)} / lb</p>
      </div>
    </motion.div>
  );
};

export default function Menu() {
  const t = useTranslations("HomePage.menu");

  const categories = [
    {
      name: t("category.trad.title"),
      items: [
        {
          name: t("category.trad.item.1.name"),
          price: 15.0,
          description: t("category.trad.item.1.desc"),
          Image: "/baklawa.jpg",
        },
        {
          name: t("category.trad.item.2.name"),
          price: 15.5,
          description: t("category.trad.item.2.desc"),
          Image: "/klaja.jpg",
        },
        {
          name: t("category.trad.item.3.name"),
          price: 16.50,
          description: t("category.trad.item.3.desc"),
          Image: "/kunafa.png",
        },
        {
          name: t("category.trad.item.4.name"),
          price: 18.0,
          description: t("category.trad.item.4.desc"),
          Image: "/zalabia.jpg",
        },
      ],
    },
    {
      name: t("category.spec.title"),
      items: [
        // {
        //   name: "Halawat Sha'riyya",
        //   price: 3.5,
        //   description: "Vermicelli dessert with walnuts, cardamom and rose water",
        //   Image: "/halawat.jpg"
        // },
        {
          name: t("category.spec.item.1.name"),
          price: 3.5,
          description: t("category.spec.item.1.desc"),
          Image: "/warbat.png",
        },
        {
          name: t("category.spec.item.2.name"),
          price: 17.5,
          description: t("category.spec.item.2.desc"),
          Image: "/daheena.png",
        },
        {
          name: t("category.spec.item.3.name"),
          price: 15.0,
          description: t("category.spec.item.3.desc"),
          Image: "/honeycomb.png",
        },
      ],
    },
    {
      name: t("category.del.title"),
      items: [
        {
          name: t("category.del.item.1.name"),
          price: 9.5,
          description: t("category.del.item.1.desc"),
          Image: "/strawberry.webp",
        },
        {
          name: t("category.del.item.2.name"),
          price: 9.5,
          description: t("category.del.item.2.desc"),
          Image: "/oreo.jpg",
        },
        {
          name: t("category.del.item.3.name"),
          price: 6.5,
          description: t("category.del.item.3.desc"),
          Image: "/custardd.jpeg",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <div className="flex flex-col bg-gradient-to-br from-pink-50 to-red-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Menu Section */}
      <section className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-rose-700 dark:text-white mb-12">
            {t("title")}
          </h1>

          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 mx-2 rounded-full ${
                  activeCategory === category.name
                    ? "bg-rose-500 text-white"
                    : "bg-pink-200 dark:bg-gray-700 text-rose-700 dark:text-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories
              .find((cat) => cat.name === activeCategory)
              ?.items.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
