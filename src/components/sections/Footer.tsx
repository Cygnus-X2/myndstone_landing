import { Heart, Mail, Instagram, Twitter } from "lucide-react";
import Reveal from "@/components/ui/reveal";

const Footer = () => {
  return (
    <footer className="py-16 bg-zen-earth text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <Reveal className="space-y-4">
              <h3 className="text-2xl font-bold">Mindstone</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Meditation ohne Ablenkung. 
                Für mehr Achtsamkeit im digitalen Zeitalter.
              </p>
            </Reveal>
            
            {/* Product */}
            <Reveal delay={70} className="space-y-4">
              <h4 className="font-semibold">Produkt</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#features" className="hover:text-white transition-soft">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-soft">So funktioniert's</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-soft">Testimonials</a></li>
                <li><a href="#pricing" className="hover:text-white transition-soft">Preise</a></li>
              </ul>
            </Reveal>
            
            {/* Support */}
            <Reveal delay={140} className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#faq" className="hover:text-white transition-soft">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-soft">Kontakt</a></li>
                <li><a href="#shipping" className="hover:text-white transition-soft">Versand</a></li>
                <li><a href="#warranty" className="hover:text-white transition-soft">Garantie</a></li>
              </ul>
            </Reveal>
            
            {/* Connect */}
            <Reveal delay={210} className="space-y-4">
              <h4 className="font-semibold">Bleib in Kontakt</h4>
              <p className="text-sm text-white/80">
                Folge uns für Updates und Meditation-Tipps
              </p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-zen flex items-center justify-center hover:bg-white/20 transition-soft"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-zen flex items-center justify-center hover:bg-white/20 transition-soft"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:hello@mindstone.com" 
                  className="w-10 h-10 bg-white/10 rounded-zen flex items-center justify-center hover:bg-white/20 transition-soft"
                  aria-label="E-Mail"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
          
          {/* Bottom */}
          <Reveal delay={120}>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span>Made with</span>
                <Heart className="w-4 h-4 fill-zen-sage text-zen-sage" />
                <span>für deine Achtsamkeit</span>
              </div>
              
              <div className="flex gap-6 text-sm text-white/80">
                <a href="#privacy" className="hover:text-white transition-soft">Datenschutz</a>
                <a href="#terms" className="hover:text-white transition-soft">AGB</a>
                <a href="#imprint" className="hover:text-white transition-soft">Impressum</a>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="text-center mt-8 pt-8 border-t border-white/10">
              <p className="text-xs text-white/60">
                © 2024 Mindstone. Alle Rechte vorbehalten. • Ein Produkt für bewusste Meditation.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;