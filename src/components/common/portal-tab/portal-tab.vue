<template>
  <div class="portal_tab" :style="{height}">
    <span>启动流程</span>
    <div class="portal_right">
      <slot name="icon">
        <span class="portal_icon">
          <i class="el-icon-s-promotion"></i>
        </span>
      </slot>
      <slot name="default">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <!-- <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PotalTab",
  props: {
    height: {
      type: String,
      default: "50px"
    }
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  width: 100%;
}
.portal_tab {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  & > span {
    font-size: 20px;
    padding: 10px;
  }
  & > div {
    padding: 10px;
    .portal_icon {
      margin-right: 30px;
      font-size: 30px;
      color: rgb(117, 153, 194);
      &:hover {
        color: royalblue;
        cursor: pointer;
      }
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #91969b;
}
.el-icon-arrow-down {
  font-size: 20px;
}
</style>