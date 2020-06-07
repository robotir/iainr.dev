<template>
  <section class="contact__section contact">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container contact__container">
          <h1 class="main-text">
            I am currently located in ...
          </h1>
          <h1 class="main-text">
            Send me a message and say hi
          </h1>

          <ContactLink
            href="https://github.com/robotir"
            icon-name="brands/github"
            link-text="Github"
          />

          <ContactLink
            href="https://www.linkedin.com/in/iainru/"
            icon-name="brands/linkedin-in"
            link-text="LinkedIn"
          />

          <ContactLink
            href="mailto:info@iainr.dev"
            icon-name="envelope"
            link-text="info@iainr.dev"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ContactLink from '~/components/Contact/components/ContactLink.vue'

export default {
  name: 'Contact',
  components: {
    ContactLink
  },
  props: {
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  &__section {
    height: 100vh;
  }

  &__container {
    padding-left: 10vw;
    animation: fadeIn 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
}

.main-text {
  font-size: 30px;
  font-family: 'Cardo';

  animation: fadeInFromRightLong 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.05s;
    margin-bottom: 15px;
  }
}
</style>
