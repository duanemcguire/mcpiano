<template>
  <span>
    <div class="tcloud sticky-top">
      <p v-for="category of categories">
        <a :key="category.slug"
        :href="'/category/' + category.slug">
          {{category.name}}
        </a>
      </p>
    </div>
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
.tcloud p {
  display: inline-block;
  margin-bottom: 0px;
}
#morecategories {
  margin-bottom: 8px;
}
@media screen and (max-width: 800px) {
  #morecategories{
    float: right;
    position: relative;
    top: -40px;
    margin-bottom: 0px;
  }
  .tcloud{
    height: 110px;
    width: 150px;
    border: 1px solid gray;
    overflow: auto;
  }
  .tcloud p {
    display: block;
    margin-bottom: 0px;
    margin-left: 5px;
  }
  .tcloud a {
    line-height: 1;
    font-size: 1em;
    padding: 0;
    text-transform: none;
    color: #333333;
    border: none;
    display: inline-block;
    margin: 0px;

  }
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
