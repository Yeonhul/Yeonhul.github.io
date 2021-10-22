<template>
  <div :class="['app_div', 
  { 'app_back0' : $store.state.app_back == 0},
  { 'app_back1' : $store.state.app_back == 1},
  { 'app_back2' : $store.state.app_back == 2}
  ]">
    <He />
    <router-view></router-view>
  </div>
</template>

<script>
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

<style lang="scss">
@import '@/scss/header.scss';
@import '@/scss/profile.scss';
@import '@/scss/project.scss';
@import '@/scss/blog.scss';
</style>
