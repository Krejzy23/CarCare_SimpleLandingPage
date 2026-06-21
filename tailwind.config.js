/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#f5f8ff",
        muted: "#9aa8c7",
        line: "#342a4d",
        paper: "#070a14",
        surface: "#0e0d18",
        panel: "#191126",
        signal: "#4f8cff",
        electric: "#38c7ff",
        rubber: "#05060d",
        warning: "#9b5cff",
      },
      boxShadow: {
        soft: "0 18px 44px rgba(3, 8, 23, 0.26)",
        panel: "0 24px 80px rgba(3, 8, 23, 0.4)",
        phone: "0 34px 90px rgba(4, 8, 22, 0.52)",
      },
    },
  },
  plugins: [],
};
