import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3B82F6',
          deep: '#1E3A8A',
          pink: '#F472B6',
          soft: '#FDF2F8',
          background: '#F6F9FF',
          text: '#0F172A',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(59, 130, 246, 0.12)',
      },
      backgroundImage: {
        'signature-gradient': 'linear-gradient(135deg, #3B82F6 0%, #A78BFA 50%, #F472B6 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
