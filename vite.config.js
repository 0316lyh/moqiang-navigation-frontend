import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue2(),
        legacy({
            targets: ['ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // 改端口
/*    server: {
        host: '127.0.0.1',//ip地址
        port: 8080, // 设置服务启动端口号
        open: true, // 设置服务启动时是否自动打开浏览器
    }*/
})
