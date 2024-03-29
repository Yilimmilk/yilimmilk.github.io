import type { App } from 'vue';

import router from '../router';
import pinia from '../stores';
import { i18n } from './i18n';
import vuetify from './vuetify';

export function registerPlugins(app: App) {
  app.use(vuetify).use(i18n).use(router).use(pinia);
}
