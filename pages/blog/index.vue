<template>
<div>
  <div class="container d-md-flex align-items-stretch mt-3">
    <div class="">
      <h1 style="font-size: 1.9em">Blog</h1>
      <div id="morecategories">
        <b>Categories&nbsp;&nbsp;</b>
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
    var blogs = await $content('blog', {
        text: true
      })
      .only(['title', 'description', 'img', 'slug', 'excerpt', 'body'])
      .limit(9)
      .sortBy('date', 'desc')
      .fetch()


    const categories = await $content('categories')
      .sortBy('name', 'asc')
      .fetch()

    return {
      blogs,
      categories
    }
  },
  head() {
    return {
      title: 'Blog - McGuire Piano',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'blog-index',
          name: 'description',
          content: 'Collection of blog posts about piano rebuilding and restoration'
        }
      ]
    }
  },
}
</script>
