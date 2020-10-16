<template>
  <span>
    <span class="tcloud">
      <a v-for="category of categories"
        :key="category.slug"
        :href="'/category/' + category.slug">
          {{category.name}}
        </a>
    </span>
  </span>
</template>
<style>
.tcloud a {
  line-height: 0.8;
  font-size: 0.7em;
  padding: 10px 20px;
  text-transform: uppercase;
  color: #595959;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin: 5px;
}
</style>
<script>
  export default {
    props: {
      categories: {
        type: Array,
        required: true
      }
    }

  }
</script>
