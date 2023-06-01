import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar} from './navbar/index.js';
import { enSidebar } from './sidebar/index.js';

const footerICP_HTML = `
<a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
  <img src="/img/beian.png">
  粤ICP备2023032935号-1
</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="footer-about" href="/intro">关于我的故事</a>`;

export default hopeTheme({
  hostname: 'https://github.com/XXXWeii/vuepress2-myblog',

  author: {
    name: 'XXXWeii',
    url: 'https://github.com/XXXWeii/vuepress2-myblog',
    email: '977020546@qq.com',
  },
  repo: 'https://github.com/XXXWeii/vuepress2-myblog',
  logo: '/logo.jpg',
  docsDir: "src",

  iconAssets: "iconfont",
  editLink: false,
  fullscreen: true,
  // 主题色
  themeColor: {
    red: '#e493d0',
    green: '#3eaf7c',
    orange: '#fb9b5f',
  },

  pageInfo: ['Author', 'Category', 'Date', 'Original', 'Tag', 'ReadingTime', 'Word', 'PageView'],

  blog: {
    description:"前途是光明的，道路是曲折的。",
    medias: {
      GitHub: "https://github.com/XXXWeii",
      Gitee: "https://gitee.com/zjw977020546",
      Twitter: "https://twitter.com/zjw977020546",
      Facebook: "https://www.facebook.com/QQ977020546",
      Gmail: "mailto:zjw977020546@gmail.com",
      Wechat: "https://www.zhangshuqi.com/images/WeChat.jpg",
      QQ: "https://www.zhangshuqi.com/images/QQ.jpg",
    },
  },

  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Repo', 'Outlook'],
  },
  navbarAutoHide: 'always',

  footer: footerICP_HTML,

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      displayFooter: true,

      blog: {
        description: "带着思念期待着下次相见",
        intro: "/intro",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    // "/zh/": {
    //   // navbar
    //   navbar: zhNavbar,

    //   // sidebar
    //   sidebar: zhSidebar,

    //   footer: "默认页脚",

    //   displayFooter: true,

    //   blog: {
    //     description: "一个前端开发者",
    //     intro: "/zh/intro.html",
    //   },

    //   // page meta
    //   metaLocales: {
    //     editLink: "在 GitHub 上编辑此页",
    //   },
    // },
  },

  plugins: {
    blog: true,

    comment: {
      provider: 'Waline',
      serverURL: 'https://waline-comment.vuejs.press',
      copyright: false,
      reaction: true,
    },

    components: {
      // 你想使用的组件
      components: ['BiliBili'],
    },

    copyCode: {
      showInMobile: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: false,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    pwa: {
      favicon: '/favicon.png',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/pwa/144.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/pwa/144.png',
        color: '#000',
      },
      manifest: {
        icons: [
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    },
  },
});
