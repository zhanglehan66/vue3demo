import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base:'./',  // 不加打包后白屏
  server:{
    host: '0.0.0.0',
    port: 8081,
    open: true,   //服务器启动时自动在浏览器打开应用程序
    strictPort: true,  //端口被占用时会直接退出
    
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'src': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
