<template><div><h2 id="一、什么是首屏加载" tabindex="-1"><a class="header-anchor" href="#一、什么是首屏加载" aria-hidden="true">#</a> 一、什么是首屏加载</h2>
<hr>
<p>首屏时间(First Contentful Paint),指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一样要全部渲染完成，但需要展示当前视窗需要的内容</p>
<p>首屏加载可以说是用户体验中重要的环节。</p>
<h2 id="二、加载慢的原因" tabindex="-1"><a class="header-anchor" href="#二、加载慢的原因" aria-hidden="true">#</a> 二、加载慢的原因</h2>
<hr>
<p>在页面渲染的过程，导致加载速度慢的因素可能如下：</p>
<ul>
<li>网络延时问题</li>
<li>资源文件体积是否过大</li>
<li>资源是否重发发送请求去加载了</li>
<li>加载脚本的时候，渲染内容堵塞</li>
</ul>
<h2 id="三、解决方案" tabindex="-1"><a class="header-anchor" href="#三、解决方案" aria-hidden="true">#</a> 三、解决方案</h2>
<hr>
<p>常见的几种 SPA 首屏优化方式</p>
<ul>
<li>减少入口文件体积</li>
<li>静态资源本地缓存</li>
<li>UI 框架按需加载</li>
<li>图片资源压缩</li>
<li>开启 Gzip 压缩</li>
<li>使用 SSR</li>
</ul>
<h3 id="减少入口文件体积" tabindex="-1"><a class="header-anchor" href="#减少入口文件体积" aria-hidden="true">#</a> 减少入口文件体积</h3>
<ol>
<li>常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加。</li>
<li>还有就是使用 cdn 加速，减少文件体积，但是要是看别人的 cdn 服务器稳不稳定，也可以自己下载 cdn 放到自己服务器，但是自己服务器没有 cdn 分发的话，速度就会在下载 cdn 文件时候影响加载速度。</li>
</ol>
<h3 id="静态资源本地缓存" tabindex="-1"><a class="header-anchor" href="#静态资源本地缓存" aria-hidden="true">#</a> 静态资源本地缓存</h3>
<hr>
<p>后端返回的资源问题:</p>
<ul>
<li>采用<code v-pre>HTTP</code>缓存，设置<code v-pre>Cache-Control</code>，<code v-pre>Last-Modified</code>，<code v-pre>Etag</code>等响应头</li>
<li>采用<code v-pre>Service Worker</code>离线缓存
前端合理使用 LocalStorage</li>
</ul>
<h3 id="ui-框架按需加载" tabindex="-1"><a class="header-anchor" href="#ui-框架按需加载" aria-hidden="true">#</a> UI 框架按需加载</h3>
<h3 id="图片资源的压缩" tabindex="-1"><a class="header-anchor" href="#图片资源的压缩" aria-hidden="true">#</a> 图片资源的压缩</h3>
<p>图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素
对于所有的图片资源，我们可以进行适当的压缩
对于页面上使用到的 icon，可以使用在线字体图标，或者雪碧图，将众多小图标合并到一张图上，减少<code v-pre>HTTP</code>请求次数</p>
<h3 id="开启-gzip-压缩" tabindex="-1"><a class="header-anchor" href="#开启-gzip-压缩" aria-hidden="true">#</a> 开启 Gzip 压缩</h3>
<p>拆完包之后，我们在使用<code v-pre>Gzip</code>做一下压缩，安装<code v-pre>compression-webpack-plugin</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> compression-webpack-plugin <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code v-pre>vue.config.js</code>中引入并修改<code v-pre>webpack</code>配置</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> CompressionWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"compression-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span><span class="token comment">//省略</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">CompressionWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(js|css)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token comment">//匹配文件名</span>
        <span class="token literal-property property">threshold</span><span class="token operator">:</span><span class="token number">10240</span><span class="token punctuation">,</span><span class="token comment">//对超过10k的数据进行压缩</span>
        <span class="token literal-property property">minRatio</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token comment">// 压缩比</span>
        <span class="token literal-property property">deleteOriginalAssets</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//是否删除原文件</span>
         <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">"/node_modules/"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在服务器我们也要做相应的配置，比如<code v-pre>Nginx</code></p>
<div class="language-Nginx line-numbers-mode" data-ext="Nginx"><pre v-pre class="language-Nginx"><code>gzip on;
gzip_disable &quot;msie6&quot;;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types application/atom+xml application/geo+json application/javascript application/x-javascript application/json application/ld+json application/manifest+json application/rdf+xml application/rss+xml application/xhtml+xml application/xml font/eot font/otf font/ttf image/svg+xml text/css text/javascript text/plain text/xml;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-ssr" tabindex="-1"><a class="header-anchor" href="#使用-ssr" aria-hidden="true">#</a> 使用 SSR</h3>
<p>SSR(Server side)，也就是服务器渲染，组件或页面通过服务器生成 html 字符串，再发送到浏览器
从头搭建一个服务器渲染是很复杂的，<code v-pre>Vue</code>应用建议使用<code v-pre>Nuxt.js</code>实现服务器渲染</p>
<h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3>
<p>减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分，资源加载优化和页面渲染优化</p>
<p>下图是更为全面的首屏优化的方案</p>
<figure><img src="@source/category/其他/images/SPA.png" alt="首屏优化" tabindex="0" loading="lazy"><figcaption>首屏优化</figcaption></figure>
<p>大家可以根据自己项目的情况选择各种方式进行首屏渲染的优化</p>
</div></template>


