import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Bell, Gift } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { useLanguage } from "@/context/LanguageContext";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  const c = t.cta;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: c.toastRequired,
        description: c.toastRequiredDesc,
        variant: "destructive",
      });
      return;
    }
    setIsSubscribed(true);
    toast({
      title: c.toastSuccess,
      description: c.toastSuccessDesc,
    });
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <section id="cta" className="py-24 bg-gradient-zen">
        <div className="container mx-auto px-6">
          <Reveal className="max-w-2xl mx-auto text-center">
            <Card className="p-12 shadow-deep border-0 bg-white/90 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-zen-sage/20 rounded-full flex items-center justify-center mx-auto">
                  <Gift className="w-10 h-10 text-zen-earth" />
                </div>
                <h2 className="text-3xl font-bold text-zen-earth">{c.successTitle}</h2>
                <p className="text-lg text-muted-foreground">{c.successDesc}</p>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  {c.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-zen-primary rounded-full"></div>
                      <span className="text-sm">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="py-24 bg-gradient-zen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Reveal>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">{c.h2}</h2>
              </Reveal>
              <Reveal delay={90}>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">{c.description}</p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <Card className="max-w-2xl mx-auto p-8 shadow-deep border-0 bg-white/90 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-zen-earth">
                      <Bell className="w-5 h-5" />
                      <span className="font-semibold">{c.formTitle}</span>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder={c.placeholder}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12 rounded-zen border-zen-sand focus:ring-zen-primary"
                          required
                        />
                      </div>
                      <Button type="submit" variant="stone" size="lg" className="h-12 px-8 whitespace-nowrap">
                        {c.submit}
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{c.privacy}</p>
                </form>
              </Card>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
              {c.benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={160 + index * 60} className="text-center space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold text-white">{benefit.icon}</span>
                  </div>
                  <p className="text-sm text-white/80">
                    <strong>{benefit.title}</strong><br />
                    {benefit.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;