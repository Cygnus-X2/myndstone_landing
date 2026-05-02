import { Check, Zap, Headphones, Settings, Heart, Clock } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { useLanguage } from "@/context/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  const ft = t.features;

  const icons = [
    <Check className="w-6 h-6" />,
    <Zap className="w-6 h-6" />,
    <Headphones className="w-6 h-6" />,
    <Settings className="w-6 h-6" />,
    <Heart className="w-6 h-6" />,
    <Clock className="w-6 h-6" />,
  ];

  const features = ft.items.map((item, i) => ({ ...item, icon: icons[i] }));

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-zen-earth mb-6">
                {ft.h2}
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {ft.description}
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
