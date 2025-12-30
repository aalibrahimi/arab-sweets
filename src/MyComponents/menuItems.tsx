"use client";

import React from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

interface MenuItemType {
  name: string;
  price: number;
  description: string;
  Image: string;
}

const MenuItem = ({ item }: { item: MenuItemType }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-card rounded-3xl shadow-md hover:shadow-xl overflow-hidden border border-border/50 group"
    >
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url(${item.Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Price tag in corner */}
        <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <p className="text-primary font-bold text-lg">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
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

  // Flatten all items from all categories into a single array
  const allItems = categories.flatMap(category => category.items);

  return (
    <div className="py-16">
      {/* Menu Section */}
      <section className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("title")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* All Menu Items in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {allItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <MenuItem item={item} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
