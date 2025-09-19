/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBgPrimary: '#1a2a2a',
        colorBgSecondary: '#162525',
        colorSurface: '#203a3a',
        colorSurfaceBorder: '#2d4f4f',
        colorTextPrimary: '#d4e0e0',
        colorTextSecondary: '#a0b0b0',
        colorTextPlaceholder: '#708080',
        colorAccent: '#10b981',
        colorAccentHover: '#34d399',
        colorPriorityUrgent: '#ef4444',
        colorPriorityHigh: '#f97316',
        colorPriorityMedium: '#eab308',
        colorPriorityLow: '#3b82f6',
      }
    },
    fontFamily: {
      barriecito: ["Barriecito"],
      delius: ["Delius"],
      knewave: ["Knewave"],
    },
  },
  plugins: [],
}

