import { computed, reactive, watch, toRefs } from '@vue/composition-api'
export default function useFetch(computedFnOrArgs, fetcher) {
  let argRef = null
  if (typeof computedFnOrArgs == 'function') {
    argRef = computed(computedFnOrArgs)
  }

  const state = reactive({
    data: null,
    loading: true,
    error: null,
    isInitial: true,
  })

  const fetchData = () => {
    state.loading = true
    let args
    if (argRef) {
      if (Array.isArray(argRef.value)) {
        args = argRef.value
      } else {
        args = [argRef.value]
      }
    } else {
      if (Array.isArray(computedFnOrArgs)) {
        args = computedFnOrArgs
      } else {
        args = [computedFnOrArgs]
      }
    }
    console.log({ args })
    fetcher(...args)
      .then(res => {
        state.data = res
      })
      .catch(error => {
        state.error = error
      })
      .finally(() => {
        state.loading = false
        state.isInitial = false
      })
  }

  if (argRef) {
    watch(argRef, fetchData)
  } else {
    fetchData()
  }

  return { ...toRefs(state), refetch: fetchData }
}
