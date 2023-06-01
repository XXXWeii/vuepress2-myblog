<template><div><blockquote>
<p>Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档</p>
</blockquote>
<h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h2>
<p>使用<code v-pre>#</code>号可表示 1-6 级标题，一级标题对应一个<code v-pre>#</code>号，二级标题对应两个<code v-pre>#</code>号，以此类推。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<h1 id="一级标题" tabindex="-1"><a class="header-anchor" href="#一级标题" aria-hidden="true">#</a> 一级标题</h1>
<h2 id="二级标题" tabindex="-1"><a class="header-anchor" href="#二级标题" aria-hidden="true">#</a> 二级标题</h2>
<h3 id="三级标题" tabindex="-1"><a class="header-anchor" href="#三级标题" aria-hidden="true">#</a> 三级标题</h3>
<h4 id="四级标题" tabindex="-1"><a class="header-anchor" href="#四级标题" aria-hidden="true">#</a> 四级标题</h4>
<h5 id="五级标题" tabindex="-1"><a class="header-anchor" href="#五级标题" aria-hidden="true">#</a> 五级标题</h5>
<h6 id="六级标题" tabindex="-1"><a class="header-anchor" href="#六级标题" aria-hidden="true">#</a> 六级标题</h6>
<p>也可以使用<code v-pre>==</code>来表示 1 级标题，<code v-pre>__</code>来表示 2 级标题</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>这是一级标题
==
这是二级标题
--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<h1 id="一级标题-1" tabindex="-1"><a class="header-anchor" href="#一级标题-1" aria-hidden="true">#</a> 一级标题</h1>
<h2 id="二级标题-1" tabindex="-1"><a class="header-anchor" href="#二级标题-1" aria-hidden="true">#</a> 二级标题</h2>
<h2 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>*我是斜体*
_我是斜体_
**我是粗体**
__我是粗体__
***我是粗斜体***
___我是粗斜体___
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>我是斜体</em></p>
<p><em>我是斜体</em></p>
<p><strong>我是粗体</strong></p>
<p><strong>我是粗体</strong></p>
<p><strong><em>我是粗斜体</em></strong></p>
<p><strong><em>我是粗斜体</em></strong></p>
<h2 id="线条" tabindex="-1"><a class="header-anchor" href="#线条" aria-hidden="true">#</a> 线条</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>~~我是删除~~
&lt;u>这是一条下划线&lt;/u>
这是一条分割线
***
这是一条分割线
* * *
这是一条分割线
- - -
这是一条分割线
--------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><s>我是删除</s></p>
<p><u>这是一条下划线</u></p>
<p>这是一条分割线</p>
<hr>
<p>这是一条分割线</p>
<hr>
<p>这是一条分割线</p>
<hr>
<h2 id="这是一条分割线" tabindex="-1"><a class="header-anchor" href="#这是一条分割线" aria-hidden="true">#</a> 这是一条分割线</h2>
<p><strong>注意：</strong>三个或三个以上的<code v-pre>-</code>或<code v-pre>*</code></p>
<h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2>
<h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h3>
<p>使用<code v-pre>+</code>, <code v-pre>-</code>, <code v-pre>*</code> 其中任何一个作为标记</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>* list1
+ list2
- list3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>list1</li>
<li>list2</li>
<li>list3</li>
</ul>
<h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h3>
<p>使用数字 + <code v-pre>.</code>来表示</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1. list1
2. list2
3. list3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>list1</li>
<li>list2</li>
<li>list3</li>
</ol>
<h3 id="列表嵌套" tabindex="-1"><a class="header-anchor" href="#列表嵌套" aria-hidden="true">#</a> 列表嵌套</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1. list1
  - list1-1
  - list1-2
2. list2
  - list2-1
  - list2-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>list1</li>
</ol>
<ul>
<li>list1-1</li>
<li>list1-2</li>
</ul>
<ol start="2">
<li>list2</li>
</ol>
<ul>
<li>list2-1</li>
<li>list2-2</li>
</ul>
<h3 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表" aria-hidden="true">#</a> 任务列表</h3>
<p><strong>注：</strong>此种写法在 vuepress 中无效,可以使用原生的复选框代替</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>- [ ] 吃饭
- [x] 睡觉  //打x的表示已完成
- [ ] 打豆豆
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 吃饭</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 睡觉 //打 x 的表示已完成</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 打豆豆</label></li>
</ul>
<div class="language-HTML line-numbers-mode" data-ext="HTML"><pre v-pre class="language-HTML"><code>&lt;label&gt;&lt;input type=&quot;checkbox&quot;&gt;吃饭&lt;/label&gt;
&lt;label&gt;&lt;input type=&quot;checkbox&quot; checked&gt;睡觉&lt;/label&gt;
&lt;label&gt;&lt;input type=&quot;checkbox&quot;&gt;打豆豆&lt;/label&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><label><input type="checkbox">吃饭</label>
<label><input type="checkbox" checked>睡觉</label>
<label><input type="checkbox">打豆豆</label></p>
<h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h3>
<p>可以无限引用,但是没什么太大的意义</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>> 前言:第一层引用
>> 前言:第二层引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>前言:第一层引用</p>
<blockquote>
<p>前言:第二层引用</p>
</blockquote>
</blockquote>
<h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[百度](https://www.baidu.com)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">百度<ExternalLinkIcon/></a></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;https://www.baidu.com>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">https://www.baidu.com<ExternalLinkIcon/></a></p>
<h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>![alt 属性文本](图片链接)
![占位符](https://iph.href.lu/200x200)	//在线图片
![占位符](/achievements-icon.png "测试")	//本地图片
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://iph.href.lu/200x200" alt="占位符" loading="lazy">
<img src="@source/category/其他/images/achievements-icon.png" alt="占位符" loading="lazy"></p>
<h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2>
<p>Markdown 使用 | 来分隔不同单元格,使用 - 来分隔表头和主体</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>|标题1|标题2|标题2
| :- | :-: | -:
|行1列1|行1列2|行1列3
|行2列1|行2列2|行2列3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">标题 1</th>
<th style="text-align:center">标题 2</th>
<th style="text-align:right">标题 2</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">行 1 列 1</td>
<td style="text-align:center">行 1 列 2</td>
<td style="text-align:right">行 1 列 3</td>
</tr>
<tr>
<td style="text-align:left">行 2 列 1</td>
<td style="text-align:center">行 2 列 2</td>
<td style="text-align:right">行 2 列 3</td>
</tr>
</tbody>
</table>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<h3 id="单行代码" tabindex="-1"><a class="header-anchor" href="#单行代码" aria-hidden="true">#</a> 单行代码</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>(```)
console.log(1)
(```)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里在几个平台测试了一下,发现有的能显示,有的不能显示,所以这里在 ```外面包裹一层()只用于展示使用 效果如下:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>console.log(1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者直接使用 4 个空格,也是可以展示一个代码片段</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>console.log(1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h2>
<p>Markdown 还支持流程图或甘特图之类的.但是因为不同的平台对其支持都是不同的,有的支持,有的不支持,因此就不展示流程图的代码了。</p>
<h2 id="兼容-html" tabindex="-1"><a class="header-anchor" href="#兼容-html" aria-hidden="true">#</a> 兼容 HTML</h2>
<p>Markdown 的目标是成为一种适用于网络的书写语言.它的标签较少,只对应了 HTML 中的一部分.不在其覆盖范围内的,我们可以使用 html 标签来书写.(貌似也有的平台是不支持的)</p>
<div class="language-HTML line-numbers-mode" data-ext="HTML"><pre v-pre class="language-HTML"><code>&lt;span style=&quot;color:orange;&quot;&gt;orange&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果如下:</p>
<p><span style="color:orange;">orange</span></p>
<p>使用<code v-pre>kbd</code>来展示按键:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;kbd>Ctrl&lt;/kbd>+&lt;kbd>S&lt;/kbd>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><kbd>Ctrl</kbd>+<kbd>S</kbd>来保存文档</p>
<p>使用反斜杠转义特殊字符:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>\*\* 正常显示 \*\*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>** 正常显示 **</p>
<h2 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h2>
<p>使用<code v-pre>[^]</code>来定义注解：(<span style="color:#ff0000;">vuepress</span>中无效)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>我是一个注解[^注解1]
我也是一个注解[^注解2]
去[百度][1]

[^注解1]:我是注解1

[^注解2]:我是注解2
[1]: http://www.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p>我是一个注解<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup><br>
我也是一个注解<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2" /></sup><br>
去<a href="http://www.google.com" target="_blank" rel="noopener noreferrer">Google<ExternalLinkIcon/></a></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>我是注解 1 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote2" class="footnote-item"><p>我是注解 2 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


