<template>
  <div class="Todo">
    <div
      class="todo-container"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <!-- Check Todo Method -->
      <div class="check-todo">
        <span v-if="todo.checked" class="checked">
          <b-icon icon="check2-circle"></b-icon>
          <!-- <CheckCircleFill color="#bebebe" /> -->
        </span>

        <span v-else class="unchecked">
          <b-icon icon="circle"></b-icon>
          <!-- <Circle color="{todo.color}" /> -->
        </span>
      </div>
      <div class="text" @click="setTodo(todo)">
        <p
          :style="[todo.checked ? { color: '#bebebe' } : { color: '#000000' }]"
        >
          {{ todo.text }}
        </p>
        <span> {{ todo.time }} - {{ todo.projectName }} </span>
        <div class="line" :class="{ 'line-through': todo.checked }"></div>
      </div>
      <!-- <div class="add-to-next-day" onClick={() => repeatNextDay(todo)}>
          {todo.checked && (
            <span>
              <ArrowClockwise />
            </span>
          )}
        </div> -->
      <!-- Delete Todo -->
      <div class="delete-todo">
        <span v-if="hover || todo.checked">
          <b-icon icon="trash" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";
export default {
  props: ["todo"],
  methods: {
    setTodo(todo) {
      this.$store.commit("setSelectedTodo", todo);
      console.log(todo);
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  components: {
    BIcon,
  },
};
</script>

<style lang="scss" scoped>

.Todo {
  padding: 0.5rem 1rem;
}
.Todo .todo-container {
  display: flex;
  align-items: center;
}
.Todo .todo-container .check-todo {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 15px;
}
.Todo .todo-container span {
  cursor: pointer;
}
.Todo .todo-container .text {
  position: relative;
  flex: 1;
  margin: 0 10px;
  cursor: pointer;
}
.Todo .todo-container .text span {
  font-size: 0.8rem;
  color: #bebebe;
}
.Todo .todo-container .text .line {
  height: 1px;
  background: #bebebe;
  position: absolute;
  top: 25%;
  width: 0;
  transition: width 250ms ease-in-out;
}
.Todo .todo-container .text .line-through {
  width: 100%;
}
.Todo .todo-container .add-to-next-day {
  margin-right: 10px;
}
</style>