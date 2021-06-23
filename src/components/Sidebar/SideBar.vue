<template>
  <div class="Sidebar" ref="sidebar">
    <Sideheader></Sideheader>
    <AddNewTodo></AddNewTodo>
    <Calendar></Calendar>
    <Project 
    :projects="this.$store.state.projects"
    :todoProject="this.$store.state.selectedProject"></Project>
  </div>
</template>

<script>
import Sideheader from "@/components/Sidebar/Sideheader.vue";
import AddNewTodo from "@/components/Sidebar/AddNewTodo.vue";
import Calendar from "@/components/Sidebar/Calendar.vue";
import Project from "@/components/Sidebar/Project.vue";


export default {
  components: {
    Sideheader,
    AddNewTodo,
    Calendar,
    Project,
  },
};
</script>

<style lang="scss" scoped>
/* Sidebar */
.Sidebar {
  width: 300px;
  min-width: 210px;
  height: 100%;
}
</style>