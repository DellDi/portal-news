<template>
  <div class="portal_message" :style="{height}">
    <!-- 流程tab -->
    <portal-tab>
      <template #icon>
        <div></div>
      </template>
    </portal-tab>
    <!-- 列表项 -->
    <ul class="info_container">
      <info-block v-for="infoLi of catalogList" :key="infoLi.id" :messageItem="infoLi"></info-block>
    </ul>
  </div>
</template>

<script>
import PortalTab from "../common/portal-tab/portal-tab";
import InfoBlock from "../common/info-block/info-block";
export default {
  name: "PortalMessage",
  components: {
    PortalTab,
    InfoBlock
  },
  props: {
    height: {
      type: String,
      default: "400px"
    }
  },
  data() {
    return {
      catalogList: [
        {
          id: 1,
          title: "启动计划",
          avatorName: "李自成",
          avatar: "",
          content:
            "通过市场进入分析、制定网络营销战略、金蓝领卡将康大厦卡上单林网络营销实施奖金",
          time: "2020-02-22"
        },
        {
          id: 2,
          title: "启动计划",
          avatorName: "李自成",
          avatar: "",
          content:
            "通过市场进入分析、制定网络营销战略、金蓝领卡将康大厦卡上单林网络营销实施奖金",
          time: "2020-02-22"
        },
        {
          id: 3,
          title: "启动计划",
          avatorName: "李自成",
          avatar: "",
          content:
            "通过市场进入分析、制定网络营销战略、金蓝领卡将康大厦卡上单林网络营销实施奖金",
          time: "2020-02-22"
        },
        {
          id: 4,
          title: "启动计划",
          avatorName: "李自成",
          avatar: "",
          content:
            "通过市场进入分析、制定网络营销战略、金蓝领卡将康大厦卡上单林网络营销实施奖金",
          time: "2020-02-22"
        },
        {
          id: 5,
          title: "启动计划",
          avatorName: "李自成",
          avatar: "",
          content:
            "通过市场进入分析、制定网络营销战略、金蓝领卡将康大厦卡上单林网络营销实施奖金",
          time: "2020-02-22"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.portal_message {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  .info_container {
    li {
      position: relative;
      padding: 5px 10px;
    }
    .information:not(:last-of-type)::after {
       content: "";
      position: absolute;
      width: calc(100% - 60px);
      height: 1px;
      left: 60px;
      bottom: 0;
      background-color: #dcdfe6;
    }
  }
}
</style>