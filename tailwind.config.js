/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0d6efd",
                },
                secondary: {
                    DEFAULT: "#6c757d",
                },
                success: {
                    DEFAULT: "#198754",
                },
                danger: {
                    DEFAULT: "#dc3545",
                },
                warning: {
                    DEFAULT: "#ffc107",
                },
                info: {
                    DEFAULT: "#0dcaf0",
                }
            },
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
            },
        },
    },
    plugins: [],
}
