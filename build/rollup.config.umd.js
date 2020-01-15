import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    globals: {
      '@vue/composition-api': 'vueCompositionApi',
    },

    exports: 'named',
    name: '@baoshishu/vue',
    file: 'dist/vue.umd.js',
    format: 'umd',
  },
})

export default config
