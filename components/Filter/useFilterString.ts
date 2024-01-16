import {computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {debounce} from 'eco-vue-js/dist/utils/utils'

export const useFilterString = (queryKey: string) => {
  const route = useRoute()
  const router = useRouter()

  const modelValue = computed<string | undefined>(() => {
    if (typeof route.query[queryKey] !== 'string') return undefined

    return route.query[queryKey] as string | undefined
  })

  const isDirty = computed<boolean>(() => modelValue.value !== undefined)

  const updateModelValue = debounce((value: string | undefined): void => {
    value = value || undefined

    if (modelValue.value === value) return

    router.replace({query: {...route.query, [queryKey]: value}})
  }, 100)

  return {
    modelValue,
    isDirty,
    updateModelValue,
  }
}
