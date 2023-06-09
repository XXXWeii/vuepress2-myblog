<template><div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<hr>
<p>自从引入组合式 API 的概念以来，一个主要的未解决的问题就是 <code v-pre>ref</code> 和 <code v-pre>reactive</code> 到底用哪个。<code v-pre>reactive</code> 存在解构丢失响应性的问题，而 <code v-pre>ref</code> 需要到处使用 <code v-pre>.value</code> 则感觉很繁琐，并且在没有类型系统的帮助时很容易漏掉 <code v-pre>.value</code>。</p>
<p>例如，下面的计数器：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;template>
  &lt;button @click="increment">{{ count }}&lt;/button>
&lt;/template>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>ref</code> 定义 <code v-pre>count</code> 变量和 <code v-pre>increment</code> 方法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let count = ref(0)

function increment() {
  count.value++
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而使用响应性语法糖，我们可以像这样书写代码：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let count = $ref(0)

function increment() {
  count++
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>Vue 的响应性语法糖是一个编译时的转换步骤，<code v-pre>$ref()</code> 方法是一个<strong>编译时的宏命令</strong>，它不是一个真实的、在运行时会调用的方法，而是用作 Vue 编译器的标记，表明最终的 <code v-pre>count</code> 变量需要是一个<strong>响应式变量</strong>。</li>
<li>响应式的变量可以像普通变量那样被访问和重新赋值，但这些操作在编译后都会变为带 <code v-pre>.value</code> 的 <code v-pre>ref</code>。所以上面例子中的代码也会被编译成使用 <code v-pre>ref</code> 定义的语法。</li>
<li>每一个会返回 <code v-pre>ref</code> 的响应式 API 都有一个相对应的、以 <code v-pre>$</code> 为前缀的宏函数。包括以下这些 API：</li>
</ol>
<ul>
<li>ref -&gt; $ref</li>
<li>computed -&gt; $computed</li>
<li>shallowRef -&gt; $shallowRef</li>
<li>customRef -&gt; $customRef</li>
<li>toRef -&gt; $toRef</li>
</ul>
<ol>
<li>可以使用 <code v-pre>$()</code> 宏来将现存的 <code v-pre>ref</code> 转换为响应式变量。</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>const a = ref(0)
let count = $(a)
count++
console.log(a.value) // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>可以使用 <code v-pre>$$()</code> 宏来将任何对响应式变量的引用都会保留为对相应 <code v-pre>ref</code> 的引用。</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let count = $ref(0)
console.log(isRef($$(count))) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>$$()</code> 也适用于已解构的 <code v-pre>props</code>，因为它们也是响应式的变量。编译器会高效地通过 <code v-pre>toRef</code> 来做转换：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>const { count } = defineProps&lt;{ count: number }>()
passAsRef($$(count))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<hr>
<p>响应性语法糖是 <strong>组合式 API</strong> 特有的功能，且必须通过构建步骤使用。</p>
<ol>
<li>必须，需要 <code v-pre>@vitejs/plugin-vue@&gt;=2.0.0</code>，将应用于 SFC 和 js(x)/ts(x) 文件。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">reactivityTransform</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>注意 <code v-pre>reactivityTransform</code> 现在是一个插件的顶层选项，而不再是位于 <code v-pre>script.refSugar</code> 之中了，因为它不仅仅只对 SFC 起效。</li>
</ul>
<p>如果是 <code v-pre>vue-cli</code> 构建，需要 <code v-pre>vue-loader@&gt;=17.0.0</code>，目前仅对 SFC 起效。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>module
      <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">"vue"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"vue-loader"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>options<span class="token punctuation">,</span>
          <span class="token literal-property property">reactivityTransform</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是 <code v-pre>webpack</code> + <code v-pre>vue-loader</code> 构建，需要 <code v-pre>vue-loader@&gt;=17.0.0</code>，目前仅对 SFC 起效。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"vue-loader"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">reactivityTransform</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>可选，<code v-pre>tsconfig.json</code> 文件中添加如下代码, 不然会报错 <code v-pre>TS2304: Cannot find name '$ref'.</code>，虽然不影响使用,但是会影响开发体验：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>"compilerOptions":{ "types": ["vue/ref-macros"] }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>可选，<code v-pre>eslintrc.cjs</code> 文件中添加如下代码，不然会提示 <code v-pre>ESLint: '$ref' is not defined.(no-undef)</code>：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>module.exports = { globals: {
    $ref: "readonly",
    $computed: "readonly",
    $shallowRef: "readonly",
    $customRef: "readonly",
    $toRef: "readonly",
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.当启用响应性语法糖时，这些宏函数都是全局可用的、无需手动导入。也可以在 vue 文件中显式引入 <code v-pre>vue/macros</code>，这样就不用配置第二和第三步中的 <code v-pre>tsconfig.json</code> 和 <code v-pre>eslintrc</code> 了。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import { $ref } from 'vue/macros'

let count = $ref(0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="已废弃的实验性功能" tabindex="-1"><a class="header-anchor" href="#已废弃的实验性功能" aria-hidden="true">#</a> 已废弃的实验性功能</h2>
<hr>
<ol>
<li>响应性语法糖曾经是一个实验性功能，且已被废弃，请阅读<strong>废弃原因</strong>[1]。</li>
<li>在未来的一个小版本更新中，它将会从 Vue core 中被移除。如需继续使用，请通过 <strong>Vue Macros</strong>[2] 插件</li>
</ol>
<h2 id="废弃原因" tabindex="-1"><a class="header-anchor" href="#废弃原因" aria-hidden="true">#</a> 废弃原因</h2>
<hr>
<p>尤雨溪在 2023 年 2 月 21 日上午 10:05 GMT+8，亲自给出了废弃的原因，翻译如下：</p>
<p>正如你们中的许多人已经知道的那样，我们在团队一致同意的情况下正式放弃了这个 RFC。</p>
<h3 id="理由" tabindex="-1"><a class="header-anchor" href="#理由" aria-hidden="true">#</a> 理由</h3>
<p>Reactivity Transform 的最初目标是通过在处理反应状态时提供更简洁的语法来改善开发人员的体验。我们将其作为实验性产品发布，以收集来自现实世界使用情况的反馈。尽管提出了这些好处，我们还是发现了以下问题：</p>
<ol>
<li>失去 <code v-pre>.value</code> 使得更难分辨正在跟踪的内容以及哪条线触发了反应效果。这个问题在小型 SFC 中并不那么明显，但在大型代码库中，心理开销变得更加明显，特别是如果语法也在 SFC <strong>之外使用。</strong></li>
<li>由于 (1)，一些用户选择仅在 SFC 内部使用 Reactivity Transform，这会在不同心智模型之间造成不一致和上下文转换成本。因此，困境在于仅在 SFC 内部使用它会导致不一致，但在 SFC 外部使用它会损害可维护性。</li>
<li>由于仍然会有外部函数期望使用原始引用，因此反应变量和原始引用之间的转换是不可避免的。这最终增加了更多的学习内容和额外的精神负担，我们注意到这比普通的 Composition API 更让初学者感到困惑。</li>
</ol>
<p>最重要的是，碎片化的潜在风险。尽管这是明确的选择加入，但一些用户对该提议表示强烈反对，原因是他们担心他们将不得不与不同的代码库一起工作，在这些代码库中，有些人选择了使用它，而有些人则没有。这是一个合理的担忧，因为 Reactivity Transform 需要一种不同的心智模型，它会扭曲 JavaScript 语义（变量赋值能够触发反应效果）。</p>
<p>考虑到所有因素，我们认为将其作为一个稳定的功能使用会导致问题多于收益，因此不是一个好的权衡。</p>
<h3 id="迁移计划" tabindex="-1"><a class="header-anchor" href="#迁移计划" aria-hidden="true">#</a> 迁移计划</h3>
<ul>
<li>该功能已经通过 <strong>Vue Macros</strong>[3] 以外部包的形式得到支持。</li>
<li>3.3：该功能将被标记为已弃用。它将继续工作，但您应该在此期间迁移到 Vue Macros。</li>
<li>3.4：该功能将从核心中删除，除非使用 Vue Macros，否则将不再有效。</li>
</ul>
<h3 id="留言" tabindex="-1"><a class="header-anchor" href="#留言" aria-hidden="true">#</a> 留言</h3>
<ul>
<li>虽然 Reactivity Transform 会从官方包中移除，但我认为这是一个很好的尝试。</li>
<li>写得好。我喜欢详细的 RFC 和基于用户反馈的客观评估。最后的结论很有道理。不要让完美成为优秀的敌人。</li>
<li>虽然我很享受这个功能带来的便利，但我在实际使用中确实发现了这个潜在的碎片问题。在未来的版本中删除此功能可能不太情愿，但工程师应该认真对待。🙂</li>
<li>您是删除所有功能还是仅删除 <code v-pre>ref.value</code> 进行转换的部分？响应式 <code v-pre>props</code> 解构呢，它会留下来吗？</li>
<li>我一直在将它用于中等规模的电子商务网站，没有任何问题。我理解删除它背后的基本原理，但在实践中我发现它确实是一个很大的改进。所以我的问题是：现在怎么办？</li>
<li>是否建议那些讨厌 <code v-pre>.value</code> 的人现在尽可能避免使用 <code v-pre>ref()</code> 并像以前那样使用 <code v-pre>reactive()</code>？</li>
<li><code v-pre>.value</code> 是必要的复杂性。就像任何其他响应式库 <code v-pre>xxx.set()</code> 一样。</li>
<li>创建一个转换所有 Reactivity Transform 代码的包应该很容易吧？我也喜欢按照推荐的方式做事。</li>
<li>...</li>
</ul>
<h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<p>[1]废弃原因: <em><a href="https://github.com/vuejs/rfcs/discussions/369#discussioncomment-5059028" target="_blank" rel="noopener noreferrer">https://github.com/vuejs/rfcs/discussions/369#discussioncomment-5059028<ExternalLinkIcon/></a></em></p>
<p>[2]Vue Macros: <em><a href="https://vue-macros.sxzz.moe/features/reactivity-transform.html" target="_blank" rel="noopener noreferrer">https://vue-macros.sxzz.moe/features/reactivity-transform.html<ExternalLinkIcon/></a></em></p>
<p>[3]Vue Macros: <em><a href="https://vue-macros.sxzz.moe/features/reactivity-transform.html" target="_blank" rel="noopener noreferrer">https://vue-macros.sxzz.moe/features/reactivity-transform.html<ExternalLinkIcon/></a></em></p>
</div></template>


