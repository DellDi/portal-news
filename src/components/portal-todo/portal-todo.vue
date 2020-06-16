<template>
  <div class="portal_message" :style="{height}">
    <!-- 流程tab -->
    <portal-tab>
      <template #left>
        <div class="tab_text">
          <img src="../assets/images/daiban.png" alt />
          <span>待办事项</span>
        </div>
      </template>
      <template #icon>
        <span class="portal_icon">
          <i class="el-icon-s-promotion"></i>
          <span>发起流程</span>
        </span>
      </template>
    </portal-tab>
    <!-- 列表项 -->
    <ul class="info_container">
      <todo-block v-for="infoLi of catalogList" :key="infoLi.id" :messageItem="infoLi"></todo-block>
    </ul>
  </div>
</template>

<script>
import PortalTab from "../common/portal-tab/portal-tab";
import TodoBlock from "./block-todo/block-todo";
export default {
  name: "PortalTodo",
  components: {
    PortalTab,
    TodoBlock
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
  // box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  .tab_text {
    margin-left: 24px;
  }
  .info_container {
    li {
      position: relative;
      padding: 15px 20px;
    }
    li:not(:last-of-type)::after {
      content: "";
      position: absolute;
      width: calc(100% - 95px);
      height: 1px;
      left: 90px;
      bottom: 0;
      background-color: #f5f5f5;
    }
  }
}
</style>