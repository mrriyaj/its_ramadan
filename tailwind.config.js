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
            },
            colors: {
                'main': {
                    '50': '#effaf6',
                    '100': '#d9f2e7',
                    '200': '#b5e5d2',
                    '300': '#84d1b7',
                    '400': '#51b698',
                    '500': '#2f9a7d',
                    '500': '#2f9a7d',
                    '600': '#207b65',
                    light: '#67e8f9',
                    DEFAULT: '#185D4E',
                    dark: '#134138',
                },
                'second': '#FEC200',
            }
        },
    },

    plugins: [forms],
};
