<template><div><figure><img src="@source/category/其他/images/HTTP-HTTPS.png" alt="什么是 HTTP? HTTP 和 HTTPS 的区别?" tabindex="0" loading="lazy"><figcaption>什么是 HTTP? HTTP 和 HTTPS 的区别?</figcaption></figure>
<h2 id="一、http" tabindex="-1"><a class="header-anchor" href="#一、http" aria-hidden="true">#</a> 一、HTTP</h2>
<hr>
<p><code v-pre>HTTP</code>(HyperText Transfer Protocol),即超文本运输协议，是实现网络通信的一种规范。</p>
<p>在计算机和网络世界有存在不同的协议，如广播协议、寻址协议、路由协议等等......</p>
<p>而<code v-pre>HTTP</code>是一个传输协议，即将数据由 A 传到 B 或 B 传到 A，并且 A 与 B 之间能够存放很多第三方，如<br/>
A&lt;=&gt;X&lt;=&gt;Y&lt;=&gt;Z&lt;=&gt;B</p>
<p>传输的数据并不是计算机地层中的二进制包，二十完整的、有意义的数据，如 HTML 文件、图片文件、查询结果等超文本，能够被上层引用识别</p>
<p>在实际应用中，<code v-pre>HTTP</code>常被用于<code v-pre>Web</code>浏览器和网站服务器之间传递信息，以明文方式发送内容，不提供任何方式的数据加密</p>
<p>特点如下：</p>
<ul>
<li>支持客户/服务器模式</li>
<li>简单快速：客户向服务器请求服务时，只需传送请求方式和路径。由于 HTTP 协议简单，是的 HTTP 服务器的规模小，因而通信速度很快。</li>
</ul>
<ul>
<li>灵活：HTTP 允许传输任意类型的数据对象，正在传输的类型由 Content-Type 加以标记</li>
<li>无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并受到客户的应答后，即断开连接。采用这种方式可以节省传输时间</li>
<li>无状态：HTTP 协议无法根据之前的状态进行本次的请求处理</li>
</ul>
<h2 id="二、https" tabindex="-1"><a class="header-anchor" href="#二、https" aria-hidden="true">#</a> 二、HTTPS</h2>
<hr>
<p>在上述介绍<code v-pre>HTTP</code>中，了解到<code v-pre>HTTP</code>传递信息是以明文的形式发送内容，这并不安全。而<code v-pre>HTTPS</code>出现正式为了解决<code v-pre>HTTP</code>不安全的特性</p>
<p>为了保证这些隐私数据能加密传输，让<code v-pre>HTTP</code>安全运行的<code v-pre>SSL/TLS</code>协议上，即 HTTPS=HTTP+SSL/TLS，通过<code v-pre>SSL</code>证书来验证服务器的身份，并为浏览器和服务器之间的通信进行加密</p>
<p><code v-pre>SSL</code>协议位于<code v-pre>TCP/IP</code>协议与各种应用层协议之间，浏览器和服务器之间在使用<code v-pre>SSL</code>建立连接时需要选择一组恰当的加密算法来实现安全通信，为数据通信提供安全支持</p>
<figure><img src="@source/category/其他/images/https.png" alt="https加密、解密" tabindex="0" loading="lazy"><figcaption>https加密、解密</figcaption></figure>
<p>流程图如下所示：</p>
<figure><img src="@source/category/其他/images/https-process.png" alt="https传输流程图" tabindex="0" loading="lazy"><figcaption>https传输流程图</figcaption></figure>
<ul>
<li>首先客户端通过 URL 访问服务器建立 SSL 连接</li>
<li>服务器收到客户端请求后，会将网站支持的证书信息(证书中包含公钥)传送一份给客户端</li>
<li>客户端的服务器开始协商 SSL 连接的安全的等级，也就是信息加密的等级</li>
<li>客户端的浏览器根据双方同意的等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送个网站</li>
<li>服务器利用自己的私钥解密出会话密钥</li>
<li>服务器利用会话密钥加密与客户端之间的通信</li>
</ul>
<h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别" aria-hidden="true">#</a> 三、区别</h2>
<hr>
<ul>
<li>HTTPS 是 HTTP 协议的安全版本，HTTP 协议的数据传输是明文的，是不安全的，HTTPS 使用了 SSL/TLS 协议进行了加密处理，相对更安全</li>
<li>HTTP 和 HTTPS 使用连接方式不同，默认端口也不一样，HTTP 是 80，HTTPS 是 443</li>
<li>HTTPS 由于需要设计加密以及多次握手，性能方面不如 HTTP</li>
<li>HTTPS 需要 SSL，SSL 证书需要钱，功能越强大的证书费用越高</li>
</ul>
</div></template>


