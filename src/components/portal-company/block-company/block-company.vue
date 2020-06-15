<template>
  <li class="compony">
    <info-avatar
      :avator="componyItem.avatar"
      :avatorName="componyItem.avatorName"
      class="compony-avatar"
    ></info-avatar>
    <h4 class="compony-title">{{componyItem.title}}</h4>
    <p class="compony-content">{{componyItem.content}}</p>
    <span class="compony-time">{{componyItem.time}}</span>
  </li>
</template>

<script>
import InfoAvatar from "../../common/info-avatar/info-avatar";
export default {
  name: "ComponyBlock",
  components: {
    InfoAvatar
  },
  props: {
    height: {
      type: String,
      default: "350px"
    },
    componyItem: {
      type: Object,
      default: () => ({
        title: "框架A款龙建档立卡看来甲A看来敬老卡as大 asdad",
        avatorName: "李自成",
        avatar: "",
        content: "通过市场进入分析",
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
.compony {
  display: grid;
  grid-template-areas:
    "avatar title title title title . . ."
    "avatar content time . . . . .";
  grid-template-columns: 60px repeat(4, 1fr);
  align-items: center;
  position: relative;
  &-avatar {
    grid-area: avatar;
    justify-self: center;
    align-self: center;
    font-size: 14px;
  }

  &-title {
    grid-area: title;
    justify-self: start;
    align-self: center;
    text-align: left;
    font-size: 16px;
    width: 80%;
    font-weight: normal;
    padding: 0 5px;
    @extend %overflow;
  }

  &-content {
    grid-area: content;
    text-align: left;
    padding: 2px 5px;
    font-size: 14px;
    color: #999;
  }

  &-time {
    justify-self: start;
    grid-area: time;
    font-size: 14px;
    color: #999;
  }
}
</style>