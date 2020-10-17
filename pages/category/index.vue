<template>
<div>
  <div class="container d-md-flex align-items-stretch">
    <div >
      <h1>Categories</h1>
      <div>
        <ul>
          <li v-for="cat of category" :key="category.slug">
            <NuxtLink :to="'/category/' + cat.slug">
              {{ cat.name }}
            </NuxtLink>
          </li>
        </ul>
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
    const category = await $content('categories', params.slug)
      .fetch()
    return {
      category
    }
  },
}
</script>
