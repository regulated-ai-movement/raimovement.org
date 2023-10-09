/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          'theme-blue': '#1a2e45',
          'theme-white': '#f1f5f9',
          'theme-red': '#e60039',
        },
      },
    },
    plugins: [],
  }