<template>
  <div class="map-bottom-bar-container">
    <ul class="map-bottom-bar-items">
      <li
        class="map-bottom-bar-item"
        v-for="(item, index) in barData"
        :key="index"
      >
        <p>{{ item.name }}</p>
        <p>{{ item.count }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MapBottomBar',
  data() {
    return {
      barData: [
        {
          name: '监控设备',
          count: 80,
        },
        {
          name: '可燃气体',
          count: 10,
        },
        {
          name: '有毒气体',
          count: 23,
        },
        {
          name: '未处理告警',
          count: 0,
        },
        {
          name: '已处理告警',
          count: 120,
        },
        {
          name: '特殊作业',
          count: 10,
        },
        {
          name: '隐患排查',
          count: 10,
        },
        {
          name: '变更',
          count: 10,
        },
        {
          name: '应急物资',
          count: 520,
        },
      ],
    }
  },
  created() {},
  // mounted () {},
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style lang="less" scoped>
.map-bottom-bar-container {
  width: calc(100% - 964px);
  height: 80px;
  background: rgba(2, 11, 45, 0.8);
  position: absolute;
  bottom: 16px;
  left: 332px;
  z-index: 9999;
  .map-bottom-bar-items {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    .map-bottom-bar-item {
      p {
        font-size: 12px;
        color: #fff;
        line-height: 40px;
        text-align: center;
        margin: 0;
      }
    }
  }
}
</style>
