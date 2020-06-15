<!--
 * @Author: your name
 * @Date: 2020-06-13 22:49:23
 * @LastEditTime: 2020-06-15 18:03:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \portal-news\src\App.vue
--> 
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
}
body {
  height: 100vh;
  background: #e9e8e8;
  overflow: auto;
}
#app {
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
}

#nav {
  a {
    font-weight: bold;
    color: #333333;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
