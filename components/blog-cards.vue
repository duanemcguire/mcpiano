<template>
<div>
  <div v-for="article of articles" :key="article.slug" style="display: inline-block">
    <blog-card :article="article" />
  </div>
</div>
</template>

<script>
  export default {
    props: {
      articles: {
        type: Array,
        required: true
      }
    }
  }
</script>
