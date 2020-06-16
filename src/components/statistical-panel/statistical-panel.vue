<template>
  <div class="statistical_panel">
    <div v-for="(item, index) of pannelList" :style="{background: 'url(' + backgroundMap[index] + ')  center center'}" :key="index">
      <span>{{item.title}}</span>
      <span class="font_item">{{item.titleNum}}</span>
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
      default: "270px"
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
    },
    backgroundMap: {
      type: Object,
      default: () => ({
        0: require("../assets/images/shouyetubiao2-27 copy.png"),
        1: require("../assets/images/tiaoxiushenqing copy.png"),
        2: require("../assets/images/Group 3 Copy.png"),
        3: require("../assets/images/Group Copy.png")
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.statistical_panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: #fff;
  // box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  & > div {
    flex: 0 0 45%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column nowrap;
    
    margin: 5px;
    
    // background: url("../assets/images/shouyetubiao2-27 copy.png") no-repeat center center;
    span {
      margin-left: 24px;
    }
    & > span:nth-child(1) {
      // 文字
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 20px;
    }
    & > span:nth-child(2) {
      // 数字
      font-size: 20px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #151515;
      line-height: 28px;
    }
  }
  & > div:nth-of-type(3){
    .font_item {
      color: #FF9A04;
    }
  }
  & > div:nth-of-type(4){
    .font_item {
      color: #EF6448;
    }
  }
   
}
</style>