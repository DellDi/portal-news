<template>
  <div class="statistical_panel" :style="{height}">
    <div v-for="(item, index) of pannelList" :key="index">
      <span>{{item.title}}</span>
      <span>{{item.titleNum}}</span>
    </div>
  </div>
</template>

<script>
import { splitNum } from "@/utils";
export default {
  name: "StatisticalPanel",
  filters: {
    numFilter: {}
  },
  props: {
    height: {
      type: String,
      default: "300px"
    },
    pannelList: {
      type: Array,
      default: () => [
        {
          title: "迟到",
          titleNum: 2.0
        },
        {
          title: "迟到",
          titleNum: 3.0
        },
        {
          title: "迟到",
          titleNum: 4.5
        },
        {
          title: "迟到",
          titleNum: 3.5
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.statistical_panel {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  & > div {
    flex: 0 0 45%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    margin: 5px 0;
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592122196587&di=34816ef880b3dd6fb41f734f089e7096&imgtype=0&src=http%3A%2F%2Fwww.dabaoku.com%2Fsucai%2Fshejilei%2Fbj%2F0628.jpg");
    & > span:nth-child(1) {
      // 文字
      font-size: 20px;
      font-weight: 700;
      line-height: 40px;
    }
    & > span:nth-child(2) {
      // 数字
      font-size: 20px;
    }
  }
}
</style>