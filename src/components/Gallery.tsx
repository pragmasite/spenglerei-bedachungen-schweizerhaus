import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();

  const images = [
    {
      src: "/images/img-1.jpg",
      alt_de: "Kupferrinnen & Fallrohre",
      alt_en: "Copper Gutters",
    },
    {
      src: "/images/img-2.jpg",
      alt_de: "Dachdeckung Oberland",
      alt_en: "Roofing Service",
    },
    {
      src: "/images/img-3.jpg",
      alt_de: "Moderne Solaranlage",
      alt_en: "Solar Installation",
    },
    {
      src: "/images/img-4.jpg",
      alt_de: "Professionelle Dacharbeit",
      alt_en: "Professional Roofing",
    },
    {
      src: "/images/img-5.jpg",
      alt_de: "Flachdach-Renovation",
      alt_en: "Flat Roof Renovation",
    },
  ];

  const getAlt = (img: typeof images[0]) => {
    return lang === "de" ? img.alt_de : img.alt_en;
  };

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">
            {t.gallery.title}
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={getAlt(image)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{getAlt(image)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
