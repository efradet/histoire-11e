import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// base relative : le site fonctionne en local comme sur GitHub Pages (/histoire-11e/).
export default defineConfig({base: './', plugins: [react()], build: {chunkSizeWarningLimit: 1500}});
