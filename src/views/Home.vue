<template>
  <div class="container_body">
    <header-bg class="header_bg" />
    <main>
      <!-- 门户头部区域 -->
      <el-row class="portal_head">
        <el-col :span="7" class="banner_wrapper">
          <!-- 轮播图 -->
          <news-banner />
        </el-col>
        <el-col :span="10" class="news_wrapper">
          <!-- 新闻区域 -->
          <news-tabs-lists />
        </el-col>
        <el-col :span="7" class="statis_wrapper">
          <!-- 统计面板 -->
          <statistical-panel />
        </el-col>
      </el-row>
      <!-- 门户消息区域 -->
      <el-row :gutter="5" class="portal_message">
        <el-col :span="12">
          <portal-company></portal-company>
        </el-col>
        <el-col :span="12">
          <portal-mail></portal-mail>
        </el-col>
      </el-row>
      <!-- 地步日程区域 -->
      <el-row :gutter="5" class="portal_footer">
        <el-col :span="12">
          <portal-todo></portal-todo>
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
import PortalCompany from "../components/portal-company/portal-company";
import PortalMail from "../components/portal-mail/portal-mail";
import PortalTodo from "../components/portal-todo/portal-todo";
import PortalDateWrapper from "../components/portal-date-wrapper/portal-date-wrapper";
export default {
  name: "Home",
  components: {
    HeaderBg,
    NewsBanner,
    NewsTabsLists,
    StatisticalPanel,
    PortalCompany,
    PortalMail,
    PortalTodo,
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
    min-width: 1366px;
    max-width: 1366px;
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    .banner_wrapper,
    .news_wrapper,
    .statis_wrapper {
      padding: 20px;
      height: 270px;
    }
    .portal_head {
      // margin-bottom: 16px;
    }
    .portal_message {
      // margin-bottom: 16px;
    }
    .portal_footer, .portal_message, .portal_head{
      margin-bottom: 16px;
      background-color: #fff;
    }
  }
}
</style>
