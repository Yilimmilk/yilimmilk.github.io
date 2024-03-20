<template>
  <v-container class="justify-center" fluid>
    <!-- title -->
    <v-row class="justify-center">
      <v-col cols="12" sm="8" md="6">
        <h1 class="text-center font-bold mb-4">
          {{ $t('projects.leShouYi.name') }}
        </h1>
      </v-col>
    </v-row>

    <!-- introduce -->
    <v-row class="justify-center mb-4">
      <v-col cols="12" sm="8" md="6">
        <p class="text-body-1">
          {{ $t('projects.leShouYi.desc') }}
        </p>
      </v-col>
    </v-row>

    <!-- technology stack -->
    <v-row class="justify-center mb-4">
      <v-col cols="12" sm="8" md="6">
        <h2 class="text-h5 mb-3">
          {{ $t('commons.technologyStack') }}
        </h2>
        <div class="f-chips mx-2">
          <v-chip
            v-for="(item, i) in technologyStackList"
            :key="i"
            :value="item"
            class="ma-2"
            :color="item.color"
            variant="elevated"
          >
            {{ $t(item.name) }}
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <!-- pictures -->
    <v-row class="justify-center mb-4 sm:max-w[70%] sm:min-w[50%] mx-auto">
      <v-col
        v-for="(item, i) in pictureList"
        :key="i"
        :value="item"
        class="d-flex child-flex"
        cols="12"
        md="4"
      >
        <v-img
          :src="item"
          class="bg-grey-lighten-2"
          cover
        >
          <template #placeholder>
            <v-row
              align="center"
              class="fill-height ma-0"
              justify="center"
            >
              <v-progress-circular
                color="grey-lighten-5"
                indeterminate
              />
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const pictureList = ref<Array<string>>([
  new URL('@/assets/projects/leshouyi/1.jpg', import.meta.url).href,
  new URL('@/assets/projects/leshouyi/2.jpg', import.meta.url).href,
  new URL('@/assets/projects/leshouyi/3.jpg', import.meta.url).href,
]);

const technologyStackList = ref<Array<{ name: string, color: string }>>([
  {
    name: 'skills.python',
    color: '#3776ab'
  },
  {
    name: 'skills.fastapi',
    color: '#009688'
  },
  {
    name: 'skills.weixinMiniProgram',
    color: '#07c160'
  },
  {
    name: 'skills.postgresql',
    color: '#4169e1'
  },
  {
    name: 'skills.redis',
    color: '#dc382d'
  },
  {
    name: 'skills.rabbitmq',
    color: '#ff6600'
  },
  {
    name: 'skills.crawler',
    color: '#4b4e2a'
  },
  {
    name: 'skills.vuejs',
    color: '#4fc08d'
  },
  {
    name: 'skills.kotlin',
    color: '#7f52ff'
  },
  {
    name: 'skills.android',
    color: '#34a853'
  },
  {
    name: 'skills.nginx',
    color: '#009639'
  },
  {
    name: 'skills.docker',
    color: '#2496ed'
  },
]);
</script>

<style scoped>

</style>
