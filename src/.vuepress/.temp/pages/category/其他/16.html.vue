<template><div><h2 id="video-鼠标移动预览" tabindex="-1"><a class="header-anchor" href="#video-鼠标移动预览" aria-hidden="true">#</a> video 鼠标移动预览</h2>
<blockquote>
<p>B 站图片接口
<a href="https://api.bilibili.com/x/player/videoshot?aid=14326240" target="_blank" rel="noopener noreferrer">https://api.bilibili.com/x/player/videoshot?aid=14326240<ExternalLinkIcon/></a></p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
  <span class="token property">"ttl"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"pvdata"</span><span class="token operator">:</span> <span class="token string">"//i0.hdslb.com/bfs/videoshot/23378913.bin"</span><span class="token punctuation">,</span>
    <span class="token property">"img_x_len"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">"img_y_len"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">"img_x_size"</span><span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span>
    <span class="token property">"img_y_size"</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"//i0.hdslb.com/bfs/videoshot/23378913.jpg"</span><span class="token punctuation">,</span>
      <span class="token string">"//i0.hdslb.com/bfs/videoshot/23378913-1.jpg"</span><span class="token punctuation">,</span>
      <span class="token string">"//i0.hdslb.com/bfs/videoshot/23378913-2.jpg"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"index"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>字段</th>
<th>含义</th>
<th>详细</th>
<th>举例</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>缩略图</td>
<td></td>
<td></td>
</tr>
<tr>
<td>data.pvdata</td>
<td>一个二进制文件</td>
<td>缩略图，并不是每一秒都对应一张缩略图，而是每一段对应一张，这个字段应该是时间段与缩略图的对应方式</td>
<td><a href="//i0.hdslb.com/bfs/videoshot/89359010.bin" target="_blank" rel="noopener noreferrer">//i0.hdslb.com/bfs/videoshot/89359010.bin<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>data.img_x_len</td>
<td>每张雪碧图 x 方向图片数量</td>
<td>雪碧图是一个 10*10 的网格</td>
<td>10</td>
</tr>
<tr>
<td>data.img_y_len</td>
<td>每张雪碧图 y 方向图片数量</td>
<td>雪碧图是一个 10*10 的网格</td>
<td>10</td>
</tr>
<tr>
<td>data.img_x_size</td>
<td>单个缩略图图片的尺寸</td>
<td>x 轴</td>
<td>160</td>
</tr>
<tr>
<td>data.img_y_size</td>
<td>单个缩略图图片的尺寸</td>
<td>y 轴</td>
<td>90</td>
</tr>
<tr>
<td>data.image</td>
<td>雪碧图形式的所有缩略图</td>
<td>是一个数组，一次拿到所有的缩略图</td>
<td>[&quot;<a href="//i0.hdslb.com/bfs/videoshot/89359010.jpg" target="_blank" rel="noopener noreferrer">//i0.hdslb.com/bfs/videoshot/89359010.jpg<ExternalLinkIcon/></a>&quot;]</td>
</tr>
</tbody>
</table>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./resources/font-awesome-4.7.0/css/font-awesome.min.css<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./select/select.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">#container</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 170px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 95px<span class="token punctuation">;</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>20210223214102298jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span> //背景图图片
        <span class="token property">background-size</span><span class="token punctuation">:</span> 1700px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#container"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 鼠标移动到指定box上时，触发事件</span>
        <span class="token comment">//获取指定div元素</span>
        container<span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"事件触发!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 获取盒子的位置</span>
          <span class="token keyword">let</span> boxX <span class="token operator">=</span> container<span class="token punctuation">.</span>offsetLeft<span class="token punctuation">;</span>
          <span class="token keyword">let</span> boxY <span class="token operator">=</span> container<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
          <span class="token comment">// 获取鼠标的坐标</span>
          <span class="token keyword">let</span> pageX <span class="token operator">=</span> event<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
          <span class="token keyword">let</span> pageY <span class="token operator">=</span> event<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>
          <span class="token comment">//计算鼠标在盒子中的坐标</span>
          <span class="token keyword">let</span> inBoxX <span class="token operator">=</span> pageX <span class="token operator">-</span> boxX<span class="token punctuation">;</span>
          <span class="token keyword">let</span> inBoxY <span class="token operator">=</span> pageY <span class="token operator">-</span> boxY<span class="token punctuation">;</span>
          <span class="token comment">// console.log("盒子中的坐标:x-->"+inBoxX+"--y-->"+inBoxY);</span>
          <span class="token comment">//计算X轴，并移动图片</span>
          <span class="token comment">//每移动5个值就改变一次图片</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>inBoxX <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//计算显示第几个图片</span>
            <span class="token keyword">let</span> imageIndex <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>inBoxX <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"当前显示第几张图片:"</span> <span class="token operator">+</span> imageIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//计算显示图片在大图中的位置</span>
            <span class="token comment">//计算显示图片的X轴(计算的是大图中的X轴)</span>
            <span class="token keyword">let</span> imageX <span class="token operator">=</span> <span class="token number">170</span> <span class="token operator">*</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>imageIndex <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//计算显示图片的Y轴(计算的是大图中的Y轴)</span>
            <span class="token keyword">let</span> imageY <span class="token operator">=</span> <span class="token number">95</span> <span class="token operator">*</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>imageIndex <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"imageX:"</span> <span class="token operator">+</span> imageX<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"imageY:"</span> <span class="token operator">+</span> imageY<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//修改背景图片</span>
            container<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundPosition <span class="token operator">=</span>
              <span class="token string">"-"</span> <span class="token operator">+</span> imageX <span class="token operator">+</span> <span class="token string">"px"</span> <span class="token operator">+</span> <span class="token string">" -"</span> <span class="token operator">+</span> imageY <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>参考地址
<a href="https://blog.csdn.net/Mr_FenKuan/article/details/114003333?spm=1001.2101.3001.6650.7&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-114003333-blog-90724799.topblog&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-114003333-blog-90724799.topblog&amp;utm_relevant_index=12" target="_blank" rel="noopener noreferrer">仿 BiliBili 视屏缩略图实现<ExternalLinkIcon/></a></p>
</blockquote>
</div></template>


