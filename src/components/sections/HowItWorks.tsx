import { Sparkles, Wind, Moon, Sunrise } from "lucide-react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/ui/reveal";
import { useLanguage } from "@/context/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();
  const hw = t.howItWorks;

  const storyExtras = [
    { icon: <Wind className="w-8 h-8" />, color: "from-green-500/20 to-emerald-500/20" },
    { icon: <Moon className="w-8 h-8" />, color: "from-purple-500/20 to-blue-500/20" },
    { icon: <Sunrise className="w-8 h-8" />, color: "from-pink-500/20 to-rose-500/20" },
    { icon: <Sparkles className="w-8 h-8" />, color: "from-violet-500/20 to-indigo-500/20" },
  ];

  const stories = hw.stories.map((s, i) => ({ ...s, ...storyExtras[i] }));

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-zen-mist/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-zen-earth">
                {hw.h2}
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {hw.description}
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
                    <p className="text-foreground leading-relaxed">{story.description}</p>
                    <div className="flex gap-4 pt-4 border-t border-zen-sand">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-zen-earth">{hw.labelDuration}</span>
                        <span className="text-sm text-muted-foreground">{story.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-zen-earth">{hw.labelMood}</span>
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
                <p className="text-sm font-medium text-zen-earth">{hw.banner}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
