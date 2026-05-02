import Reveal from "@/components/ui/reveal";
import { useLanguage } from "@/context/LanguageContext";

const ValueProposition = () => {
  const { t } = useLanguage();
  const vp = t.valueProposition;

  return (
    <section className="py-20 bg-zen-mist/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Reveal>
            <h2 className="text-4xl lg:text-5xl font-bold text-zen-earth">
              {vp.h2}
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {vp.description}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {vp.cards.map((card, index) => (
              <Reveal key={card.title} delay={120 + index * 80} className="space-y-2">
                <h3 className="text-lg font-semibold text-zen-earth">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
