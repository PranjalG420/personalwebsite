/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            desktop: "72rem",
            md: "768px",
            sm: "640px",
            lg: "1024px",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["Kanit", "sans-serif"],
                serif: ["Roboto Condensed", "serif"],
                mono: ["Roboto Mono", "monospace"],
            },
        },

        extend: {},
    },
    variants: {
        extend: {},
    },
};
