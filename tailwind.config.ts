import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
<<<<<<< HEAD
    },
  },
  plugins: [],
=======
      boxShadow: {
        white: "0 2px 4px rgba(255, 255, 255, 0.6)",
      },
      textShadow: {
        white1: "0px 0px 100px rgba(255, 255, 255, 1)",
        white2: "0px 0px 100px rgba(150, 150, 150, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
>>>>>>> 33f6a77163da370afd5d77733e45a1143a88617a
};
export default config;
