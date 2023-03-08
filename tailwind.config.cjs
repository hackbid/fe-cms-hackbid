/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "hackbid-primary": "#071150",
                "hackbid-secondary": "#05127c",
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
    ],
}
