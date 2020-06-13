<template>
  <div class="tabs_container">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
      <el-tab-pane
        v-for="item of tabClickList"
        :label="item.label"
        :name="item.name"
        :key="item.name"
      >
        <news-content></news-content>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import NewsContent from "./news-content/news-content";
export default {
  name: "NewsTabsLists",
  components: {
    NewsContent
  },
  props: {},
  data() {
    return {
      activeName: "second",
      tabClickList: [
        {
          label: "新闻中心1",
          name: "first"
        },
        {
          label: "新闻中心2",
          name: "second"
        },
        {
          label: "新闻中心3",
          name: "third"
        },
        {
          label: "新闻中心4",
          name: "fourth"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs_container {
  width: 100%;
  height: 300px;
  .el-tabs--border-card {
    border: none;
  }
  /deep/ .el-tabs--border-card>.el-tabs__content {
    padding: 0;
  }
}
.box-card {
  width: 100%;
}
</style>