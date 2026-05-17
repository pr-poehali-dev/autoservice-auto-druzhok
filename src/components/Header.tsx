import { useState } from "react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  onBooking: () => void;
}

const Header = ({ onBooking }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Услуги", href: "#services" },
    { label: "О нас", href: "#about" },
    { label: "Почему мы", href: "#why" },
    { label: "Контакты", href: "#contacts" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Icon name="Wrench" size={18} className="text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-wide">
            АВТО<span className="text-primary">ДРУГ</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+79001234567"
            className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon name="Phone" size={14} />
            +7 (900) 123-45-67
          </a>
          <button
            onClick={onBooking}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Записаться
          </button>
          <button
            className="md:hidden text-muted-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+79001234567"
            className="flex items-center gap-1.5 text-sm text-primary"
          >
            <Icon name="Phone" size={14} />
            +7 (900) 123-45-67
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
