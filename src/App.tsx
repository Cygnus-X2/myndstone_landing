import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import SimpleProcess from "@/components/sections/SimpleProcess";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <ValueProposition />
      <VideoShowcase />
      <HowItWorks />
      <Features />
      {/* <SimpleProcess /> */}
      <Testimonials />
      <CTA />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
