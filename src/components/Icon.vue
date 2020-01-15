<template>
  <component
    :fill="color"
    :width="actualSize.width"
    role="presentation"
    :aria-labelledby="name"
    :height="actualSize.height"
    :is="svgComponent"
  />
</template>

<script>
import settings from '../icons/settings.svg'
import home from '../icons/home.svg'
import user from '../icons/user.svg'

const icons = {
  settings,
  home,
  user,
}

export default {
  computed: {
    svgComponent() {
      return icons[this.name]
    },
    actualSize() {
      return this.size
        ? { width: this.size, height: this.size }
        : { width: this.width, height: this.height }
    },
  },
  props: {
    name: {
      type: String,
      default: 'box',
    },
    size: {
      type: [Number, String],
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
}
</script>

<style scoped>
svg {
  display: inline-block;
}
</style>
