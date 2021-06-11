import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/vue3-multiselect.esm.js'
    },
    plugins: [
      css({output:'vue3-multiselect.esm.css'}),
      vue()
    ]
  },
  // SSR build.
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/vue3-multiselect.ssr.js'
    },
    plugins: [
      css({output:'vue3-multiselect.ssr.css'}),
      vue({ template: { optimizeSSR: true } })
    ]
  },
  // Browser build.
  {
    input: 'src/index.js',
    output: {
      format: 'iife',
      file: 'dist/vue3-multiselect.js',
      name: 'Vue3Multiselect',
      external: ['vue'],
      globals: {
        vue: 'Vue'
      }
    },
    plugins: [
      css({output:'vue3-multiselect.css'}),
      vue()
    ]
  }
]
