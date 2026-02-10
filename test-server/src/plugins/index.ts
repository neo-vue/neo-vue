/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
// @ts-ignore
import { NeoVue } from '@neo-vue/neo-ui';
import '@neo-vue/neo-ui/lib/neo-vue.css';
import router from '../router';
import { loadFonts } from './webfontloader';
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
// import 'highlight.js/styles/stackoverflow-light.css';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

// Types
import type { App } from 'vue';

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(router)
    .use(NeoVue, {
      theme: {
        schemeColors: {
          dark: '#333333',
          light: 'white'
        }
      }
    })
    .use(hljsVuePlugin)
}
