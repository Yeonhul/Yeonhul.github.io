<template>
  <div :class="['app_div', 
  { 'app_back0' : $store.state.app_back == 0},
  { 'app_back1' : $store.state.app_back == 1},
  { 'app_back2' : $store.state.app_back == 2}
  ]">
    <!-- <h></h> -->
    <He />
    <router-view></router-view>
  </div>
</template>

<script>
// import h from '@/components/header.vue'
// import f from './view/footer.vue'
export default {
  name: 'App',
  components: {
  },
  methods : {
    load() {
      var route = this.$route.name
      this.$store.commit('background', route);
    }
  },
  mounted() {
    window.addEventListener('load', this.load)
  },
  watch:{ 
    '$route' (to, from) {
      this.$store.commit('background', to.name);
    }
  },
}
</script>

<style>
/* @import './css/set.css'; */
</style>

<style lang="scss">
@import '@/css/scss/header.scss';
@import '@/css/scss/profile.scss';
@import '@/css/scss/project.scss';
@import '@/css/scss/blog.scss';
</style>
