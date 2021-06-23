<template>
  <form onSubmit="{handleSubmit}" class="ProjectForm">
    <h3>{{ heading }}</h3>
    <input
      :value="value"
      type="text"
      ref="focusMe"
      placeholder="project name..."
    />
    <button class="cancel" type="button" @click="closeModal">cancel</button>
    <button class="confirm" @click="addTodo">
      {{ confirmButtonText }}
    </button>
  </form>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("toggleModal");
    },
    addTodo() {
      this.$emit("toggleModal");
    },
    editSelectedProject(project) {
      this.$store.commit("editSelectedProject", project);
    },
  },
  props: ["heading", "confirmButtonText", "value"],
  mounted() {
    this.$refs.focusMe.focus();
  },
};
</script>

<style lang="scss" scoped>
/* ProjectForm */
.ProjectForm {
  background-color: white;
  padding: 1rem;
  border-radius: 4px;
  position: relative;
  padding-bottom: 40px;
}
.ProjectForm input {
  width: 100%;
  height: 40px;
  margin: 15px 0;
  border: none;
  font-size: 1.2rem;
}
.ProjectForm input:focus {
  outline: none;
  border-bottom: 1px solid #0080ff;
}
.ProjectForm button {
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 50%;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: filter 300ms ease-in-out;
}
.ProjectForm button.cancel {
  left: 0;
  background-color: #bebebe;
}
.ProjectForm button.confirm {
  right: 0;
  background-color: #0080ff;
}
.ProjectForm button:hover {
  filter: brightness(1.1);
}
</style>