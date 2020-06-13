<template>
  <div class="banner_container">
    <el-carousel trigger="click" :height="height">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt />
        <p>记录卡讲述了开奖卡机的衰老asdasdasdasdas大所大晒asas大晒啊實打實大蘇打</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "NewsBanner",
  props: {
    height: {
      type: String,
      default: "300px"
    },
    bannerList: {
      type: Array,
      default: () => [{}]
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
.banner_container {
  position: relative;
  p {
    position: absolute;
    z-index: 10;
    bottom: 40px;
    left: 20%;
    width: 60%;
    font-size: 13px;
    line-height: 30px;
    color: rgb(175, 175, 175);
    background: rgba($color: #000000, $alpha: 0.1);
    @extend %overflow;
  }
  img {
    width: 100%;
    height: 300px;
  }
  /deep/ .el-carousel__button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  /deep/ .el-carousel__indicators--horizontal {
    bottom: 0;
    left: unset;
    transform: none;
    right: 10px;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
</style>