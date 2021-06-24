<template>
  <div class="Main" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <Todos />
    <EditTodo />
  </div>
</template>

<script>
import Todos from "./Todos.vue";
import EditTodo from "./EditTodo.vue";

export default {
  data() {
    return {
      image: require("./bg.jpg"),
    };
  },
  components: {
    Todos,
    EditTodo
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