/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            tablet: "910px",
            md: "768px",
            sm: "640px",
            lg: "1024px",
        },
        extend: {
            fontFamily: {
                sans: ["Kanit", "sans-serif"],
                serif: ["Roboto Condensed", "serif"],
                mono: ["Roboto Mono", "monospace"],
            },
            animation: {
                navLoad: "navLoad 1.5s ease-in-out",
                buttonHover: "buttonHover 2s ease-in-out infinite ",
                spin: "spin 20s linear infinite",
            },
            keyframes: {
                navLoad: {
                    "0%": { transform: "translateX(200%)" },
                    "100%": { transform: "translateY(0%)" },
                },
                buttonHover: {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                    "100%": { transform: "scale(1)" },
                },
            },
        },
    },
    plugins: [],
};
