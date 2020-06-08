<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="modal modal-fx-normal"
      :class="[{ 'is-active': visible }]"
    >
      <div class="modal-background"></div>
      <div class="modal-content">
        <slot />
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="closeModal()"
      />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    images: { type: Array, required: true },
    visible: { type: Boolean, required: true },
    closeModal: { type: Function, required: true }
  },
  mounted() {
    window.addEventListener('click', (e) => {
      if (e.target.className === 'modal-background') {
        this.closeModal()
      }
    })
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        this.closeModal()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.modal .modal-background {
  transition: all 0.6s;
  opacity: 0;
}
.modal.is-active {
  visibility: visible;
}
.modal.is-active .modal-background {
  opacity: 1;
}

.modal-content {
  height: 70vh;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
