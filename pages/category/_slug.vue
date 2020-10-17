<template>
<div >
  <div class="container d-md-flex align-items-stretch">
    <div class="p-4 p-md-2 pt-5">
      <h1>{{ category.name }}</h1>
      <div>
        <b>Other Categories:</b>&nbsp;&nbsp;
        <category-cloud :categories="categories" />
      </div>
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
    const category = await $content('categories', params.slug)
      .fetch()
    const categories = await $content('categories')
      .fetch()
    var articles = await $content('articles')
      .only(['title', 'img', 'slug', 'body', 'excerpt', 'category'])
      .fetch()
    articles = articles
      .filter(article => article.hasOwnProperty('category'))
      .filter(article => article.category.includes(params.slug))


    return {
      category,
      categories,
      articles,
    }
  },
  head() {
    return {
       title: 'Blog Category: ' + this.category.name,
       meta: [
         // hid is used as unique identifier. Do not use `vmid` for it as it will not work
         {
           hid: 'category-collection',
           name: 'description',
           content: 'Collection of piano blog posts categorized as ' + this.category.name
         }
       ]
     }
   },
}
</script>
