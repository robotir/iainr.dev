<template>
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
</template>

<script>
export default {
  name: 'ProjectCarousel',
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
    images: { type: Array, required: true }
  }
}
</script>

<style lang="scss">
// Vue Carousel
.VueCarousel {
  &-wrapper {
    height: 65vh !important;
  }

  &-pagination {
    position: absolute !important;
    bottom: -6vh !important;
  }

  &-dot {
    outline: none !important;

    &--active {
      outline: none !important;
    }
  }
}

.slide-cell img {
  max-height: 60vh;
  margin-top: 4vh;
  object-fit: contain;
}
</style>
