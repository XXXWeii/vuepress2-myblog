export const data = JSON.parse("{\"key\":\"v-2659d132\",\"path\":\"/category/JavaScript/19.html\",\"title\":\"this指向\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"this指向\",\"lang\":\"zh-CN\",\"author\":\"XXXWeii\",\"date\":\"2022-04-07T15:52:00.000Z\",\"category\":[\"JavaScript\"],\"tag\":[\"JavaScript\"],\"description\":\"一、定义 函数的this关键字在JavaScript中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别 在绝大多数情况下，函数的调用方式决定了this的值(运行是绑定) this关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象 举个例子： function baz() { // 当前调用栈是：baz // 因此，当前调用位置是全局作用域 console.log(\\\"baz\\\"); bar(); // &lt;-- bar的调用位置 } function bar() { // 当前调用栈是：baz --&gt; bar // 因此，当前调用位置在baz中 console.log(\\\"bar\\\"); foo(); // &lt;-- foo的调用位置 } function foo() { // 当前调用栈是：baz --&gt; bar --&gt; foo // 因此，当前调用位置在bar中 console.log(\\\"foo\\\"); } baz(); // &lt;-- baz的调用位置\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/XXXWeii/vuepress2-myblog/vuepress2-myblog/category/JavaScript/19.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"XXXWeii\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"this指向\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"一、定义 函数的this关键字在JavaScript中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别 在绝大多数情况下，函数的调用方式决定了this的值(运行是绑定) this关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象 举个例子： function baz() { // 当前调用栈是：baz // 因此，当前调用位置是全局作用域 console.log(\\\"baz\\\"); bar(); // &lt;-- bar的调用位置 } function bar() { // 当前调用栈是：baz --&gt; bar // 因此，当前调用位置在baz中 console.log(\\\"bar\\\"); foo(); // &lt;-- foo的调用位置 } function foo() { // 当前调用栈是：baz --&gt; bar --&gt; foo // 因此，当前调用位置在bar中 console.log(\\\"foo\\\"); } baz(); // &lt;-- baz的调用位置\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"XXXWeii\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"JavaScript\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-04-07T15:52:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"this指向\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-04-07T15:52:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"XXXWeii\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":6.41,\"words\":1922},\"filePathRelative\":\"category/JavaScript/19.md\",\"localizedDate\":\"2022年4月7日\",\"excerpt\":\"<h2> 一、定义</h2>\\n<hr>\\n<p>函数的<code>this</code>关键字在<code>JavaScript</code>中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别</p>\\n<p>在绝大多数情况下，函数的调用方式决定了<code>this</code>的值(运行是绑定)</p>\\n<p><code>this</code>关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象</p>\\n<p>举个例子：</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">baz</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 当前调用栈是：baz</span>\\n  <span class=\\\"token comment\\\">// 因此，当前调用位置是全局作用域</span>\\n\\n  console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"baz\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token function\\\">bar</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// &lt;-- bar的调用位置</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">bar</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 当前调用栈是：baz --&gt; bar</span>\\n  <span class=\\\"token comment\\\">// 因此，当前调用位置在baz中</span>\\n\\n  console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"bar\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token function\\\">foo</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// &lt;-- foo的调用位置</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">foo</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 当前调用栈是：baz --&gt; bar --&gt; foo</span>\\n  <span class=\\\"token comment\\\">// 因此，当前调用位置在bar中</span>\\n\\n  console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"foo\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token function\\\">baz</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// &lt;-- baz的调用位置</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
