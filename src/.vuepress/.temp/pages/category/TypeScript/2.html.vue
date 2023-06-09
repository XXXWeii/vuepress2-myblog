<template><div><p>Typescript 在类型检查方面非常强大，但有时某些类型是其他类型的子集并且需要为它们定义类型检查时，它会变得乏味。</p>
<p>举个例子，有两种响应类型：</p>
<h2 id="用户配置文件响应" tabindex="-1"><a class="header-anchor" href="#用户配置文件响应" aria-hidden="true">#</a> 用户配置文件响应</h2>
<hr>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UserProfileResponse</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  phone<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  avatar<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="登录响应" tabindex="-1"><a class="header-anchor" href="#登录响应" aria-hidden="true">#</a> 登录响应</h2>
<hr>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">LoginResponse</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以为 UserProfileResponse 定义类型并为 LoginResponse 选择一些属性，而不是定义相同上下文 LoginResponse 和 UserProfileResponse 的类型。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LoginResponse</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>UserProfileResponse<span class="token punctuation">,</span> <span class="token string">"id"</span> <span class="token operator">|</span> <span class="token string">"name"</span><span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>让我们了解一些可以帮助您编写更好代码的实用函数。</p>
<h2 id="_01、uppercase" tabindex="-1"><a class="header-anchor" href="#_01、uppercase" aria-hidden="true">#</a> 01、Uppercase</h2>
<hr>
<p>构造一个 Type 的所有属性都设置为大写的类型。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Role</span> <span class="token operator">=</span> <span class="token string">"admin"</span> <span class="token operator">|</span> <span class="token string">"user"</span> <span class="token operator">|</span> <span class="token string">"guest"</span><span class="token punctuation">;</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">type</span> <span class="token class-name">UppercaseRole</span> <span class="token operator">=</span> <span class="token string">"ADMIN"</span> <span class="token operator">|</span> <span class="token string">"USER"</span> <span class="token operator">|</span> <span class="token string">"GUEST"</span><span class="token punctuation">;</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">UppercaseRole</span> <span class="token operator">=</span> Uppercase<span class="token operator">&lt;</span>Role<span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// "ADMIN" | "USER" | "GUEST"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02、lowercase" tabindex="-1"><a class="header-anchor" href="#_02、lowercase" aria-hidden="true">#</a> 02、Lowercase</h2>
<hr>
<p>构造一个 Type 的所有属性都设置为小写的类型，与大写相反。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Role</span> <span class="token operator">=</span> <span class="token string">"ADMIN"</span> <span class="token operator">|</span> <span class="token string">"USER"</span> <span class="token operator">|</span> <span class="token string">"GUEST"</span><span class="token punctuation">;</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">type</span> <span class="token class-name">LowercaseRole</span> <span class="token operator">=</span> <span class="token string">"admin"</span> <span class="token operator">|</span> <span class="token string">"user"</span> <span class="token operator">|</span> <span class="token string">"guest"</span><span class="token punctuation">;</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">LowercaseRole</span> <span class="token operator">=</span> Lowercase<span class="token operator">&lt;</span>Role<span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// "admin" | "user" | "guest"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03、capitalize" tabindex="-1"><a class="header-anchor" href="#_03、capitalize" aria-hidden="true">#</a> 03、Capitalize</h2>
<hr>
<p>构造一个将 Type 的所有属性设置为大写的类型。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Role</span> <span class="token operator">=</span> <span class="token string">"admin"</span> <span class="token operator">|</span> <span class="token string">"user"</span> <span class="token operator">|</span> <span class="token string">"guest"</span><span class="token punctuation">;</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">type</span> <span class="token class-name">CapitalizeRole</span> <span class="token operator">=</span> <span class="token string">"Admin"</span> <span class="token operator">|</span> <span class="token string">"User"</span> <span class="token operator">|</span> <span class="token string">"Guest"</span><span class="token punctuation">;</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">CapitalizeRole</span> <span class="token operator">=</span> Capitalize<span class="token operator">&lt;</span>Role<span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// "Admin" | "User" | "Guest"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04、uncapitalize" tabindex="-1"><a class="header-anchor" href="#_04、uncapitalize" aria-hidden="true">#</a> 04、Uncapitalize</h2>
<hr>
<p>构造一个将 Type 的所有属性设置为 uncapitalize 的类型，与首字母大写相反。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Role</span> <span class="token operator">=</span> <span class="token string">"Admin"</span> <span class="token operator">|</span> <span class="token string">"User"</span> <span class="token operator">|</span> <span class="token string">"Guest"</span><span class="token punctuation">;</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">type</span> <span class="token class-name">UncapitalizeRole</span> <span class="token operator">=</span> <span class="token string">"admin"</span> <span class="token operator">|</span> <span class="token string">"user"</span> <span class="token operator">|</span> <span class="token string">"guest"</span><span class="token punctuation">;</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">UncapitalizeRole</span> <span class="token operator">=</span> Uncapitalize<span class="token operator">&lt;</span>Role<span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// "admin" | "user" | "guest"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05、partial" tabindex="-1"><a class="header-anchor" href="#_05、partial" aria-hidden="true">#</a> 05、Partial</h2>
<hr>
<p>构造一个类型，其中 Type 的所有属性都设置为可选。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  password<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">interface</span> <span class="token class-name">PartialUser</span> <span class="token punctuation">{</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  password<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">PartialUser</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Required 构造一个类型，该类型由设置为 required 的 Type 的所有属性组成，Opposite 的对面。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  password<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">interface</span> <span class="token class-name">RequiredUser</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  password<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">RequiredUser</span> <span class="token operator">=</span> Required<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06、readonly" tabindex="-1"><a class="header-anchor" href="#_06、readonly" aria-hidden="true">#</a> 06、Readonly</h2>
<hr>
<p>构造一个类型，该类型由设置为只读的 Type 的所有属性组成。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  role<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">const</span> user<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span> role<span class="token operator">:</span> <span class="token string">"ADMIN"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
user<span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token string">"USER"</span><span class="token punctuation">;</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">ReadonlyUser</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user<span class="token operator">:</span> ReadonlyUser <span class="token operator">=</span> <span class="token punctuation">{</span> role<span class="token operator">:</span> <span class="token string">"ADMIN"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
user<span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token string">"USER"</span><span class="token punctuation">;</span>
<span class="token comment">// Error: Cannot assign to 'role' because it is a read-only property.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_07、record" tabindex="-1"><a class="header-anchor" href="#_07、record" aria-hidden="true">#</a> 07、Record</h2>
<hr>
<p>构造一个具有一组类型 T 的属性 K 的类型，每个属性 K 都映射到类型 T。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Address</span> <span class="token punctuation">{</span>
  street<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  pin<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Addresses</span> <span class="token punctuation">{</span>
  home<span class="token operator">:</span> Address<span class="token punctuation">;</span>
  office<span class="token operator">:</span> Address<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Alternative ✅</span>
<span class="token keyword">type</span> <span class="token class-name">AddressesRecord</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token string">"home"</span> <span class="token operator">|</span> <span class="token string">"office"</span><span class="token punctuation">,</span> Address<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_08、pick" tabindex="-1"><a class="header-anchor" href="#_08、pick" aria-hidden="true">#</a> 08、Pick</h2>
<hr>
<p>只选择键在联合类型键中的 Type 的属性。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  password<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">interface</span> <span class="token class-name">UserPartial</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">UserPartial</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>User<span class="token punctuation">,</span> <span class="token string">"name"</span> <span class="token operator">|</span> <span class="token string">"age"</span><span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_09、omit" tabindex="-1"><a class="header-anchor" href="#_09、omit" aria-hidden="true">#</a> 09、Omit</h2>
<hr>
<p>Omit 其键在联合类型键中的 Type 属性。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  password<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">interface</span> <span class="token class-name">UserPartial</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">UserPartial</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>User<span class="token punctuation">,</span> <span class="token string">"password"</span><span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10、exclude" tabindex="-1"><a class="header-anchor" href="#_10、exclude" aria-hidden="true">#</a> 10、Exclude</h2>
<hr>
<p>构造一个具有 Type 的所有属性的类型，除了键在联合类型 Excluded 中的那些。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Role</span> <span class="token operator">=</span> <span class="token string">"ADMIN"</span> <span class="token operator">|</span> <span class="token string">"USER"</span> <span class="token operator">|</span> <span class="token string">"GUEST"</span><span class="token punctuation">;</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">type</span> <span class="token class-name">NonAdminRole</span> <span class="token operator">=</span> <span class="token string">"USER"</span> <span class="token operator">|</span> <span class="token string">"GUEST"</span><span class="token punctuation">;</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">NonAdmin</span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span>Role<span class="token punctuation">,</span> <span class="token string">"ADMIN"</span><span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// "USER" | "GUEST"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11、extract" tabindex="-1"><a class="header-anchor" href="#_11、extract" aria-hidden="true">#</a> 11、Extract</h2>
<hr>
<p>构造一个具有 Type 的所有属性的类型，其键在联合类型 Extract 中。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Role</span> <span class="token operator">=</span> <span class="token string">"ADMIN"</span> <span class="token operator">|</span> <span class="token string">"USER"</span> <span class="token operator">|</span> <span class="token string">"GUEST"</span><span class="token punctuation">;</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">type</span> <span class="token class-name">AdminRole</span> <span class="token operator">=</span> <span class="token string">"ADMIN"</span><span class="token punctuation">;</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">Admin</span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span>Role<span class="token punctuation">,</span> <span class="token string">"ADMIN"</span><span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// "ADMIN"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12、nonnullable" tabindex="-1"><a class="header-anchor" href="#_12、nonnullable" aria-hidden="true">#</a> 12、NonNullable</h2>
<hr>
<p>构造一个类型，其中 Type 的所有属性都设置为不可为空。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Role</span> <span class="token operator">=</span> <span class="token string">"ADMIN"</span> <span class="token operator">|</span> <span class="token string">"USER"</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// Bad practice</span>
<span class="token keyword">type</span> <span class="token class-name">NonNullableRole</span> <span class="token operator">=</span> <span class="token string">"ADMIN"</span> <span class="token operator">|</span> <span class="token string">"USER"</span><span class="token punctuation">;</span>
<span class="token comment">// Good practice</span>
<span class="token keyword">type</span> <span class="token class-name">NonNullableRole</span> <span class="token operator">=</span> NonNullable<span class="token operator">&lt;</span>Role<span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// "ADMIN" | "USER"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<hr>
<p>到这里，今天要分享的内容就全部结束了。</p>
</div></template>


