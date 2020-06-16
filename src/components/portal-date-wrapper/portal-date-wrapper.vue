<template>
  <div class="portal_date_wrapper" :style="{height}">
    <portal-tab class="date_header">
      <template #left>
        <div class="tab_text">
          <img src="../assets/images/daiban.png" alt />
          <span>本月考勤</span>
        </div>
      </template>
      <template #more>
        <month-picker v-model="thisDate"></month-picker>
      </template>
    </portal-tab>
    <portal-date-panel v-model="thisDate" class="date_compontents" @dateChange="dateChange"></portal-date-panel>
    <div class="date_summary">
      <statis-display></statis-display>
    </div>
  </div>
</template>

<script>
import PortalDatePanel from "./portal-date-panel/portal-date-panel";
import PortalTab from "../common/portal-tab/portal-tab";
import MonthPicker from "./month-picker/month-picker";
import StatisDisplay from "./statis-display/statis-display";
export default {
  name: "PortalDateWrapper",
  props: {
    height: {
      type: String,
      default: "100%"
    }
  },
  components: {
    PortalDatePanel,
    MonthPicker,
    PortalTab,
    StatisDisplay
  },
  data() {
    return {
      thisDate: null
    }
  },
  methods: {
    dateChange(date) {
      this.thisDate = date
    }
  }
};
</script>

<style lang="scss" scoped>
.portal_date_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr) 150px;
  grid-template-rows: 47px repeat(4, 1fr);
  // box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  .date_header {
    grid-column: 1 / 5;
    grid-row: 1 / 2;
  }
  .date_compontents {
    grid-column: 1 / 4;
    grid-row: 2 / 6;
    border-right: 1px solid #EBECF1;
  }
  .date_summary {
    padding: 26px 0;
    grid-column: 4 / 5;
    grid-row: 2 / 6;
    
  }
}
</style>