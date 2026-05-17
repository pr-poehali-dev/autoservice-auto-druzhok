import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
              <Icon name="Wrench" size={15} className="text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold tracking-wide">
              АВТО<span className="text-primary">ДРУГ</span>
            </span>
          </div>

          <div className="text-muted-foreground text-sm text-center">
            © 2026 АвтоДруг. Профессиональный автосервис.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+79001234567"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <Icon name="Phone" size={14} />
              +7 (900) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
