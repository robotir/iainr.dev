<template>
  <section class="intro__section">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container intro__container">
          <h1 class="main-text">> iainr.dev</h1>
          <h1 class="main-text">My name is Iain Russell,</h1>
          <h1 class="main-text">I am a full stack web developer</h1>
          <h1 class="main-text">specializing in Javascript and Python.</h1>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss" scoped>
.intro {
  &__section {
    height: 100vh;
  }

  &__container {
    padding-left: 10vw;
    animation: fadeIn 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
}

.main-text {
  font-family: 'Cardo';
  font-size: 30px;
  animation: fadeInFromRightShort 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  &:nth-of-type(1) {
    animation-delay: 0.15s;
  }
  &:nth-of-type(2) {
    animation-delay: 0.21s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.28s;
  }
  &:nth-of-type(4) {
    animation-delay: 0.35s;
  }
}
</style>
