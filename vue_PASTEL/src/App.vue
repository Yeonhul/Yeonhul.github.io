<template>
  <div>
    <he-der />
    <!-- <aaa /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import aaa from '@/views/header.vue'
import {
        onBeforeMount,
        onBeforeUnmount,
        onBeforeUpdate,
        onErrorCaptured,
        onMounted,
        onUnmounted,
        onUpdated
    } from "vue";
export default {
  name: 'App',
  components: {
    // aaa
  },
  setup() {
    onUpdated(() => {
      console.log('aasd');
    })
  }
}
</script>

<style>
@import './css/set.css';
</style>

<style lang="scss">
@import '@/css/scss/header.scss';
@import '@/css/scss/main_page.scss';
@import '@/css/scss/content.scss';
</style>
