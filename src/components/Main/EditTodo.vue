<template>
  <div>
    <div v-if="$store.state.selectedTodo" class="EditTodo">
      <div class="header">Edit Todo</div>
      <div class="container">
        <TodoForm
          headding=""
          :projects="this.$store.state.projects"
          :todoProject="this.$store.state.selectedProject"
          :selectedTodo="$store.state.selectedTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoForm from "@/components/Sidebar/TodoForm.vue";

export default {
  components: {
    TodoForm,
  },
};
</script>


<style lang="scss" scoped>

/* EditTodo */
.EditTodo {
  position: absolute;
  bottom: 40px;
  left: calc(40px + 450px + 40px);

  background-color: white;

  height: 80%;
  width: 450px;

  border-radius: 4px;
  opacity: 0.9;
}
.EditTodo .header {
  margin: 1rem 0.5rem;

  font-size: 1.2rem;
  font-weight: bold;

  padding-bottom: 2px;
  border-bottom: 1px solid #eeeeee;
}

</style>