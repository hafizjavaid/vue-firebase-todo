<template>
  <div class="Projects">
    <div class="header">
      <Title>
        <p>Projects</p>
      </Title>
      <div class="btns">
        <span class="edit" @click="edit = !edit" v-if="projects.length > 0">
          <b-icon icon="pencil"></b-icon>
        </span>

        <AddNewProject />
        <span class="arrow" @click="showMenu = !showMenu">
          <span v-if="showMenu">
            <b-icon icon="chevron-up"></b-icon>
          </span>
          <span v-else>
            <b-icon icon="chevron-down"></b-icon>
          </span>
        </span>
      </div>
    </div>
    <div class="items">
      <div
        class="Project"
        v-for="project in projects"
        :key="project.id"
        
      >
        <div class="name"
        :class="{ active: todoProject === project.name }"
         @click="editSelectedProject(project.name)">
          {{ project.name }}
        </div>
        <div class="btns">
          <div class="edit-delete" v-if="edit">
            <span class="edit">
              <b-icon icon="pencil"></b-icon>
            </span>
            <span class="delete">
              <b-icon icon="x"></b-icon>
            </span>
          </div>
          <div v-else-if="project.numberOfTodos > 0" class="total-todos">
              {{ project.numberOfTodos }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/common/Title.vue";
import AddNewProject from "./AddNewProject.vue";

import { BIcon } from "bootstrap-vue";

export default {
  components: {
    Title,
    BIcon,
    AddNewProject
  },
  props: ["projects", "todoProject"],
  data() {
    return {
      showMenu: false,
      edit: false,
    };
  },
};
</script>

<style lang="scss">
/* Projects */
.Projects {
  padding: 1rem;
  border-bottom: 1px solid #ebebeb;
}
.Projects .header {
  display: flex;
  align-items: center;
}
.Projects .header .title {
  display: flex;
  align-items: center;
  flex: 1;
}
.Projects .header .title p {
  margin-left: 5px;
  font-size: 1.1rem;
  font-weight: bold;
}
.Projects .header .btns {
  display: flex;
  align-items: center;
}
.Projects .header .btns span.edit {
  margin-right: 5px;
}
.Projects .header .btns span {
  border-radius: 50%;
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Projects .header .btns span:hover {
  background-color: #ebebeb;
  transition: background 300ms ease-in-out;
}
.Projects .items {
  padding: 0.5rem;
}
/* Project */
.Project {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  margin: 5px;
  font-size: 1rem;
}
.Project .name {
  cursor: pointer;
  word-break: break-all;
  &.active{
      color: #0265c8;
  }
}
.Project .btns {
  display: flex;
  align-items: center;
}
.Project .btns .total-todos {
  position: absolute;
  right: 0;
  background: #ebebeb;
  width: 25px;
  height: 25px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.Project .btns .edit-delete {
  position: absolute;
  right: 0;
  display: flex;
}
.Project .btns .edit-delete span {
  border-radius: 50%;
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 300ms ease-in-out;
}
.Project .btns .edit-delete span.edit:hover {
  background: #acffac;
}
.Project .btns .edit-delete span.delete:hover {
  background: #ffacac;
}
</style>