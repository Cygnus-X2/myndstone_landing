import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { useLanguage } from "@/context/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const tm = t.testimonials;

  return (
    <section className="py-24 bg-zen-sand/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-zen-earth mb-6">
                {tm.h2}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-xl text-muted-foreground">{tm.subtitle}</p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tm.items.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={index * 90}>
                <Card className="p-8 shadow-soft border-0 bg-card/80 backdrop-blur-sm hover:shadow-zen transition-zen">
                  <div className="space-y-6">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-zen-sage text-zen-sage" />
                      ))}
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-zen-sage/20" />
                      <p className="text-lg leading-relaxed text-foreground pl-6">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="border-t border-zen-sand pt-4">
                      <p className="font-semibold text-zen-earth">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zen-mist rounded-full">
                <Star className="w-4 h-4 fill-zen-sage text-zen-sage" />
                <span className="text-sm font-semibold text-zen-earth">{tm.rating}</span>
                <span className="text-sm text-muted-foreground">{tm.ratingCount}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
