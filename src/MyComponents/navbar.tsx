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

// interface RouteItem {
//   title: string;
//   href?: string;
//   content?: {
//     title: string;
//     href: string;
//     description: string;
//   }[];
// }

export function Navbar(): React.ReactElement {
  const t = useTranslations("NavBar");

  interface Language {
    code: string;
    name: string;
    flag?: string;
  }

  const languages: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇮🇶" },
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
    <header className="sticky top-0 z-40 w-full border-b bg-card/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-8">

        {/* Left section: Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            draggable={false}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Arab Sweets"
                quality={100}
                draggable={false}
                height={500}
                width={500}
                className="w-16 h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('logo.1')}
              </span>
              <span className="text-xs md:text-sm font-light text-muted-foreground italic -mt-1">
                {t('logo.2')}
              </span>
            </div>
          </Link>
        </div>

        {/* Right section: Language switcher and Mode toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-secondary/50 transition-all duration-300 hover:scale-105">
                <Globe className="h-4 w-4 text-primary" />
                <span className="hidden sm:inline-block text-lg">
                  {currentLanguage.flag}
                </span>
                <span className="sr-only">{t("labelSwitchLang")}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-card border-border rounded-2xl shadow-lg min-w-[140px]"
            >
              <DropdownMenuLabel className="text-muted-foreground text-xs uppercase tracking-wider">
                {t("labelSelectLang")}
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  className={cn(
                    "cursor-pointer flex items-center gap-3 rounded-lg my-1 transition-colors",
                    currentLanguage.code === language.code &&
                      "bg-secondary font-medium"
                  )}
                  onClick={() => changeLanguage(language)}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-sm">{language.name}</span>
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
