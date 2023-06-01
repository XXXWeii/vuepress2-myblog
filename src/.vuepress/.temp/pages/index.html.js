export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"主页\",\"heroImage\":\"/logo.jpg\",\"heroText\":\"Normal No More!\",\"tagline\":\"Welcome to zjw's Blog\",\"heroFullScreen\":true,\"footer\":true,\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/XXXWeii/vuepress2-myblog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"XXXWeii\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"主页\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.08,\"words\":25},\"filePathRelative\":\"README.md\",\"excerpt\":\"\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
