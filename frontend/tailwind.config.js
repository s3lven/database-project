/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1aac83',
                error: '#e7195a',
                borCol: '#52525b',
            },
            fontFamily: {
                display: ['Poppins', 'serif'],
            }
        },
    },
    plugins: [],
}