<template><div><p>我们应该编写不言自明、易于理解、易于修改或易于扩展新功能的代码。因为代码常常需要被阅读，这就是为什么如此强调干净代码的原因。</p>
<p>我们的源代码可读性越强，则：</p>
<ul>
<li>越容易维护</li>
<li>新开发人员理解代码所需的时间越少</li>
<li>越容易发现哪些代码可以重用</li>
</ul>
<p>在这篇文章中，我将分享一些通用的干净编码原则以及一些特定于 JavaScript 的干净编码实践。</p>
<h2 id="_0-命名" tabindex="-1"><a class="header-anchor" href="#_0-命名" aria-hidden="true">#</a> 0. 命名</h2>
<hr>
<p>不要把命名变成猜谜游戏。变量和函数的名称最好能够揭示最初创建的意图。</p>
<p>如此一来，即使有新的开发人员加入团队，也不至于需要像看天书一样艰难地理解代码。</p>
<blockquote>
<p>只有在你希望以后的开发人员需要猜测你现在的想法时，才简写或缩写名称。</p>
</blockquote>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">></span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">-</span> x <span class="token operator">></span> <span class="token number">1990</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> userAge <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> currentYear <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>userAge <span class="token operator">></span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>currentYear <span class="token operator">-</span> userAge <span class="token operator">></span> <span class="token number">1990</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，不要在变量名或函数名中添加多余的不必要的字母。</p>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> nameValue<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">theProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">product</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-条件句" tabindex="-1"><a class="header-anchor" href="#_1-条件句" aria-hidden="true">#</a> 1. 条件句</h2>
<hr>
<p>避免否定条件语句。否定语句通常比肯定语句更难理解。</p>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">userExist</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">userExist</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-函数应该专注做单一一件事" tabindex="-1"><a class="header-anchor" href="#_2-函数应该专注做单一一件事" aria-hidden="true">#</a> 2. 函数应该专注做单一一件事</h2>
<hr>
<p>函数的平均行数不应超过 30 行（不包括空格和注释）。函数越小，则越容易理解和重构。你可以用函数修改或查询某些内容，但不能同时修改或查询。</p>
<h2 id="_3-使用默认参数" tabindex="-1"><a class="header-anchor" href="#_3-使用默认参数" aria-hidden="true">#</a> 3. 使用默认参数</h2>
<hr>
<p>使用默认参数而不是短路或条件语句。</p>
<p>默认参数通常比短路更干净。请记住，在你使用默认参数的时候，函数将只为未定义的参数提供默认值。其他虚假值，例如 ''、&quot;&quot;、false、null、0 和 NaN，不会被默认值替换。</p>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserData</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userName <span class="token operator">=</span> userName <span class="token operator">||</span> <span class="token string">"Patrick Collision"</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserData</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"Patrick Collision"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-单级抽象-sla" tabindex="-1"><a class="header-anchor" href="#_4-单级抽象-sla" aria-hidden="true">#</a> 4. 单级抽象（SLA）</h2>
<hr>
<p>在编写函数时，如果你有多个抽象级别，那么函数通常会做不止一件事情。将一个大的函数分成多个函数会使其更具可重用性，并且测试起来更容易。</p>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkSomething</span><span class="token punctuation">(</span><span class="token parameter">statement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">REGEXES</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> statements <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tokens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token constant">REGEXES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">REGEX</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    statements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">statement</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  tokens<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">token</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// lex...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  names<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// parse...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkSomething</span><span class="token punctuation">(</span><span class="token parameter">statement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> tokens <span class="token operator">=</span> <span class="token function">tokenize</span><span class="token punctuation">(</span>statement<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> syntaxTree <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>tokens<span class="token punctuation">)</span><span class="token punctuation">;</span>
  syntaxTree<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// parse...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">tokenize</span><span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">REGEXES</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> statements <span class="token operator">=</span> code<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tokens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token constant">REGEXES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">REGEX</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    statements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">statement</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      tokens<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> tokens<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token parameter">tokens</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> syntaxTree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  tokens<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">token</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    syntaxTree<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> syntaxTree<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-不要忽略被捕获的异常" tabindex="-1"><a class="header-anchor" href="#_5-不要忽略被捕获的异常" aria-hidden="true">#</a> 5. 不要忽略被捕获的异常</h2>
<hr>
<p>对捕获的异常错误不采取任何措施，即意味着不修复特定的错误也不对其做出反应。</p>
<p>将错误记录到控制台(<code v-pre>console.log</code>)并没有好多少，因为记录经常会在控制台的其他内容中丢失。</p>
<p>如果你在<code v-pre>try/catch</code>中包装了哪怕一点点代码，也意味着你认为那里可能会发生错误，因此你应该对何时发生错误有一个计划。</p>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">functionThatMightThrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">functionThatMightThrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">notifyUserOfError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">reportErrorToService</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-尽量减少注释" tabindex="-1"><a class="header-anchor" href="#_6-尽量减少注释" aria-hidden="true">#</a> 6. 尽量减少注释</h2>
<hr>
<p>仅注释具有业务逻辑复杂性的代码部分。</p>
<p>注释不是必需的。好的代码大多数可以自我说明。</p>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hashing</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// The hash</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// Length of string</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token comment">// Loop through every character in data</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Get character code.</span>
    <span class="token keyword">const</span> char <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Make the hash</span>
    hash <span class="token operator">=</span> <span class="token punctuation">(</span>hash <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">-</span> hash <span class="token operator">+</span> char<span class="token punctuation">;</span>
    <span class="token comment">// Convert to 32-bit integer</span>
    hash <span class="token operator">&amp;=</span> hash<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hashing</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> char <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    hash <span class="token operator">=</span> <span class="token punctuation">(</span>hash <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">-</span> hash <span class="token operator">+</span> char<span class="token punctuation">;</span>

    <span class="token comment">// Convert to 32-bit integer</span>
    hash <span class="token operator">&amp;=</span> hash<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>“多余的注释就是谎言和错误信息的垃圾桶。” ——Robert C. Martin</p>
</blockquote>
<h2 id="_7-移除注释掉的代码" tabindex="-1"><a class="header-anchor" href="#_7-移除注释掉的代码" aria-hidden="true">#</a> 7. 移除注释掉的代码</h2>
<hr>
<p>不要在代码库中留下注释掉的代码，版本控制的存在是有原因的。将旧代码留在历史记录中。如果你需要的话，再从 git 历史记录中获取。</p>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// doOtherStuff();</span>
<span class="token comment">// doSomeMoreStuff();</span>
<span class="token comment">// doSoMuchStuff();</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-只导入你需要的" tabindex="-1"><a class="header-anchor" href="#_8-只导入你需要的" aria-hidden="true">#</a> 8. 只导入你需要的</h2>
<hr>
<p>ES6 引入了解构。它可以将数组中的值或对象中的属性解包为不同的变量。你可以将其用于任何类型的对象或模块。</p>
<p>例如，如果你只需要另一个模块中的<code v-pre>add()</code>和<code v-pre>subtract()</code>函数：</p>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> calculate <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./calculations"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

calculate<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
calculate<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> add<span class="token punctuation">,</span> subtract <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./calculations"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只导入需要在文件中使用的函数而不是整个模块，然后从中访问特定函数是有意义的。</p>
<h2 id="_9-保持函数参数不超过-3-个-理想情况下" tabindex="-1"><a class="header-anchor" href="#_9-保持函数参数不超过-3-个-理想情况下" aria-hidden="true">#</a> 9. 保持函数参数不超过 3 个（理想情况下）</h2>
<hr>
<p>限制函数参数的数量非常重要，因为这样可以更轻松地测试函数。参数超过 3 个会导致需要测试大量不同的情况。</p>
<p>1-3 个参数是最理想的情况，正常情况下，参数数量应避免任何超出此范围。</p>
<p>通常，如果你有三个以上的参数，那么说明函数要做的事情太多了，违反 SRP（单一职责原则）。</p>
<h2 id="_10-使用数组展开来复制数组" tabindex="-1"><a class="header-anchor" href="#_10-使用数组展开来复制数组" aria-hidden="true">#</a> 10. 使用数组展开来复制数组</h2>
<hr>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> i<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  itemsCopy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_11-写线性代码" tabindex="-1"><a class="header-anchor" href="#_11-写线性代码" aria-hidden="true">#</a> 11. 写线性代码</h2>
<hr>
<p>嵌套的代码很难理解。所以我们应该尽可能地编写线性代码，这样的代码简单、干净、易于阅读和维护，使开发人员的工作更轻松。</p>
<p>例如，在回调上使用<code v-pre>promise</code>可以大大提高可读性。</p>
<h2 id="_12-使用-eslint-和-prettier" tabindex="-1"><a class="header-anchor" href="#_12-使用-eslint-和-prettier" aria-hidden="true">#</a> 12. 使用 ESLint 和 Prettier</h2>
<hr>
<p>始终使用<code v-pre>ESLint</code>和<code v-pre>Prettier</code>来强制跨团队和开发人员使用通用的编码风格。</p>
<p>还可以尝试使用 JavaScript 的最新功能来编写代码，例如解构、展开运算符、异步等待、模板字面量、可选链等等。</p>
<h2 id="_13-适当使用括号" tabindex="-1"><a class="header-anchor" href="#_13-适当使用括号" aria-hidden="true">#</a> 13. 适当使用括号</h2>
<hr>
<p>使用运算符时，请将它们括在括号中。唯一的例外是标准算术运算符：<code v-pre>+</code>、<code v-pre>-</code> 和 <code v-pre>**</code>，因为它们的优先级被广泛理解。强烈建议将 <code v-pre>/</code>、<code v-pre>*</code> 和 <code v-pre>%</code> 括在括号中，因为当它们一起使用时，其优先级可能会引起困惑。</p>
<p>这不但提高了可读性，而且阐明了开发人员的意图。</p>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> c <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">||</span> d <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">||</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> c <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">||</span> d <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">||</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确保你的代码不会导致以下情况：</p>
<figure><img src="@source/category/JavaScript/images/202304101.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>
<h2 id="_14-早早地从函数中返回" tabindex="-1"><a class="header-anchor" href="#_14-早早地从函数中返回" aria-hidden="true">#</a> 14.早早地从函数中返回</h2>
<hr>
<p>为避免<code v-pre>if</code>语句的深层嵌套，始终尽可能早地返回函数的值。</p>
<p>Bad 👎</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isPercentage</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good 👍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isPercentage</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个特殊的例子甚至可以进一步改进：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isPercentage</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> isInRange <span class="token operator">=</span> val <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> isInRange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理，同样的事情也可以应用于循环。</p>
<p>大的循环肯定会消耗大量时间。这就是为什么你应该尽可能早地跳出循环。</p>
<h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2>
<hr>
<p>开发社区中有一种说法，那就是我们应该在想象下一个开发人员是个连环杀手的鞭策下写代码。</p>
<p>所以，好好学习这 15 个技巧，它们可以帮助你免于受到其他开发人员查看你的代码时会对你造成的伤害哦，哈哈。</p>
</div></template>


