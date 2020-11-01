<template>
<div>
  <div class="container d-md-flex align-items-stretch mt-3">
    <div>
      <h1 style="font-size: 1.9em"> {{ blog.title }}</h1>
      <!--<prev-next :prev="prev" :next="next" />
      <BR />-->
      <div>{{blog.date}}</div>
      <div>Category: {{catNames}}</div><BR />
      <nuxt-content :document="blog" />
      <div v-if="mediaPresent">
        <lb :media="blog.media" />
      </div>
    </div>
    <sidebar />
  </div>
</div>
</template>

<script>
export default {
  async asyncData({
    $content,
    params
  }) {
    const blog = await $content('blog', params.slug).fetch()
    const categories = await $content('categories').fetch()

    // Category extract
    var catName = ""
    var catNames = []
    if (blog.hasOwnProperty('category')) {
      blog.category.forEach((cat) => {
        catName = categories
          .filter(item => item.slug === cat)
          .map(item => item.name)[0]
        catNames.push(catName)
      })
    }
    catNames = catNames.toString().replace(",", ", ")
    if (catNames == '') catNames = "Uncategorized"

    // check for media
    var mediaPresent = false
    mediaPresent = blog.hasOwnProperty('media')

    // establish previous and next
    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('date', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      blog,
      mediaPresent,
      prev,
      next,
      catNames,
      categories
    }
  },
  head() {
    return {
      title: this.blog.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: this.blog.slug,
          name: 'description',
          content: this.blog.excerpt
        }
      ]
    }
  },
}
</script>
<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

.nuxt-content p {
  margin-bottom: 20px;
}

img {
  max-width: 600px;
  margin: 0 auto;

}

@media screen and (max-width: 800px) {
  img {
    max-width: 320px;
  }

}
</style>
