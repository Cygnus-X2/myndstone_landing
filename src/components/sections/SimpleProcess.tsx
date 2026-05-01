const SimpleProcess = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-zen-earth mb-12 text-center">
            So fühlt sich eine Session an
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-zen-sage text-zen-earth rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-zen-earth">
                Stein auflegen
              </h3>
              <p className="text-muted-foreground">
                Wähle intuitiv einen Edelstein, lege ihn auf und spüre, wie Mindstone sanft aktiviert.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-zen-primary text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-zen-earth">
                Meditation startet
              </h3>
              <p className="text-muted-foreground">
                Eine Stimme begrüßt dich, Licht und Klang bauen eine Atmosphäre auf, die dich umhüllt.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-zen-earth text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-zen-earth">
                In Ruhe ankommen
              </h3>
              <p className="text-muted-foreground">
                Du sitzt entspannt, folgst deinem Atem und lässt dich tragen – ohne Display, ohne Ablenkung.
              </p>
            </div>
          </div>

          <div className="bg-gradient-earth rounded-stone p-8 text-center shadow-soft">
            <p className="text-xl text-zen-earth leading-relaxed">
              Mindstone macht Meditation greifbar. Ein physisches Objekt lenkt deinen Fokus, 
              während Audio und Licht deine Reise begleiten – ganz ohne digitale Reize.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleProcess;
