import heroImage from "@/assets/mindstone-hero.jpg";
import Reveal from "@/components/ui/reveal";

const scrollToSection = (targetId: string) => {
  if (typeof window === "undefined") return;

  const element = document.getElementById(targetId);
  console.log(`Hero CTA clicked → attempting to scroll to #${targetId}`, {
    found: Boolean(element),
    targetId,
  });
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.hash = targetId;
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-earth flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <Reveal direction="left" className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-zen-sage/30 text-zen-earth px-4 py-2 text-sm font-semibold">
                Ein Stein. Ein Ritual. Ganz bei dir.
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-zen-earth">Mindstone</span>
                <br />
                <span className="bg-gradient-stone bg-clip-text text-transparent">
                  Meditation zum Anfassen
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Lege den Stein in deine Hand, spüre die Haptik und folge der Stimme.
                Mindstone führt dich ohne Bildschirm, ohne Ablenkung – nur du, dein Atem
                und ein warmes, greifbares Objekt.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-zen text-lg font-medium bg-gradient-stone text-primary-foreground hover:opacity-90 shadow-zen transition-zen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 px-8 py-6"
                onClick={(event) => {
                  event.preventDefault();
                  console.log("Jetzt vormerken CTA pressed");
                  scrollToSection("cta");
                }}
              >
                Jetzt vormerken
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-zen text-lg font-medium bg-zen-sand border border-zen-primary text-zen-earth hover:bg-zen-mist shadow-soft transition-zen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 px-8 py-6"
                onClick={(event) => {
                  event.preventDefault();
                  console.log("Mehr erfahren CTA pressed");
                  scrollToSection("how-it-works");
                }}
              >
                Mehr erfahren
              </a>
            </div>

            <div className="pt-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                ✨ Sanftes Licht • 🌿 Achtsame Audio-Guides • 🪨 Natürliche Haptik
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120} className="relative">
            <div className="relative z-10 rounded-stone overflow-hidden shadow-deep">
              <img
                src={heroImage}
                alt="Mindstone Meditationsgerät auf einem Holztisch in natürlichem Licht"
                className="w-full h-auto object-cover float-gentle"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-zen-sage/20 rounded-full blur-xl pulse-soft"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-zen-primary/20 rounded-full blur-xl pulse-soft"></div>
          </Reveal>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zen-sage rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zen-primary rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
