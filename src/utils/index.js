/*
 * @Author: many
 * @Date: 2020-06-14 13:40:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-16 08:58:06
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
      (item) => item.topPoint === topMemo.topPoint
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

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string") {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), "/");
      }
    }

    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    return value.toString().padStart(2, "0");
  });
  return time_str;
}
