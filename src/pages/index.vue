<template>
  <v-responsive class="f-home h-screen w-auto items-center mt-[-5%]">
    <div class="text-center">
      <MapotofuIcon class="min-w[50%] max-w[60%] md:max-w[40%] md:min-w[35%]" />
      <h5 class="text-slogan font-weight-bold my-10">
        {{ $t('commons.slogan') }}
      </h5>
    </div>
  </v-responsive>

  <v-container class="h-auto mb-[20%]">
    <v-card
      class="mx-auto mb-20"
      prepend-icon="mdi-face-man-profile"
      width="100%"
      color="secondary"
      variant="tonal"
    >
      <template #title>
        {{ $t("welcome.intro") }}
      </template>

      <v-card-text>
        <div>
          <div class="text-base mb-1">
            {{ $t("welcome.hiThere") }}
          </div>
          <div class="text-base mb-10">
            {{ $t("welcome.locate") }} / {{ $t("welcome.status") }} / {{ $t("welcome.sex") }}
          </div>
          <div class="text-sm mb-1">
            {{ $t("welcome.content1") }}
          </div>
          <div class="text-sm mb-1">
            {{ $t("welcome.content2") }}
          </div>
        </div>
      </v-card-text>
    </v-card>
    <div class="f-chips mx-2">
      <v-chip
        v-for="(item, i) in skillsList"
        :key="i"
        :value="item"
        class="ma-2"
        :color="item.color"
        label
      >
        <v-icon :icon="item.icon" start />
        {{ $t(item.name) }}
      </v-chip>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

import { useAppStore } from '@/stores/app';
// import { getOppositeHexColor } from '@/utils/index';

const appStore = useAppStore();

const isDark = computed(() => appStore.theme === 'dark');

// random shuffle list
const shuffle = (arr: Array<any>) => {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let index = Math.floor(Math.random() * (len - i));
    let temp = arr[index];
    arr[index] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }
  return arr;
};

// chip tag list
const skillsList = ref<Array<{ name: string, icon: string, color: string }>>(shuffle([
  {
    name: 'skills.badminton',
    icon: 'mdi-badminton',
    color: '#58b2dc'
  },
  {
    name: 'skills.cpp',
    icon: 'mdi-language-cpp',
    color: '#787878'
  },
  {
    name: 'skills.java',
    icon: 'mdi-language-java',
    color: '#947a6d'
  },
  {
    name: 'skills.kotlin',
    icon: 'mdi-language-kotlin',
    color: '#7f52ff'
  },
  {
    name: 'skills.android',
    icon: '$android',
    color: '#34a853'
  },
  {
    name: 'skills.python',
    icon: 'mdi-language-python',
    color: '#3776ab'
  },
  {
    name: 'skills.javascript',
    icon: 'mdi-language-javascript',
    color: '#f7Df1e'
  },
  {
    name: 'skills.typescript',
    icon: 'mdi-language-typescript',
    color: '#3178c6'
  },
  {
    name: 'skills.vuejs',
    icon: 'mdi-vuejs',
    color: '#4fc08d'
  },
  {
    name: 'skills.cybersecurity',
    icon: 'mdi-server-security',
    color: '#904840'
  },
  {
    name: 'skills.git',
    icon: 'mdi-git',
    color: '#f05032'
  },
  {
    name: 'skills.linux',
    icon: '$linux',
    color: '#fcc624'
  },
  {
    name: 'skills.docker',
    icon: '$docker',
    color: '#2496ed'
  },
  {
    name: 'skills.cycling',
    icon: 'mdi-bike',
    color: '#4e4f97'
  },
  {
    name: 'skills.personality',
    icon: 'mdi-account-star',
    color: '#b9887d'
  },
  {
    name: 'skills.music',
    icon: 'mdi-music-clef-treble',
    color: '#e16b8c'
  },
  {
    name: 'skills.travel',
    icon: 'mdi-bag-suitcase-outline',
    color: '#66bab7'
  },
  {
    name: 'skills.embedded',
    icon: 'mdi-chip',
    color: '#4f4f48'
  },
]));
</script>

<style scoped>
.text-slogan {
  font-size: clamp(1rem, 0.44rem + 2.8vw, 1.7rem);
  line-height: 1.4;
}
</style>
