<template>
  <div class="container_body">
    <header-bg class="header_bg" />
    <main>
      <el-row>
        <el-col :span="8">
            <news-banner />
        </el-col>
        <el-col :span="8">
            <news-tabs-lists />
        </el-col>
        <el-col :span="8">
          
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

export default {
  name: "Home",
  components: {
    HeaderBg,
    NewsBanner,
    NewsTabsLists
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
