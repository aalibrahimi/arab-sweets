import {defineRouting} from 'next-intl/routing';
 
// Export locales so it can be imported elsewhere
export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: true
});