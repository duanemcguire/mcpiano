<template>
  <div class="flex justify-between">
    <span v-if="prev">Previous: </span>
    <NuxtLink
      v-if="prev"
      :to="{  params: { slug: prev.slug } }"
      class="text-primary font-bold hover:underline"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <span v-if="next"><BR />Next: </span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="font-bold hover:underline"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>
<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>
