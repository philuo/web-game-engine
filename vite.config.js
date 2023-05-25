import { defineConfig } from '@yuo/vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    modules: {
      generateScopedName: '[local]__[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/vars.scss";'
      }
    }
  },
  build: {
    outDir: resolve(__dirname, 'build'),
    sourcemap: 'hidden'
  }
});
