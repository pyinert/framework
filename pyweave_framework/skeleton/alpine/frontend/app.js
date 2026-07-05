import { registerPwa } from '../../frontend/register-pwa'
import Alpine from 'alpinejs'

const el = document.getElementById('app')
window.PyWeavePage = JSON.parse(el.dataset.page)
window.Alpine = Alpine
Alpine.start()

registerPwa()
