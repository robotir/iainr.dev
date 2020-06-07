<template>
  <a @click="increment()">
    <v-icon
      name="long-arrow-alt-down"
      class="nav-arrow"
      scale="1.5"
      :style="{ color: fontColor }"
    />
  </a>
</template>

<script>
import 'vue-awesome/icons/long-arrow-alt-down'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'NavArrow',
  components: {
    'v-icon': Icon
  },
  props: {
    fontColor: {
      type: String,
      required: true
    },
    increment: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-arrow {
  position: absolute;
  bottom: 40px;
  right: 50px;
}
</style>
