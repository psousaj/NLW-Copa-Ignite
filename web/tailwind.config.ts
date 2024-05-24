import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif'
      },
      backgroundImage: {
        app: 'url(/assets/images/BG.png)'
      },
      colors: {
        ignite: {
          500: '#129E57',
        },
        yellow: {
          500: '#F7DD43',
          700: '#E5CD3D',
        },
        gray: {
          100: '#E1E1E6',
          300: '#8D8D99',
          600: '#323238',
          800: '#202024',
          900: '#121214',
        }
      }
    },
  },
  plugins: [],
};
export default config;
