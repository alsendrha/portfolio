import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "scale-up": "scale-up 0.3s ease-out",
        "opacity-on": "opacity-on 0.3s ease-out",
      },
      keyframes: {
        "scale-up": {
          "0%": {
            transform: "scale(0.3)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "opacity-on": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
