const e=JSON.parse(`{"key":"v-3a8203a4","path":"/category/%E5%85%B6%E4%BB%96/14.html","title":"你不知道的 async、await魔鬼细节","lang":"zh-CN","frontmatter":{"title":"你不知道的 async、await魔鬼细节","lang":"zh-CN","author":"XXXWeii","date":"2022-04-21T14:55:00.000Z","category":["其他"],"tag":["其他"],"description":"0、前言 关于promise、async/await的使用相信很多小伙伴都比较熟悉了，但是提到事件循环机制输出结果类似的题目，你敢说都会？ 试一试？ 🌰1： async function async1 () { await new Promise((resolve, reject) =&gt; { resolve() }) console.log('A') } async1() new Promise((resolve) =&gt; { console.log('B') resolve() }).then(() =&gt; { console.log('C') }).then(() =&gt; { console.log('D') }) // 最终结果👉: B A C D","head":[["meta",{"property":"og:url","content":"https://github.com/XXXWeii/vuepress2-myblog/vuepress2-myblog/category/%E5%85%B6%E4%BB%96/14.html"}],["meta",{"property":"og:site_name","content":"XXXWeii"}],["meta",{"property":"og:title","content":"你不知道的 async、await魔鬼细节"}],["meta",{"property":"og:description","content":"0、前言 关于promise、async/await的使用相信很多小伙伴都比较熟悉了，但是提到事件循环机制输出结果类似的题目，你敢说都会？ 试一试？ 🌰1： async function async1 () { await new Promise((resolve, reject) =&gt; { resolve() }) console.log('A') } async1() new Promise((resolve) =&gt; { console.log('B') resolve() }).then(() =&gt; { console.log('C') }).then(() =&gt; { console.log('D') }) // 最终结果👉: B A C D"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-01T12:51:48.000Z"}],["meta",{"property":"article:author","content":"XXXWeii"}],["meta",{"property":"article:tag","content":"其他"}],["meta",{"property":"article:published_time","content":"2022-04-21T14:55:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-01T12:51:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"你不知道的 async、await魔鬼细节\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-21T14:55:00.000Z\\",\\"dateModified\\":\\"2023-06-01T12:51:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XXXWeii\\"}]}"]]},"headers":[],"git":{"createdTime":1685623908000,"updatedTime":1685623908000,"contributors":[{"name":"zjw977020546","email":"11487928+zjw977020546@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":9.26,"words":2779},"filePathRelative":"category/其他/14.md","localizedDate":"2022年4月21日","excerpt":"<h2> 0、前言</h2>\\n<hr>\\n<p>关于<code>promise、async/await</code>的使用相信很多小伙伴都比较熟悉了，但是提到<strong>事件循环机制输出结果</strong>类似的题目，你敢说都会？</p>\\n<p>试一试？</p>\\n<p>🌰1：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>async function async1 () {\\n    await new Promise((resolve, reject) =&gt; {\\n        resolve()\\n    })\\n    console.log('A')\\n}\\n\\nasync1()\\n\\nnew Promise((resolve) =&gt; {\\n    console.log('B')\\n    resolve()\\n}).then(() =&gt; {\\n    console.log('C')\\n}).then(() =&gt; {\\n    console.log('D')\\n})\\n\\n// 最终结果👉: B A C D\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
