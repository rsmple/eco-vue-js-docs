/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />
/// <reference types="@texturered/eco-vue-js/dist/types/global.d.ts" />

declare module '*.vue' {
  import type {defineComponent} from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P]
}
