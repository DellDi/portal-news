<template>
  <div class="display_static">
    <div class="display_item" v-for="(item, index) of displayList" :key="index">
      <span :style="{backgroundColor:backgroundColor[index]}"></span>
      <span>{{item.content}}</span>
      
      <span v-if="item.num">({{item.num}})</span>
      <span v-else>(0)</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisDisplay",
  props: {
    displayList: {
      type: Array,
      default: () => [
        {
          content: "旷工",
          num: 2
        },
         {
          content: "旷工",
          num: 2
        },
         {
          content: "旷工",
          num: 2
        },
         {
          content: "旷工",
          num: 2
        },
         {
          content: "旷工",
          num: 2
        },
         {
          content: "请假",
          num: 3
        },
         {
          content: "旷工",
          num: 4
        },
         {
          content: "其他",
          num: 0
        }
      ]
    },
    backgroundColor: {
        type: Object,
        default: ()=>({
            0:'#E60000',
            1:'#FF9A04',
            2:'#2AA4FF',
            3:'#66C570',
            4:'#CB5AFF',
            5:'#FE5A93',
            6:'#E2E2E2',
            7:'#5A5A5A'
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.display_static {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  height: 100%;
  .display_item {
    height: calc(100% / 8);
    display: flex;
    justify-content: center;
    align-items: center;
    > span:nth-child(1) {
      width: 15px;
      height: 8px;
      background: #e60000;
      margin-right: 5px;
    }
    > span:nth-child(2),
    > span:nth-child(3) {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 17px;
    }
  }
}
</style>