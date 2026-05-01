import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Bell, Gift } from "lucide-react";
import Reveal from "@/components/ui/reveal";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "E-Mail erforderlich",
        description: "Bitte gib deine E-Mail-Adresse ein.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate subscription
    setIsSubscribed(true);
    toast({
      title: "Erfolgreich vorgemerkt! 🎉",
      description: "Du wirst als Erste*r über den Launch benachrichtigt.",
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
                <h2 className="text-3xl font-bold text-zen-earth">
                  Vielen Dank!
                </h2>
                <p className="text-lg text-muted-foreground">
                  Du stehst jetzt auf der Warteliste für den Mindstone. Als Early Adopter erhältst du:
                </p>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-zen-primary rounded-full"></div>
                    <span className="text-sm">Frühzeitigen Zugang zum Launch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-zen-sage rounded-full"></div>
                    <span className="text-sm">Exklusive Updates zur Entwicklung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-zen-earth rounded-full"></div>
                    <span className="text-sm">Möglichkeit zur Beta-Teilnahme</span>
                  </div>
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
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Bereit für ablenkungsfreie Meditation?
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Lass dich benachrichtigen, sobald der Mindstone verfügbar ist. 
                  Early Adopter erhalten exklusive Updates und Frühzugang.
                </p>
              </Reveal>
            </div>
            
            <Reveal delay={120}>
              <Card className="max-w-2xl mx-auto p-8 shadow-deep border-0 bg-white/90 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-zen-earth">
                    <Bell className="w-5 h-5" />
                    <span className="font-semibold">Jetzt vormerken</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="deine@email.de"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 rounded-zen border-zen-sand focus:ring-zen-primary"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="stone" 
                      size="lg" 
                      className="h-12 px-8 whitespace-nowrap"
                    >
                      Benachrichtigen
                    </Button>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  Wir respektieren deine Privatsphäre. Keine Weitergabe an Dritte. 
                  Abmeldung jederzeit möglich.
                </p>
              </form>
              </Card>
            </Reveal>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
              <Reveal delay={160} className="text-center space-y-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-white">✨</span>
                </div>
                <p className="text-sm text-white/80">
                  <strong>Early Bird Bonus</strong><br />
                  Erste 100 Vormerkungen erhalten einen Rabatt
                </p>
              </Reveal>
              <Reveal delay={220} className="text-center space-y-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-white">🎯</span>
                </div>
                <p className="text-sm text-white/80">
                  <strong>Beta-Zugang</strong><br />
                  Teste den Mindstone vor dem offiziellen Launch
                </p>
              </Reveal>
              <Reveal delay={280} className="text-center space-y-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-white">💎</span>
                </div>
                <p className="text-sm text-white/80">
                  <strong>Exklusive Updates</strong><br />
                  Erfahre als Erste*r von neuen Features
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;