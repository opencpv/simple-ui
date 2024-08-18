/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#11605E",
          50: "#E7EFEF",
          100: "#B5CECD",
          200: "#92B6B5",
          300: "#609493",
          400: "#41807E",
        },
        accent: {
          DEFAULT: "#11605E",
          50: "#DDB771",
          100: "#F4E9D3",
          200: "#EFDEBE",
          300: "#E8CFA0",
          400: "#E4C58D",
        },
        neutral: {
          black: "#09101D",
          white: "#ffffff",
          50: "#E6E6E6",
          100: "#B0B0B0",
          200: "#8A8A8A",
          300: "#545454",
          400: "#333333",
        },
        actionPrimary: {
          DEFAULT: "#11605E",
          hover: "#41807E",
          disabled: "#B5CECD",
        },
        actionNeutral: {
          DEFAULT: "#8A8A8A",
          hover: "#EEEEEE",
          disabled: "#F8F8F8",
        },
        states: {
          success: "#287D3C",
          warning: "#B95000",
          error: "#DA1414",
          info: "#2E5AAC",
          successBg: "#EDF9F0",
          warningBg: "#FFF4EC",
          errorBg: "#FEEFEF",
          infoBg: "#EEF2FA",
        },
      },
    },
  },
  plugins: [],
};
