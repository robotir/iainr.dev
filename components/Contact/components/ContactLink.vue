<template>
  <h3 class="link">
    <a :href="href" class="content" target="_blank">
      <div class="icon-container">
        <v-icon :name="iconName" scale="1.1" />
      </div>
      {{ linkText }}
    </a>
  </h3>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/brands/github'
import 'vue-awesome/icons/brands/linkedin-in'
import 'vue-awesome/icons/envelope'

export default {
  name: 'ContactLink',
  components: {
    'v-icon': Icon
  },
  props: {
    href: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  margin-bottom: 3px;
  animation: fadeInFromRightShort 0.3s both;

  &:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  &:nth-of-type(2) {
    animation-delay: 0.3s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.35s;
  }

  a {
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    padding-bottom: 5px;
    color: #000;
    transition: all 0.3s;

    &:hover {
      color: #00a0a0;
    }
  }
}

.content {
  display: flex;
}

.icon-container {
  display: flex;
  align-items: center;
  width: 25px;
}
</style>
