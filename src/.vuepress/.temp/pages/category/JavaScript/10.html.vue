<template><div><blockquote>
<p>作者：zt_ever</p>
<p><a href="https://juejin.cn/post/7216200378341589052" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7216200378341589052<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<hr>
<blockquote>
<p>瀑布流布局，是现在比较流行的一种页面布局方式，即<code v-pre>多行等宽</code>元素排列，<code v-pre>等宽不等高</code>，后面的元素<code v-pre>依次</code>添加到<code v-pre>前一行最矮</code>的元素<code v-pre>下方</code>。</p>
</blockquote>
<p>它可以有效的降低页面的复杂度，节省很多的空间；并且，瀑布流的参差不齐的排列方式，可以通过界面展示给用户多条数据，并且让用户可以有向下浏览的冲动，提供了很好的用户体验！例如淘宝的页面就采用了这种布局方式，给大家看看<strong>淘宝的瀑布流布局的效果图</strong>（手机端）以及<strong>我们要实现的效果图</strong>（PC 端）吧~</p>
<figure><img src="@source/category/JavaScript/images/2023050101.jpg" alt="淘宝的瀑布流布局的效果图（手机端）" tabindex="0" loading="lazy"><figcaption>淘宝的瀑布流布局的效果图（手机端）</figcaption></figure>
<figure><img src="@source/category/JavaScript/images/2023050102.jpg" alt="淘宝的瀑布流布局的效果图（PC端）" tabindex="0" loading="lazy"><figcaption>淘宝的瀑布流布局的效果图（PC端）</figcaption></figure>
<h2 id="思路准备" tabindex="-1"><a class="header-anchor" href="#思路准备" aria-hidden="true">#</a> 思路准备</h2>
<hr>
<p>通过了解瀑布流布局的方式，我们来梳理一下实现它的步骤，方便我们代码的编写。</p>
<p>1、首先我们需要准备<strong>很多张图片</strong>（我这准备的是 40 张），还有<strong>vscode</strong>开发工具。</p>
<p>2、编写<strong>前端</strong>代码，给图片<strong>添加样式</strong>让图片<strong>等宽并同行</strong>显示。</p>
<p>3、编写<strong>js</strong>代码，要知道<strong>第一行图片数量</strong>，<strong>下一张图片的序号</strong>以及<strong>前一行最矮的元素的序号</strong>，还有<strong>摆放的位置</strong>。</p>
<h2 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h2>
<hr>
<h3 id="一、前端代码编写" tabindex="-1"><a class="header-anchor" href="#一、前端代码编写" aria-hidden="true">#</a> 一、前端代码编写</h3>
<blockquote>
<p>1、首先我们定义一个<strong>container</strong>容器来装<strong>所有图片</strong>，在这个容器中用<strong>box</strong>容器装<strong>box-img</strong>容器再装入<strong>每张图片</strong>，这样方便之后样式的编写。</p>
</blockquote>
<blockquote>
<p>2、使图片<strong>同行</strong>显示--给 box 容器使用<strong>float:left;属性</strong>。</p>
</blockquote>
<blockquote>
<p>3、让图片<strong>等宽</strong>显示--给 box-img 容器设置 width:150px;<strong>，img 标签设置</strong>width:100%;继承父容器 box-img 高度的 100%。</p>
</blockquote>
<blockquote>
<p>4、为了使效果更好看，我们给装图片的容器设置<strong>内边距，边框和阴影</strong>的效果。</p>
</blockquote>
<p>前端完整代码附上：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>waterFall<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box</span> <span class="token punctuation">{</span>
      <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box-img</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #484848<span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 5px #484848<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box-img img</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-img<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./img/1.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      /*.......后面接39个box，此处省略*/
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、js-代码编写" tabindex="-1"><a class="header-anchor" href="#二、js-代码编写" aria-hidden="true">#</a> 二、js 代码编写</h3>
<h4 id="_1、首先用-window-onload-function-来实现页面加载完毕后立即执行的功能" tabindex="-1"><a class="header-anchor" href="#_1、首先用-window-onload-function-来实现页面加载完毕后立即执行的功能" aria-hidden="true">#</a> 1、首先用 window.onload=function(){}来实现页面加载完毕后立即执行的功能</h4>
<p>在这个函数中，我们调用<strong>imgLocation('container','box')函数</strong>来呈现最终效果，传入的实参是<strong>父容器</strong>'container'以及装图片的<strong>子容器</strong>'box'。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">imgLocation</span><span class="token punctuation">(</span><span class="token string">"container"</span><span class="token punctuation">,</span> <span class="token string">"box"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、实现-imglocation-函数功能" tabindex="-1"><a class="header-anchor" href="#_2、实现-imglocation-函数功能" aria-hidden="true">#</a> 2、实现 imgLocation()函数功能</h4>
<h5 id="_1-首先我们得获取所有要摆放的图片-并将其存入一个数组中" tabindex="-1"><a class="header-anchor" href="#_1-首先我们得获取所有要摆放的图片-并将其存入一个数组中" aria-hidden="true">#</a> 1）首先我们得<code v-pre>获取所有要摆放的图片</code>，并将其存入一个<code v-pre>数组</code>中</h5>
<p>利用 document.getElementById(parent)得到父容器；</p>
<p>调用<strong>getChildElement(cparent,content)方法</strong>，在这个方法中，先获取<strong>父容器所有标签</strong>，对所有标签<strong>遍历</strong>并用 if 条件语句<strong>得到类名为 box 的容器</strong>（装图片的容器），将其<strong>存入</strong>我们自己构建的一个<strong>数组</strong>中，返回值为这个数组，方便之后通过遍历来操作图片摆放的位置。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">imgLocation</span><span class="token punctuation">(</span><span class="token parameter">parent<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> cparent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//cparent下的所有的第一层的子容器 box</span>
  <span class="token keyword">var</span> ccontent <span class="token operator">=</span> <span class="token function">getChildElement</span><span class="token punctuation">(</span>cparent<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//数组，40个div</span>
<span class="token punctuation">}</span>

<span class="token comment">//取到父容器中的某一层子容器</span>
<span class="token keyword">function</span> <span class="token function">getChildElement</span><span class="token punctuation">(</span><span class="token parameter">parent<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> contentArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> allContent <span class="token operator">=</span> parent<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//通过标签来选中得到一个数组</span>
  <span class="token comment">//遍历allContent把其中类名为content的容器都存到contentArr数组中</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> allContent<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>allContent<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>className <span class="token operator">==</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//当前这个容器的类名是否为content</span>
      contentArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>allContent<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> contentArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-得到这个数组后-找出从谁开始是需要被摆放位置的" tabindex="-1"><a class="header-anchor" href="#_2-得到这个数组后-找出从谁开始是需要被摆放位置的" aria-hidden="true">#</a> 2）得到这个<code v-pre>数组</code>后，找出<code v-pre>从谁开始</code>是需要<code v-pre>被摆放</code>位置的</h5>
<p>我们采用以下方法：</p>
<p>首先获取<strong>视窗的宽度</strong>和<strong>每张图片的宽度</strong>，将两者<strong>相除</strong>并<strong>向下取整</strong>可得到<strong>第一行</strong>可以放置图片的数量，自然也就知道了我们需要<strong>操作</strong>的那张图片的<strong>序号</strong>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//从谁开始是需要被摆放位置的</span>
<span class="token keyword">var</span> winWidth <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span> <span class="token comment">//视窗宽度</span>
<span class="token keyword">var</span> imgWidth <span class="token operator">=</span> ccontent<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>offsetWidth<span class="token punctuation">;</span> <span class="token comment">//图片宽度</span>

<span class="token keyword">var</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>winWidth <span class="token operator">/</span> imgWidth<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//第一行能放几张图</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-得到需要被摆放位置的图片序号后-确定其摆放位置" tabindex="-1"><a class="header-anchor" href="#_3-得到需要被摆放位置的图片序号后-确定其摆放位置" aria-hidden="true">#</a> 3）得到需要<code v-pre>被摆放</code>位置的图片序号后，确定其<code v-pre>摆放位置</code></h5>
<p>我们自己定义一个<strong>存储高度的数组</strong>，对前一行元素的<strong>高度</strong>进行<strong>遍历</strong>并<strong>存入</strong>数组，当遍历到需要<strong>被摆放</strong>位置的图片时，用<strong>Math.min()方法</strong>获取前一行高度<strong>最矮</strong>的元素高度，并用<strong>indexOf()方法</strong>获取到其<strong>下标</strong>。</p>
<p>再对我们<strong>所操作</strong>的这个图片容器的<strong>样式调整</strong>：
position：absolute;<strong>绝对定位</strong>， <strong>top 值</strong>设置为前一行高度最矮的图片高度<strong>minHeight</strong>，<strong>left 值</strong>设置为单张图片宽度<strong>乘</strong>这张图片的下标 minIndex。</p>
<p>最后，不要忘啦，摆放好图片后，还要<strong>更新</strong>摆放的那一列的<strong>高度</strong>哟~</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//操作num+1张图</span>
<span class="token keyword">var</span> BoxHeightArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ccontent<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//前num张只要计算高度</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    BoxHeightArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> ccontent<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>offsetHeight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">//我们要操作的box  :ccontent[i]</span>
    <span class="token keyword">var</span> minHeight <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> BoxHeightArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//apply:把最小值这个方法借给它用</span>
    <span class="token keyword">var</span> minIndex <span class="token operator">=</span> BoxHeightArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>minHeight<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回数组下标</span>
    ccontent<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">"absolute"</span><span class="token punctuation">;</span> <span class="token comment">//style设置样式</span>
    ccontent<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> minHeight <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span>
    ccontent<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> imgWidth <span class="token operator">*</span> minIndex <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span>

    <span class="token comment">//更新最矮的那一列的高度</span>
    BoxHeightArr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">+=</span> ccontent<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>offsetHeight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终整合一下就可以实现瀑布流的布局效果啦！</p>
<h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2>
<hr>
<p>以上就是瀑布流布局的实现过程，看完本文如果觉得有用，记得支持一下，收藏起来说不定哪天就用上啦～文章可能有一些错误，欢迎评论指出，也欢迎一起讨论。</p>
</div></template>


