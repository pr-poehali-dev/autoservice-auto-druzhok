import { useState } from "react";
import Icon from "@/components/ui/icon";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const services = [
  "Техническое обслуживание",
  "Диагностика двигателя",
  "Тормозная система",
  "Подвеска и рулевое",
  "Кондиционер",
  "Электрика авто",
  "Кузовные работы",
  "Шиномонтаж",
  "Другое",
];

const times = [
  "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00",
];

const BookingModal = ({ open, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    car: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const getTodayStr = () => {
    const d = new Date();
    return d.toISOString().split("T")[0];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setStep(1);
    setForm({ service: "", date: "", time: "", name: "", phone: "", car: "", comment: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-card border border-border rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
        <div className="bg-primary px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-primary-foreground">
              Онлайн-запись
            </h2>
            <p className="text-primary-foreground/80 text-sm">Автосервис «АвтоДруг»</p>
          </div>
          <button
            onClick={handleClose}
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <Icon name="X" size={22} />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            <div className="flex items-center gap-2 mb-2">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      step >= s
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s}
                  </div>
                  <span className={`text-sm ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
                    {s === 1 ? "Услуга и время" : "Ваши данные"}
                  </span>
                  {s < 2 && <div className="h-px w-6 bg-border" />}
                </div>
              ))}
            </div>

            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Выберите услугу *</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => set("service", e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">— Выберите услугу —</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Дата *</label>
                  <input
                    type="date"
                    required
                    min={getTodayStr()}
                    value={form.date}
                    onChange={(e) => set("date", e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Время *</label>
                  <div className="grid grid-cols-5 gap-2">
                    {times.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => set("time", t)}
                        className={`py-2 rounded-lg text-sm font-medium border transition-colors ${
                          form.time === t
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background border-border hover:border-primary/50 text-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  disabled={!form.service || !form.date || !form.time}
                  onClick={() => setStep(2)}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Далее →
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div className="bg-background rounded-xl p-4 border border-border text-sm">
                  <div className="flex items-center gap-2 mb-1 text-primary font-medium">
                    <Icon name="CalendarCheck" size={16} />
                    {form.service}
                  </div>
                  <div className="text-muted-foreground">
                    {form.date} в {form.time}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <input
                    required
                    type="text"
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+7 (900) 000-00-00"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Марка и модель авто</label>
                  <input
                    type="text"
                    placeholder="Toyota Camry 2020"
                    value={form.car}
                    onChange={(e) => set("car", e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <textarea
                    rows={2}
                    placeholder="Опишите проблему подробнее..."
                    value={form.comment}
                    onChange={(e) => set("comment", e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border border-border text-foreground py-3 rounded-xl font-semibold hover:border-primary/50 transition-colors"
                  >
                    ← Назад
                  </button>
                  <button
                    type="submit"
                    disabled={!form.name || !form.phone}
                    className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Записаться
                  </button>
                </div>
              </>
            )}
          </form>
        ) : (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={36} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">Вы записаны!</h3>
            <p className="text-muted-foreground mb-1">
              <span className="text-foreground font-medium">{form.name}</span>, ждём вас
            </p>
            <p className="text-primary font-semibold mb-1">
              {form.date} в {form.time}
            </p>
            <p className="text-muted-foreground text-sm mb-6">{form.service}</p>
            <p className="text-sm text-muted-foreground mb-6">
              Мы позвоним на{" "}
              <span className="text-foreground">{form.phone}</span> для подтверждения записи
            </p>
            <button
              onClick={handleClose}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Отлично!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
