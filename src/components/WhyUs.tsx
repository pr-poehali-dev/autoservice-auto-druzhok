import Icon from "@/components/ui/icon";

const reasons = [
  {
    icon: "Clock",
    title: "Быстро",
    desc: "Большинство работ выполняем в день обращения. Без лишних ожиданий.",
  },
  {
    icon: "BadgeCheck",
    title: "Гарантия",
    desc: "Даём гарантию на все виды работ и запасные части до 12 месяцев.",
  },
  {
    icon: "Wallet",
    title: "Честные цены",
    desc: "Стоимость работ согласуем до начала ремонта. Никаких скрытых доплат.",
  },
  {
    icon: "Users",
    title: "Опытные мастера",
    desc: "Наши механики имеют опыт от 8 лет. Работаем с любыми марками авто.",
  },
];

const WhyUs = () => {
  return (
    <section id="why" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
              <div className="h-px w-8 bg-primary" />
              ПОЧЕМУ МЫ
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ДОВЕРЯЮТ УЖЕ{" "}
              <span className="text-primary">12 ЛЕТ</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Автосервис «АвтоДруг» — это команда профессионалов, которые
              относятся к вашему автомобилю как к своему. Современное оборудование
              и честный подход к каждому клиенту.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-background rounded-xl p-5 border border-border hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={reason.icon} size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-base font-semibold mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://cdn.poehali.dev/projects/acf44038-af83-404d-979e-4e147dc4a5f9/files/039d455d-6fed-4c55-b79d-22e99ac625a2.jpg"
                alt="Мастер за работой"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-5 rounded-2xl shadow-xl">
              <div className="font-display text-4xl font-bold">8 000+</div>
              <div className="text-sm font-medium opacity-90">довольных клиентов</div>
            </div>
            <div className="absolute top-6 -right-6 bg-card border border-border p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-2 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon key={i} name="Star" size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <div className="text-sm font-semibold">Рейтинг 4.9</div>
              <div className="text-xs text-muted-foreground">на Яндекс Картах</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
