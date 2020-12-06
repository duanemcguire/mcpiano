<template>
<div >
  <div class="container d-md-flex align-items-stretch mt-3">
    <div >
      <h1 style="font-size: 1.9em">{{ category.name }}</h1>
      <div id="morecategories">
        <b>All Categories:</b>&nbsp;&nbsp;
        <category-cloud :categories="categories" />
      </div>
      <blog-cards :blogs="blogs" />
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
      .sortBy('name', 'asc')
      .fetch()
    var blogs = await $content('blog')
      .only(['title', 'img', 'slug', 'body', 'excerpt', 'category'])
      .sortBy('date','desc')
      .fetch()
    blogs = blogs
      .filter(blog => blog.hasOwnProperty('category'))
      .filter(blog => blog.category.includes(params.slug))


    return {
      category,
      categories,
      blogs,
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
