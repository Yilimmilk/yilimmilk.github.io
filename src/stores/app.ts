import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

import { getThemeFromCSSMediaQuery } from '@/utils';

import { setLocale } from '../plugins/i18n';

export const useAppStore = defineStore('app', {
  state: () => ({
    theme: useStorage('theme', getThemeFromCSSMediaQuery),
    language: useStorage('language', 'zh-CN'),
  }),
  getters: {},
  actions: {
    setTheme(theme: 'dark' | 'light') {
      this.theme = theme;
    },
    setLanguage(lang: string) {
      this.language = lang;
      setLocale(lang);
    },
  },
});
