<template>
  <div class="news_tabs">
    <div
      v-for="(item, index) of tabClickList"
      :key="item.name"
      :class="tabIndex === index ? 'active' : ''"
      @click="clickTab(item, index)"
    >{{item.label}}</div>
  </div>
</template>

<script>
export default {
  name: "NewsTabs",
  props: {
    height: {
      type: String,
      default: '35px'
    },
    tabsList: {
      type: Array,
      default: () => [
        {
          label: "新闻中心1",
          name: "first"
        },
        {
          label: "新闻中心2",
          name: "second"
        },
        {
          label: "新闻中心3",
          name: "third"
        },
        {
          label: "新闻中心4",
          name: "fourth"
        }
      ]
    }
  },
  watch: {
    tabsList: {
      handler(val) {
        this.tabClickList = val;
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      tabClickList: null,
      tabIndex: 0
    };
  },
  methods: {
    clickTab(item, index) {
      this.tabIndex = index
      this.$emit('clickTab', item)
    }

  }
};
</script>

<style lang="scss" scoped>
.news_tabs {
  display: flex;
  flex-flow: row nowrap;
  width: 70%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  > div {
    font-size: 14px;
    color: #666666;
    line-height: 19px;
    cursor: pointer;
  }
  .active {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    line-height: 21px;
  }
}
</style>