import Icon from "@/components/ui/icon";

interface ServicesProps {
  onBooking: () => void;
}

const services = [
  {
    icon: "Settings",
    title: "Техническое обслуживание",
    desc: "Замена масла, фильтров, свечей. Регламентное ТО по нормам производителя.",
    price: "от 1 500 ₽",
    tag: "Популярное",
  },
  {
    icon: "Zap",
    title: "Диагностика двигателя",
    desc: "Компьютерная диагностика всех систем автомобиля. Быстро и точно.",
    price: "от 800 ₽",
    tag: null,
  },
  {
    icon: "Shield",
    title: "Тормозная система",
    desc: "Замена колодок, дисков, суппортов. Прокачка тормозной жидкости.",
    price: "от 2 000 ₽",
    tag: null,
  },
  {
    icon: "Gauge",
    title: "Подвеска и рулевое",
    desc: "Диагностика и ремонт амортизаторов, рулевых тяг, ШРУС.",
    price: "от 1 200 ₽",
    tag: null,
  },
  {
    icon: "Thermometer",
    title: "Кондиционер",
    desc: "Заправка фреоном, замена компрессора, чистка системы кондиционирования.",
    price: "от 2 500 ₽",
    tag: "Сезонное",
  },
  {
    icon: "Battery",
    title: "Электрика авто",
    desc: "Ремонт электропроводки, замена аккумулятора, диагностика бортовой сети.",
    price: "от 1 000 ₽",
    tag: null,
  },
  {
    icon: "Layers",
    title: "Кузовные работы",
    desc: "Локальный ремонт вмятин, покраска элементов, полировка кузова.",
    price: "от 3 000 ₽",
    tag: null,
  },
  {
    icon: "Wind",
    title: "Шиномонтаж",
    desc: "Сезонная смена резины, балансировка колёс, хранение шин.",
    price: "от 600 ₽",
    tag: "Сезонное",
  },
];

const Services = ({ onBooking }: ServicesProps) => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
            <div className="h-px w-8 bg-primary" />
            УСЛУГИ
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            ЧТО МЫ ДЕЛАЕМ
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию вашего автомобиля
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 hover-lift hover:border-primary/40 transition-colors cursor-pointer relative overflow-hidden"
              onClick={onBooking}
            >
              {service.tag && (
                <span className="absolute top-4 right-4 bg-primary/15 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
                  {service.tag}
                </span>
              )}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={service.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-semibold">{service.price}</span>
                <Icon
                  name="ArrowRight"
                  size={16}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onBooking}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-xl text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <Icon name="CalendarCheck" size={20} />
            Записаться на обслуживание
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;