<template>
  <div :class="[{ 'item--animate': !projectsIsLoaded }]">
    <h3 class="main-text" @click="openModal()">
      <a class="link" :href="href" target="_blank">
        {{ itemText }}
      </a>
    </h3>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ProjectsItem',
  props: {
    href: {
      type: String,
      default: null
    },
    itemText: {
      type: String,
      required: true
    },
    openModal: {
      type: Function,
      default: () => {
        return null
      }
    },
    projectsIsLoaded: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.main-text {
  font-size: 30px;
  line-height: 1.5em;
  font-family: 'Cardo';
  transition: all 1s;

  &:hover {
    transform: translateX(15px);
  }
}

.item {
  &--animate {
    animation: fadeInFromRightLong 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;

    &:nth-of-type(1) {
      animation-delay: 0.15s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.22s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.29s;
    }
    &:nth-of-type(4) {
      animation-delay: 0.36s;
    }
    &:nth-of-type(5) {
      animation-delay: 0.43s;
    }
    &:nth-of-type(6) {
      animation-delay: 0.5s;
    }
    &:nth-of-type(7) {
      animation-delay: 0.57s;
    }
    &:nth-of-type(8) {
      animation-delay: 0.65s;
    }
  }
}

.link,
.link:hover {
  color: #fff;
  box-shadow: inset 0 -1px 0 white, inset 0 -2px 0 white;
}
</style>
