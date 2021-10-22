<template>
  <div>
    <He-der />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>

<style lang="scss">
@import '@/scss/header.scss';
@import '@/scss/main_page.scss';
@import '@/scss/content.scss';
</style>
