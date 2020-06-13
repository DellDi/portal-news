<template>
  <div>
    <el-image :src="newsBannerBg" :style="{height,width}" fit="cover" alt="背景新闻图"></el-image>
  </div>
</template>

<script>
export default {
  name: "HeaderBg",
  props: {
    newsBannerBg: {
      type: String,
      default:
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
    },
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String,
        default: '300px'
    }
  }
};
</script>

<style lang="scss" scoped>
</style>