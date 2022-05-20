<template>
  <div class="main-content-container">
    <navigation-com></navigation-com>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavigationCom from './NavigationCom'
export default {
  name: 'MainContent',
  components: {
    NavigationCom,
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
.main-content-container {
  width: calc(100% - 280px);
  height: 100%;
  background: #eee;
  .main-content {
    width: 100%;
    height: calc(100% - 52px);
    background: yellowgreen;
    padding: 16px;
  }
}
</style>
