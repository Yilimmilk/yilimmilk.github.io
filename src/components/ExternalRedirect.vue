<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col class="text-center">
        <v-progress-circular indeterminate />
        <p class="mt-3">
          {{ $t('commons.waitRedirect') }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

onMounted(() => {
  const route = useRoute();
  const url = route.meta.url;
  if (url) {
    window.location.href = url;
  }
});
</script>
