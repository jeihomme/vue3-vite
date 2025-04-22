import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import vueDevTools from 'vite-plugin-vue-devtools'
// import obfuscator from 'rollup-plugin-obfuscator'
// import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // vueDevTools(),
    // rollup-plugin-obfuscator로 코드 난독화
    // obfuscator({
    //   compact: true, // 공백 및 여백 제거
    //   controlFlowFlattening: true, // 제어 흐름 난독화
    //   deadCodeInjection: true, // 사용되지 않는 코드 삽입
    //   debugProtection: true, // 디버깅 방지
    //   stringArray: true, // 문자열을 배열로 변환
    //   stringArrayThreshold: 100, // 문자열 배열화 비율 (75% 이상을 배열로 변환)
    // }),
    // ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist', // 빌드 결과물이 저장될 디렉터리
    minify: 'terser', // Terser 사용
    terserOptions: {
      compress: {
        drop_console: true, // console.log() 제거
        dead_code: true, // 사용되지 않는 코드 제거
      },
      mangle: {
        properties: {
          regex: /^_/, // 프로퍼티 이름도 난독화 (옵션)
        },
      },
      output: {
        beautify: false, // 압축된 코드로 출력
        comments: false, // 주석 제거
      },
    },
    sourcemap: false, // 소스맵 비활성화 (디버깅 방지)
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name].[hash].js', // 청크 파일 이름에 해시 값 추가
        entryFileNames: 'assets/[name].[hash].js', // 엔트리 파일 이름에 해시 값 추가
        assetFileNames: 'assets/[name].[hash].[ext]', // 자산 파일 이름에 해시 값 추가
      },
    },
  },
})
