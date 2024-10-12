'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function HeaderComponent() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    (<header
      className="w-full bg-gradient-to-r from-pink-100 to-yellow-100 rounded-b-lg shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/placeholder.svg?height=50&width=50"
            alt="Mom's Baked Sweets Logo"
            className="w-12 h-12 mr-4" />
          <h1 className="text-2xl font-bold text-pink-600">Mom's Baked Sweets</h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Sweets</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-pink-500 to-pink-700 p-6 no-underline outline-none focus:shadow-md"
                        href="/">
                        <div className="mt-4 text-lg font-medium text-white">
                          Featured Sweet
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Check out our delicious cupcake of the month!
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-100 hover:text-pink-700 focus:bg-pink-100 focus:text-pink-700"
                        )}
                        href="/">
                        <div className="text-sm font-medium leading-none">Cookies</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Delightful, crunchy, and oh-so-sweet!
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-100 hover:text-pink-700 focus:bg-pink-100 focus:text-pink-700"
                        )}
                        href="/">
                        <div className="text-sm font-medium leading-none">Cakes</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Perfect for any celebration or just because!
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-100 hover:text-pink-700 focus:bg-pink-100 focus:text-pink-700"
                        )}
                        href="/">
                        <div className="text-sm font-medium leading-none">Seasonal Specials</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Limited time treats you won't want to miss!
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}>
          <Button
            className={cn(
              "bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out",
              isHovered ? "shadow-lg" : "shadow"
            )}>
            Order Now
          </Button>
        </motion.div>
      </div>
    </header>)
  );
}