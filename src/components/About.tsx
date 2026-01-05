import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.about.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">
            {t.about.title1}{" "}
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { stat: "25+", label: t.about.stat1 },
              { stat: "500+", label: t.about.stat2 },
              { stat: "98%", label: t.about.stat3 },
              { stat: "24/7", label: "Support" },
            ].map((item, idx) => (
              <div key={idx} className="bg-background rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  {item.stat}
                </div>
                <p className="text-sm text-foreground/60">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {t.about.features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-background rounded-lg p-6 border border-border hover:border-primary transition-colors"
            >
              <h3 className="font-serif text-lg font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
