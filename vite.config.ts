/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import { resolve } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import lessCopy from './plugins/less-copy.js';
import dts from 'vite-plugin-dts';
import AutoImport from 'unplugin-auto-import/vite';
const { name } = require('./package.json');

export default defineConfig({
  plugins: [
    vue(),
    eslint(),
    vueJsx(),
    lessCopy(),
    dts(),
    AutoImport({
      imports: ['vue'],
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  build: {
    target: 'modules',
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name,
      fileName: format => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'ant-design-vue', 'vue-types', '@ant-design/icons-vue'],
      output: {
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'antd',
          'vue-types': 'vueTypes',
          '@ant-design/icons-vue': 'iconsVue',
        },
      },
    },
  },
  css: {
    postcss: {},
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*/__tests__/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
