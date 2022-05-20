<template>
  <div class="navigation-container">
    <a-avatar icon="user" />
  </div>
</template>

<script>
export default {
  name: 'NavigationCom',
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
.navigation-container {
  width: 100%;
  height: 52px;
  background: #ccc;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
