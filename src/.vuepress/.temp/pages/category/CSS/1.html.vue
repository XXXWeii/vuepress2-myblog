<template><div><h2 id="纯-css-飞行直升机动画制作指南" tabindex="-1"><a class="header-anchor" href="#纯-css-飞行直升机动画制作指南" aria-hidden="true">#</a> 纯 CSS 飞行直升机动画制作指南</h2>
<hr>
<p>今天，我们来学习如何仅用 HTML 和 CSS 来构建一个漂亮的动画项目。这里假设大家都是中级 CSS 开发人员。</p>
<p>在这个项目中将用到的以下 CSS3 动画属性：</p>
<ul>
<li>CSS 转换</li>
<li>3D 变换</li>
<li>CSS 过渡效果</li>
<li>动画</li>
<li>自定义动画帧</li>
</ul>
<p>兴奋吗？让我们开始吧！</p>
<h2 id="使用-html-定义直升机结构" tabindex="-1"><a class="header-anchor" href="#使用-html-定义直升机结构" aria-hidden="true">#</a> 使用 HTML 定义直升机结构</h2>
<hr>
<p>首先让我们在<code v-pre>main</code>元素中定义一个容器，命名为<code v-pre>helicopter</code>，接着在这个容器中按顺序写入 4 个<code v-pre>div</code>元素，每个<code v-pre>div</code>元素的<code v-pre>class</code>属性值如下：</p>
<ul>
<li>cockpit</li>
<li>tail</li>
<li>main</li>
<li>rotor</li>
</ul>
<p>在<code v-pre>rotor</code>类中，你需要添加一个具有<code v-pre>rotator</code>类的<code v-pre>div</code>，然后在这个<code v-pre>rotator</code>类内部再添加两个空<code v-pre>div</code>。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>helicopter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cockpit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tail<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rotor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rotator<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="直升机结构设计" tabindex="-1"><a class="header-anchor" href="#直升机结构设计" aria-hidden="true">#</a> 直升机结构设计</h2>
<hr>
<p>现在让我们来设计 HTML 结构，使其变成直升机形状。</p>
<p><code v-pre>body</code></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 将元素居中 */</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>.cockpit</code>类</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.cockpit</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 195px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 195px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 100px 40px 50px 50px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #44d2fd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i.postimg.cc/7ZNWJzbk/image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>现在为这个<code v-pre>cockpit</code>类添加玻璃。在<code v-pre>.cockpit</code>的<code v-pre>:before</code>和<code v-pre>:after</code>上定义玻璃形状：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.cockpit::before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -25px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 170px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 170px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #302e37<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.cockpit::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -60px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -60px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 170px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 170px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.05<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<figure><img src="https://i.postimg.cc/QdP0Tqsv/image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>.tail</code>类</p>
<p>将样式应用于<code v-pre>.tail</code>类：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.tail</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> left center<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 10px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 80px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 350px solid #2fadd2<span class="token punctuation">;</span>
  <span class="token property">border-bottom-right-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<figure><img src="https://i.postimg.cc/QNbmbDhQ/image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>.main</code>类</p>
<p>这个类是直升机的旋转体：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 130px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #302e37<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<figure><img src="https://i.postimg.cc/htH1jP1B/image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>.rotor</code>类</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.rotor</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -360px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #a299ab<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.12<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.075<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<figure><img src="https://i.postimg.cc/y6vhRTyn/image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在设计完直升机螺旋桨的样式后，为了使该旋翼更逼真，现在定位到该<code v-pre>rotor</code>内的两个空<code v-pre>div</code>。这样当我们在下个部分应用<code v-pre>rotate</code>动画时，你将会看到漂亮的动画。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.rotator div</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -350px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -30px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.rotator div:nth-child(1)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.rotor div:nth-child(2)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：CS</p>
<figure><img src="https://i.postimg.cc/q7syvc7s/image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="那么怎么让直升机飞起来呢" tabindex="-1"><a class="header-anchor" href="#那么怎么让直升机飞起来呢" aria-hidden="true">#</a> 那么怎么让直升机飞起来呢？</h2>
<hr>
<p>到目前为止，我们已创建了直升机的形状和外观样式。但是没有动画制作和关键帧，那就不是动画。所以，使用 CSS animation 属性来赋予这个直升机飞行的力量。</p>
<h2 id="定义-keyframes" tabindex="-1"><a class="header-anchor" href="#定义-keyframes" aria-hidden="true">#</a> 定义@Keyframes</h2>
<hr>
<p>在使用<code v-pre>animation</code>属性之前，我们需要创建关键帧。对于这个项目，我们创建两个<code v-pre>@keyframes</code>：</p>
<ul>
<li>bounce</li>
<li>rotate</li>
</ul>
<p><code v-pre>bounce</code></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> bounce</span> <span class="token punctuation">{</span>
  <span class="token selector">0%,
  100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0px<span class="token punctuation">,</span> -50px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-15deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0px<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>rotate</code></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> rotate</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用动画属性" tabindex="-1"><a class="header-anchor" href="#使用动画属性" aria-hidden="true">#</a> 使用动画属性</h2>
<hr>
<p>现在，将这两个<code v-pre>@keyframes</code>添加到<code v-pre>.helicopter</code>和<code v-pre>.rotator</code>类中。</p>
<p><code v-pre>.helicopter</code>类</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.helicopter</span> <span class="token punctuation">{</span>
  <span class="token comment">/* adding bounce keyframes with duration 5s and infinite loop */</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> bounce 5s infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>.rotator</code>类</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.rotator</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> rotate 0.6s linear infinite<span class="token punctuation">;</span> */\* added rotate @keyframs \*/*
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<figure><img src="https://i.postimg.cc/jdDf7Y5d/image.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h2>
<hr>
<p>到这里，我们知道了如何仅使用 CSS 来创建复杂的形状和动画。你甚至都不必接触 JavaScript。希望你喜欢这个项目。</p>
<p>感谢大家的阅读。编码快乐</p>
</div></template>


