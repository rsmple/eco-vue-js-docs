import 'vue-router'

declare module 'vue-router' {
  VueRouter

  interface RouteMeta {
    title?: string

    headerTitleComponent?: ReturnType<typeof import('vue').defineComponent>
    headerSearch?: boolean
    headerSearchComponent?: ReturnType<typeof import('vue').defineComponent>

    navBarComponent?: ReturnType<typeof import('vue').defineComponent>
    navBarComponentOrder?: number
  }
}
