<template>
  <div
    class="index__container"
    :style="{ backgroundColor: backgroundColor, color: fontColor }"
  >
    <Intro :class="{ hide: hide.intro }" />
    <Projects
      :class="{ hide: hide.projects }"
      :toggle-nav-enabled="toggleNavEnabled"
    />
    <Contact :class="{ hide: hide.contact }" />
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
      navEnabled: true
    }
  },
  computed: {
    backgroundColor() {
      return this.backgroundColorOptions[this.index]
    },
    fontColor() {
      return this.fontColorOptions[this.index]
    },
    hide() {
      return {
        intro: this.index !== 0,
        projects: this.index !== 1,
        contact: this.index !== 2
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
    toggleNavEnabled: throttle(
      function() {
        this.navEnabled = !this.navEnabled
      },
      400,
      { trailing: false }
    )
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
.hide {
  display: none;
}
</style>
