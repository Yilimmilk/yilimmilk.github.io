<template>
  <v-container class="fill-height justify-center align-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <v-icon size="120" class="mb-4">
          mdi-emoticon-sad-outline
        </v-icon>
        <h1 class="text-h2 mb-2">
          404
        </h1>
        <p class="text-subtitle-1 mb-4">
          {{ $t('errors.404') }}
        </p>
        <v-btn color="primary" to="/" large>
          {{ $t('commons.goHome') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
