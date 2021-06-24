<template>
  <div class="Next7Days">
    <div v-for="day in weekTodos" :key="day.number">
      <div class="day">
        <div class="name">
          {{ fullDay(day.number) }}
        </div>
        <div class="total-todos">({{ day.todos.length }})</div>
      </div>
      <div class="todos">
        <Todo v-for="todo in day.todos" :key="todo.id" :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
import moment from "moment";
import Todo from "./Todo.vue";

export default {
  data() {
    return {};
  },
  props: ["todos"],
  computed: {
    weekTodos() {
      const days = ["0", "1", "2", "3", "4", "5", "6"];
      const sortedTodosByDay = days.map((day) => {
        return {
          todos: this.todos.filter((todo) => todo.day === day),
          number: day,
        };
      });
      console.log(sortedTodosByDay);

      const today = parseInt(moment().format("d"));

      const arrangeDays = sortedTodosByDay
        .slice(today)
        .concat(sortedTodosByDay.slice(0, today));

      return arrangeDays;
    },
  },
  methods: {
    fullDay(day) {
      let dayName;
      //   If day number is === to the day today then we will write (today)
      if (day === moment().format("d")) {
        dayName = moment(day, "d").format("dddd") + " " + " (Today)";
        return dayName;
      }
      //   By Checking the day number setting the full day name
      dayName = moment(day, "d").format("dddd");
      return dayName;
    },
  },
  components: {
    Todo,
  },
};
</script>

<style lang="scss" scoped>
.Next7Days .day {
  margin: 5px;
  display: flex;
}
.Next7Days .day .name {
  font-weight: bold;
  font-size: 1rem;
}
.Next7Days .day .total-todos {
  margin-left: 10px;
}
</style>