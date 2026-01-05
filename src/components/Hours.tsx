import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Monday-Friday: 07:30-12:00, 13:30-17:30 (Friday ends at 17:00)
  const schedule = [
    { hours: "07:30 - 12:00, 13:30 - 17:30" }, // Monday
    { hours: "07:30 - 12:00, 13:30 - 17:30" }, // Tuesday
    { hours: "07:30 - 12:00, 13:30 - 17:30" }, // Wednesday
    { hours: "07:30 - 12:00, 13:30 - 17:30" }, // Thursday
    { hours: "07:30 - 12:00, 13:30 - 17:00" }, // Friday
    { hours: t.hours.closed }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = new Date().getDay();
  const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1; // Convert Sunday (0) to index 6

  return (
    <section id="hours" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <motion.div className="mb-8 text-center">
            <span className="text-sm uppercase tracking-widest text-accent">
              {t.hours.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">
              {t.hours.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-serif text-lg font-bold text-foreground">
                {t.hours.header}
              </span>
            </div>
            <div className="divide-y divide-border">
              {schedule.map((item, i) => {
                const isToday = i === adjustedIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <div
                    key={i}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-accent/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      )}
                      <span
                        className={`${
                          isToday ? "font-bold text-accent" : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-right ${
                        isClosed ? "text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
