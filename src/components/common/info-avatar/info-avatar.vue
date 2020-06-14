<template>
  <div class="avator" :style="{width,height}">
    <img v-if="avator" :src="avator" alt="头像" />
    <div v-else class="default_bg" :style="{ backgroundColor: filterRandomBgColor}"></div>
    <span>{{avatorName | splitTwoName}}</span>
  </div>
</template>

<script>
import { randomInt } from "@/utils";
export default {
  name: "InfoAvatar",
  filters: {
    splitTwoName(name) {
      if (name.length >= 3) {
        return String.prototype.substr.call(name, ...[1,3]);
        // return name.substr(0, 1)
      }
      return name;
    }
  },
  props: {
    width: {
      type: String,
      default: "55px"
    },
    height: {
      type: String,
      default: "55px"
    },
    avator: {
      type: String,
      default:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    },
    avatorName: {
      type: String,
      default: "李银河"
    },
    mapColor: {
      type: Map,
      default: () =>
        new Map([
          [0, "yellow"],
          [1, "black"],
          [2, "green"],
          [3, "red"]
        ])
    }
  },
  computed: {
    filterRandomBgColor() {
      return this.mapColor.get(randomInt(0, this.mapColor.size));
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
%fill {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

%center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avator {
  position: relative;
  img {
    object-fit: cover;
    @extend %fill;
  }
  .default_bg {
    background: rgb(82, 175, 90);
    @extend %fill;
  }
  span {
    width: 100%;
    color: #fff;
    @extend %center;
    z-index: 10;
  }
}
</style>