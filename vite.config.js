import {defineConfig} from 'vite';
export default defineConfig({base:'./',server:{host:'0.0.0.0',port:5180},build:{chunkSizeWarningLimit:700,rollupOptions:{output:{manualChunks(id){if(id.includes('node_modules/three/')) return 'three';}}}}});
