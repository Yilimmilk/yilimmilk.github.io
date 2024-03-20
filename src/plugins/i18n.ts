import { WritableComputedRef } from 'vue';
import { createI18n, type Locale } from 'vue-i18n';

import EN_US from '../locales/en-US.json';
import ZH_CN from '../locales/zh-CN.json';
import ZH_HK from '../locales/zh-HK.json';

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages: {
    'en-US': {
      ...EN_US,
    },
    'zh-CN': {
      ...ZH_CN,
    },
    'zh-HK': {
      ...ZH_HK,
    },
  },
});

const setLocale = (locale: Locale): void => {
  (i18n.global.locale as WritableComputedRef<string>).value = locale;
};

export { i18n, setLocale };
