import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <LanguageSwitcher />
        <Hero />
        <ValueProposition />
        <VideoShowcase />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
};

export default App;
