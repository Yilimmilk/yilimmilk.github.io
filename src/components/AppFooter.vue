<template>
  <v-footer height="40" app>
    <v-icon
      icon="$mapotofu"
      size="20"
    />
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        size="18"
      />
    </a>
    <div class="absolute right-4 text-caption text-disabled">
      <span>&copy; 2018-{{ (new Date()).getFullYear() }} {{ $t('commons.mapotofu') }}</span>
      <span> - </span>
      <a
        class="decoration-none text-disabled"
        href="https://beian.miit.gov.cn/"
        rel="noopener noreferrer"
        target="_blank"
      >
        {{ beianCode }}
      </a>
    </div>
  </v-footer>
</template>

<script setup lang="ts">

const beianCode = ref<string>('鄂ICP备20004669号');
const items = ref<Array<{title: string, icon: string, href: string}>>([
  {
    title: 'GitHub',
    icon: 'mdi-github',
    href: 'https://github.com/yilimmilk',
  },
]);
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
