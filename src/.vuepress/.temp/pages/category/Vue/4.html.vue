<template><div><p>项目开发中，一般都会有开发环境、测试环境、生产环境等多个环境，所以项目在打包时我们就会调用不同环境的接口，此时我们就要通过配置变量来解决这一问题。</p>
<h2 id="一、配置不同环境变量" tabindex="-1"><a class="header-anchor" href="#一、配置不同环境变量" aria-hidden="true">#</a> 一、配置不同环境变量</h2>
<hr>
<p>下面以开发、测试、生产这 3 个环境为例。</p>
<h4 id="_1、在项目根目录创建-3-个不同的文件-代表不同的环境配置" tabindex="-1"><a class="header-anchor" href="#_1、在项目根目录创建-3-个不同的文件-代表不同的环境配置" aria-hidden="true">#</a> 1、在项目根目录创建 3 个不同的文件，代表不同的环境配置</h4>
<ul>
<li>开发环境： <code v-pre>.env.development</code></li>
<li>测试环境： <code v-pre>.env.test</code></li>
<li>生产环境： <code v-pre>.env.production</code></li>
</ul>
<h4 id="_2、在不同文件配置变量" tabindex="-1"><a class="header-anchor" href="#_2、在不同文件配置变量" aria-hidden="true">#</a> 2、在不同文件配置变量</h4>
<ul>
<li>
<p>.env.development</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>NODE_ENV = 'development'
VUE_APP_BASE_URL = 'http://www.development.api'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>.env.test</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>NODE_ENV = 'test'
VUE_APP_BASE_URL = 'http://www.test.api'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>.env.production</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>NODE_ENV = 'production'
VUE_APP_BASE_URL = 'http://www.production.api'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>[注意]: 1、这里声明的 NODE_ENV = 'development' 就表示开发环境 2、除了 baseUrl 和 NODE_ENV ,其他环境变量使用 VUE_APP 开头 ,比如 VUE_APP_XXX 3、然后我们可以通过 process.env.VUE_APP_XXX 来取到定义好的环境变量 4、下文在封装 axios 的 js 文件中赋值 baseUrl 的时候就会通过环境变量取值</p>
<h4 id="_3、配置打包命令-package-json" tabindex="-1"><a class="header-anchor" href="#_3、配置打包命令-package-json" aria-hidden="true">#</a> 3、配置打包命令 package.json</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>  "scripts": {
    "dev": "vue-cli-service serve",
    "dev-development": "vue-cli-service serve --mode development",
    "dev-test": "vue-cli-service serve --mode test",
    "dev-production": "vue-cli-service serve --mode production",
    "build-development": "vue-cli-service build --mode development",
    "build-test": "vue-cli-service build --mode test",
    "build-production": "vue-cli-service build --mode production"
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[说明]: <code v-pre>npm run dev</code>表示：<code v-pre>vue-cli-service serve</code>会默认执行<code v-pre>.env.development</code>文件；<code v-pre>--mode test</code>来指定执行<code v-pre>.env.test</code>文件；<code v-pre>--mode production</code>来指定执行<code v-pre>.env.production</code>文件</p>
<h2 id="二、axios-二次封装" tabindex="-1"><a class="header-anchor" href="#二、axios-二次封装" aria-hidden="true">#</a> 二、axios 二次封装</h2>
<hr>
<h4 id="_1、创建request-js文件" tabindex="-1"><a class="header-anchor" href="#_1、创建request-js文件" aria-hidden="true">#</a> 1、创建<code v-pre>request.js</code>文件</h4>
<p>在<code v-pre>src</code>下创建一个<code v-pre>utils</code>文件夹，用来放一些工具类型的文件，首先在里面创建一个用来封装<code v-pre>axios</code>的文件<code v-pre>request</code>，当然文件名自定义</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//src/utils/request.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>

<span class="token comment">// 创建 axios 实例</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_URL</span><span class="token punctuation">,</span> <span class="token comment">// url = base url + request url</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// request timeout</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//  请求拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">"Content-Type"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"application/json;charset=UTF-8"</span><span class="token punctuation">;</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">"Accept"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"application/json"</span><span class="token punctuation">;</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">"Request-From"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"mobile"</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> token <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"loginToken"</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果token不为null，否则传token给后台</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">"Token"</span><span class="token punctuation">]</span> <span class="token operator">=</span> token<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 响应拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token comment">//届时根据后端返回success或者code值判断</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>success <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">//响应错误</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[注]: 文件中的<code v-pre>baseURL: process.env.VUE_APP_BASE_URL</code>则就是根据不同环境取不同的接口地址</p>
<h4 id="_2、创建common-js文件" tabindex="-1"><a class="header-anchor" href="#_2、创建common-js文件" aria-hidden="true">#</a> 2、创建<code v-pre>common.js</code>文件</h4>
<p>在<code v-pre>src</code>下创建一个<code v-pre>api</code>文件夹，用来放一些接口的文件,当接口过多的时候可以分类创建接口文件，目前我们先创建一个公共的文件<code v-pre>common.js</code>,然后引入刚才封装的<code v-pre>request.js</code>文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//src/api/common.js</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">"@/utils/request"</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * POST 方法 与 GET方法  区别
 *
 * post==> data: obj
 * get==>params: obj
 *
 */</span>
<span class="token comment">// 例如(post)：</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateBook</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/book/update"</span><span class="token punctuation">,</span> <span class="token comment">// url = base url + request url</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> obj<span class="token punctuation">,</span> <span class="token comment">//----------------->>>区别</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 例如(get)：</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getBookList</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/book/list"</span><span class="token punctuation">,</span> <span class="token comment">// url = base url + request url</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> obj<span class="token punctuation">,</span> <span class="token comment">//----------------->>>区别</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、页面中使用" tabindex="-1"><a class="header-anchor" href="#_3、页面中使用" aria-hidden="true">#</a> 3、页面中使用</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>booktest<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getBookList<span class="token punctuation">,</span> updateBook <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/api/common"</span><span class="token punctuation">;</span> <span class="token comment">//路径</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//get方式</span>
    <span class="token function">getBookList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token function">getBookList</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">//返回值</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//post方式</span>
    <span class="token function">updateBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">bookId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token function">updateBook</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">//返回值</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、vue-config-js-配置" tabindex="-1"><a class="header-anchor" href="#三、vue-config-js-配置" aria-hidden="true">#</a> 三、vue.config.js 配置</h2>
<hr>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 选项...</span>
  <span class="token comment">/* 部署应用包的基本URL */</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>

  <span class="token comment">/* 当运行 vue-cli-service build 时生成的生产环境构建文件的目录 defalut: dist */</span>
  <span class="token literal-property property">outputDir</span><span class="token operator">:</span> <span class="token string">"./dist"</span><span class="token punctuation">,</span>
  <span class="token comment">//可根据不同环境打包不同地址</span>
  <span class="token comment">//outputDir: process.env.NODE_ENV == 'production' ?</span>
  <span class="token comment">// '../../../../dist-mobile/production/course' : process.env.NODE_ENV == 'production' ?</span>
  <span class="token comment">// '../../../../dist-mobile/test/course' : process.env.NODE_ENV == 'test' ?</span>
  <span class="token comment">//'../../../../dist-mobile/development/course' : '../../../../dist-mobile/run/course',</span>

  <span class="token comment">/* 放置生成的静态文件目录（js css img） */</span>
  <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">"static"</span><span class="token punctuation">,</span>

  <span class="token comment">/* 指定生成的index.html 输出路径 相对 default: index.html */</span>
  <span class="token literal-property property">indexPath</span><span class="token operator">:</span> <span class="token string">"index.html"</span><span class="token punctuation">,</span>

  <span class="token comment">/* 指定生成文件名中包含hash default: true */</span>
  <span class="token literal-property property">filenameHashing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 所有 webpack-dev-server 的选项都支持。</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">"0.0.0.0"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8888</span><span class="token punctuation">,</span> <span class="token comment">// 端口号</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//配置自动启动浏览器</span>

    <span class="token comment">// 配置多个代理</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"/api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_URL</span><span class="token punctuation">,</span> <span class="token comment">// 代理服务器路径</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"^/api"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 去掉接口地址中的api字符串</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就完成了根据不同项目启动命令,来自动配置不同环境,匹配指定接口地址了
例如：
启动<code v-pre>npm run dev-test</code>,
执行<code v-pre>vue-cli-service serve --mode test</code>,
根据<code v-pre>--mode test</code>,
查找<code v-pre>.env.test</code>文件,
获得环境<code v-pre>NODE_ENV</code>为:<code v-pre>test环境</code>, 接口地址<code v-pre>VUE_APP_BASE_URL</code>为:<code v-pre>http://www.test.api</code>
所以封装的 axios 中的 baseUrl 地址就是<code v-pre>http://www.test.api</code>
调用后的地址就是:<code v-pre>http://www.test.api/book/list</code>
大概就是这么个流程，
接下来就可以愉快的开发了.</p>
<figure><img src="@source/category/Vue/images/4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


