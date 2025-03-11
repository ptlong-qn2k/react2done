import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    // base: '/react2done/',
    plugins: [react()],
    server: {
        port: 3000, // change here
    },
});
