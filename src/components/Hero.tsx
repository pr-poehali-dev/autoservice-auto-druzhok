import Icon from "@/components/ui/icon";

interface HeroProps {
  onBooking: () => void;
}

const Hero = ({ onBooking }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/projects/acf44038-af83-404d-979e-4e147dc4a5f9/files/28677a73-e56d-4e91-ad12-11cb67095445.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 noise-bg" />

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full pulse-orange" />
            Работаем 7 дней в неделю
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            ВАШЕ АВТО
            <br />
            В НАДЁЖНЫХ
            <br />
            <span className="text-primary text-glow">РУКАХ</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Профессиональный ремонт и техническое обслуживание любых марок автомобилей.
            Гарантия на все виды работ.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={onBooking}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105 glow-orange flex items-center gap-2"
            >
              <Icon name="CalendarCheck" size={20} />
              Записаться онлайн
            </button>
            <a
              href="tel:+79001234567"
              className="border border-border text-foreground px-8 py-4 rounded-xl text-base font-semibold hover:border-primary hover:text-primary transition-all flex items-center gap-2"
            >
              <Icon name="Phone" size={20} />
              Позвонить
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-md">
            {[
              { value: "12+", label: "лет опыта" },
              { value: "8 000+", label: "клиентов" },
              { value: "100%", label: "гарантия" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
