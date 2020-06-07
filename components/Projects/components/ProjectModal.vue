<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="modal modal-fx-normal"
      :class="[{ 'is-active': visible }]"
    >
      <div class="modal-background"></div>
      <div class="modal-content">
        <carousel
          :per-page="1"
          :pagination-enabled="true"
          pagination-color="#000"
          pagination-active-color="#dedede"
        >
          <slide v-for="image in images" :key="image">
            <div class="slide-cell">
              <figure class="image is-square">
                <img :src="require(`@/assets/img/${image}`)" />
              </figure>
            </div>
          </slide>
        </carousel>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="closeModal()"
      ></button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProjectModal',
  components: {
    Carousel: () =>
      import('vue-carousel')
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import('vue-carousel')
        .then((m) => m.Slide)
        .catch()
  },
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
// Modal
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

.slide-cell img {
  max-height: 60vh;
  margin-top: 4vh;
  object-fit: contain;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
