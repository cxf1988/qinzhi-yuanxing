<template>
  <div class="side-menu-container">
    <div class="logo-container">LOGO图标</div>
    <div class="menu-container">
      <a-tabs default-active-key="1" @change="handleChangeMenuTab">
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon type="bank" />
          </span>
          <menu-one></menu-one>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon type="profile" />
          </span>
          <menu-two></menu-two>
        </a-tab-pane>
        <a-tab-pane key="3">
          <span slot="tab">
            <a-icon type="notification" />
          </span>
          Tab 3
        </a-tab-pane>
        <a-tab-pane key="4">
          <span slot="tab">
            <a-icon type="appstore" />
          </span>
          Tab 4
        </a-tab-pane>
        <a-tab-pane key="5">
          <span slot="tab">
            <a-icon type="setting" />
          </span>
          Tab 5
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import MenuOne from './menuCom/MenuOne'
import MenuTwo from './menuCom/MenuTwo'

export default {
  name: 'SideMenu',
  components: {
    MenuOne,
    MenuTwo,
  },
  data() {
    return {
      themeMenuFirst: {
        1: 'Home',
        2: 'Home',
        3: '',
        4: '',
        5: '',
      },
    }
  },
  created() {},
  // mounted () {},
  computed: {},
  watch: {},
  methods: {
    handleChangeMenuTab(param) {
      // 菜单Tab切换
      console.log(this.themeMenuFirst.param)
      this.$router.push({ name: this.themeMenuFirst.param })
    },
  },
}
</script>

<style lang="less" scoped>
.side-menu-container {
  width: 280px;
  height: 100%;
  background: #2c3e50;
  color: #fff;
  .logo-container {
    width: 100%;
    height: 52px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 52px;
  }
  .menu-container {
    width: 100%;
    height: calc(100% - 52px);
    /deep/.ant-tabs-bar {
      margin: 0;
    }
    /deep/.ant-tabs-nav {
      .ant-tabs-tab {
        margin: 0;
      }
    }
  }
}
</style>
