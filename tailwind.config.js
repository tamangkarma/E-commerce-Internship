/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#000000",
        },
        secondary: {
          blue: "#377DFF",
          green: "#3BC98B",
          orange: "#F7AB00",
          red: "#FF6A50",
        },
        neutral: {
          7: "#14171B",
          6: "#212529",
          5: "#343A39",
          4: "#6C7275",
          3: "#E5E6EF",
          2: "#F5F5F7",
          1: "#F6F6FE",
        },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        hero: [
          "6rem",
          {
            lineHeight: "6rem",
            fontWeight: "500",
          },
        ],
        h1: [
          "5rem",
          {
            lineHeight: "5.25rem",
            fontWeight: "500",
          },
        ],
        h2: [
          "4.5rem",
          {
            lineHeight: "4.75rem",
            fontWeight: "500",
          },
        ],
        h3: [
          "3.375rem",
          {
            lineHeight: "3.625rem",
            fontWeight: "500",
          },
        ],
        h4: [
          "2.5rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "500",
          },
        ],
        h5: [
          "2.125rem",
          {
            lineHeight: "2.375rem",
            fontWeight: "500",
          },
        ],
        h6: [
          "1.75rem",
          {
            lineHeight: "2.125rem",
            fontWeight: "500",
          },
        ],
        h7: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "500",
          },
        ],
        text1: [
          "1.625rem",
          {
            lineHeight: "250%",
            fontWeight: "400",
            LetterSpacing: "0px",
            fontFamily: "Inter",
            ImTextColor: "#3E3E59",
          },
        ],
        text2: [
          "1.375rem",
          {
            lineHeight: "212.5%",
            fontWeight: "400",
            LetterSpacing: "0px",
            fontFamily: "Inter",
            ImTextColor: "#3E3E59",
          },
        ],
        text3: [
          "1.25rem",
          {
            lineHeight: "200%",
            fontWeight: "400",
            LetterSpacing: "0px",
            fontFamily: "Inter",
            ImTextColor: "#3E3E59",
          },
        ],
        text4: [
          "1.125rem",
          {
            lineHeight: "187.5%",
            fontWeight: "400",
            LetterSpacing: "0px",
            fontFamily: "Inter",
            ImTextColor: "#3E3E59",
          },
        ],
        text5: [
          "1rem",
          {
            lineHeight: "162.5%",
            fontWeight: "400",
            LetterSpacing: "0px",
            fontFamily: "Inter",
            ImTextColor: "#3E3E59",
          },
        ],
        text6: [
          "0.875rem",
          {
            lineHeight: "137.5%",
            fontWeight: "400",
            LetterSpacing: "0px",
            fontFamily: "Inter",
            ImTextColor: "#3E3E59",
          },
        ],
        text7: [
          "0.75rem",
          {
            lineHeight: "125%",
            fontWeight: "400",
            LetterSpacing: "0px",
            fontFamily: "Inter",
            ImTextColor: "#3E3E59",
          },
        ],
        text8: [
          "1.625rem",
          {
            lineHeight: "250%",
            fontWeight: "600",
            font: "Inter",
          },
        ],
        text9: [
          "1.375rem",
          {
            lineHeight: "212.5%",
            fontWeight: "600",
            font: "Inter",
          },
        ],
        text10: [
          "1.25rem",
          {
            lineHeight: "200%",
            fontWeight: "600",
            font: "Inter",
          },
        ],
        text11: [
          "1.125rem",
          {
            lineHeight: "187.5%",
            fontWeight: "600",
            font: "Inter",
          },
        ],
        text12: [
          "1rem",
          {
            lineHeight: "162.5%",
            fontWeight: "600",
            font: "Inter",
          },
        ],
        text13: [
          "0.875rem",
          {
            lineHeight: "137.5%",
            fontWeight: "600",
            font: "Inter",
          },
        ],
        text14: [
          "0.75rem",
          {
            lineHeight: "125%",
            fontWeight: "600",
            font: "Inter",
          },
        ],
        text15: [
          "1.625rem",
          {
            lineHeight: "250%",
            fontWeight: "700",
            font: "Inter",
          },
        ],
        text16: [
          "1.375rem",
          {
            lineHeight: "212.5%",
            fontWeight: "700",
            font: "Inter",
          },
        ],
        text17: [
          "1.25rem",
          {
            lineHeight: "200%",
            fontWeight: "700",
            font: "Inter",
          },
        ],
        text18: [
          "1.125rem",
          {
            lineHeight: "187.5%",
            fontWeight: "700",
            font: "Inter",
          },
        ],
        text19: [
          "1rem",
          {
            lineHeight: "162.5%",
            fontWeight: "700",
            font: "Inter",
          },
        ],
        text20: [
          "0.875rem",
          {
            lineHeight: "137.5%",
            fontWeight: "700",
            font: "Inter",
          },
        ],
        text21: [
          "0.75rem",
          {
            lineHeight: "125%",
            fontWeight: "700",
            font: "Inter",
          },
        ],
        buttonxl: [
          "1.625rem",
          {
            lineHeight: "237.5%",
            fontWeight: "500",
            font: "Inter",
            LetterSpacing: "0px",
            color: "#121212",
          },
        ],  
        buttonlg: [
          "1.375rem",
          {
            lineHeight: "212.5%",
            fontWeight: "500",
            font: "Inter",
            LetterSpacing: "0px",
            color: "#121212",
          },
        ], 
        buttonmd: [
          "1.125rem",
          {
            lineHeight: "200%",
            fontWeight: "500",
            font: "Inter",
            LetterSpacing: "-0.4px",
            color: "#121212",
          },
        ],
        buttonsm: [
          "1rem",
          {
            lineHeight: "175%",
            fontWeight: "500",
            font: "Inter",
            LetterSpacing: "-0.4px",
            color: "#121212",
          },
        ],
        buttonxs: [
          "0.875rem",
          {
            lineHeight: "150%",
            fontWeight: "500",
            font: "Inter",
            LetterSpacing: "0px",
            color: "#121212",
          },
        ],   
      },
    },
  },
  plugins: [],
};
