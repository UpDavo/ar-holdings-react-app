/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0750a4",
          secondary: "#8fc1d8",
          accent: "#1e21b5",
          neutral: "#1E1721",
          "base-100": "#EFECF3",
          info: "#5884D0",
          success: "#157F75",
          warning: "#F4CF15",
          error: "#E56C92",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
