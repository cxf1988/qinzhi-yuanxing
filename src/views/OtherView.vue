<template>
  <div class="other-container">
    <side-menu></side-menu>
    <main-content></main-content>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
import MainContent from '../components/MainContent.vue'

export default {
  name: 'OtherView',
  components: {
    SideMenu,
    MainContent,
  },
  data() {
    return {}
  },
  created() {},
  // mounted () {},
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style lang="less" scoped>
.other-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
