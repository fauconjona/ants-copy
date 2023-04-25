import { createApp } from 'vue'
import App from './App.vue'
import '@gouvfr/dsfr/dist/dsfr.min.css'      // Import des styles du DSFR
import '@gouvminint/vue-dsfr/styles'         // Import des styles globaux propre à VueDSFR
import VueDsfr from '@gouvminint/vue-dsfr'   // Import (par défaut) de la bibliothèque

import './assets/main.css'

createApp(App).use(VueDsfr).mount('#app')
