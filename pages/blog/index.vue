<template>
<div>
  <div class="container d-md-flex align-items-stretch">
    <div class="p-4 p-md-2 pt-5">
      <h1>Blog</h1>
      <b>Categories&nbsp;&nbsp;</b>
      <category-cloud :categories="categories" />
      <blog-cards :articles="articles" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  
  async asyncData({
    $content,
    params
  }) {
    var articles = await $content('articles', {
        text: true
      })
      .only(['title', 'description', 'img', 'slug', 'excerpt', 'body'])
      .limit(9)
      .sortBy('date', 'desc')
      .fetch()


    const categories = await $content('categories').fetch()

    return {
      articles,
      categories
    }
  }
}
</script>
