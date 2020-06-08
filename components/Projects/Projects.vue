<template>
  <section class="projects__section">
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
            :open-modal="
              () => {
                if (item.hasModal) {
                  toggleNavEnabled()
                }
                item.modalVisible = true
              }
            "
          />
          <ProjectModal
            v-for="(item, index) in projectsWithModal"
            :key="index"
            :visible="item.modalVisible"
            :close-modal="
              () => {
                toggleNavEnabled()
                item.modalVisible = false
              }
            "
          >
            <ProjectCarousel :images="item.images" />
          </ProjectModal>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ProjectItem from '~/components/Projects/components/ProjectItem.vue'
import ProjectModal from '~/components/Projects/components/ProjectModal.vue'
import ProjectCarousel from '~/components/Projects/components/ProjectCarousel.vue'

export default {
  name: 'Projects',
  components: { ProjectItem, ProjectModal, ProjectCarousel },
  props: {
    toggleNavEnabled: { type: Function, required: true }
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
          modalVisible: false,
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
          modalVisible: false,
          images: ['eurorack-1.jpg', 'eurorack-2.jpg', 'eurorack-3.jpg']
        },
        {
          text: 'Furniture',
          hasModal: true,
          modalVisible: false,
          images: ['table-1.jpg', 'table-2.jpg']
        }
      ]
    }
  },
  computed: {
    projectsWithModal() {
      return this.projects.filter((project) => project.hasModal === true)
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
