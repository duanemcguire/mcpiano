<template>
<div class="blog-card card   ">
  <a :href="'/blog/' + article.slug">
    <img class="card-img-top img-fluid" :src="article.img" :alt="article.caption">
  </a>
  <div class="card-body">
    <a :href="'/blog/' + article.slug">
      <h5 class="card-title">{{article.title}}</h5>
    </a>
    <div class="blog-card-excerpt">{{postExcerpt}}</div>
  </div>

</div>
</template>
<style>
.blog-card {
  margin-right: 10px;
  margin-bottom: 10px;
  float: left;
  height: 25rem;
  width: 20rem;
  overflow: hidden;
  background-color: #eeeeee;
  border: 2px solid black;
}

.blog-card a {
  text-decoration: none;
  color: black
}

.blog-card:hover {
  width: 21rem;
}

.blog-card a:hover {
  color: blue;
}

.blog-card-excerpt {
  width: 18rem;
  height: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
</style>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    function reverseString(str) {
      return str.split("").reverse().join("");
    }

    function excerptBuild(obj, n) {
      var str = ""
      if (typeof(obj.excerpt) == 'undefined') {
        str = obj.body.children[0].children[0].value
      } else {
        str = obj.excerpt
      }

      if (str) {
        str = str.trim()
        if (str.length > n) {
          str = str.substr(0, n - 1)
          str = reverseString(str)
          str = str.substring(str.indexOf(" "), str.length)
          str = reverseString(str) + '...'
        }
      }
      return str
    }
    const description = excerptBuild(this.article, 100)
    return {
      postExcerpt: description
    }
  },
}
</script>
