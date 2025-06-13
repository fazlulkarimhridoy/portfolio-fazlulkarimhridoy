/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",

    theme: {
        extend: {
            keyframes: {
                shimmer: {
                    "0%": { backgroundPosition: "-700px 0" },
                    "100%": { backgroundPosition: "700px 0" },
                },
            },
            animation: {
                shimmer: "shimmer 2s infinite linear",
            },
        },
    },
    plugins: [require("daisyui")],
};