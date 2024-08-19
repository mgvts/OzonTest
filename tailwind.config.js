/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                gray: '#c5c7c4',
                blue: '#005BFF',
                black: '#001A34',
            },
            spacing: {
                '1/2': '50%',
                '6.5': '1.625rem',
                '13': '3.25rem',
                '30': '7.5rem',
            }
        },
    },
    plugins: [],
}

