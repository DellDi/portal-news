<template>
  <div class="date_panel">
    <el-calendar v-model="dateTime">
      <template #dateCell="{date, data}">
        <div
          class="date_item"
          :class="data.isSelected ? 'is-selected' : ''"
        >{{ data.day.split('-').slice(2).join('-') }}</div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: "PortalDatePanel",
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
    width: 45.5px;
    height: 45.5px;
    line-height: 45.5px;
    border-radius: 25px;
    background: linear-gradient(145deg, #f5f5f5, #ffffff);
    box-shadow: 5px 5px 10px #ececec, -5px -5px 10px #ffffff;
    transition:  all 0.3s;
    &:hover {
      background: linear-gradient(-90deg, #b4d8f0, #dfeaff);
    }
  }

  .el-calendar-day {
    height: 100%;
  }
  // 初始化样式
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
  color: rgb(245, 12, 12);
}
</style>