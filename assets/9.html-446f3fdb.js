const n=JSON.parse('{"key":"v-ef322c6c","path":"/category/JavaScript/9.html","title":"JavaScript 复杂判断的更优雅写法","lang":"zh-CN","frontmatter":{"title":"JavaScript 复杂判断的更优雅写法","lang":"zh-CN","author":"XXXWeii","date":"2023-04-12T14:55:00.000Z","category":["JavaScript"],"tag":["JavaScript"],"description":"我们编写 js 代码时经常遇到复杂逻辑判断的情况，通常大家可以用if/else或者switch来实现多个条件判断，但这样会有个问题，随着逻辑复杂度的增加，代码中的if/else/switch会变得越来越臃肿，越来越看不懂，那么如何更优雅的写判断逻辑，本文带你试一下。 举个例子 先看一段代码： /** * 按钮点击事件 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消 */ const onButtonClick = (status) =&gt; { if (status == 1) { sendLog(\\"processing\\"); jumpTo(\\"IndexPage\\"); } else if (status == 2) { sendLog(\\"fail\\"); jumpTo(\\"FailPage\\"); } else if (status == 3) { sendLog(\\"fail\\"); jumpTo(\\"FailPage\\"); } else if (status == 4) { sendLog(\\"success\\"); jumpTo(\\"SuccessPage\\"); } else if (status == 5) { sendLog(\\"cancel\\"); jumpTo(\\"CancelPage\\"); } else { sendLog(\\"other\\"); jumpTo(\\"Index\\"); } };","head":[["meta",{"property":"og:url","content":"https://github.com/XXXWeii/vuepress2-myblog/vuepress2-myblog/category/JavaScript/9.html"}],["meta",{"property":"og:site_name","content":"XXXWeii"}],["meta",{"property":"og:title","content":"JavaScript 复杂判断的更优雅写法"}],["meta",{"property":"og:description","content":"我们编写 js 代码时经常遇到复杂逻辑判断的情况，通常大家可以用if/else或者switch来实现多个条件判断，但这样会有个问题，随着逻辑复杂度的增加，代码中的if/else/switch会变得越来越臃肿，越来越看不懂，那么如何更优雅的写判断逻辑，本文带你试一下。 举个例子 先看一段代码： /** * 按钮点击事件 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消 */ const onButtonClick = (status) =&gt; { if (status == 1) { sendLog(\\"processing\\"); jumpTo(\\"IndexPage\\"); } else if (status == 2) { sendLog(\\"fail\\"); jumpTo(\\"FailPage\\"); } else if (status == 3) { sendLog(\\"fail\\"); jumpTo(\\"FailPage\\"); } else if (status == 4) { sendLog(\\"success\\"); jumpTo(\\"SuccessPage\\"); } else if (status == 5) { sendLog(\\"cancel\\"); jumpTo(\\"CancelPage\\"); } else { sendLog(\\"other\\"); jumpTo(\\"Index\\"); } };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-01T12:51:48.000Z"}],["meta",{"property":"article:author","content":"XXXWeii"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-04-12T14:55:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-01T12:51:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 复杂判断的更优雅写法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-12T14:55:00.000Z\\",\\"dateModified\\":\\"2023-06-01T12:51:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XXXWeii\\"}]}"]]},"headers":[],"git":{"createdTime":1685623908000,"updatedTime":1685623908000,"contributors":[{"name":"zjw977020546","email":"11487928+zjw977020546@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":7,"words":2100},"filePathRelative":"category/JavaScript/9.md","localizedDate":"2023年4月12日","excerpt":"<p>我们编写 js 代码时经常遇到复杂逻辑判断的情况，通常大家可以用<code>if/else</code>或者<code>switch</code>来实现多个条件判断，但这样会有个问题，随着逻辑复杂度的增加，代码中的<code>if/else/switch</code>会变得越来越臃肿，越来越看不懂，那么如何更优雅的写判断逻辑，本文带你试一下。</p>\\n<h2> 举个例子</h2>\\n<hr>\\n<p>先看一段代码：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token doc-comment comment\\">/**\\n * 按钮点击事件\\n * <span class=\\"token keyword\\">@param</span> <span class=\\"token class-name\\"><span class=\\"token punctuation\\">{</span>number<span class=\\"token punctuation\\">}</span></span> <span class=\\"token parameter\\">status</span> 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消\\n */</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">onButtonClick</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">status</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>status <span class=\\"token operator\\">==</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">sendLog</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"processing\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">jumpTo</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"IndexPage\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>status <span class=\\"token operator\\">==</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">sendLog</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"fail\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">jumpTo</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"FailPage\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>status <span class=\\"token operator\\">==</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">sendLog</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"fail\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">jumpTo</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"FailPage\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>status <span class=\\"token operator\\">==</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">sendLog</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"success\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">jumpTo</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"SuccessPage\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>status <span class=\\"token operator\\">==</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">sendLog</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"cancel\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">jumpTo</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"CancelPage\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">sendLog</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"other\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">jumpTo</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Index\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
