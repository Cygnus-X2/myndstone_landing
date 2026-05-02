import demoVideo from "@/assets/20251005_2202_Remix Video_remix_01k6tzg32kfss9hy9ybe2xyrcx.mp4";
import Reveal from "@/components/ui/reveal";
import { useLanguage } from "@/context/LanguageContext";

const VideoShowcase = () => {
  const { t } = useLanguage();
  const vs = t.videoShowcase;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <Reveal direction="left" className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-zen-sage/30 text-zen-earth px-4 py-2 text-sm font-semibold">
              {vs.badge}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-zen-earth">
              {vs.h2}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {vs.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {vs.chips.map((item, index) => (
                <Reveal key={item} delay={120 + index * 80} className="rounded-zen bg-zen-mist/60 px-4 py-3 text-sm font-medium text-zen-earth shadow-soft">
                  {item}
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={140} className="relative group">
            <div className="absolute inset-0 rounded-stone bg-gradient-to-br from-zen-sage/40 to-zen-earth/10 blur-3xl group-hover:opacity-70 transition-opacity"></div>
            <div className="relative rounded-stone overflow-hidden shadow-deep border border-zen-sand/60">
              <video
                className="w-full h-full object-cover"
                src={demoVideo}
                playsInline
                autoPlay
                loop
                muted
                controls
              >
                Dein Browser unterstützt keine eingebetteten Videos.
              </video>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur text-white text-xs tracking-wide uppercase px-4 py-2 rounded-full">
              {vs.caption}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
