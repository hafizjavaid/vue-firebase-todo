<template>
  <div
    class="Main"
    v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      image: require("./bg.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.Main {
  width: 100%;
  height: 100%;
  // background-image: url("./images/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>