/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e36d12",
        secondary: "#c4e3af",
        accent: "#146e4a",
        neutral: "#78716c",
        "base-100": "#f5f3ed",
        "base-200": "#f7f5f0",
        "base-300": "#faf9f5",
        info: "#f29f18",
        success: "#a3e635",
        warning: "#fde047",
        error: "#dc2626",
      },
    },
  },
  plugins: [],
};
