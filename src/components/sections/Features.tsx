import { Check, Zap, Headphones, Settings, Heart, Clock } from "lucide-react";
import Reveal from "@/components/ui/reveal";

const Features = () => {
  const features = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "Natürliche Haptik",
      description: "Handbearbeitete Oberflächen, die angenehm warm werden und dich sofort in den Moment bringen."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Intelligente Session",
      description: "Jeder Stein aktiviert eine passende Meditation – abgestimmt auf Stimmung, Tageszeit und Fokus."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Raumfüllender Klang",
      description: "Hochwertige Audio-Guides führen dich, ohne dass ein Bildschirm zwischen dir und der Erfahrung steht."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Einfache Gesten",
      description: "Einlegen, aufstellen, atmen – mehr Bedienung braucht es nicht. Mindstone reagiert intuitiv auf dich."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Ritual für jeden Tag",
      description: "Kurze Pausen oder längere Sessions – Mindstone hilft dir, achtsame Routinen aufzubauen."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexibler Rhythmus",
      description: "5 bis 60 Minuten, auf Abruf. Du entscheidest, wie tief deine Reise heute geht."
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-zen-earth mb-6">
                Was dich mit Mindstone erwartet
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Jede Session ist ein bewusstes Erlebnis – spürbar, hörbar und ganz ohne digitale Ablenkung.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 70}>
                <div className="flex items-start gap-4 p-6 rounded-zen hover:bg-zen-mist/50 transition-zen">
                  <div className="flex-shrink-0 w-12 h-12 bg-zen-sage text-zen-earth rounded-zen flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-zen-earth">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
