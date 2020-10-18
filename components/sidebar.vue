<template>
  <div id="sidebar" class="jumbotron p-4 pt-5 mt-2 ml-4">

     <section>
        <div ><img alt="photo of Duane McGuire" itemprop="image"  src="/images/Duane_McGuire_640.jpg"  ><br>
           Duane McGuire
        </div>
      </section>
      <section>
         <div >
            <contact-info />
         </div>
      </section>

      <section>
          <hr>
           <img alt="RPT logo" src="/images/2012_RPT_Logo_web.gif" width="204px">
     </section>
     <section >
        <hr>
           <div class="sidebox">
              <p v-html="quote"></p>
           </div>

     </section>
  </div>
</template>
<style>
  #sidebar{ max-width: 300px;}
</style>
<script>
export default {
  data() {
    var quotes = [
    "\"Good enough\" is the enemy of perfection.",

    "He who works with his hands is a laborer.<BR>\
    He who works with his hands and his head is a craftsman.<BR>\
    He who works with his hands and his head and his heart is an artist.<BR> – Louis Nizer",

    "The cure for boredom is curiosity.  There is no cure for curiosity.",

    "Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution; it represents the wise choice of many alternatives. --<i>William Foster</i>",

    "The master in the art of living makes little distinction between his work and his play, his labor and his leisure, his mind and his body, his information and his recreation, his love and his religion. He hardly knows which is which. He simply pursues his vision of excellence at whatever he does, leaving others to decide whether he is working or playing.<BR>–<i>James Michener</i>",

    "If you chase perfection, you often catch excellence.",

    "Excellence is the unlimited ability to improve the quality of what you have to offer."    ]
    return {
      quote: quotes[Math.floor(Math.random()*quotes.length)]
    }
  }
}
</script>
