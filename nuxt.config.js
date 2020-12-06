import global from './utils/global';
import getRoutes from './utils/getRoutes';
import getSiteMeta from './utils/getSiteMeta';

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mcpiano',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://mcguirepiano.com/favicon.ico' },
    { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
    { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
    { rel: "alternate", type: "application/rss+xml", href: "https://mcguirepiano.com/rss.xml" },
    ],
  },
  target: 'static',
  ssr: true,
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/components',
    '@/plugins/lightbox.client',
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~/plugins/vue-carousel', mode: 'client', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,


  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-responsive-loader',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed',
    '@nuxtjs/markdownit',
  ],
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  feed: [
  {
    // this sets up where to find your rss feed - mine will be called feed.xml, and located in the root of my project
    path: '/rss.xml',
    // this function will be what sets the data that goes into rss.xml
    async create(feed) {
      // the main options of what the page is called, desc, and where to find it as a full path
      feed.options = {
        title: 'McGuire Piano',
        description: 'Piano Restoration and Rebuilding in Utah by Duane McGuire',
        link: 'https://mcguirepiano.com/rss.xml',
      };

      // we're going to require the content module so we have access to $content, then we're going to fetch all of our posts. If you're using eslint in your project, you might need to ignore this line because it's requiring something inside a function. Will work just fine, it might yell at you though. :)

      // eslint-disable-next-line global-require
      const { $content } = require('@nuxt/content');

      // get all the posts we have
      const posts = await $content('blog').sortBy('date', 'desc').fetch();

      // then, we'll loop over each post and grab the data fields we want to show in our feed. The name of your fields might be different than mine - that depends on how your data is set up in your Content settings.
      posts.forEach((post) => {
        var excerpt = ""
        if (typeof(post.excerpt) == 'undefined') {
          excerpt = post.body.children[0].children[0].value
        } else {
          excerpt = post.excerpt
        }
        const n = 150
        if (excerpt) {
          excerpt = excerpt.trim()
          excerpt = excerpt.substr(0, n - 1)
        }
        // the url of the post is set first
        const url = `https://blog.duanemcguire.com/blog/${post.slug}`;
        // then we do addItem, and give it all the details we want. You'll often see a date field here too - I don't have one because I don't post my dates on my posts.
        feed.addItem({
          title: post.title,
          id: url,
          link: url,
          description: excerpt,
          // this is what we did in part two! Accessing that body text, that we converted into HTML
          content: post.bodyText,
          date: new Date(post.date),
        });
      });
    }, // this is the end of the create function

    // cacheTime sets how long the feed is cached - this is what they had in the feed-module example, and I've left it as is for now. Type sets what kind of feed it is - you can do atom or json as well.
    cacheTime: 1000 * 60 * 15,
    type: 'rss2',
  },
], // this is the end of the feed settings

// This is our hook! We check if the document is a markdown file (meaning it's a blog post in this case), and if so we get the reading time and set it to a property on the document, and also set our plain text of the post to a property.
hooks: {
  'content:file:beforeInsert': (document) => {
    // first, we're going to bring in our markdownit file - in JS, it's written as markdown-it, but in the package.json and modules bit, there's no dash - hence the eslint-disable line. It will work fine - it just doesn't get that the package name is written differently
    // eslint-disable-next-line
    const md = require('markdown-it')();
    if (document.extension === '.md') {
      // Now we pass our post's plain text into the md.render file, which will convert it into HTML
      // Then we store that value in our bodyText variable on our post
      const mdToHtml = md.render(document.text);
      document.bodyText = mdToHtml;
    }
  },
}, // end of the hook setting
// We'll also need to add in some default settings for the markdown-it package - this part I don't quite understand yet as far as what everything's doing, they're just the default settings listed on the package's GitHub page
markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    port: 3000,
    host: '0.0.0.0' // default: localhost
  },
  sitemap: {
    hostname: global.siteUrl,
    routes() {
      return getRoutes();
    }
  },

}
