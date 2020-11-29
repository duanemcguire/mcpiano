<template>
<div>
  <div id="article-content" v-for="blog of blogs" :key="blog.slug" style="display: inline-block">
    <blog-card :blog="blog" />
  </div>
</div>
</template>

<script>
export default {
  props: {
    blogs: {
      type: Array,
      required: true
    }
  }
}
</script>
