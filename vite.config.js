import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // plugin：配置所需要的插件数组
  plugins: [vue()],

  // base：开发或生产环境服务的公共基础路径
  base: "./", // 不加的话会出现打包后白屏

  // server：运行服务的配置
  server: {
    host: "0.0.0.0",
    port: 8081,
    open: true, //服务器启动时自动在浏览器打开应用程序
    strictPort: true, //端口被占用时会直接退出
    cors: true, //为开发服务器配置CORS，默认启用并允许任何源
    hmr: true, //开启热更新
    proxy: {
      "/api": {
        // 配置接口调用目标地址
        // target: "https://www.xxxx.com",
        // 当进行代理时，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        // changeOrigin: true,
        // 替换target中的请求地址，请求时以 /api 开头
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    // 定义项目路径别名，这样可以在引入文件时，以属性值为起点。
    // import.meta.url 是一个ESM的原生功能，会暴露当前模块的URL
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      src: fileURLToPath(new URL("./src", import.meta.url)),
    },
    // import 导入时想要省略的扩展名列表
    // extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },

  // build：打包配置
  build: {
    // 最终构建的浏览器兼容目标，类型：string | string[]
    target: "",
    //指定输出路径
    outDir: "dist",
    //生成静态资源的存放的路径
    assetsDir: "assets",
    // 设置资源阈值，小于该值将内联为 base64 编码，避免额外的 http 请求
    assetsInlineLimit: 4096,
    //启用/禁用 CSS 代码拆分，如果有设置build.lib，build.cssCodeSplit 会默认为 false，
    //false 的话会将项目中的所以 css 提取到一个 css 文件中
    cssCodeSplit: true,
    // 构建后是否生成 source map 文件, boolean | 'inline' | 'hidden'
    sourcemap: false,
    //自定义底层的 Rollup 打包配置
    rollupOptions: {
      // 可以配置多个，表示多入口
      input: {
        index: "index.html",
      },
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/name-[hash].[ext]",
      },
    },
    // 禁用将构建后的文件写入磁盘,一般用在构建条件时
    // write: false,
    //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    //chunk 大小警告的限制
    chunkSizeWarningLimit: 500,
    
  },
});


// 库模式：开发和生产环境的配置分开配置