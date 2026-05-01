import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        zen: {
          primary: "hsl(var(--zen-primary))",
          "primary-light": "hsl(var(--zen-primary-light))",
          earth: "hsl(var(--zen-earth))",
          sage: "hsl(var(--zen-sage))",
          "sage-light": "hsl(var(--zen-sage-light))",
          sand: "hsl(var(--zen-sand))",
          mist: "hsl(var(--zen-mist))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        zen: "1.25rem",
        stone: "2rem",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        zen: "var(--shadow-zen)",
        deep: "var(--shadow-deep)",
      },
      backgroundImage: {
        "gradient-zen": "var(--gradient-zen)",
        "gradient-earth": "var(--gradient-earth)",
        "gradient-stone": "var(--gradient-stone)",
      },
    },
  },
  plugins: [animate],
};

export default config;
