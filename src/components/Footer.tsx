import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-rose-700 dark:bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className=" text-center">
          <p>
            &copy; {new Date().getFullYear()} {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
