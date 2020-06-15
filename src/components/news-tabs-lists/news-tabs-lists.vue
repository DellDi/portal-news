<template>
  <div class="tabs_container">
    <!-- tab -->
    <portal-tab>
      <template #left>
        <news-tabs></news-tabs>
      </template>
      <template #more>
        <div class="tabs_right">
          <span class="tabs-link">
            <a href="#">
              <i class="el-icon-more"></i>
            </a>
          </span>
        </div>
      </template>
    </portal-tab>

    <!-- 新闻列表 -->
    <news-content></news-content>
  </div>
</template>

<script>
import PortalTab from "../common/portal-tab/portal-tab";
import NewsContent from "./news-content/news-content";
import NewsTabs from "./news-tab/news-tab";
export default {
  name: "NewsTabsLists",
  components: {
    NewsContent,
    NewsTabs,
    PortalTab
  },
  props: {},
  data() {
    return {
      activeName: "second",
      tabClickList: []
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
  height: 100%;
  .el-tabs--border-card {
    border: none;
  }
  /deep/ .portal_right {
    height: 100%;
    padding: 0;
    .tabs_right {
      display: flex;
      align-items: flex-start;
      a {
        color: #6ca8e4;
        // padding: 23px 29px 15px 0;
        i {
          transform: rotate(90deg);
        }
      }
      cursor: pointer;
      font-size: 20px;
    }
  }

  /deep/ .el-tabs--border-card > .el-tabs__content {
    padding: 0;
  }
}
.box-card {
  width: 100%;
}
</style>