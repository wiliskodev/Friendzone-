/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fire: "#E50914"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(229,9,20,.4), 0 0 35px rgba(229,9,20,.5)"
      }
    }
  },
  plugins: []
};
