<template>
<div>
  <div class="container d-md-flex align-items-stretch mt-3">
    <div class="">
      <h1>Tags</h1>
      <div v-for="tag in allTags">
        <a v-bind:href = "'/tag/' + tag.slug">{{tag.name}}</a>
      </div>
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
    var blogs = await $content('blog')
      .only(['tags'])
      .fetch()
    blogs = blogs
      .filter(blog => blog.hasOwnProperty('tags'))

    var allTags = []
    var allSlugs = []

    String.prototype.toProperCase = function () {
      return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    blogs.forEach(function(item){
      item.tags.forEach(function(tag){
        if (!allSlugs.includes(tag)){
          allSlugs.push(tag)
          allTags.push({"slug": tag, "name": tag.toProperCase()})
        }
      })
    })
    allTags.sort((a,b) => (a.slug > b.slug) ? 1 : -1)

    return {
      allTags,
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
