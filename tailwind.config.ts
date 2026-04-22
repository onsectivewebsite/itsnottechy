import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00b3a4",
          50: "#e6fbf9",
          100: "#ccf7f3",
          200: "#99efe6",
          300: "#66e7da",
          400: "#33dfcd",
          500: "#00b3a4",
          600: "#009085",
          700: "#006d63",
          800: "#004a42",
          900: "#002721",
        },
        ink: {
          DEFAULT: "#1C1F26",
          50: "#f3f4f6",
          100: "#dbdde2",
          200: "#b5b9c3",
          300: "#8f94a3",
          400: "#5a606f",
          500: "#363a45",
          600: "#1C1F26",
          700: "#14161c",
          800: "#0d0e13",
          900: "#06070a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(0, 179, 164, 0.55)",
        card: "0 10px 40px -10px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(0,179,164,0.25), transparent 60%)",
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 40s linear infinite",
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
