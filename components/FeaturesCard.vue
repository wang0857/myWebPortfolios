<template>
  <div class="features-card">
    <div class="features-img-container">
      <img :src="resolvedSrc" :alt="ariaLabel" class="features-img">
      <div class="features-img-tag-container">
        <span
          v-for="tag in tags"
          :key="tag"
          class="features-img-tag"
        >{{ tag }}</span>
      </div>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <router-link :to="link" :aria-label="ariaLabel">View Page</router-link>
  </div>
</template>

<script>
  import { withBase } from '@vuepress/client'

  export default {
    name: 'FeaturesCard',
    props: {
      title: String,
      imgSrc: String,
      tags: Array,
      description: String,
      ariaLabel: String,
      link: String
    },
    computed: {
      resolvedSrc() {
        return withBase(this.imgSrc)
      }
    }
  }
</script>