<template>
  <div class="Todos">
    <div class="selected-project">
      {{ $store.state.selectedProject }}
    </div>
    <div class="todos">
      <Next7Days
        v-if="$store.state.selectedProject === 'next 7 days'"
        :todos="$store.state.todos"
      />
      <Todo
        v-else
        v-for="todo in $store.state.todos"
        :key="todo.id"
        :todo="todo"
      />
    </div>
  </div>
</template>

<script>
import Todo from './Todo.vue'
import Next7Days from './Next7Days.vue'

export default {
    components:{
        Todo,
        Next7Days
    }
};
</script>

<style lang="scss" scoped>

.Todos {
  width: 450px;
  height: 80%;
  background-color: white;

  position: absolute;
  bottom: 40px;
  left: 40px;

  border-radius: 4px;
  opacity: 0.9;

  padding: 0 0.5rem 0.5rem 0.5rem;

  overflow-y: auto;
}
.Todos .selected-project {
  margin: 1rem 0;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 2px;
  border-bottom: 1px solid #eeeeee;
}
.Todos .todos {
  overflow-y: auto;
}
</style>