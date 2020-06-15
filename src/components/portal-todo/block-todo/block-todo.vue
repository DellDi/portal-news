<template>
  <li class="todo">
    <h4 class="todo-title">{{todoItem.title}}</h4>
    <p class="todo-content">{{todoItem.content}}</p>
    <p class="todo-tag">{{todoItem.other}}</p>
    <span class="todo-time">{{todoItem.time}}</span>
  </li>
</template>

<script>
// import InfoAvatar from "../../common/info-avatar/info-avatar";
export default {
  name: "TodoBlock",
  components: {
    // InfoAvatar
  },
  props: {
    height: {
      type: String,
      default: "350px"
    },
    todoItem: {
      type: Object,
      default: () => ({
        title: "框架A款龙建档立卡看来甲A看来敬老卡as大asdakdjakljsdklajkldjaksljdkl  asdad",
        avatorName: "李自成",
        other: "客流量卡塞",
        avatar: "",
        content: "通过市场进入分析kljakjsdkljakljdkljakldkljaskldjaskljdkl",
        time: "2020-02-22"
      })
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
.todo {
  display: grid;
  grid-template-areas:
    "title title title title . . . ."
    "content content  tag time . . . .";
  grid-template-columns: 60px repeat(4, 1fr);
  align-items: center;
  position: relative;

  &-title {
    grid-area: title;
    justify-self: start;
    align-self: center;
    text-align: left;
    font-size: 16px;
    width: 100%;
    font-weight: normal;
    padding: 0 5px;
    @extend %overflow;
  }

  &-tag {
    grid-area: tag;
    text-align: left;
    font-size: 14px;
    color: #999;
  }

  &-content {
    grid-area: content;
    text-align: left;
    padding: 2px 5px;
    font-size: 14px;
    color: #999;
    @extend %overflow;
  }

  &-time {
    justify-self: start;
    grid-area: time;
    font-size: 14px;
    color: #999;
  }
}
</style>