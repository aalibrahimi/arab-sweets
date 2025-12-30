import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-t border-border">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="text-center space-y-6">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/iraqsweets2024?igsh=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 text-lg font-medium group"
          >
            <InstagramIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>@iraqsweets2024</span>
          </a>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <span>&copy; {new Date().getFullYear()} {t("rights")}</span>
          </p>

          {/* Made with love message */}
          <p className="text-muted-foreground text-xs flex items-center justify-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 fill-primary text-primary" />
            <span>in my kitchen</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
