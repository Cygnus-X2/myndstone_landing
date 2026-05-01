import Reveal from "@/components/ui/reveal";

const ValueProposition = () => {
  return (
    <section className="py-20 bg-zen-mist/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Reveal>
            <h2 className="text-4xl lg:text-5xl font-bold text-zen-earth">
            Ein Ritual, das du spüren kannst
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-xl text-muted-foreground leading-relaxed">
            Mindstone bringt Meditation aus dem Bildschirm zurück in die Hand. 
            Die haptische Oberfläche, das sanfte Licht und die Stimme im Raum schaffen 
            ein Gefühl von Ruhe, ohne dass du nach deinem Handy greifen musst.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Reveal delay={120} className="space-y-2">
              <h3 className="text-lg font-semibold text-zen-earth">Greifbare Präsenz</h3>
              <p className="text-sm text-muted-foreground">
                Ein Gewicht in deiner Hand, das dich im Moment verankert und deinen Fokus bündelt.
              </p>
            </Reveal>
            <Reveal delay={200} className="space-y-2">
              <h3 className="text-lg font-semibold text-zen-earth">Geführte Ruhe</h3>
              <p className="text-sm text-muted-foreground">
                Stimmen und Klangwelten, die sich an Tageszeit und Stein anpassen und dich sanft leiten.
              </p>
            </Reveal>
            <Reveal delay={280} className="space-y-2">
              <h3 className="text-lg font-semibold text-zen-earth">Offline & Unabhängig</h3>
              <p className="text-sm text-muted-foreground">
                Keine Notifications, kein Display – nur ein bewusstes, analoges Erlebnis für dich.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
