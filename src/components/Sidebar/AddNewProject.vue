<template>
  <div class="AddNewProject">
    <div class="add-button">
      <span @click="toggleModal">
        <b-icon icon="plus" />
      </span>
    </div>
    <Modal showModal="showModal" @toggleModal="toggleModal" v-if="showModal">
      <ProjectForm
        heading="New project!"
        @toggleModal="toggleModal"
        confirmButtonText="+ Add Project"
        value=""
      />
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import ProjectForm from "./ProjectForm.vue";
import { BIcon } from "bootstrap-vue";

export default {
  components: {
    Modal,
    ProjectForm,
    BIcon,
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

<style lang="scss">
/* AddNewProject */
.AddNewProject .add-button span {
  margin-right: 5px;
}
</style>