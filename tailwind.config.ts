import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'white-gray': '#D9D9D9',
        'red-light': '#EA1D2C'
      },
      fontFamily: {
        'condensed': ['Roboto Condensed', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      textColor: {
        'red-light': '#EA1D2C'
      },
      fontSize: {
        '64': '4rem', // Define o tamanho 64 como 4 rem
      },
      fontStyle: {
        'italic': 'italic', // Define o estilo como itálico
      },
    },
  },
  plugins: [],
};

export default config;
