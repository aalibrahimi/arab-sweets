"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/components/Footer";
import Menu from "@/MyComponents/menuItems";
import { useTranslations } from "next-intl";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

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

interface FeatureItem {
  name: string;
  description: string;
  image: string;
  price: number;
}

const FeatureCard = ({ item }: { item: FeatureItem }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-card rounded-3xl shadow-md hover:shadow-xl overflow-hidden border border-border/50 group"
    >
      <div className="relative overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={400}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-primary font-bold text-lg">
            ${item.price.toFixed(2)}
          </p>
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
            per lb
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const t = useTranslations("HomePage");

  const featuredItems = [
    {
      name: t("featured.item.1.name"),
      description: t("featured.item.1.desc"),
      image: "/baklawa.jpg",
      price: 15.5,
    },
    {
      name: t("featured.item.2.name"),
      description: t("featured.item.2.desc"),
      image: "/kunafa.png",
      price: 20.0,
    },
    {
      name: t("featured.item.3.name"),
      description: t("featured.item.3.desc"),
      image: "/klaja.jpg",
      price: 15.0,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              {t("hero.desc")}
            </p>

            {/* Instagram button */}
            <Link
              href="https://www.instagram.com/iraqsweets2024?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow text-base md:text-lg"
              >
                <InstagramIcon size={24} />
                <span>{t("hero.insta")}</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Menu />

      {/* Featured Items */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("featured.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
