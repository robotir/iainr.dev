<template>
  <div
    class="index__container"
    :style="{ backgroundColor: backgroundColor, color: fontColor }"
  >
    <Intro v-if="index === 0" :index="index" />
    <Projects
      v-if="index === 1"
      :index="index"
      :projects-is-loaded="projectsIsLoaded"
      :toggle-nav-enabled="toggleNavEnabled"
    />
    <Contact v-if="index === 2" :index="index" />
    <NavArrow
      v-if="navEnabled"
      :font-color="fontColor"
      :increment="increment"
    />
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
import { createWheel } from '~/helpers/create-wheel'
import Intro from '~/components/Intro/Intro.vue'
import Projects from '~/components/Projects/Projects.vue'
import Contact from '~/components/Contact/Contact.vue'
import NavArrow from '~/components/NavArrow/NavArrow.vue'

export default {
  components: {
    Intro,
    Projects,
    Contact,
    NavArrow
  },
  data() {
    return {
      index: 0,
      backgroundColorOptions: ['#0c0c0c', '#00a0a0', '#fff'],
      fontColorOptions: ['#fff', '#fff', '#0c0c0c'],
      // Used for loading different animations in Projects section
      // TODO: try rewriting this to just use the index value
      projectsIsLoaded: false,
      navEnabled: true
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
      // TODO: Maybe move this to projects component
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
    window.addEventListener(
      'keyup',
      throttle((e) => {
        if (e.keyCode === 39 || e.keyCode === 40) {
          this.increment()
        } else if (e.keyCode === 37 || e.keyCode === 38) {
          this.decrement()
        }
      }, 600)
    )
  },

  methods: {
    increment: throttle(function() {
      if (this.navEnabled) {
        if (this.index === 2) {
          this.index = 0
        } else {
          this.index++
        }
      }
    }, 600),
    decrement: throttle(function() {
      if (this.navEnabled) {
        if (this.index === 0) {
          this.index = 2
        } else {
          this.index--
        }
      }
    }, 600),
    toggleNavEnabled() {
      this.navEnabled = !this.navEnabled
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
