import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
// @ts-ignore
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './css/style.scss'

const routes = setupLayouts(generatedRoutes)

routes.push(
  { path: '/', redirect: '/dashboard' },
)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
