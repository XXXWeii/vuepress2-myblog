<template><div><h2 id="_1-连接到-linux-centos8-的服务器" tabindex="-1"><a class="header-anchor" href="#_1-连接到-linux-centos8-的服务器" aria-hidden="true">#</a> 1.连接到 Linux CentOS8 的服务器</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">22</span> root@ip
//输入完之后会要输入密码，密码是不显示的，输入完回车就行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-安装编译器" tabindex="-1"><a class="header-anchor" href="#_2-安装编译器" aria-hidden="true">#</a> 2.安装编译器</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc pcre-devel zlib-devel openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-建立存放的文件夹" tabindex="-1"><a class="header-anchor" href="#_3-建立存放的文件夹" aria-hidden="true">#</a> 3.建立存放的文件夹</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /www/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-移动到文件夹" tabindex="-1"><a class="header-anchor" href="#_4-移动到文件夹" aria-hidden="true">#</a> 4.移动到文件夹</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /www/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-下载-nginx" tabindex="-1"><a class="header-anchor" href="#_5-下载-nginx" aria-hidden="true">#</a> 5.下载 nginx</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> http://nginx.org/download/nginx-1.20.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-解压-nginx-tar-gz" tabindex="-1"><a class="header-anchor" href="#_6-解压-nginx-tar-gz" aria-hidden="true">#</a> 6.解压 nginx.tar.gz</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.20.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-移动到解压的文件夹" tabindex="-1"><a class="header-anchor" href="#_7-移动到解压的文件夹" aria-hidden="true">#</a> 7.移动到解压的文件夹</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> nginx-1.20.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-配置文件" tabindex="-1"><a class="header-anchor" href="#_8-配置文件" aria-hidden="true">#</a> 8.配置文件</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --with-http_ssl_module --with-http_v2_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-编译和安装" tabindex="-1"><a class="header-anchor" href="#_9-编译和安装" aria-hidden="true">#</a> 9.编译和安装</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-查找安装路径和移动到文件夹" tabindex="-1"><a class="header-anchor" href="#_10-查找安装路径和移动到文件夹" aria-hidden="true">#</a> 10.查找安装路径和移动到文件夹</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">whereis</span> nginx
<span class="token builtin class-name">cd</span> /usr/local/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-启动-nginx" tabindex="-1"><a class="header-anchor" href="#_11-启动-nginx" aria-hidden="true">#</a> 11.启动 nginx</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_12-重新加载配置" tabindex="-1"><a class="header-anchor" href="#_12-重新加载配置" aria-hidden="true">#</a> 12.重新加载配置</h2>
<hr>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./sbin/nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


