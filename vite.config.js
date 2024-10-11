import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path'; // Ini buat path alias

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@assets': resolve(__dirname, './src/assets'),
            '@components': resolve(__dirname, './src/components'),
            '@pages': resolve(__dirname, './src/pages'),
            '@routes': resolve(__dirname, './src/routes'),
            '@utils': resolve(__dirname, './src/api/utils'),
            '@services': resolve(__dirname, './src/api/services'),
        },
    },
});