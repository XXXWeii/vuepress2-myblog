export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.png\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/pwa/512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/pwa/192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/pwa/512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/pwa/192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossorigin\":\"use-credentials\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#46bd87\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/pwa/144.png\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"meta\",{\"name\":\"msapplication-TileImage\",\"content\":\"/pwa/144.png\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#000\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"XXXWeii\",\"description\":\"XXXWeii的博客\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
