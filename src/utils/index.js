/*
 * @Author: many
 * @Date: 2020-06-14 13:40:45
 * @LastEditors: delldi
 * @LastEditTime: 2020-06-14 17:48:43
 * @Description: file content
 */

/**
 * @description num去多余的0
 * @param {number | string} num
 */
export const splitNum = (num) => {
  let arr1 = String(num).split(".")[0];
  let arr2 = String(num)
    .split(".")[1]
    .replace(/0+$/g, "");
  return arr2 && arr2.length === 1 ? `${arr1}.${arr2}` : arr1;
};

/**
 * @description 对象数组某一个属性置顶
 * @param {array} arr
 */
export const upArrayList = (arr) => {
  let topMemo = Array.prototype.find.call(arr, (item) => !!+item.topPoint);
  return [
    topMemo,
    ...Array.prototype.filter.call(
      arr,
      item => item.topPoint === topMemo.topPoint
    ),
  ];
};

/**
 * @description 生成指定范围的随机整数 0-10
 * @param {number} min 
 * @param {number} max 
 */
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
