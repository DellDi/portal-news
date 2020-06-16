<template>
  <div class="portal_tab" :style="{height}">
    <slot name="left">
      <div>
        <img src="../../assets/images/gongwenbao.png" alt />
        <span>启动流程</span>
      </div>
    </slot>
    <div class="portal_right">
      <slot name="icon">
        <!-- <span class="portal_icon">
          <i class="el-icon-s-promotion"></i>
          <span>写邮件</span>
        </span>-->
      </slot>

      <slot name="more">
        <span class="more-link" @click="$emit('moreClick')">
          <a href="#">
            <i class="el-icon-more"></i>
          </a>
        </span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortalTab",
  props: {
    height: {
      type: String,
      default: "46px"
    },
    props: {
      title: {
        type: String
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.portal_tab {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebecf1;
  // box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  > div {
    display: flex;
    margin-right: 10px;
    // align-items: center;
    // padding: 23px 0 15px 29px;
    span {
      margin-left: 7px;
      font-size: 16px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      line-height: 24px;
      color: rgba(51, 51, 51, 1);
    }
  }
  // & > span {
  //   font-size: 16px;
  //   font-weight: bold;
  //   padding: 23px 0 15px 29px;
  // }
  .portal_right {
    // padding: 10px;
    // display: flex;
    // align-items: ;
    
    .portal_icon {
      transform: translateY(-2px);
      // margin-right: 30px;
      font-size: 18px;
      color: #4b90f1;
      span {
        display: inline-block;
        font-size: 13px;
        margin-left: 5px;
        font-weight: normal;
        color: #666666;
      }
      &:hover {
        color: rgb(33, 85, 241);
        cursor: pointer;
      }
    }
  }
}
.more-link {
  a {
    color: #6ca8e4;
    padding: 23px 0 15px 0;
    i {
      transform: rotate(90deg);
    }
  }
  cursor: pointer;
  font-size: 20px;
}
.el-icon-arrow-down {
  font-size: 20px;
}
</style>