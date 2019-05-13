<template>
  <div v-if="errorList.length > 0">
    <h2>There was an error fetching data.</h2>
    <ul class="errors">
      <li v-for="(error,index) in errorList" :key="index">{{ error }}</li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: "ErrorList",
  data() {
    return {};
  },
  props: {
    errorList: Array
  }
};
</script>

<style scoped>
.errors li {
  color: rgb(128, 12, 12);
  border: solid red 1px;
  padding: 5px;
}
</style>