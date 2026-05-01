import { Sparkles, Wind, Moon, Sunrise } from "lucide-react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/ui/reveal";

const HowItWorks = () => {
  const stories = [
    {
      icon: <Wind className="w-8 h-8" />,
      stone: "Jade Stein",
      title: "Morgenenergie",
      description: "Lege den Jade Stein auf, spüre das sanfte Pulsieren des Mindstone und starte mit einer belebenden Atemübung.",
      time: "10 Minuten",
      mood: "Aufladend",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      stone: "Clear Quartz",
      title: "Abendliches Loslassen",
      description: "Der Clear Quartz führt dich mit ruhigen Klängen und warmer Beleuchtung in einen entspannten Tagesabschluss.",
      time: "15 Minuten",
      mood: "Beruhigend",
      color: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: <Sunrise className="w-8 h-8" />,
      stone: "Rosenquarz",
      title: "Herzöffnende Pause",
      description: "Eine kurze Session für zwischendurch – fühlbare Vibrationen und eine sanfte Stimme holen dich zurück zu dir.",
      time: "5 Minuten",
      mood: "Warm",
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      stone: "Amethyst",
      title: "Fokus & Flow",
      description: "Der Amethyst richtet deine Aufmerksamkeit, indem Licht und Sound sich langsam auf einen klaren Rhythmus einstellen.",
      time: "20 Minuten",
      mood: "Zentriert",
      color: "from-violet-500/20 to-indigo-500/20"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-zen-mist/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-zen-earth">
                Wie Mindstone dich begleitet
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Jeder Stein steht für eine Stimmung. Mindstone erkennt ihn, reagiert mit Licht, Temperatur
                und Audio und schafft so eine geführte Meditation, die du mit allen Sinnen erlebst.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <Reveal key={story.title} delay={index * 80}>
                <Card className="relative overflow-hidden border-0 shadow-soft hover:shadow-zen transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-50`}></div>

                  <div className="relative p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-zen flex items-center justify-center text-zen-earth shadow-soft">
                        {story.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zen-primary uppercase tracking-wide">
                          {story.stone}
                        </p>
                        <h3 className="text-2xl font-bold text-zen-earth">
                          {story.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed">
                      {story.description}
                    </p>

                    <div className="flex gap-4 pt-4 border-t border-zen-sand">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-zen-earth">Dauer:</span>
                        <span className="text-sm text-muted-foreground">{story.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-zen-earth">Stimmung:</span>
                        <span className="text-sm text-muted-foreground">{story.mood}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-zen-sage/20 rounded-full">
                <Sparkles className="w-5 h-5 text-zen-primary" />
                <p className="text-sm font-medium text-zen-earth">
                  Achtsamkeit, die du berührst: Mindstone verbindet Klang, Licht und Haptik zu einem analogen Ritual.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
