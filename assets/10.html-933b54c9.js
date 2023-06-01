import{_ as e,C as p,Z as c,$ as l,a0 as n,a1 as a,a2 as t,a3 as o}from"./framework-6065462a.js";const i="/vuepress2-myblog/assets/202304161-34ec3e7a.jpg",u="/vuepress2-myblog/assets/202304162-3b98ad38.jpg",r="/vuepress2-myblog/assets/202304163-3834840c.jpg",d={},k=o(`<p>相信用过 vue 的小伙伴，肯定被面试官问过这样一个问题：<strong>在 vue 中动态的引入图片为什么要使用 require？</strong></p><p>有些小伙伴，可能会轻蔑一笑：呵，就这，<strong>因为动态添加 src 被当做静态资源处理了，没有进行编译，所以要加上 require，</strong> 我倒着都能背出来......</p><p>emmm... 乍一看好像说的很有道理啊，但是仔细一看，这句话说的到底是个啥？针对上面的回答，我不禁有如下几个疑问：</p><ol><li>什么是静态资源？</li><li>为什么动态添加的 src 会被当做的静态的资源？</li><li>没有进行编译，是指为是什么没有被编译？</li><li>加上 require 为什么能正确的引入资源，是因为加上 require 就能编译了？</li></ol><p>当我产生最后一个疑问的时候，发现上面的答案看似说了些啥，但好像又什么都没说...... 如果各位看官老爷也有如上几个疑问，那就让我给大家一一解惑</p><h2 id="_1-什么是静态资源" tabindex="-1"><a class="header-anchor" href="#_1-什么是静态资源" aria-hidden="true">#</a> 1.什么是静态资源</h2><hr><p>与静态资源相对应的还有一个动态资源，先让我们看看网上的各位大佬们怎么解释的。</p><blockquote><p>静态资源：一般客户端发送请求到 web 服务器，web 服务器从内存在取到相应的文件，返回给客户端，客户端解析并渲染显示出来。</p><p>动态资源：一般客户端请求的动态资源，先将请求交于 web 容器，web 容器连接数据库，数据库处理数据之后，将内容交给 web 服务器，web 服务器返回给客户端解析渲染处理。</p></blockquote><p>其实上面的总结已经很清晰了。站在一个 vue 项目的角度，我们可以简单的理解为：</p><p><strong>静态资源就是直接存放在项目中的资源，这些资源不需要我们发送专门的请求进行获取</strong>。比如 assets 目录下面的图片，视频，音频，字体文件，css 样式表等。</p><p><strong>动态资源就是需要发送请求获取到的资源</strong>。比如我们刷淘宝的时候，不同的商品信息是发送的专门的请求获取到的，就可以称之为动态资源。</p><h2 id="_2-为什么动态添加的-src-会被当做的静态的资源" tabindex="-1"><a class="header-anchor" href="#_2-为什么动态添加的-src-会被当做的静态的资源" aria-hidden="true">#</a> 2. 为什么动态添加的 src 会被当做的静态的资源？</h2><hr><p>回答这个问题之前，我们需要了解一下，浏览器是怎么能运行一个 vue 项目的。</p><p>我们知道浏览器打开一个网页，实际上运行的是 html，css，js 三种类型的文件。当我们本地启动一个 vue 项目的时候，实际上是先将 vue 项目进行打包，打包的过程就是将项目中的一个个 vue 文件转编译成 html，css，js 文件的过程，而后再在浏览器上运行的。</p><p>那动态添加的 src 如果我们没有使用 require 引入，最终会打包成什么样子呢，我带大家实验一波。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// vue文件中动态引入一张图片
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 通过v-bind引入资源的方式就称之为动态添加 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>../assets/logo.png&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

//最终编译的结果(浏览器上运行的结果)
//这张图片是无法被正确打开的
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../assets/logo.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看出，<strong>动态添加的 src 最终会编译成一个静态的字符串地址。程序运行的时候，会按照这个地址去项目目录中引入资源。而 去项目目录中引入资源的这种方式，就是将该资源当成了静态资源</strong>。所以这也就回答了我们的问题 2。</p><p>看到这里估计就有小伙伴疑惑了，这个最终被编译的地址有什么问题吗？我项目中的图片就是这个地址，为什么无法引入？别急，我们继续往下看。</p><h2 id="_3-没有进行编译-是指的是什么没有被编译" tabindex="-1"><a class="header-anchor" href="#_3-没有进行编译-是指的是什么没有被编译" aria-hidden="true">#</a> 3. 没有进行编译，是指的是什么没有被编译？</h2><hr><p>没有进行编译。这半句话，就听得很让人懵逼了。按照问题 2 我们知道这个动态引入的图片最终是被编译了，只是被编译之后无法正确的引入图片资源而已。所以这句话本来就是错的。针对于我们的标准答案，我在这里进行改写：</p><p><strong>因为动态添加 src 被当做静态资源处理了，而被编译过后的静态路径无法正确的引入资源，所以要加上 require</strong></p><p>那这里就诞生了一个新的疑问：<strong>被编译过后的静态路径为什么无法正确的引入资源？</strong></p><p>想得到这个问题的答案，我们得先从正常的引入一张图片开始。在项目中我们静态的引入一张图片肯定是可以引入成功的，而引用图片所在的 vue 文件肯定也是被编译的，那静态引入图片最终会被编译成什么样呢，模拟一波：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// vue文件中静态的引入一张图片
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 直接引入图片静态地址， 不再使用v-bind --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../assets/logo.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

//最终编译的结果
//这张图片是可以被正确打开的
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/img/logo.6c137b82.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面的测试，我们发现，使用静态的地址去引入一张图片，图片的路径和图片的名称已经发生了改变，并且编译后过后的静态地址是可以成功的引入资源的。这是因为，在默认情况下，src 目录下面的所有文件都会被打包，src 下面的图片也会被打包在新的文件夹下并生成新的文件名。编译过后的静态地址引入的是打包过后的图片地址，从而可以正确的引用资源</p><p>事实确实是这样吗？我们可以执行打包命令（npm run build）进行验证</p><figure><img src="`+i+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>可以发现，编译过后的静态地址确实是和 dist 下编译后图片地址是一致的，从而验证我们的想法。</p><p>到这里我们其实就可以解释上面的问题了：动态添加的 src，被编译过后的静态路径为什么无法正确的引入资源？</p><p><strong>因为动态的添加的 src 编译过后的地址，与图片资源编译过后的资源地址不一致， 导致无法正确的引入资源</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  编译过后的src地址：../assets/logo.png
  编译过后的图片资源地址：/img/logo.6c137b82.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那要怎么解决上述的问题呢，答案就是：require</p><h2 id="_4-加上-require-为什么能正确的引入资源-是因为加上-require-就能编译了" tabindex="-1"><a class="header-anchor" href="#_4-加上-require-为什么能正确的引入资源-是因为加上-require-就能编译了" aria-hidden="true">#</a> 4. 加上 require 为什么能正确的引入资源，是因为加上 require 就能编译了？</h2><hr><p>针对这个问题，首先就要否定后半句，无论加不加 require，vue 文件中引入一张图片都会被编译。</p><p>接着我们再来好好了解一下，require。</p><h4 id="_4-1-require-是什么-是一个-node-方法-用于引入模块-json-或本地文件" tabindex="-1"><a class="header-anchor" href="#_4-1-require-是什么-是一个-node-方法-用于引入模块-json-或本地文件" aria-hidden="true">#</a> 4.1 require 是什么: 是一个 node 方法，用于引入模块，JSON 或本地文件</h4><h4 id="_4-2-调用-require-方法引入一张图片之后发生了什么" tabindex="-1"><a class="header-anchor" href="#_4-2-调用-require-方法引入一张图片之后发生了什么" aria-hidden="true">#</a> 4.2 调用 require 方法引入一张图片之后发生了什么：</h4><p>在回答这个问题之前，容我先对问题 3 中的内容进行一定的补充。其实如果真的有小伙伴跟着问题三中的操作进行验证，估计就要开喷了：为什么我静态引入的图片最终编译的地址和你的不一样，是个 base64，而且打包之后 dist 下面也没有生成新的图片。大概就是下面这样的情况。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// vue文件中静态的引入一张图片
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 直接引入图片静态地址， 不再使用v-bind --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../assets/logo.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

//最终编译的结果
//这张图片是可以被正确打开的
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先别急着喷，实际上造成这种差异的原因，是因为我改了一下 webpack 中的配置。接下来涉及少量 webpack 代码，不了解 webpack 的小伙伴也没关系，了解原理即可。</p><p>在上文中的我们提到，vue 项目最终会被打包成一个 dist 目录，那么是什么帮我们完成这个打包的呢，没错，就是 webpack。在 vue 项目中的引入一张图片的时候，细心的同学会发现，有的时候，浏览器上显示图片地址是一个 base64，有的时候，是一个被编译过后的文件地址。也就是上述描述的差异。</p><p>之所以会造成这种差异，是 webpack 打包的时候，对图片资源进行了相关的配置。我们可以通过如下命令生成 vue 项目中的 webpack 配置文件，进行验证：</p><blockquote><p><em>npx vue-cli-service inspect --mode development &gt;&gt; webpack.config.development.js</em></p></blockquote><figure><img src="`+u+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>上图就是 vue 中 webpack 默认的图片打包规则。设置 type: &#39;asset&#39;，默认的，对于小于 8k 的图片，会将图片转成 base64 直接插入图片，不会再在 dist 目录生成新图片。对于大于 8k 的图片，会打包进 dist 目录，之后将新图片地址返回给 src。</p><p>而我在上述测试中使用的图片，是 vue-cli 自带的一张 logo 图片，大小是 6.69k。按照默认的打包规则，是会转成 base64，嵌入图片中的。所以为了讲述方便，我在 vue.config.js 中修改了其默认的配置，配置如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用configureWebpack对象，下面可以直接按照webpack中的写法进行编写</span>
  <span class="token comment">// 编写的内容，最终会被webpack-merge插件合并到webpack.config.js主配置文件中</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp|avif)(\\?.*)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 这里我将默认的大小限制改成6k。</span>
              <span class="token comment">// 当图片小于6k时候，使用base64引入图片；大于6k时，打包到dist目录下再进行引入</span>
              <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那上面说了这么多，和 require 有啥关系，自然是有滴。</p><p>我们现在知道 vue 最终是通过 webpack 打包，并且会在 webpack 配置文件中编写一系列打包规则。而 webpack 中的打包规则，针对的其实是一个一个模块，换而言之 webpack 只会对模块进行打包。那 webpack 怎么将图片当成一个模块呢，这就要用到我们的正主 require。</p><p>当我们使用 require 方法引入一张图片的时候，webpack 会将这张图片当成一个模块，并根据配置文件中的规则进行打包。<strong>我们可以将 require 当成一个桥梁，使用了 require 方法引入的资源，该资源就会当成模块并根据配置文件进行打包，并返回最终的打包结果。</strong></p><p>回到问题 4.2：调用 require 方法引入一张图片之后发生了什么</p><p><strong>1.如果这张图片小于项目中设置的资源限制大小，则会返回图片的 base64 插入到 require 方法的调用处</strong></p><p><strong>2.如果这张图片大于项目中设置的资源限制大小，则会将这个图片编译成一个新的图片资源。require 方法返回新的图片资源路径及文件名</strong></p><p>回到问题 4：为什么加上 require 能正确的引入资源</p><p><strong>因为通过 require 方法拿到的文件地址，是资源文件编译过后的文件地址（dist 下生成的文件或 base64 文件），因此可以找对应的文件，从而成功引入资源。</strong></p><p>答案就是这么简单，来验证一波</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// vue文件中使用require动态的引入一张图片
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 使用require动态引入图片 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>require(&#39;../assets/logo.png&#39;)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

//最终编译的结果
//这张图片是可以被正确打开的
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/img/logo.6c137b82.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>有问题吗，没有问题。到这里，不妨再对我们的标准答案进行一次优化：</p><p><strong>因为动态添加的 src，编译过后的文件地址和被编译过后的资源文件地址不一致，从而无法正确引入资源。而使用 require，返回的就是资源文件被编译后的文件地址，从而可以正确的引入资源</strong></p><p>看到这，估计还是有一些小伙伴有一些疑问，我再扩展一波：</p><h2 id="_5-问题-3-中-静态的引入一张图片-没有使用-require-为什么返回的依然是编译过后的文件地址" tabindex="-1"><a class="header-anchor" href="#_5-问题-3-中-静态的引入一张图片-没有使用-require-为什么返回的依然是编译过后的文件地址" aria-hidden="true">#</a> 5. 问题 3 中，静态的引入一张图片，没有使用 require，为什么返回的依然是编译过后的文件地址？</h2><hr><p>答：在 webpack 编译的 vue 文件的时候，遇见 src 等属性会默认的使用 require 引入资源路径。引用 vue-cli 官方的一段原话</p><blockquote><p>当你在 JavaScript、CSS 或 <code>*.vue</code> 文件中使用相对路径 (必须以 <code>.</code> 开头) 引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。在其编译过程中，所有诸如 <code>&lt;img src=&quot;...&quot;&gt;</code>、<code>background: url(...)</code> 和 CSS <code>@import</code> 的资源 URL <strong>都会被解析为一个模块依赖</strong>。</p><p>例如，<code>url(./image.png)</code> 会被翻译为 <code>require(&#39;./image.png&#39;)</code>，而：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;img src=&quot;./image.png&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将会被编译到：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>h(&#39;img&#39;, { attrs: { src: require(&#39;./image.png&#39;) }})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h2 id="_6-按照问题-5-中所说-那么动态添加-src-的时候也会使用-require-引入-为什么-src-编译过后的地址-与图片资源编译过后的资源地址不一致" tabindex="-1"><a class="header-anchor" href="#_6-按照问题-5-中所说-那么动态添加-src-的时候也会使用-require-引入-为什么-src-编译过后的地址-与图片资源编译过后的资源地址不一致" aria-hidden="true">#</a> 6. 按照问题 5 中所说，那么动态添加 src 的时候也会使用 require 引入，为什么 src 编译过后的地址，与图片资源编译过后的资源地址不一致</h2><hr><p>答：因为动态引入一张图片的时候，src 后面的属性值，实际上是一个变量。webpack 会根据 v-bind 指令去解析 src 后面的属性值。并不会通过 reuqire 引入资源路径。这也是为什么需要手动的添加 require。</p><h2 id="_7-据说-public-下面的文件不会被编译-那我们使用静态路径去引入资源的时候-也会默认的使用-require-引入吗" tabindex="-1"><a class="header-anchor" href="#_7-据说-public-下面的文件不会被编译-那我们使用静态路径去引入资源的时候-也会默认的使用-require-引入吗" aria-hidden="true">#</a> 7.据说 public 下面的文件不会被编译，那我们使用静态路径去引入资源的时候，也会默认的使用 require 引入吗？</h2><hr><p>官方的原文是这样子的：</p><blockquote><p>任何放置在 <code>public</code> 文件夹的静态资源都会被简单的复制，而不经过 webpack。你需要通过绝对路径来引用它们。</p></blockquote><p>答：不会，使用 require 引入资源的前提的该资源是 webpack 解析的模块，而 public 下的文件压根就不会走编译，也就不会使用到 require。</p><h2 id="_8-为什么使用-public-下的资源一定要绝对路径" tabindex="-1"><a class="header-anchor" href="#_8-为什么使用-public-下的资源一定要绝对路径" aria-hidden="true">#</a> 8.为什么使用 public 下的资源一定要绝对路径</h2><hr><p>答：因为虽然 public 文件不会被编译，但是 src 下的文件都会被编译。由于引入的是 public 下的资源，不会走 require，会直接返回代码中的定义的文件地址，该地址无法在编译后的文件目录（dist 目录）下找到对应的文件，会导致引入资源失败。</p><h2 id="_9-上文件中提到的-webpack-为什么引入资源的时候要有-base64-和打包到-dist-目录下两种的方式-全部打包到的-dist-目录下-他不香吗" tabindex="-1"><a class="header-anchor" href="#_9-上文件中提到的-webpack-为什么引入资源的时候要有-base64-和打包到-dist-目录下两种的方式-全部打包到的-dist-目录下-他不香吗" aria-hidden="true">#</a> 9.上文件中提到的 webpack，为什么引入资源的时候要有 base64 和打包到 dist 目录下两种的方式，全部打包到的 dist 目录下，他不香吗？</h2><hr><p>答：为了减少 http 请求。页面中通过路径引入的图片，实际上都会向服务器发送一个请求拿到这张图片。对于资源较小的文件，设置成 base64，既可以减少请求，也不会影响到页面的加载性能。</p>`,83),g={href:"http://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://wjhsh.net/vickylinj-p-15599154.html",target:"_blank",rel:"noopener noreferrer"};function m(b,h){const s=p("ExternalLinkIcon");return c(),l("div",null,[k,n("ul",null,[n("li",null,[a("参考链接："),n("a",g,[a("cli.vuejs.org/zh/"),t(s)])]),n("li",null,[a("参考链接："),n("a",v,[a("wjhsh.net/vickylinj-p-15599154.html"),t(s)])])])])}const I=e(d,[["render",m],["__file","10.html.vue"]]);export{I as default};
