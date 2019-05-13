<template>
  <div id="app">
    <h1>Weather Service</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: comic sans ms;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #070707;
  margin-top: 60px;
  padding: 20px;
}
html {
  line-height: 50px;
  background: rgb(23, 77, 99);
  padding: 0;
  margin: 0;
}
body {
  color: black;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: rgb(92, 153, 172);
}
/* dl {
  padding: 5px;
  background: #e8e8e8;
}
dt {
  float: left;
  clear: left;
  width: 120px;
  text-align: right;
  font-weight: bold;
  color: blue;
}
dd {
  margin: 0 0 0 130px;
  padding: 0 0 0.5em 0;
}
dt::after {
  content: ":";
} */
</style>
