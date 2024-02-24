import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                "ramadhan-karim": ["'Ramadhan Karim'"],
                "dancing-script": "'Dancing Script'",
            },
            colors: {
                'main': {
                    '100': '#d9f2e7',
                    '200': '#b5e5d2',
                    '300': '#84d1b7',
                    '400': '#51b698',
                    '500': '#2f9a7d',
                    '600': '#207b65',
                    '700': '#185d4e',
                    '800': '#164f43',
                    '900': '#134138',
                    light: '#effaf6',
                    default: '#185D4E',
                    dark: '#0a2420',
                },
                'second': {
                    '100': '#fffcc5',
                    '200': '#fffa85',
                    '300': '#fff046',
                    '400': '#ffe21b',
                    '500': '#fec200',
                    '600': '#e29700',
                    '700': '#bb6b02',
                    '800': '#985308',
                    '900': '#7c430b',
                    light: '#ffffea',
                    default: '#fec200',
                    dark: '#482300',
                },
            }
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
    ],
};
