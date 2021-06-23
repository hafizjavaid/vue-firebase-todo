<template>
  <div class="Modal" @click="closeModal">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal(e) {
      if (e.target.classList.contains("Modal")) {
        this.$emit("toggleModal");
      }
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.Modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
}
.Modal .container {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
}
</style>