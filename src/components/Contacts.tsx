import Icon from "@/components/ui/icon";

interface ContactsProps {
  onBooking: () => void;
}

const Contacts = ({ onBooking }: ContactsProps) => {
  return (
    <section id="contacts" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
            <div className="h-px w-8 bg-primary" />
            КОНТАКТЫ
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            КАК НАС НАЙТИ
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Icon name="MapPin" size={24} className="text-primary" />
            </div>
            <div>
              <div className="font-semibold mb-1">Адрес</div>
              <div className="text-muted-foreground text-sm leading-relaxed">
                г. Москва, ул. Автозаводская, 15<br />
                (рядом с м. Автозаводская)
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Icon name="Clock" size={24} className="text-primary" />
            </div>
            <div>
              <div className="font-semibold mb-1">Режим работы</div>
              <div className="text-muted-foreground text-sm leading-relaxed">
                Пн–Пт: 08:00 – 20:00<br />
                Сб–Вс: 09:00 – 18:00
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Icon name="Phone" size={24} className="text-primary" />
            </div>
            <div>
              <div className="font-semibold mb-1">Телефон</div>
              <a
                href="tel:+79001234567"
                className="text-primary text-lg font-semibold hover:text-primary/80 transition-colors"
              >
                +7 (900) 123-45-67
              </a>
              <div className="text-muted-foreground text-sm mt-1">
                Звоните в любое время работы
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-10 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            ГОТОВЫ ПРИЕХАТЬ?
          </h3>
          <p className="text-primary-foreground/80 text-lg mb-6">
            Запишитесь онлайн и приезжайте в удобное время
          </p>
          <button
            onClick={onBooking}
            className="bg-primary-foreground text-primary px-10 py-4 rounded-xl text-base font-bold hover:bg-primary-foreground/90 transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <Icon name="CalendarCheck" size={20} />
            Записаться онлайн
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
