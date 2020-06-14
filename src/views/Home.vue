<template>
  <div class="container_body">
    <header-bg class="header_bg" />
    <main>
      <!-- 门户头部区域 -->
      <el-row class="portal_head">
        <el-col :span="8">
          <!-- 轮播图 -->
          <news-banner />
        </el-col>
        <el-col :span="8">
          <!-- 新闻区域 -->
          <news-tabs-lists />
        </el-col>
        <el-col :span="8">
          <!-- 统计面板 -->
          <statistical-panel />
        </el-col>
      </el-row>
      <!-- 门户消息区域 -->
      <el-row :gutter="5" class="portal_message">
        <el-col :span="12">
          <portal-message></portal-message>
        </el-col>
        <el-col :span="12">
          <portal-message></portal-message>
        </el-col>
      </el-row>
      <!-- 地步日程区域 -->
      <el-row :gutter="5" class="portal_message">
        <el-col :span="12">
          <portal-message></portal-message>
        </el-col>
        <el-col :span="12">
          <portal-date-wrapper />
        </el-col>
      </el-row>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderBg from "../components/header-bg/header-bg";
import NewsBanner from "../components/news-banner/news-banner";
import NewsTabsLists from "../components/news-tabs-lists/news-tabs-lists";
import StatisticalPanel from "../components/statistical-panel/statistical-panel";
import PortalMessage from "../components/portal-message/portal-message";
import PortalDateWrapper from "../components/portal-date-wrapper/portal-date-wrapper";
export default {
  name: "Home",
  components: {
    HeaderBg,
    NewsBanner,
    NewsTabsLists,
    StatisticalPanel,
    PortalMessage,
    PortalDateWrapper
  }
};
</script>
<style lang="scss" scoped>
.container_body {
  position: relative;
  .header_bg {
    width: 100%;
  }
  main {
    min-width: 1280px;
    max-width: 1440px;
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
