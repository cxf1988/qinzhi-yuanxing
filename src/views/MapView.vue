<template>
  <div class="map-container" id="mapContainer">
    <div class="map-header-container">
      <ul class="map-title-items">
        <li class="map-title-item map-title-item-active">实时监测与报警</li>
        <li class="map-title-item">双重预防机制</li>
        <li class="map-title-item">员工在岗在位</li>
        <li class="map-title-item">安全生产全流程</li>
      </ul>
    </div>
    <div class="map-left-content-container"></div>
    <div class="map-top-bar-container"></div>
    <map-bottom-bar></map-bottom-bar>
    <div class="map-right-content-container"></div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'

import MapBottomBar from './mapMoudle/MapBottomBar.vue'

export default {
  name: 'MapView',
  components: {
    MapBottomBar,
  },
  data() {
    return {}
  },
  beforeCreate() {
    AMapLoader.load({
      key: '6fb18acf97b73eaccca30a1825af0230', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      AMapUI: {
        // 是否加载 AMapUI，缺省不加载
        version: '1.1', // AMapUI 缺省 1.1
        plugins: [], // 需要加载的 AMapUI ui插件
      },
      Loca: {
        // 是否加载 Loca， 缺省不加载
        version: '1.3.2', // Loca 版本，缺省 1.3.2
      },
    })
      .then((AMap) => {
        this.$nextTick(() => this.initMap(AMap))
      })
      .catch((e) => {
        console.error(e)
      })
  },
  created() {},
  // mounted () {},
  computed: {},
  watch: {},
  methods: {
    initMap(AMap) {
      this.map = new AMap.Map('mapContainer', {
        zoom: 12,
        center: [121.84408, 29.90069],
      })
      // 或者使用 $refs 获取节点
      // this.map = new AMap.Map(this.$refs.container);
    },
  },
}
</script>

<style lang="less" scoped>
.map-container {
  width: 100%;
  height: 100%;
  position: relative;
  .map-header-container {
    width: 100%;
    height: 56px;
    background: rgba(2, 11, 45, 0.8);
    padding: 8px 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    .map-title-items {
      width: 800px;
      height: 40px;
      display: flex;
      justify-content: space-around;
      .map-title-item {
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        color: #fff;
        border: 1px solid #fff;
      }
      .map-title-item-active {
        box-shadow: inset 0 0 10px 0 rgb(36 165 255 / 66%);
      }
    }
  }
  .map-left-content-container {
    width: 300px;
    height: calc(100% - 88px);
    background: rgba(2, 11, 45, 0.8);
    position: absolute;
    top: 72px;
    left: 16px;
    z-index: 9999;
  }
  .map-top-bar-container {
    width: 600px;
    height: 40px;
    background: rgba(2, 11, 45, 0.8);
    position: absolute;
    top: 72px;
    left: 332px;
    z-index: 9999;
  }
  .map-right-content-container {
    width: 600px;
    height: calc(100% - 88px);
    background: rgba(2, 11, 45, 0.8);
    position: absolute;
    top: 72px;
    right: 16px;
    z-index: 9999;
  }
}
</style>
