<template>
  <div class="Calendar">
    <div class="header">
      <div class="title">
        <b-icon icon="calendar-date" />
        <p>Calendar</p>
      </div>
      <div @click="showMenu = !showMenu" class="btns">
        <span v-if="showMenu">
          <b-icon icon="chevron-up"></b-icon>
        </span>
        <span v-else>
          <b-icon icon="chevron-down"></b-icon>
        </span>
      </div>
    </div>
    <div class="items" v-if="showMenu">
      <div
        class="item"
        :class="{ active: $store.state.selectedProject === item }"
        v-for="item in calendarItems"
        :key="item"
        @click="editSelectedProject(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { calendarItems } from "../../data/index";
export default {
  data() {
    return {
      showMenu: true,
      calendarItems,
    };
  },
  methods: {
    editSelectedProject(project) {
      this.$store.commit("editSelectedProject", project);
    },
  },
};
</script>

<style lang="scss" scoped>
/* Calendar */
.Calendar {
  padding: 1rem;
  border-bottom: 1px solid #ebebeb;
}
.Calendar .header {
  display: flex;
  align-items: center;
}
.Calendar .header .title {
  display: flex;
  align-items: center;
  flex: 1;
}
.Calendar .header .title p {
  margin-left: 5px;
  font-size: 1.1rem;
  font-weight: 500;
}
.Calendar .header .btns span {
  border-radius: 50%;
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Calendar .header .btns span:hover {
  background-color: #ebebeb;
  transition: background 300ms ease-in-out;
}
.Calendar .items {
  padding: 0.5rem;
}
.Calendar .items .item {
  padding: 0.25rem;
  margin: 5px;
  font-size: 1rem;
  cursor: pointer;
  &.active {
    color: #0080ff;
  }
}
</style>