<template>
  <v-app-bar scroll-behavior="elevate">
    <template #prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawerOpen = !drawerOpen" />
    </template>

    <v-app-bar-title>{{ $t('commons.mapotofu') }}</v-app-bar-title>

    <v-btn icon>
      <v-icon>mdi-translate</v-icon>
      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in languageOptions"
            :key="index"
            :value="item"
            @click="onLanguageOptionClick(item.key)"
          >
            <v-list-item-title>
              {{ item.label }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>

    <v-btn icon @click="toggleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawerOpen"
    location="left"
    :temporary="true"
  >
    <v-list
      :lines="false"
      nav
    >
      <template v-for="(item, i) in drawerItemList" :key="i">
        <!-- check if have 'child' field, then use 'v-list-group' -->
        <v-list-group v-if="item.child" no-action append-icon="">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :value="item" color="primary" height="80">
              <template #prepend>
                <v-icon size="large" :color="item.color">
                  {{ item.icon }}
                </v-icon>
              </template>
              <p class="font-weight-bold">
                {{ $t(item.value) }}
              </p>
            </v-list-item>
          </template>

          <!-- sub menu -->
          <v-list-item
            v-for="(childItem, j) in item.child"
            :key="`child-${j}`"
            :value="childItem"
            height="50"
            @click="onSwitchPage(`${item.path}/${childItem.path}`)"
          >
            <p class="font-weight-bold">
              {{ $t(childItem.value) }}
            </p>
          </v-list-item>
        </v-list-group>

        <!-- otherwise direct render 'v-list-item' -->
        <v-list-item v-else :value="item" color="primary" height="80" @click="onSwitchPage(item.path)">
          <template #prepend>
            <v-icon size="large" :color="item.color">
              {{ item.icon }}
            </v-icon>
          </template>
          <p class="font-weight-bold">
            {{ $t(item.value) }}
          </p>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useTheme } from 'vuetify';

import { setLocale } from '@/plugins/i18n';
import { useAppStore } from '@/stores/app';

const themeRef = useTheme();
const appStore = useAppStore();
const router = useRouter();

// current language, will be used by watch
const currentLanguage = ref<string>(appStore.language);
// is drawer open
const drawerOpen = ref<boolean>(false);
// drawer list item
const drawerItemList = ref<Array<{ path: string, icon: string, color: string, value: string; child?: any }>>([
  {
    path: '/',
    icon: 'mdi-account-box',
    color: '#005caf',
    value: 'commons.aboutMe',
  },
  {
    path: '/blog',
    icon: 'mdi-post',
    color: '#c1693c',
    value: 'commons.blog',
  },
  {
    path: '/projects',
    icon: 'mdi-code-braces-box',
    color: '#6a4c9c',
    value: 'commons.projects',
    child: [
      {
        path: 'leshouyi',
        value: 'projects.leShouYi.name',
      },
      {
        path: 'onlinejudge',
        value: 'projects.onlineJudge.name',
      },
    ]
  },
  {
    path: '/cloud',
    icon: 'mdi-cloud',
    color: '#91989f',
    value: 'commons.cloud',
  },
  {
    path: '/chat',
    icon: 'mdi-forum',
    color: '#86c166',
    value: 'commons.gpt',
  },
]);
// language options list
const languageOptions = ref([
  {
    label: '简体中文',
    key: 'zh-CN'
  },
  {
    label: '繁體中文（粵語）',
    key: 'zh-HK'
  },
  {
    label: 'English',
    key: 'en-US'
  },
]);

// defualt theme and language
themeRef.global.name.value = appStore.theme;
setLocale(currentLanguage.value);

// on language option click, recive a value: name of the language
const onLanguageOptionClick = (key: string) => {
  currentLanguage.value = key;
  appStore.setLanguage(key);
};

// switch theme
const toggleTheme = () => {
  let currentTheme: 'dark' | 'light' = themeRef.global.current.value.dark ? 'light' : 'dark';
  appStore.setTheme(currentTheme);
  themeRef.global.name.value = currentTheme;
};

// switch page
const onSwitchPage = (path: string) => {
  router.push({ path });
};
</script>

<style scoped lang="sass">

</style>
