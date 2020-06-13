<template>
  <div class="box-card">
    <ul class="tabs_body">
      <li v-for="(news) of newsItem" :key="news.id">
        <!-- <el-link href="https://element.eleme.io" target="_blank">{{ news.newsText }}</el-link> -->

        <div class>
          <el-tag v-if="news.id === 22" :type="tagsColorMap[news.newType]" effect="light">标记</el-tag>
          <a>{{ news.newsText }}</a>
        </div>

        <div>10-08 12:00</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NewsContent",
  props: {
    tagsColorMap: {
      type: Object,
      default: () => ({
        0: "",
        1: "success",
        2: "info",
        3: "danger",
        4: "warning"
      })
    },
    newsItem: {
      type: Array,
      default: () => [
        {
          newsText: "我是新闻1，达令来看类空单卡拉胶金蓝领金蓝领as大晒",
          id: 22,
          newType: 0
        },
        {
          newsText: "我是新闻2，达令来看类空单卡拉胶金蓝领金蓝领as大晒",
          id: 40,
          newType: 1
        },
        {
          newsText: "我是新闻3，达令来看类空单卡拉胶金蓝领金蓝领啥大赛",
          id: 23,
          newType: 2
        },
        {
          newsText: "我是新闻3，达令来看类空单卡拉胶金蓝领金蓝领啥大赛",
          id: 25,
          newType: 3
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
%overflow {
  overflow: hidden;
  white-space: nowrap;
  /* 文字超出宽度则显示ellipsis省略号 */
  text-overflow: ellipsis;
}
.box-card {
  box-sizing: border-box;
  height: calc(300px - 39px);
  font-size: 14px;
  padding: 10px;
  .tabs_body {
    height: 100%;
  }
  ul li {
    list-style: none;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // 左文字
    & > div:nth-child(1) {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        display: inline-block;
        @extend %overflow;
        &:hover {
          text-decoration-line: underline;
          text-decoration-color: royalblue;
          cursor: pointer;
        }
      }
    }
    // 右日期
    & > div:nth-child(2) {
        color: chartreuse;
    }
  }
  ul li:not(:last-of-type) {
    border-bottom: 1px solid rgb(236, 236, 236);
  }
}
</style>