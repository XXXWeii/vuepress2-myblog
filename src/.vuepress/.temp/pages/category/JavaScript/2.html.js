export const data = JSON.parse("{\"key\":\"v-7c74fd71\",\"path\":\"/category/JavaScript/2.html\",\"title\":\"7个你必须知道的 JavaScript 简写技巧\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"7个你必须知道的 JavaScript 简写技巧\",\"lang\":\"zh-CN\",\"author\":\"XXXWeii\",\"date\":\"2023-04-01T14:55:00.000Z\",\"category\":[\"JavaScript\"],\"tag\":[\"JavaScript\"],\"description\":\"本文将介绍大量的 JavaScript 速记优化技巧，这些技巧可以帮助大家编写更好的代码。 1. 多个字符串检查 通常，如果我们需要检查字符串是否等于多个值中的一个，往往很快会觉得疲惫不堪。幸运的是，JavaScript 有一个内置的方法来帮助你解决这个问题。 // 普通写法 const isVowel = (letter) =&gt; { if ( letter === \\\"a\\\" || letter === \\\"e\\\" || letter === \\\"i\\\" || letter === \\\"o\\\" || letter === \\\"u\\\" ) { return true; } return false; }; // 简写方法 const isVowel = (letter) =&gt; [\\\"a\\\", \\\"e\\\", \\\"i\\\", \\\"o\\\", \\\"u\\\"].includes(letter);\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/XXXWeii/vuepress2-myblog/vuepress2-myblog/category/JavaScript/2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"XXXWeii\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"7个你必须知道的 JavaScript 简写技巧\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"本文将介绍大量的 JavaScript 速记优化技巧，这些技巧可以帮助大家编写更好的代码。 1. 多个字符串检查 通常，如果我们需要检查字符串是否等于多个值中的一个，往往很快会觉得疲惫不堪。幸运的是，JavaScript 有一个内置的方法来帮助你解决这个问题。 // 普通写法 const isVowel = (letter) =&gt; { if ( letter === \\\"a\\\" || letter === \\\"e\\\" || letter === \\\"i\\\" || letter === \\\"o\\\" || letter === \\\"u\\\" ) { return true; } return false; }; // 简写方法 const isVowel = (letter) =&gt; [\\\"a\\\", \\\"e\\\", \\\"i\\\", \\\"o\\\", \\\"u\\\"].includes(letter);\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"XXXWeii\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"JavaScript\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-04-01T14:55:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"7个你必须知道的 JavaScript 简写技巧\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-04-01T14:55:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"XXXWeii\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":2.55,\"words\":764},\"filePathRelative\":\"category/JavaScript/2.md\",\"localizedDate\":\"2023年4月1日\",\"excerpt\":\"<p>本文将介绍大量的 JavaScript 速记优化技巧，这些技巧可以帮助大家编写更好的代码。</p>\\n<h2> 1. 多个字符串检查</h2>\\n<hr>\\n<p>通常，如果我们需要检查字符串是否等于多个值中的一个，往往很快会觉得疲惫不堪。幸运的是，JavaScript 有一个内置的方法来帮助你解决这个问题。</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token comment\\\">// 普通写法</span>\\n<span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">isVowel</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">letter</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">if</span> <span class=\\\"token punctuation\\\">(</span>\\n    letter <span class=\\\"token operator\\\">===</span> <span class=\\\"token string\\\">\\\"a\\\"</span> <span class=\\\"token operator\\\">||</span>\\n    letter <span class=\\\"token operator\\\">===</span> <span class=\\\"token string\\\">\\\"e\\\"</span> <span class=\\\"token operator\\\">||</span>\\n    letter <span class=\\\"token operator\\\">===</span> <span class=\\\"token string\\\">\\\"i\\\"</span> <span class=\\\"token operator\\\">||</span>\\n    letter <span class=\\\"token operator\\\">===</span> <span class=\\\"token string\\\">\\\"o\\\"</span> <span class=\\\"token operator\\\">||</span>\\n    letter <span class=\\\"token operator\\\">===</span> <span class=\\\"token string\\\">\\\"u\\\"</span>\\n  <span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">return</span> <span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token boolean\\\">false</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">// 简写方法</span>\\n<span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">isVowel</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">letter</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"a\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"e\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"i\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"o\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"u\\\"</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">includes</span><span class=\\\"token punctuation\\\">(</span>letter<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
