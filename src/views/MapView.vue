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
import Camera from '@/assets/icon/Camera.svg'

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
        zoom: 15,
        zooms: [10, 20],
        center: [121.784563, 29.962411],
        layers: [new AMap.TileLayer.Satellite()],
      })
      this.map.add(this.getYuanQuArea())
      this.map.add(this.getQiYe1Area())
      this.map.add(this.getQiYe2Area())
      this.map.add(this.getQiYe3Area())
      this.map.add(this.getQiYe4Area())
      this.map.add(this.getQiYe1Marker())
      this.map.add(this.getQiYe2Marker())
      this.map.add(this.getCamera1Marker())
      this.map.add(this.getCamera2Marker())
    },
    getCamera1Marker() {
      let marker = new AMap.Marker({
        icon: new AMap.Icon({
          image: Camera,
          size: new AMap.Size(30, 30),
          imageSize: new AMap.Size(30, 30),
        }),
        position: new AMap.LngLat(121.7816, 29.965),
        title: '摄像头1',
        clickable: true,
      })

      marker.on('dblclick', function (e) {
        console.log(e)
      })

      return marker
    },
    getCamera2Marker() {
      let marker = new AMap.Marker({
        icon: new AMap.Icon({
          image: Camera,
          size: new AMap.Size(30, 30),
          imageSize: new AMap.Size(30, 30),
        }),
        position: new AMap.LngLat(121.76, 29.97),
        title: '摄像头2',
        clickable: true,
      })

      marker.on('dblclick', function (e) {
        console.log(e)
      })

      return marker
    },
    getQiYe1Marker() {
      let marker = new AMap.Marker({
        position: new AMap.LngLat(121.781616, 29.961762), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '永祥铸造',
        clickable: true,
      })

      marker.on('dblclick', function (e) {
        console.log(e)
      })

      return marker
    },
    getQiYe2Marker() {
      let marker = new AMap.Marker({
        position: new AMap.LngLat(121.791903, 29.957791), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '龙利钜能',
        clickable: true,
      })
      return marker
    },
    getYuanQuArea() {
      let geojson = new AMap.GeoJSON({
        geoJSON: {
          features: [
            {
              geometry: {
                coordinates: [
                  [
                    [121.751028, 29.969884],
                    [121.751367, 29.969056],
                    [121.752217, 29.969056],
                    [121.752429, 29.968891],
                    [121.752026, 29.967806],
                    [121.752238, 29.96615],
                    [121.756993, 29.966518],
                    [121.761515, 29.966463],
                    [121.763914, 29.966261],
                    [121.772257, 29.964624],
                    [121.773658, 29.96433],
                    [121.775293, 29.963796],
                    [121.779793, 29.9617],
                    [121.778626, 29.95517],
                    [121.782914, 29.954416],
                    [121.783063, 29.95357],
                    [121.779517, 29.951786],
                    [121.779029, 29.950369],
                    [121.778987, 29.949321],
                    [121.77973, 29.947813],
                    [121.78164, 29.946488],
                    [121.783785, 29.946654],
                    [121.786268, 29.950443],
                    [121.790642, 29.954085],
                    [121.79183, 29.95368],
                    [121.792595, 29.952963],
                    [121.793805, 29.951859],
                    [121.795354, 29.950737],
                    [121.796437, 29.950093],
                    [121.798029, 29.949744],
                    [121.799388, 29.949431],
                    [121.799876, 29.949155],
                    [121.801893, 29.9475],
                    [121.802509, 29.946874],
                    [121.803018, 29.945881],
                    [121.806266, 29.94669],
                    [121.808007, 29.946874],
                    [121.809557, 29.945292],
                    [121.813017, 29.945366],
                    [121.813718, 29.945182],
                    [121.816753, 29.94658],
                    [121.817603, 29.947261],
                    [121.814985, 29.95062],
                    [121.808255, 29.958327],
                    [121.805538, 29.959394],
                    [121.804773, 29.958493],
                    [121.803224, 29.959247],
                    [121.80316, 29.959762],
                    [121.802332, 29.960111],
                    [121.802289, 29.960038],
                    [121.80178, 29.960571],
                    [121.801292, 29.96162],
                    [121.800468, 29.961748],
                    [121.799322, 29.960866],
                    [121.798282, 29.962466],
                    [121.799556, 29.962981],
                    [121.800341, 29.963404],
                    [121.800299, 29.964613],
                    [121.799853, 29.965312],
                    [121.799067, 29.965717],
                    [121.798048, 29.966011],
                    [121.795267, 29.965551],
                    [121.795267, 29.965459],
                    [121.795437, 29.965367],
                    [121.795543, 29.964929],
                    [121.795437, 29.964763],
                    [121.795395, 29.964579],
                    [121.795352, 29.964358],
                    [121.795331, 29.964156],
                    [121.795013, 29.963862],
                    [121.794991, 29.963696],
                    [121.79497, 29.963549],
                    [121.794906, 29.963421],
                    [121.794715, 29.963347],
                    [121.794567, 29.963329],
                    [121.794482, 29.963512],
                    [121.794312, 29.963494],
                    [121.79427, 29.963365],
                    [121.794057, 29.963402],
                    [121.779331, 29.969263],
                    [121.779161, 29.969631],
                    [121.778418, 29.969833],
                    [121.774193, 29.970698],
                    [121.773902, 29.970808],
                    [121.773775, 29.97022],
                    [121.77265, 29.970477],
                    [121.77301, 29.972059],
                    [121.769571, 29.972206],
                    [121.769465, 29.97193],
                    [121.762226, 29.971893],
                    [121.755539, 29.970918],
                    [121.751059, 29.969889],
                    [121.751028, 29.969884],
                  ],
                ],
                type: 'Polygon',
              },
              type: 'Feature',
              properties: {},
            },
          ],
          type: 'FeatureCollection',
        },
        getPolygon(geojson, lnglats) {
          return new AMap.Polygon({
            path: lnglats,
            fillOpacity: 0.1,
            strokeColor: 'white',
            fillColor: 'red',
          })
        },
      })

      return geojson
    },
    getQiYe1Area() {
      let geojson = new AMap.GeoJSON({
        geoJSON: {
          features: [
            {
              geometry: {
                coordinates: [
                  [121.788909, 29.959664],
                  [121.789141, 29.959506],
                  [121.789414, 29.959253],
                  [121.789686, 29.958876],
                  [121.789888, 29.958211],
                  [121.79007, 29.957275],
                  [121.790383, 29.956242],
                  [121.790529, 29.955735],
                  [121.791428, 29.954763],
                  [121.794014, 29.956645],
                  [121.792643, 29.958012],
                  [121.791723, 29.958835],
                  [121.791249, 29.959115],
                  [121.790592, 29.959378],
                  [121.789804, 29.959553],
                  [121.788916, 29.959658],
                  [121.788916, 29.959666],
                ],
                type: 'LineString',
              },
              type: 'Feature',
              properties: {},
            },
          ],
          type: 'FeatureCollection',
        },
        getPolyline(geojson, lnglats) {
          return new AMap.Polygon({
            path: lnglats,
            fillOpacity: 0.5,
            strokeColor: 'red',
            fillColor: 'red',
          })
        },
      })

      return geojson
    },
    getQiYe2Area() {
      let geojson = new AMap.GeoJSON({
        geoJSON: {
          features: [
            {
              geometry: {
                coordinates: [
                  [
                    [121.780555, 29.962467],
                    [121.780377, 29.961604],
                    [121.780711, 29.961363],
                    [121.781601, 29.961021],
                    [121.782264, 29.960823],
                    [121.782809, 29.961194],
                    [121.782981, 29.962057],
                    [121.780555, 29.962467],
                    [121.780555, 29.962467],
                  ],
                ],
                type: 'Polygon',
              },
              type: 'Feature',
              properties: {},
            },
          ],
          type: 'FeatureCollection',
        },
        getPolygon(geojson, lnglats) {
          return new AMap.Polygon({
            path: lnglats,
            fillOpacity: 0.5,
            strokeColor: 'yellow',
            fillColor: 'yellow',
          })
        },
      })

      return geojson
    },
    getQiYe3Area() {
      let geojson = new AMap.GeoJSON({
        geoJSON: {
          features: [
            {
              geometry: {
                coordinates: [
                  [
                    [121.751361, 29.969923],
                    [121.751361, 29.969694],
                    [121.751449, 29.969325],
                    [121.751581, 29.969223],
                    [121.753388, 29.969236],
                    [121.753697, 29.966334],
                    [121.75662, 29.966551],
                    [121.758706, 29.966576],
                    [121.761791, 29.966538],
                    [121.763936, 29.96636],
                    [121.764803, 29.96949],
                    [121.76495, 29.969554],
                    [121.765141, 29.96963],
                    [121.765743, 29.971959],
                    [121.762864, 29.971921],
                    [121.759896, 29.971616],
                    [121.757296, 29.971247],
                    [121.754138, 29.97061],
                    [121.75139, 29.969936],
                    [121.751361, 29.969923],
                  ],
                ],
                type: 'Polygon',
              },
              type: 'Feature',
              properties: {},
            },
          ],
          type: 'FeatureCollection',
        },
        getPolygon(geojson, lnglats) {
          return new AMap.Polygon({
            path: lnglats,
            fillOpacity: 0.5,
            strokeColor: '#e90000',
            fillColor: '#e90000',
          })
        },
      })

      return geojson
    },
    getQiYe4Area() {
      let geojson = new AMap.GeoJSON({
        geoJSON: {
          features: [
            {
              geometry: {
                coordinates: [
                  [
                    [121.765862, 29.971994],
                    [121.765145, 29.969472],
                    [121.764976, 29.969509],
                    [121.764829, 29.969472],
                    [121.764027, 29.966384],
                    [121.764217, 29.966292],
                    [121.766137, 29.966018],
                    [121.769849, 29.965214],
                    [121.774089, 29.964282],
                    [121.775735, 29.963752],
                    [121.777254, 29.969911],
                    [121.774427, 29.970477],
                    [121.774195, 29.970623],
                    [121.773899, 29.970697],
                    [121.773752, 29.970093],
                    [121.772233, 29.970386],
                    [121.772655, 29.971848],
                    [121.772465, 29.972031],
                    [121.769934, 29.972158],
                    [121.769786, 29.971957],
                    [121.769765, 29.971775],
                    [121.76968, 29.971683],
                    [121.768267, 29.971884],
                    [121.7662, 29.972012],
                    [121.765862, 29.971994],
                  ],
                ],
                type: 'Polygon',
              },
              type: 'Feature',
              properties: {},
            },
          ],
          type: 'FeatureCollection',
        },
        getPolygon(geojson, lnglats) {
          return new AMap.Polygon({
            path: lnglats,
            fillOpacity: 0.5,
            strokeColor: '#dac011',
            fillColor: '#dac011',
          })
        },
      })

      return geojson
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
