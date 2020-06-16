<template>
  <div class="date_panel">
    <el-calendar v-model="dateTime" :first-day-of-week="7">
      <template #dateCell="{date, data}">
        <el-popover
          v-if="data.day.split('-').slice(2).join('-')  === '12'"
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <div class="date_item" slot="reference">
            <span
              class="day_span"
              :class="[{'is-selected' : data.isSelected}]"
            >{{ data.day | dayNum }}</span>
            <span
              class="day_line"
              :class="[{'block_tag': data.day.split('-').slice(2).join('-')  === '12'}]"
            ></span>
          </div>
        </el-popover>
        <div class="date_item" v-else>
          <span
            class="day_span"
            :class="[{'is-selected' : data.isSelected}]"
          >{{ data.day | dayNum }}</span>
          <!-- <span
            class="day_line"
            :class="[{'block_tag': data.day.split('-').slice(2).join('-')  === '12'}]"
          ></span> -->
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: "PortalDatePanel",
  filters: {
    dayNum(day) {
      return day
        .split("-")
        .slice(2)
        .join("-");
    }
  },
  watch: {
    value: {
      handler(date) {
        this.dateTime = date;
      }
    },
    dateTime: {
      handler(date) {
        this.$emit("dateChange", date);
      },
      immediate: true
    }
  },
  props: {
    value: [Date]
  },
  data() {
    return {
      dateTime: new Date()
    };
  }
};
</script>

<style lang="scss" scoped>
.date_panel {
  .el-calendar {
    // margin-top: 5px;
    height: 100%;
    background-color: unset;
  }
  .date_item {
    position: relative;
    // width: 45.5px;
    // height: 45.5px;
    // line-height: 45.5px;
    // border-radius: 25px;
    // background: linear-gradient(145deg, #f5f5f5, #ffffff);
    // box-shadow: 5px 5px 10px #ececec, -5px -5px 10px #ffffff;
    // transition: all 0.3s;
    // &:hover {
    //   background: linear-gradient(-90deg, #b4d8f0, #dfeaff);
    // }
    // width: 18px;
    // height: 18px;

    // line-height: 18px;
    .day_span {
      display: inline-block;
      width: 100%;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      padding: 1px;
    }
    .day_line {
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 5px;
      bottom: -8px;
      left: 2px;
      background: #000;
    }
  }

  .el-calendar-day {
    height: 100%;
  }
  // 初始化样式
  /deep/ .el-calendar__header {
    display: none;
  }
  /deep/ .el-calendar__body {
    padding: unset;
    height: calc(100% - 51px);
    .el-calendar-table {
      height: 100%;
    }
  }
  /deep/ .el-calendar__header {
    padding: 11px 20px;
  }
  /deep/ .el-calendar-table .el-calendar-day {
    padding: unset;
    // height: calc((100% - 51px - 45px) / 6);
    height: 50.5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/ .el-calendar-table tr td:first-child {
    border-left: unset;
  }
  /deep/ .el-calendar-table td {
    border-bottom: unset;
    border-right: unset;
  }
  /deep/ .el-calendar-table .el-calendar-day:hover {
    background-color: unset;
  }
  /deep/ .el-calendar-table .el-calendar-day:focus {
    background-color: unset;
  }
  /deep/ .el-calendar-table td.is-selected {
    background-color: unset;
  }
}
.is-selected {
  border-radius: 50%;
  border: 1px solid rgba(52, 135, 226, 1);
}
</style>