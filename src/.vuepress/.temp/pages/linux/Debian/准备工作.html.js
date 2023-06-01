export const data = JSON.parse("{\"key\":\"v-028f7344\",\"path\":\"/linux/Debian/%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C.html\",\"title\":\"Debian 准备工作\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"category\":[\"Linux\"],\"tag\":[\"Linux\",\"Debian\"],\"description\":\"Debian 准备工作 https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html #修改登录账户密码 passwd # 查看 Shell cat /etc/shells echo $SHELL #改为使用 bash chsh -s /bin/bash # 查看linux 版本 lsb_release -a # 修改 hostname 添加 vim /etc/hostname vim /etc/hosts\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.mo7.cc/linux/Debian/%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"墨七\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Debian 准备工作\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Debian 准备工作 https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html #修改登录账户密码 passwd # 查看 Shell cat /etc/shells echo $SHELL #改为使用 bash chsh -s /bin/bash # 查看linux 版本 lsb_release -a # 修改 hostname 添加 vim /etc/hostname vim /etc/hosts\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Linux\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Debian\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Debian 准备工作\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":1,\"title\":\"Debian 准备工作\",\"slug\":\"debian-准备工作\",\"link\":\"#debian-准备工作\",\"children\":[]}],\"readingTime\":{\"minutes\":0.72,\"words\":216},\"filePathRelative\":\"linux/Debian/准备工作.md\",\"excerpt\":\"<h1> Debian 准备工作</h1>\\n<p><a href=\\\"https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html</a></p>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token comment\\\">#修改登录账户密码</span>\\n<span class=\\\"token function\\\">passwd</span>\\n\\n<span class=\\\"token comment\\\"># 查看 Shell</span>\\n<span class=\\\"token function\\\">cat</span> /etc/shells\\n<span class=\\\"token builtin class-name\\\">echo</span> <span class=\\\"token environment constant\\\">$SHELL</span>\\n\\n<span class=\\\"token comment\\\">#改为使用 bash</span>\\nchsh <span class=\\\"token parameter variable\\\">-s</span> /bin/bash\\n\\n<span class=\\\"token comment\\\"># 查看linux 版本</span>\\nlsb_release <span class=\\\"token parameter variable\\\">-a</span>\\n\\n<span class=\\\"token comment\\\"># 修改  hostname  添加</span>\\n<span class=\\\"token function\\\">vim</span> /etc/hostname\\n<span class=\\\"token function\\\">vim</span> /etc/hosts\\n\\n\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
