<template>
<div>
  <div class="container d-md-flex align-items-stretch mt-3">
    <div class="pt-2">
      <div class="entry-content">
        <p><b style="font-size: 1.1em;">McGuire Piano</b> specializes in the restoration and repair of pianos in Utah. We also offer a select number of pianos for sale which have been restored or reconditioned in our shop. </p>
      </div>
      <pianos-for-sale />
      <p></p>
      <p style="clear: both">A piano is a complex instrument made with thousands of interrelated parts. At McGuire Piano we give careful attention to every part of the piano, so that it can perform at its best for you. If your piano isn&#8217;t what
        it once was, we can help! </p>
      <p>For repair, rebuilding or restoration of your piano, please contact us: </p>
      <contact-info />
      <p>We no longer offer routine piano tuning services. For piano tuning, we recommend qualified piano tuners here:&nbsp;<a href="/blog/other-tuners">other tuners</a>.</p>
      <hr class="wp-block-separator" />
      <h2>Duane McGuire, Registered Piano Technician</h2>
      <p>Music, pianos, and technology have been lifelong passions for me. My work as a piano technician allows me to be immersed in all of these. With a nice shop to work in, with pianos inviting me to the work, and with customers enjoying my work,
        I&#8217;m in a good spot!</p>
      <p>I started learning piano repair and rebuilding skills in 1973 as a hobbyist. For many years, my piano work remained in the hobbyist mode while pursuing career interests in education, engineering, software, woodworking and even pipe organ
        building. In 2007, I chose to redirect all of that experience to work as a full-time piano technician. There&#8217;s no looking back! I love this business. </p>
      <p>Over the years, I&#8217;ve enjoyed documenting a number of my piano projects in <a href="/blog">this blog</a>. If you find things of interest, feel free to ask questions or to comment by <a
          href="mailto:info@mcguirepiano.com">email</a>.
      </p>
      <p>&#8211;Duane McGuire, RPT</p>
    </div>
    <sidebar />
  </div>
</div>
</template>
<script>
export default {
  head() {
    return {
      title: 'McGuire Piano',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'top',
          name: 'description',
          content: 'Piano Sales and Restoration byDuane McGuire, RPT'
        }
      ]
    }
  },
}
</script>
