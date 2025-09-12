/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#069D4E"
      },
      boxShadow: {
        card: "0 4px 18px rgba(34,197,94,.07)",
        lift: "0 10px 36px rgba(59,130,246,.18)",
      },
      borderRadius: { '2xl': '1.25rem' },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } }
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        fadeUp: 'fadeUp .5s ease-out both'
      }
    },
  },
  plugins: [],
}
