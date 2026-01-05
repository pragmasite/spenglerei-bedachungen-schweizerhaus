import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Schweizerhaus</h3>
            <p className="text-white/70 text-sm">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t.services.label}</h4>
            <ul className="space-y-2 text-sm">
              {t.services.items.slice(0, 3).map((service, idx) => (
                <li key={idx} className="text-white/70 hover:text-white transition-colors">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.contact.label}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+41798209803" className="text-white/70 hover:text-white transition-colors">
                  +41 79 820 98 03
                </a>
              </li>
              <li>
                <a href="mailto:dany.gr@quicknet.ch" className="text-white/70 hover:text-white transition-colors">
                  dany.gr@quicknet.ch
                </a>
              </li>
              <li className="text-white/70">
                Beatenberg, CH
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Schweizerhaus. {t.footer.copyright}
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
