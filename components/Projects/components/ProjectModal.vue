<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="modal modal-fx-normal"
      :class="[{ 'is-active': visible }]"
    >
      <div class="modal-background"></div>
      <div class="modal-content">
        <carousel :per-page="1" :pagination-enabled="true">
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
        @click="close()"
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
    close: { type: Function, required: true }
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
  margin-top: 5vh;
  object-fit: contain;
}

// Vue Carousel
/* .VueCarousel {
  &-wrapper {
    height: 65vh;
  }

  &-pagination {
    position: absolute;
    bottom: -5vh;
  }

  &-dot {
    background-color: #000 !important;
    outline: none !important;

    &--active {
      background-color: #dedede !important;
      outline: none !important;
    }
  }
} */
</style>
