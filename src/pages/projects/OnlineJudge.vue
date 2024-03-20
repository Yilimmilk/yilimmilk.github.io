<template>
  <v-container class="justify-center" fluid>
    <!-- title -->
    <v-row class="justify-center">
      <v-col cols="12" sm="8" md="6">
        <h1 class="text-center font-bold mb-4">
          {{ $t('projects.onlineJudge.name') }}
        </h1>
      </v-col>
    </v-row>

    <!-- introduce -->
    <v-row class="justify-center mb-4">
      <v-col cols="12" sm="8" md="6">
        <p class="text-body-1">
          {{ $t('projects.onlineJudge.desc') }}
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
        md="6"
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
  new URL('@/assets/projects/oj/1.jpg', import.meta.url).href,
  new URL('@/assets/projects/oj/2.jpg', import.meta.url).href,
  new URL('@/assets/projects/oj/3.jpg', import.meta.url).href,
  new URL('@/assets/projects/oj/4.jpg', import.meta.url).href,
]);

const technologyStackList = ref<Array<{ name: string, color: string }>>([
  {
    name: 'skills.java',
    color: '#947a6d'
  },
  {
    name: 'skills.spring',
    color: '#6db33f'
  },
  {
    name: 'skills.springBoot',
    color: '#6db33f'
  },
  {
    name: 'skills.springCloud',
    color: '#6db33f'
  },
  {
    name: 'skills.myBatisPlus',
    color: '#020203'
  },
  {
    name: 'skills.redis',
    color: '#dc382d'
  },
  {
    name: 'skills.mysql',
    color: '#4479a1'
  },
  {
    name: 'skills.vuejs',
    color: '#4fc08d'
  },
  {
    name: 'skills.distributed',
    color: '#6d28d9'
  },
  {
    name: 'skills.nginx',
    color: '#009639'
  },
]);
</script>

<style scoped>

</style>
