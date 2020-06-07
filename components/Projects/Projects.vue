<template>
  <section class="projects__section project">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container projects__container ">
          <h1 class="projects__header">
            Selected works
          </h1>

          <ProjectItem
            v-for="(item, index) in projects"
            :key="index"
            :href="item.href"
            :item-text="item.text"
            :projects-is-loaded="projectsIsLoaded"
            :open-modal="
              () => {
                item.visible = true
              }
            "
          >
            <ProjectModal
              v-if="item.hasModal"
              :visible="item.visible"
              :images="item.images"
              :close="
                () => {
                  item.visible = false
                }
              "
            />
          </ProjectItem>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ProjectItem from '~/components/Projects/components/ProjectItem.vue'
import ProjectModal from '~/components/Projects/components/ProjectModal.vue'

export default {
  name: 'Projects',
  components: { ProjectItem, ProjectModal },
  props: {
    // index: { type: Number, required: true },
    projectsIsLoaded: { type: Boolean, required: true }
  },
  data() {
    return {
      projects: [
        { href: 'https://dontsink.me', text: 'Dontsink.me' },
        { href: 'https://consushi.com', text: 'CoinSushi' },
        { href: 'https://github.com/robotir/actinoform', text: 'Actinoform' },
        {
          href: 'https://github.com/robotir/anthropogenic',
          text: 'Anthropogenic'
        },
        {
          text: 'Guitars',
          hasModal: true,
          visible: false,
          images: [
            'guitar-1.jpg',
            'guitar-2.jpg',
            'guitar-3.jpg',
            'guitar-4.jpg',
            'guitar-5.jpg'
          ]
        },
        {
          text: 'Eurorack',
          hasModal: true,
          visible: false,
          images: ['eurorack-1.jpg', 'eurorack-2.jpg', 'eurorack-3.jpg']
        },
        {
          text: 'Guitars',
          hasModal: true,
          visible: false,
          images: ['table-1.jpg', 'table-2.jpg']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  &__section {
    height: 100vh;
  }

  &__container {
    padding-left: 10vw;
    animation: fadeIn 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  &__header {
    font-family: 'Ubuntu', sans-serif;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    animation: fadeInFromRightLong 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation-delay: 0.15s;
  }
}
</style>
