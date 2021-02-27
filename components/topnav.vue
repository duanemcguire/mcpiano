<template>
<div class="topnav pt-3" id="myTopnav">
  <!-- Facebook Pixel Code -->
  <script>
    ! function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '327621831808428');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=327621831808428&ev=PageView&noscript=1" /></noscript>
  <!-- End Facebook Pixel Code -->
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
  <a href="/category/pianos-for-sale">Pianos For Sale</a>
  <a href="/category/shop-work">Shop Work</a>
  <a href="/contact">Contact</a>
  </ul>
</div>
</template>
<style>
.topnav a {
  line-height: 1.2;
  font-size: 0.8em;
  padding: 3px;
  text-transform: uppercase;
  white-space: pre;
  color: white;
  display: inline-block;
  border: 1px solid gray;
  margin-right: 5px;
  background-color: #3d3d3d;
  margin-bottom: 5px;
}
</style>
