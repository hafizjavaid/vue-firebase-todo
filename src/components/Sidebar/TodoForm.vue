<template>
  <div>
    <form onSubmit="{handleSubmit}" class="TodoForm">
      <div class="text">
        <h3>{{ heading }}</h3>

        <input
          type="text"
          ref="focusMe"
          v-model="text"
          placeholder="To do ..."
          autoFocus
        />
      </div>
      <div class="remind">
        <b-icon icon="bell" />
        <p>Remind Me!</p>
      </div>
      <div class="pick-day">
        <div class="title">
          <b-icon icon="calendar" />
          <p>Choose a day</p>
        </div>
        <!-- Date Picker -->
        <datetime v-model="date"></datetime>
      </div>
      <div class="pick-time">
        <div class="title">
         
          <b-icon icon="clock" />
          <p>Choose time</p>
        </div>
        <!-- Time Picker -->
        <datetime
          type="time"
          :use12-hour="true"
          v-model="time"
          zone="local"
        ></datetime>
      </div>
      <div class="pick-project">
          <Title>
                    <p>Choose a project</p>
                </Title>
        <div class="projects">
          <!-- Projects -->
          <div
            v-show="projects.length > 0"
            class="project"
            v-for="project in projects"
            :key="project.id"
            @click="editSelectedProject(project.name)"
            :class="{ active: todoProject === project.name }"
          >
            {{ project.name }}
          </div>
          <div v-if="!projects.length > 0" style="color: #ff0000">
            Please add a project before proceeding
          </div>
        </div>
      </div>

      <div>
        <div class="cancel" @click="closeModal">
          <b-icon icon="x" />
        </div>
        <div class="confirm" @click="addTodo">
          <button>+ Add to do</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";
import { Datetime } from "vue-datetime";
import moment from "moment";
import randomcolor from "randomcolor";
import Title from "@/components/common/Title.vue";

export default {
  components: {
    BIcon,
    Datetime,
    Title
  },
  props: ["projects", "todoProject", "heading"],
  methods: {
    closeModal() {
      this.$emit("toggleModal");
    },
    addTodo() {
      this.$emit("toggleModal");
      let formData = {
        checked: this.checked,
        date: moment(this.date).format("MM/DD/YYYY"),
        day: moment(this.date).format("d"),
        time: moment(this.time).format("hh:mm A"),
        color: randomcolor({
          luminosity: "dark",
        }),
        text: this.text,
        projectName: this.projectName,
      };
      console.log(formData);
      //   this.date =
    },
    editSelectedProject(project) {
      this.$store.commit("editSelectedProject", project);
    },
  },
  mounted() {
    this.$refs.focusMe.focus();
  },
  created() {
    this.selectedProject = this.todoProject;
  },
  data() {
    return {
      date: new Date().toISOString(),
      time: new Date().toISOString(),
      checked: false,
      text: "",
      projectName: "",
      selectedProject: "",
    };
  },
};
</script>

<style lang="scss" >
.TodoForm {
  padding: 1rem 1rem calc(1rem + 40px) 1rem;
  width: 100%;
  background: white;
  border-radius: 4px;
}
.TodoForm .text input {
  padding: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
  border: none;
  font-size: 1.2rem;
}
.TodoForm .text input:focus {
  outline: none;
  border-bottom: 1px solid #0080ff;
}
.TodoForm .remind {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.TodoForm p {
  margin-left: 10px;
}
.TodoForm .title {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.TodoForm .pick-day {
  padding: 1.5rem 1.5rem 0 1.5rem;
  .vdatetime-input {
    padding: 1rem;
    width: 100%;
    margin-bottom: 0.5rem;
    border: none;
    font-size: 1.2rem;
    border-bottom: 1px solid #bebebe;
    &:focus {
      outline: none;
      border-bottom: 1px solid #0080ff;
    }
  }
}
.TodoForm .pick-time {
  padding: 1.5rem;
  .vdatetime-input {
    padding: 1rem;
    width: 100%;
    margin-bottom: 0.5rem;
    border: none;
    font-size: 1.2rem;
    border-bottom: 1px solid #bebebe;
    &:focus {
      outline: none;
      border-bottom: 1px solid #0080ff;
    }
  }
}
.TodoForm .pick-project {
  padding: 0.5rem;
}
.TodoForm .pick-project .projects {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 1rem 0 1rem;
}
.TodoForm .pick-project .projects .project {
  border: 1px solid #0080ff;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
}
.TodoForm .pick-project .projects .active {
  background: #0080ff;
  color: white;
}
.TodoForm .cancel {
  position: absolute;
  top: 0;
  right: 5px;
  cursor: pointer;
  top: 10px;
  right: 10px;
  background-color: #0080ff;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 25px;
    height: 25px;
    fill: #fff;
  }
}
.TodoForm .confirm {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.TodoForm .confirm button {
  width: 100%;
  height: 40px;
  background: #0080ff;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 0 0 4px 4px;
  cursor: pointer;
}
</style>