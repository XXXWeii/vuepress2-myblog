<template><div><p>今天要介绍的这些 HTML 技巧，绝对会让你大吃一惊！</p>
<h2 id="_1-使用-capture-属性打开设备摄像头" tabindex="-1"><a class="header-anchor" href="#_1-使用-capture-属性打开设备摄像头" aria-hidden="true">#</a> 1. 使用 capture 属性打开设备摄像头</h2>
<hr>
<p>正如<code v-pre>input</code>标签具有<code v-pre>email</code>、<code v-pre>text</code>和<code v-pre>password</code>属性一样，我们也可以通过一些属性打开移动设备的摄像头以捕获图像。</p>
<p>那就是<code v-pre>capture</code>属性，属性值有两个：</p>
<ul>
<li><code v-pre>user</code>用于前置摄像头</li>
<li><code v-pre>environment</code>用于后置摄像头</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">capture</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/*<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-网站自动刷新" tabindex="-1"><a class="header-anchor" href="#_2-网站自动刷新" aria-hidden="true">#</a> 2. 网站自动刷新</h2>
<hr>
<p>你可以在<code v-pre>head</code>标签中将网站设置为定时刷新！</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refresh<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此代码段可以实现每 10 秒刷新一次网站。</p>
<h2 id="_3-激活拼写检查" tabindex="-1"><a class="header-anchor" href="#_3-激活拼写检查" aria-hidden="true">#</a> 3. 激活拼写检查</h2>
<hr>
<p>你可以使用 HTML 的<code v-pre>spellcheck</code>属性并将其设置为<code v-pre>true</code>以激活拼写检查。使用<code v-pre>lang</code>属性指定待检查的语言。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">spellcheck</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是一个标准属性，得到了大多数浏览器的支持。</p>
<figure><img src="@source/category/HTML/images/202303281.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_4-指定要上传的文件类型" tabindex="-1"><a class="header-anchor" href="#_4-指定要上传的文件类型" aria-hidden="true">#</a> 4. 指定要上传的文件类型</h2>
<hr>
<p>你可以使用<code v-pre>accept</code>属性在<code v-pre>input</code>标签中指定允许用户上传的文件类型。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.jpeg,.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-阻止浏览器翻译" tabindex="-1"><a class="header-anchor" href="#_5-阻止浏览器翻译" aria-hidden="true">#</a> 5. 阻止浏览器翻译</h2>
<hr>
<p>将<code v-pre>translate</code>属性设置为<code v-pre>no</code>会阻止浏览器翻译该内容。如果你不想翻译某个短语或单词，例如 logo、公司或品牌名称，那就可以应用这个属性。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">translate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Brand name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-在-input-标签中输入多个项目" tabindex="-1"><a class="header-anchor" href="#_6-在-input-标签中输入多个项目" aria-hidden="true">#</a> 6. 在 input 标签中输入多个项目</h2>
<p>这可以通过<code v-pre>multiple</code>属性来完成。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">multiple</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>适用于文件和电子邮件。如果是电子邮件，则可以用逗号分隔。</p>
<h2 id="_7-为视频创建海报-缩略图" tabindex="-1"><a class="header-anchor" href="#_7-为视频创建海报-缩略图" aria-hidden="true">#</a> 7. 为视频创建海报（缩略图）</h2>
<hr>
<p>使用<code v-pre>poster</code>属性，我们可以在视频加载时，或者在用户点击播放按钮之前，显示指定的缩略图。</p>
<p>如果不指定图片，则默认使用视频的第一帧作为缩略图。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">poster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>picture.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-点击链接自动下载" tabindex="-1"><a class="header-anchor" href="#_8-点击链接自动下载" aria-hidden="true">#</a> 8. 点击链接自动下载</h2>
<hr>
<p>如果你希望在单击目标资源的链接时下载特定资源，那就添加<code v-pre>download</code>属性。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image.png<span class="token punctuation">"</span></span> <span class="token attr-name">download</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


