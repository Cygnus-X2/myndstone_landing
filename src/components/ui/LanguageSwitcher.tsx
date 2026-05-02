import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-4 right-6 z-50 flex items-center gap-1 bg-white/80 backdrop-blur-sm border border-zen-sand rounded-full px-3 py-1.5 shadow-soft">
      <button
        onClick={() => setLang("de")}
        className={cn(
          "text-sm font-medium px-2.5 py-0.5 rounded-full transition-zen",
          lang === "de"
            ? "bg-zen-earth text-white"
            : "text-zen-earth hover:bg-zen-mist"
        )}
      >
        DE
      </button>
      <span className="text-zen-sand/60 text-xs select-none">|</span>
      <button
        onClick={() => setLang("en")}
        className={cn(
          "text-sm font-medium px-2.5 py-0.5 rounded-full transition-zen",
          lang === "en"
            ? "bg-zen-earth text-white"
            : "text-zen-earth hover:bg-zen-mist"
        )}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
