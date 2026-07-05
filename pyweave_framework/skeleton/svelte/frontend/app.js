import { registerPwa } from '../../frontend/register-pwa'
import { createInertiaApp } from '@inertiajs/svelte'

createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob('./pages/**/*.svelte')
    return await pages[`./pages/${name}.svelte`]()
  },
  setup({ el, App, props }) { new App({ target: el, props }) },
})

registerPwa()
