<template>
  <div class="month_picker">
    <span class="prev_month" @click="prevMonth">{{'---'}}</span>
    <span class="month">{{monthZh}}</span>
    <span class="next_month" @click="NextMonth">{{'>>>'}}</span>
  </div>
</template>

<script>
import { parseTime } from "../../../utils";
export default {
  name: "MonthPicker",
  props: {
    value: [Date]
  },
  watch: {
    value: {
      handler(newData) {
        if (newData) {
          this.monthZh =
            parseTime(newData, "{y}-{m}").replace("-", "年") + "月";
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      monthZh: ""
    };
  },
  methods: {
    prevMonth() {},
    NextMonth() {}
  }
};
</script>

<style lang="scss" scoped>
.month_picker {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  .month {
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    line-height: 20px;
    color: #4b90f1;
    margin-left: 24px;
    margin-right: 24px;
  }
}
</style>