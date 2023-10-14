/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.ejs"],
    theme: {
    extend: {
        colors: {
            "bg-abu" : "rgba(24,24,42, 0.4)",
            "bg-abu-border" : "rgba(24,24,42, 0.9)",
            "text-putih" : "rgba(211,211,215,255)"
        }
    },
    },
    plugins: [],
};
