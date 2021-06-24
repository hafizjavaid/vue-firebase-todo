<template>
  <div class="AddNewTodo">
    <div class="btn" @click="toggleModal">
      <button>+ New Todo</button>
    </div>
    <Modal showModal="showModal" @toggleModal="toggleModal" v-if="showModal">
      <TodoForm
        @toggleModal="toggleModal"
        :projects="this.$store.state.projects"
        :todoProject="this.$store.state.selectedProject"
        heading='Add new to do!'
        :selectedTodo="undefined"
      />
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import TodoForm from "./TodoForm.vue";

export default {
  components: {
    Modal,
    TodoForm,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style lang="scss" scoped>
.AddNewTodo {
  border-bottom: 1px solid #ebebeb;
}
.AddNewTodo .btn {
  padding: 1rem;
  width: 100%;
  height: 70px;
}
.AddNewTodo .btn button {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  background-color: #0080ff;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 300ms;
}
.AddNewTodo .btn button:hover {
  background-color: #0265c8;
}
</style>