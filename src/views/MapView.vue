<template>
  <div class="map-container">
    <div class="map-header-container">
      <ul class="map-title-items">
        <li class="map-title-item">实时监测与报警</li>
        <li class="map-title-item">双重预防机制</li>
        <li class="map-title-item">员工在岗在位</li>
        <li class="map-title-item">安全生产全流程</li>
      </ul>
    </div>
    <div class="map-content-container"></div>
  </div>
</template>

<script>
export default {
  name: 'MapView',
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
.map-container {
  width: 100%;
  height: 100%;
  .map-header-container {
    width: 100%;
    height: 68px;
    background: rgba(2, 11, 45, 0.8);
    padding: 8px 0;
    display: flex;
    justify-content: center;
    .map-title-items {
      width: 800px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      .map-title-item {
        color: #fff;
        line-height: 52px;
      }
    }
  }
  .map-content-container {
    width: 100%;
    height: calc(100% - 52px);
    background: #ccc;
  }
}
</style>
