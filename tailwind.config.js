/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jisoi: {
          red: "#B11226",
          burgundy: "#3A050B",
          black: "#12090A",
          cream: "#FFF7F2",
          sand: "#E8D4C2",
          amber: "#FFB23F",
          text: "#1B1112",
          border: "#E7D6CE"
        }
      },
      fontFamily: {
        display: ["Archivo Black", "Space Grotesk", "sans-serif"],
        body: ["DM Sans", "Manrope", "sans-serif"]
      },
      boxShadow: {
        glow: "0 18px 60px rgba(177, 18, 38, 0.25)",
        amber: "0 12px 32px rgba(255, 178, 63, 0.28)"
      }
    },
  },
  plugins: [],
}
