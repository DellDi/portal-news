<template>
  <div class="new_contents">
    <ul class="tabs_body">
      <li v-for="(news) of newsItem" :key="news.id">
        <!-- <el-link href="https://element.eleme.io" target="_blank">{{ news.newsText }}</el-link> -->
        <div class="new_content">
          <!-- <el-tag v-if="news.id === 22" :type="tagsColorMap[news.newType]" effect="light">标记</el-tag> -->
          <img src="../../../assets/images/sheweizhiding.png" alt="">
          <a>{{ news.newsText }}</a>
          <span class="tag">NEW</span>
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
          newsText: "我是新闻1，达令来看类空单卡拉胶金蓝领金蓝领as大晒静兰凌经理静兰凌经理",
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
        },
        {
          newsText: "我是新闻3，达令来看类空单卡拉胶金蓝领金蓝领啥大赛",
          id: 3,
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
.new_contents {
  box-sizing: border-box;
  height: calc(100% - 39px);
  font-size: 14px;
  padding: 10px 0;
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
    & > div:nth-child(1) { // 内容区域
      width: 80%;
      display: flex;
      align-items: center;
      font-size: 13px;
      line-height: 17px;
      a {                   // 链接区域
        display: inline-block;
        @extend %overflow;
        &:hover {
          text-decoration-line: underline;
          text-decoration-color: royalblue;
          cursor: pointer;
        }
      }
      img {
        padding: 2px;
      }
      .tag {
        color: #fff;
        font-size: 12px;
        background-color: #45C173;
        border-radius: 2px;
        margin: 3px;
      }
    }
    // 右日期
    & > div:nth-child(2) {
        color: #ccc;
    }
  }
  ul li:not(:last-of-type) { // 下划线
    border-bottom: 1px solid rgb(236, 236, 236);
  }
}
</style>