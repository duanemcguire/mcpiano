<template>
    <div>
      <a @click="openGallery(0)" href="#more-photos"><img name="more-photos" src="/images/more-photos.png" /> Photos </a>
      <LightBox
        ref="lightbox"
        :media="media"
        :show-caption="true"
        :show-light-box="false"
        :show-thumbs="false"
      />
    </div>
</template>
<script>
import Vue from 'vue'
import LightBox from 'vue-image-lightbox'
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
export default {
  components: {
    LightBox,
  },
  props: {
    media: {
      type: Object,
      default: () => null
    },
    showThumbs: {
      type: Boolean,
      default: () => false
    },
    showCaption: {
      type: Boolean,
      default: () => true
    },
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    }
  }
}



</script>
