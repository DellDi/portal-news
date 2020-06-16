<template>
  <li class="compony">
    <info-avatar
      :avator="mailItem.avatar"
      :avatorName="mailItem.avatorName"
      class="compony-avatar"
    ></info-avatar>
    <h4 class="compony-title">{{mailItem.title}}</h4>
    <p class="compony-content">{{mailItem.content}}</p>
    <slot name="time">
      <span class="compony-time">{{mailItem.time}}</span>
    </slot>
  </li>
</template>

<script>
import InfoAvatar from "../../common/info-avatar/info-avatar";
export default {
  name: "BlockMail",
  components: {
    InfoAvatar
  },
  props: {
    height: {
      type: String,
      default: "350px"
    },
    mailItem: {
      type: Object,
      default: () => ({
        title: "启动计划",
        avatorName: "李自成",
        avatar: "",
        content:
          "通过市场进入分析、制定网络营销战略、金蓝领卡将康大厦卡上单林网络营销实施奖金",
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
    "avatar title title title time"
    "avatar content content content time";
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
    font-size: 16px;
    padding: 0 5px;
  }

  &-content {
    grid-area: content;
    text-align: left;
    font-size: 14px;
    color: #666666;
    padding: 0 5px;
    @extend %overflow;
  }

  &-time {
    justify-self: end;
    grid-area: time;
    font-size: 14px;
    color:  #999;
  }
}
</style>