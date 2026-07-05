import { registerPwa } from '../../frontend/register-pwa'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'

createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob('./pages/**/*.jsx')
    return await pages[`./pages/${name}.jsx`]()
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})

registerPwa()
