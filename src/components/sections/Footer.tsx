import { Heart, Mail, Instagram, Twitter } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="py-16 bg-zen-earth text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Reveal className="space-y-4">
              <h3 className="text-2xl font-bold">Mindstone</h3>
              <p className="text-white/80 text-sm leading-relaxed">{f.tagline}</p>
            </Reveal>

            <Reveal delay={70} className="space-y-4">
              <h4 className="font-semibold">{f.product}</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#features" className="hover:text-white transition-soft">{f.linkFeatures}</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-soft">{f.linkHowItWorks}</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-soft">{f.linkTestimonials}</a></li>
                <li><a href="#pricing" className="hover:text-white transition-soft">{f.linkPricing}</a></li>
              </ul>
            </Reveal>

            <Reveal delay={140} className="space-y-4">
              <h4 className="font-semibold">{f.support}</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#faq" className="hover:text-white transition-soft">{f.linkFaq}</a></li>
                <li><a href="#contact" className="hover:text-white transition-soft">{f.linkContact}</a></li>
                <li><a href="#shipping" className="hover:text-white transition-soft">{f.linkShipping}</a></li>
                <li><a href="#warranty" className="hover:text-white transition-soft">{f.linkWarranty}</a></li>
              </ul>
            </Reveal>

            <Reveal delay={210} className="space-y-4">
              <h4 className="font-semibold">{f.connect}</h4>
              <p className="text-sm text-white/80">{f.connectDesc}</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-zen flex items-center justify-center hover:bg-white/20 transition-soft" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-zen flex items-center justify-center hover:bg-white/20 transition-soft" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="mailto:hello@mindstone.com" className="w-10 h-10 bg-white/10 rounded-zen flex items-center justify-center hover:bg-white/20 transition-soft" aria-label="E-Mail">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span>{f.madeWith}</span>
                <Heart className="w-4 h-4 fill-zen-sage text-zen-sage" />
                <span>{f.forMindfulness}</span>
              </div>
              <div className="flex gap-6 text-sm text-white/80">
                <a href="#privacy" className="hover:text-white transition-soft">{f.privacy}</a>
                <a href="#terms" className="hover:text-white transition-soft">{f.terms}</a>
                <a href="#imprint" className="hover:text-white transition-soft">{f.imprint}</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="text-center mt-8 pt-8 border-t border-white/10">
              <p className="text-xs text-white/60">{f.copyright}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;