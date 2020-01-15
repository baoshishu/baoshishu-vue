<template>
  <div>
    <Icon name="settings" color="red" />
    <Icon name="home" color="red" />
    <Icon name="user" color="red" />
    <div v-if="loading">...loading</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<script>
import { Icon } from '../dist/vue.umd'
import useFetch from './hooks/useFetch'
export default {
  components: {
    Icon,
  },
  setup() {
    const fetcher = (path, args) =>
      fetch(path + `?name=${args.name}`).then(res => res.json())
    return useFetch(
      () => ['https://api.github.com/users', { name: 'moon' }],
      fetcher
    )
  },
}
</script>

<style lang="scss" scoped></style>
