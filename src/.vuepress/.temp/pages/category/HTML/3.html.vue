<template><div><p>先上结果，最终实现效果如下：</p>
<figure><img src="@source/category/HTML/images/TikTok.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>还原度应该还可以吧？</p>
<h2 id="抖音-logo-结构" tabindex="-1"><a class="header-anchor" href="#抖音-logo-结构" aria-hidden="true">#</a> 抖音 Logo 结构</h2>
<hr>
<p>想要用 CSS 来画抖音的 Logo，前提要先了解它的构造，一定是一些几何图形的拼接组合，因为之前很多业界大佬已经扒过抖音的 Logo 的结构了，我就拿来借用一下：</p>
<figure><img src="@source/category/HTML/images/1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>好的，有点复杂，简化一下，其实就是 <code v-pre>4</code> 个部分</p>
<figure><img src="@source/category/HTML/images/2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>每个颜色划出来的区域代表一个部分，所以最后是：<code v-pre>1/4圆环</code> + <code v-pre>半圆</code> + <code v-pre>长条矩形</code> + <code v-pre>半径略大一些的1/4圆环</code></p>
<h2 id="制作思路" tabindex="-1"><a class="header-anchor" href="#制作思路" aria-hidden="true">#</a> 制作思路</h2>
<hr>
<p>回到本文标题，有人要说我标题党了，这 <code v-pre>logo</code> 都划分成四个部分了，你怎么用一个标签搞定呢？就算你用 <code v-pre>::before</code> 和 <code v-pre>::after</code>，也加上标签本体一共也就三个部分</p>
<p>而且！抖音的 <code v-pre>logo</code> 是有两层的：</p>
<figure><img src="@source/category/HTML/images/3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>​ 抖音 logo</p>
<p>可以看到，是一个青色的音符和一个红色的音符叠加的</p>
<p>所以！ 这么多元素，你怎么用一个标签完成呢？而且还说带动画，是不是逗我们玩呢？</p>
<p>好了，别急，咱们先捋一下思路哈：</p>
<ul>
<li>
<p>先从元素的大方向开始思考：</p>
</li>
<li>
<ul>
<li>需要实现一个黑色背景（需要一个标签）</li>
<li>两个音符叠加（&quot;黑色背景&quot;已经是一个标签了，那两个音符只能是两个伪元素）</li>
</ul>
</li>
<li>
<p>再从元素的小细节着手突破：</p>
</li>
<li>
<ul>
<li>需要在一个伪元素中一笔画出整个音符图案（容我思考一下...）</li>
</ul>
</li>
</ul>
<p>如何在一个伪元素中一笔画出整个音符图案呢？</p>
<p>💡 想到办法了，超级简单，给大家演示一下</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/* 为了保证文章整洁，省略一些代码... */</span>
  <span class="token selector">.douyin::before</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"青色的音符.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.douyin::affter</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"红色的音符.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>douyin<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/category/HTML/images/4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>别骂了，别骂了，刚刚跟大家开了个小玩笑，正文走起！</p>
<p>我们肯定是要用到 <code v-pre>background</code> 属性的，不然哪来的色块啊，去扒一下 MDN 文档：</p>
<figure><img src="@source/category/HTML/images/5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>都不用想了，只有一个 <code v-pre>background-image</code> 有用，那再具体看看：</p>
<figure><img src="@source/category/HTML/images/6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>划重点了！同学们，<code v-pre>background-image</code> 支持为一个元素设置一个或多个图像，来看一下其支持哪些图像类型：</p>
<figure><img src="@source/category/HTML/images/7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>看了语法，发现基本上 <code v-pre>&lt;image&gt;</code> 类型支持的都是直接设置图片的，唯独有一个支持渐变函数的，例如：<code v-pre>linear-gradient</code>、<code v-pre>repeating-linear-gradient</code>、<code v-pre>radial-gradient</code>、<code v-pre>conic-gradient</code> ...</p>
<p>什么是渐变函数呢？根据它们的单词名字可以知道，支持了 线性、径向（其实就是圆）、锥形 的颜色渐变。我们用前两个就可以满足抖音 <code v-pre>logo</code> 的构造了</p>
<p>因为根据 MDN 上的解释，我们是可以使用多个渐变函数来控制元素的背景图像的，多个值用 <code v-pre>,</code> 隔开，例如官方的例子：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../../media/examples/lizard.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用个比较形象的比喻，<code v-pre>background-image</code> 就像我们写字一样，写字需要一笔一划写，而 <code v-pre>background-image</code> 中 <code v-pre>,</code> 隔开的每一个值就像每一个笔画，这些值共同组成了一个 &quot;图像&quot;</p>
<p>那我们就可以借助这些函数来画出抖音的 logo 了</p>
<h2 id="开搞开搞" tabindex="-1"><a class="header-anchor" href="#开搞开搞" aria-hidden="true">#</a> 开搞开搞</h2>
<hr>
<p>先来测量一下抖音 logo 中 音符 的长宽比，为了等会给音符留出一定的空间</p>
<figure><img src="@source/category/HTML/images/8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>​ 音符宽高比</p>
<p>特地用截图工具圈出了红色音符的部分，得到的宽高是 <code v-pre>248 * 285</code>，计算一下宽高比就约等于 <code v-pre>248/285 = 0.87</code>，那我们就要在中间留出一个宽高比为 <code v-pre>0.87</code> 的矩形位置给音符</p>
<h3 id="打地基" tabindex="-1"><a class="header-anchor" href="#打地基" aria-hidden="true">#</a> 打地基</h3>
<hr>
<p>那就先打地基！</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.douyin</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 0.87<span class="token punctuation">;</span> <span class="token comment">/* 宽高比 0.87 */</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px <span class="token function">calc</span><span class="token punctuation">(</span>20px + 100px / 0.87 * 0.13 / 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 四周留白，中间腾出位置给音符 */</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>douyin<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要解释一下 <code v-pre>padding</code> 的值的设定，<code v-pre>20px</code> 是我随便设置的一个边距大小，既然顶部和底部都是 <code v-pre>20px</code>，而且本身整体元素的宽高比又不是 <code v-pre>1:1</code>（整体不是正方形），那为了视觉上的居中和整体宽高的 <code v-pre>1:1</code>，我们需要将左右边距增大至整体宽度与高度相等</p>
<p>因此 <code v-pre>100px / 0.87</code> 拿到的就是整体的高度，再乘以 <code v-pre>0.13</code> 拿到的就是宽高的差值，因为要平均分到两边，所以还要除以 <code v-pre>2</code></p>
<p>现在妥妥是个正方形了，当前的效果：</p>
<figure><img src="@source/category/HTML/images/9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>​ 地基打好了</p>
<p>这里为了让等会的音符只在图中的那块儿区域绘制，我们给外部容器设置一下 <code v-pre>display: grid</code>，等会还需要借助 <code v-pre>grid</code> 布局的能力</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.douyin::before,
.douyin::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> 1/1<span class="token punctuation">;</span> <span class="token comment">/* 居中展示 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="画-1-4-圆环" tabindex="-1"><a class="header-anchor" href="#画-1-4-圆环" aria-hidden="true">#</a> 画 1/4 圆环</h3>
<hr>
<p>如何画圆环？用一个简单的例子来演示一下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.demo</span> <span class="token punctuation">{</span>
    <span class="token comment">/* demo 是一个正方形 */</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
      100% 100% at 100% 100%<span class="token punctuation">,</span>
      transparent 0 50%<span class="token punctuation">,</span>
      red 50% 100%<span class="token punctuation">,</span>
      transparent
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们就得到了一个这样的图形：</p>
<figure><img src="@source/category/HTML/images/10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>怎么得到这样的 <code v-pre>1/4圆环</code> 的呢？我们把样式拆解一下：</p>
<h5 id="_100-100-at-100-100" tabindex="-1"><a class="header-anchor" href="#_100-100-at-100-100" aria-hidden="true">#</a> <code v-pre>100% 100% at 100% 100%</code>：</h5>
<p>at 的左侧 表示圆（或椭圆）在横向、竖向的半径长度；at 的右侧 表示圆形在坐标轴上的位置</p>
<p>那对应到这个图上就是：</p>
<figure><img src="@source/category/HTML/images/11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="transparent-0-50" tabindex="-1"><a class="header-anchor" href="#transparent-0-50" aria-hidden="true">#</a> <code v-pre>transparent 0 50%</code></h5>
<p><code v-pre>radial-gradient()</code> 函数除了第一个参数，其余的参数都表示 颜色及渐变程度</p>
<p>因此 <code v-pre>transparent 0 50%</code> 表示从 圆心 开始到 半径为一半长度的位置 颜色为 透明</p>
<p>这里怕大家看不出来，我把 <code v-pre>transparent</code> 改成 <code v-pre>blue</code>，放效果图给大家看：</p>
<figure><img src="@source/category/HTML/images/12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="red-50-100" tabindex="-1"><a class="header-anchor" href="#red-50-100" aria-hidden="true">#</a> <code v-pre>red 50% 100%</code></h5>
<p>原理同上一个，从半径为 <code v-pre>50%</code> 的位置一直到半径为 <code v-pre>100%</code> 的部分，显示红色</p>
<p>效果图为：</p>
<figure><img src="@source/category/HTML/images/13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>其实只有 黄色箭头 所指出的这个区域是我们代码造成的，那为什么一直到正方形的左上角都是红色呢？因为<code v-pre>radial-gradient()</code> 函数需要最后设置一个 <code v-pre>color-stop</code>，请看下面</p>
<h5 id="transparent" tabindex="-1"><a class="header-anchor" href="#transparent" aria-hidden="true">#</a> <code v-pre>transparent</code></h5>
<p>这也是函数的最后一个参数，表示渐变以透明色 为结束，即从上一个位置（<code v-pre>red 50% 100%</code>）的结束位置开始一直到容器的边缘，都显示为透明</p>
<p>现在再来看看效果：</p>
<figure><img src="@source/category/HTML/images/14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这样一个 <code v-pre>1/4圆环</code> 就画好了</p>
<p>那么回到我们的正文来</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.douyin::before,
.douyin::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> 1/1<span class="token punctuation">;</span>  <span class="token comment">/* 居中展示 */</span>
+ <span class="token property">background</span><span class="token punctuation">:</span>
+    <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
+      100% 100% at 100% 100%<span class="token punctuation">,</span>
+      transparent 0 50%<span class="token punctuation">,</span>
+      #08fff9 50% 100%<span class="token punctuation">,</span>
+      transparent
+    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在咱们存放音符的容器是一个宽高比为 <code v-pre>0.87</code> 的长方形，如果按照我们刚刚画矩形的代码来，最后出来的应该是这样的：</p>
<figure><img src="@source/category/HTML/images/15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>很明显，圆环的两端宽度不一致，此时我们可以利用 <code v-pre>background-size</code> 对其进行压缩，以此得到一个宽度一致的圆环，我摆烂了，懒得计算了，直接控制台微调吧</p>
<figure><img src="@source/category/HTML/images/16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这下差不多等宽了，且大概是一个标准的 <code v-pre>1/4圆环</code>，然后咱们要把它放到左侧中间靠下一点的位置，代码如下：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.douyin::before,
.douyin::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> 1/1<span class="token punctuation">;</span> <span class="token comment">/* 居中展示 */</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
      100% 100% at 100% 100%<span class="token punctuation">,</span>
      transparent 0 50%<span class="token punctuation">,</span>
      #08fff9 50% 100%<span class="token punctuation">,</span>
      transparent
    <span class="token punctuation">)</span> + left 52%/41% 36% no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有内味儿了，有没有？</p>
<figure><img src="@source/category/HTML/images/17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="画半圆" tabindex="-1"><a class="header-anchor" href="#画半圆" aria-hidden="true">#</a> 画半圆</h3>
<hr>
<p>原理都相似，就放一个半圆的生成以及位移过程图吧：</p>
<figure><img src="@source/category/HTML/images/18.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>代码如下，也不过多解释各种数值的意义了，因为我全是微调的：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.douyin::before,
.douyin::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> 1/1<span class="token punctuation">;</span> <span class="token comment">/* 居中展示 */</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
        100% 100% at 100% 100%<span class="token punctuation">,</span>
        transparent 0 50%<span class="token punctuation">,</span>
        #08fff9 50% 100%<span class="token punctuation">,</span>
        transparent
      <span class="token punctuation">)</span> left 52%/41% 36% no-repeat<span class="token punctuation">,</span> + <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
        +50% 100% at top<span class="token punctuation">,</span>
        + transparent 44%<span class="token punctuation">,</span>
        + #08fff9 45% 98%<span class="token punctuation">,</span>
        + transparent +
      <span class="token punctuation">)</span> 0 100%/73% 31% no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="画长条" tabindex="-1"><a class="header-anchor" href="#画长条" aria-hidden="true">#</a> 画长条</h3>
<hr>
<p>长条可能跟圆环和半圆不太一样，它用到的是 <code v-pre>linear-gradient()</code> 线性函数，我们也不搞花里胡哨的操作，就直接把整个区域都铺满颜色，然后通过横纵缩放得到一个长方形吧</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.douyin::before,
.douyin::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> 1/1<span class="token punctuation">;</span> <span class="token comment">/* 居中展示 */</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
        100% 100% at 100% 100%<span class="token punctuation">,</span>
        transparent 0 50%<span class="token punctuation">,</span>
        #08fff9 50% 100%<span class="token punctuation">,</span>
        transparent
      <span class="token punctuation">)</span> left 52%/41% 36% no-repeat<span class="token punctuation">,</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
        50% 100% at top<span class="token punctuation">,</span>
        transparent 44%<span class="token punctuation">,</span>
        #08fff9 45% 98%<span class="token punctuation">,</span>
        transparent
      <span class="token punctuation">)</span> 0 100%/73% 31% no-repeat<span class="token punctuation">,</span>
    + <span class="token function">linear-gradient</span><span class="token punctuation">(</span>#08fff9<span class="token punctuation">,</span> #08fff9<span class="token punctuation">)</span> 66% 0/20% 70% no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果过程动画如下：</p>
<figure><img src="@source/category/HTML/images/19.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="画半径稍大一些的-1-4-圆环" tabindex="-1"><a class="header-anchor" href="#画半径稍大一些的-1-4-圆环" aria-hidden="true">#</a> 画半径稍大一些的 1/4 圆环</h3>
<hr>
<p>再次略过讲解，直接看代码：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.douyin::before,
.douyin::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> 1/1<span class="token punctuation">;</span> <span class="token comment">/* 居中展示 */</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
        100% 100% at 100% 100%<span class="token punctuation">,</span>
        transparent 0 50%<span class="token punctuation">,</span>
        #08fff9 50% 100%<span class="token punctuation">,</span>
        transparent
      <span class="token punctuation">)</span> left 52%/41% 36% no-repeat<span class="token punctuation">,</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
        50% 100% at top<span class="token punctuation">,</span>
        transparent 44%<span class="token punctuation">,</span>
        #08fff9 45% 98%<span class="token punctuation">,</span>
        transparent
      <span class="token punctuation">)</span> 0 100%/73% 31% no-repeat<span class="token punctuation">,</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span>#08fff9<span class="token punctuation">,</span> #08fff9<span class="token punctuation">)</span> 66% 0/20% 70% no-repeat<span class="token punctuation">,</span> + <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
        +100% 100% at 100% 0<span class="token punctuation">,</span>
        + transparent 0 58%<span class="token punctuation">,</span>
        + #08fff9 58.5% 99%<span class="token punctuation">,</span>
        + transparent +
      <span class="token punctuation">)</span> 100% 0/47% 41.8% no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图如下：</p>
<figure><img src="@source/category/HTML/images/20.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>到此为止，一个音符就画好了，离成功只剩一步之遥</p>
<h2 id="拆分" tabindex="-1"><a class="header-anchor" href="#拆分" aria-hidden="true">#</a> 拆分</h2>
<hr>
<p>刚刚咱们的代码时把 <code v-pre>::before</code> 和 <code v-pre>::after</code> 放在一起写的，其实现在是两个一模一样的音符完全重叠，而且现在两个音符的颜色也是一样的，我们来改造一下</p>
<h3 id="颜色通过变量获取" tabindex="-1"><a class="header-anchor" href="#颜色通过变量获取" aria-hidden="true">#</a> 颜色通过变量获取</h3>
<hr>
<p>为了代码不冗余，咱们把刚才代码中所有的 <code v-pre>#08fff9</code> 用变量来获取，即 <code v-pre>#08fff9 =&gt; var(--color)</code></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.douyin::before,
.douyin::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> 1/1<span class="token punctuation">;</span> <span class="token comment">/* 居中展示 */</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
        100% 100% at 100% 100%<span class="token punctuation">,</span>
        transparent 0 50%<span class="token punctuation">,</span>
        <span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">)</span> 50% 100%<span class="token punctuation">,</span>
        transparent
      <span class="token punctuation">)</span> left 52%/41% 36% no-repeat<span class="token punctuation">,</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
        50% 100% at top<span class="token punctuation">,</span>
        transparent 44%<span class="token punctuation">,</span>
        <span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">)</span> 45% 98%<span class="token punctuation">,</span>
        transparent
      <span class="token punctuation">)</span> 0 100%/73% 31% no-repeat<span class="token punctuation">,</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">)</span><span class="token punctuation">)</span> 66% 0/20% 70% no-repeat<span class="token punctuation">,</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
        100% 100% at 100% 0<span class="token punctuation">,</span>
        transparent 0 58%<span class="token punctuation">,</span>
        <span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">)</span> 58.5% 99%<span class="token punctuation">,</span>
        transparent
      <span class="token punctuation">)</span> 100% 0/47% 41.8% no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并单独给 <code v-pre>::before</code> 和 <code v-pre>::after</code> 设置颜色变量</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>
<span class="token selector">+ .douyin::before</span> <span class="token punctuation">{</span>
+  <span class="token property">--color</span><span class="token punctuation">:</span> #08fff9<span class="token punctuation">;</span>
+ <span class="token punctuation">}</span>

<span class="token selector">+ .douyin::after</span> <span class="token punctuation">{</span>
+  <span class="token property">--color</span><span class="token punctuation">:</span> #f00044<span class="token punctuation">;</span>
+ <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，我们要移动其中一个音符，让两个音符不再重叠</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.douyin::before</span> <span class="token punctuation">{</span>
  <span class="token property">--color</span><span class="token punctuation">:</span> #08fff9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.douyin::after</span> <span class="token punctuation">{</span>
  <span class="token property">--color</span><span class="token punctuation">:</span> #f00044<span class="token punctuation">;</span>
+ <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>3%<span class="token punctuation">,</span> 3%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看看效果</p>
<figure><img src="@source/category/HTML/images/21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>好了，但两个音符错位了，但是颜色的混合效果好像还没有，这时候要用到 <code v-pre>mix-blend-mode</code> 属性了，MDN 的定义就是使当前元素与其父元素的内容和背景以某种方式混合，支持的属性有些多，本文就不跳出去讲太多别的东西了，我直接在控制台一个个试过去，发现 <code v-pre>lighten</code>、<code v-pre>plus-lighter</code>、<code v-pre>screen</code> 都是能达到我们的效果的，不过具体作用我还不是很了解，日后可以学习一下</p>
<p>请看尝试过程 👇</p>
<figure><img src="@source/category/HTML/images/22.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>最后我们就设置下 <code v-pre>mix-blend-mode: lighten</code>吧</p>
<p>wow！ 我们的 Logo 制作好啦！</p>
<figure><img src="@source/category/HTML/images/23.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="加个动画" tabindex="-1"><a class="header-anchor" href="#加个动画" aria-hidden="true">#</a> 加个动画</h2>
<hr>
<p>抖音怎么不能不抖？</p>
<p>我们现在设置的是红色的音符向右向上偏移 <code v-pre>3%</code>，那我们现在就要这两个音符都抖起来，其实就是修改它们各自的偏移量。又要改造一下代码了！</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.douyin::before</span> <span class="token punctuation">{</span>
  <span class="token property">--color</span><span class="token punctuation">:</span> #08fff9<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--x<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span> - 3%<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--x<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span> - 3%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.douyin::after</span> <span class="token punctuation">{</span>
  <span class="token property">--color</span><span class="token punctuation">:</span> #f00044<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span>3% - <span class="token function">var</span><span class="token punctuation">(</span>--x<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">calc</span><span class="token punctuation">(</span>3% - <span class="token function">var</span><span class="token punctuation">(</span>--x<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* hover时，设置偏移变量 --x */</span>
<span class="token selector">.douyin:hover::before,
.douyin:hover::after</span> <span class="token punctuation">{</span>
  <span class="token property">--x</span><span class="token punctuation">:</span> 0.1%<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.5<span class="token punctuation">,</span> 300<span class="token punctuation">,</span> 0.5<span class="token punctuation">,</span> -150<span class="token punctuation">)</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请看效果：</p>
<figure><img src="@source/category/HTML/images/24.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>​ 抖动效果</p>
<p>本来还想把我写过的一个 [文字故障风]的效果加到这个 <code v-pre>Logo</code> 里的，一定很酷，但是有些无能为力，因为要给音符设置故障风效果，是要用到伪元素的，而现在音符本身已经是伪元素了，我不能脱离了我本文的标题 &quot;仅用一个 html 标签，实现带动画的抖音 Logo&quot; ，如果你感兴趣，可以下去自己加上，到时候记得艾特我，我也想看看效果</p>
<p>想不到什么花里胡哨的动画了，最后再给大家表演一下 抖音 Logo 的 &quot;异变&quot; 吧</p>
<p>准备好了吗？</p>
<p>3~</p>
<p>2~</p>
<p>1~</p>
<figure><img src="@source/category/HTML/images/25.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>异变的抖音 Logo</p>
<p>哇！不得不说，太好看了！哈哈哈哈，其实实现原理也不难，我只是给元素加了个 <code v-pre>filter: invert(1);</code> 的属性</p>
<h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2>
<hr>
<p>怎么样，我是不是没有标题党？确实是 仅用一个 HTML 标签，实现了一个带动画的抖音 Logo 吧？</p>
</div></template>


