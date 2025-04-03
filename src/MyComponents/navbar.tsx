// src/components/Navbar.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/modetoggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react"; // Import icons for menu toggle and language
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

interface RouteItem {
  title: string;
  href?: string;
  content?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export function Navbar(): React.ReactElement {
  const t = useTranslations("NavBar");

  interface Language {
    code: string;
    name: string;
    flag?: string;
  }

  const languages: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "ar" },
  ];

  const locale = useLocale();
  const pathname = usePathname();

  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0]
  );

  const changeLanguage = (language: Language) => {
    if (language.code === locale) return;

    window.location.href = `/${language.code}${pathname === "/" ? "" : pathname} `;
  };

  useEffect(() => {
    const matchedLanguage =
      languages.find((lang) => lang.code === locale) || languages[0];
    setCurrentLanguage(matchedLanguage);
  }, [locale]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Left section: Logo and mobile menu toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            draggable={false}
            className="flex items-center space-x-2"
          >
            <Image
              src="/logo.png"
              alt="Arab Sweets"
              quality={100}
              draggable={false}
              height={500}
              width={500}
              className="w-14 h-auto"
              // height={45}
              // width={45}
            />
            <span className="text-2xl font-bold text-rose-600 dark:text-pink-400">
              Arab Sweets
            </span>
          </Link>
        </div>

        {/* Right section: Language switcher, Mode toggle and Avatar with dropdown */}
        <div className="flex items-center justify-end gap-4 pr-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline-block">
                  {currentLanguage.flag}
                </span>
                <span className="sr-only">{t("labelSwitchLang")}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white dark:bg-gray-950 text-black dark:text-white"
            >
              <DropdownMenuLabel>{t("labelSelectLang")}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  className={cn(
                    "cursor-pointer flex items-center gap-2",
                    currentLanguage.code === language.code &&
                      "font-medium bg-gray-100 dark:bg-gray-800"
                  )}
                  onClick={() => changeLanguage(language)}
                >
                  <span className="text-base">{language.flag}</span>
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-300 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white text-center",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 text-center">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
