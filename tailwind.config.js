/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a0f7ce",

          secondary: "#ed8b89",

          accent: "#a086e8",

          neutral: "#272339",

          "base-100": "#353b40",

          info: "#8cd5f2",

          success: "#21c491",

          warning: "#f2c618",

          error: "#ed646f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
