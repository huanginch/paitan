import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.YOUTUBE_API_KEY': JSON.stringify(env.YOUTUBE_API_KEY)
    },
    plugins: [react(), svgr(), Sitemap({hostname: 'https://inthuang.tw/paitan'})],
    base: process.env.NODE_ENV === 'production' ? '/paitan/' : '/',
  }
})
