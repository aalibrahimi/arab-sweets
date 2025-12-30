import "./globals.css";
import React from "react";
import { getLangDir } from "rtl-detect";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/MyComponents/navbar";

export const metadata = {
  title: "Iraqi Sweets - Homemade by Geida",
  description: "Authentic Iraqi sweets made with love. Traditional recipes passed down through generations, fresh from my kitchen to your table.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Checks if the language is RTL ( right to left ) or not
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction}>
      <body className="antialiased">
        <NextIntlClientProvider>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
