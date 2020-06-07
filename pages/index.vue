<template>
  <div
    class="index__container"
    :style="{ backgroundColor: backgroundColor, color: fontColor }"
  >
    <Intro :index="index" />
    <NavArrow :font-color="fontColor" :increment="increment" />
  </div>
</template>

<script>
import { createWheel } from '~/helpers/create-wheel'
import Intro from '~/components/Intro/Intro.vue'
import NavArrow from '~/components/NavArrow/NavArrow.vue'

export default {
  components: {
    Intro,
    NavArrow
  },
  data() {
    return {
      index: 0,
      backgroundColorOptions: ['#0c0c0c', '#00a0a0', '#fff'],
      fontColorOptions: ['#fff', '#fff', '#0c0c0c'],
      // Used for loading different animations in Projects section
      // TODO: try rewriting this to just use the index value
      projectsIsLoaded: false
    }
  },
  computed: {
    backgroundColor() {
      return this.backgroundColorOptions[this.index]
    },
    fontColor() {
      return this.fontColorOptions[this.index]
    }
  },
  watch: {
    index() {
      if (this.index === 1) {
        // A delay is used to add a switch animation classes on the Projects
        setTimeout(() => {
          this.projectsIsLoaded = true
        }, 1100)
      } else {
        this.projectsIsLoaded = false
      }
    }
  },
  mounted() {
    // create a ViewModel for reference in the wheel function
    const vm = this
    createWheel(vm)

    // Add event listener for up, down, right, left. Used for navigation
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 39 || e.keyCode === 40) {
        this.increment()
      } else if (e.keyCode === 37 || e.keyCode === 38) {
        this.decrement()
      }
    })
  },
  methods: {
    increment() {
      if (this.index === 2) {
        this.index = 0
      } else {
        this.index++
      }
    },
    decrement() {
      if (this.index === 0) {
        this.index = 2
      } else {
        this.index--
      }
    }
  }
}
</script>

<style lang="scss">
.index {
  &__container {
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    height: 100vh;
    transition: background-color 0.8s linear;
  }
}
</style>
