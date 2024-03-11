import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
            transformOnServe: (code, devServerUrl) => code.replaceAll('/build/assets', devServerUrl+'/public/build/assets'),
        }),
    ],
    build: {
        // Add the following lines for public path preserving
        outDir: '../public/build/assets', // Place compiled assets in this directory
        publicDir: '../public/build/assets', // Tell Vite to use this directory for references
    },
});
