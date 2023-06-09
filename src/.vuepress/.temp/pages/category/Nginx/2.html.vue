<template><div><p>作为一个前端开发，我们可能平时或多或少的都接触过<strong>Nginx</strong>，但是可能也因为平时我们并不需要自己去对他进行一些必要的配置导致我们需要对其进行深入了解，但是实际如果你在工作的业余时间也会开发自己的项目，你会发现，在很多场景下，nginx 对于我们有非常多的遍历，同时其性能比较高效，在国内的很多网站中实际都有使用，在了解他之前，我们需要对其有一些基本的认知，首先，我们需要知道</p>
<h2 id="nginx-是什么" tabindex="-1"><a class="header-anchor" href="#nginx-是什么" aria-hidden="true">#</a> Nginx 是什么</h2>
<hr>
<p>首先<strong>Nginx</strong>是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务。其是一款<strong>轻量级的 web 服务器</strong>、<strong>反向代理服务器</strong>、<strong>电子邮件服务器</strong>，实际在在设计之初<strong>Nginx</strong>的产品目的就是为了邮件服务而诞生的，特点是占有内存少、体积小、并发能力强、性能高，在日常开发过程中，很多场景下都使用到了他。</p>
<h2 id="nginx-有什么用" tabindex="-1"><a class="header-anchor" href="#nginx-有什么用" aria-hidden="true">#</a> Nginx 有什么用</h2>
<hr>
<p>从大的地方来看，总结下来有三个特点：<strong>反向代理</strong>、<strong>负载均衡</strong>、<strong>动静分离</strong></p>
<h4 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h4>
<p>反向代理是<strong>Nginx</strong>使用最多的一种场景了，假如我们开发的一个服务请求量较大，一台服务器已经无法承载了，我们需要扩容使用多台服务器，那么这个时候我么就需要加一层<strong>中间件</strong>来分配用户的请求，把用户的请求下发到不同的服务器，这个时候我们就可以使用<strong>Nginx</strong>来完成，当然这只是他的一个作用，在了解反向代理之前我们再来说说<strong>正向代理</strong>，有反必然有正。</p>
<p>先说说反向代理，假设我们是一个用户，在上述场景中，不然增加多少台服务器，我们用户始终访问一个相同的域名，对于用户而言，其做的反向代理对用户是无感知的，这里的代理是<strong>Nginx</strong>中间件这一层把用户的请求代理到了我们的服务器上，同时他也是在服务端完成的，<strong>反向代理的过程，隐藏了真实的客户端。客户端请求的服务都被代理服务器代替来请求。</strong></p>
<p>再说说正向代理，假设这样一个场景，在我们日常开发中应该经常会使用到 vpn 吧，公司的一些项目或者私有 git 或者一些内部的网站，我么需要登录 vpn 才能访问，其基本原理呢就是一个位于客户端和原始服务器之前的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并且指定目标（原始服务器），然后代理向原始服务器转交请求并将获得的内容返回给客户端，客户端才能使用正向代理，我们登录 vpn 之后所有的请求将会通过 vpn 的这台服务器代理客户去访问某些资源或者网站，那么这台代理服务器将会是公司内部的白名单 ip，这样所有的请求都统一从这里进入，就实现了一个正向代理。如此一来呢，<strong>正向代理的过程呢就隐藏了真实的客户端，客户端请求的服务都被代理服务器代替来请求。</strong></p>
<p>当然这里是在大型项目中才会用到的，对于我本人而言，作为一个个人开发者，我并没有多台服务器供其进行负载均衡或者去反向代理，那么对于我们用什么用呢？</p>
<h4 id="隐藏服务端口号" tabindex="-1"><a class="header-anchor" href="#隐藏服务端口号" aria-hidden="true">#</a> 隐藏服务端口号</h4>
<p>首先呢，我们有了自己的一台服务器后，大概率你也会有自己的域名，这个时候，我们假如有多个网站，那么大概率你会去创建自己的二级域名，这个时候我们想要部署多个网站的时候，很可能变成了*<strong>*192.xx.xx.xx:888</strong>[1]<strong>、 ***<strong>192.xx.xx.xx:999</strong>[2]<strong>这样，假如你是一个前端，还部署了多个</strong>Node</strong>这样的项目的时候，那么你肯定会遇到这样的问题，我们知道一个服务器，正常每一个端口都是单独的，不能共享【也有特殊场景，比如 socketio 提供的双工通讯可以让 http 和 ws 使用同一个端口】，我们想要通过二级域名去区分不同的服务就需要将其解析到不同的二级域名中，我们知道默认打开一个网站的时候不加端口的情况下、<strong>http 对应 80 端口</strong>、<strong>https 对应 443 端口</strong>，正常情况下云厂商也都是默认开启这两个端口的，所以我们在使用<strong>Nginx</strong>的时候，只需要监听<strong>80 和 443 端口</strong>，判断访问的域名地址，将其转发到不同的端口下面（具体配置最后放上），那么我们作为一个个人用户，就可以在这种场景下实现不需要加上难看的端口号了，所有的请求都会通过<strong>80、443</strong>代理到我们真实的服务端口。</p>
<h4 id="部署前端项目" tabindex="-1"><a class="header-anchor" href="#部署前端项目" aria-hidden="true">#</a> 部署前端项目</h4>
<p>因为其也是一个静态 web 服务器，部署我们前端的项目非常简单，相信很多人如果尝试自己去部署，使用<strong>Nginx</strong>是十分简单的，下载，安装，运行，指定默认目录，前端项目拖进去就能访问了，这个步骤比较简单，就不过多说明了，这也是我们前端可以用到的一种场景。</p>
<h4 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h4>
<p>说完反向代理，我们再来看看负载均衡就很好理解了，在上述场景中，假如我们使用了三台服务器，客户端发送来请求之后我们把请求发给谁呢，总不能虽然有三台服务器，我们都转给其中一台吧，明显很不合理，为了保证我们的性能最大化，负载均衡的意思呢就是会合理的把客户端的请求分配给服务器，我们默认呢就等比例分配，可以理解为 1:1:1，但是实际场景中，我们的服务器配置可能不同，可能有好有坏，所以这里有一个权重的概率，可以有我们自己配置哪台服务器多分配请求，哪一台少一点请求，这样的配置可以让服务器的性能得到最大化，合理分配请求将会使系统更为健壮稳固。</p>
<h4 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h4>
<p>在我们的开发过程中呢，有的请求是需要动态的计算的，比如需要连接<strong>mysql</strong>数据库去增删查改，这些属于<strong>动</strong>，而对于前端的一些文件<strong>html、css、js</strong>等这些文件呢，实际并不需要后台处理，那么我们就可以通过<strong>动静分离的模式将其区分开</strong>，就可以将这些静态文件进行缓存操作，这样就可以提高效率了，当然在现在<strong>前后端分离的场景下</strong>这一点的实用性目前对我个人而言似乎还并不高，使用场景相对上面两点比较有限，这三点是其比较大的三点，小的地方还有很多细节，我们来通过配置来具体看看吧</p>
<h2 id="nginx-实战分析" tabindex="-1"><a class="header-anchor" href="#nginx-实战分析" aria-hidden="true">#</a> Nginx 实战分析</h2>
<hr>
<p>在要使用前我们需要先进行下载，下载呢非常简单，如果您是<em>windows</em>，那么前去官网下载解压直接打开<em>exe</em>即可，<em>mac</em>的用户大多都有<strong>brew 包管理</strong>，我们只需要<code v-pre>brew search nginx</code>一行即可下载完成。</p>
<p>使用呢非常简单，只需要在终端输入<code v-pre>nginx</code>即可启动成功，他默认使用的是<strong>8080 端口</strong>，所以我们启动成功后访问<strong>127.0.0.1:8080</strong>就可以看到经典的<strong>welcome nginx</strong>了，首先看到这个页面的时候我们作为前端的第一印象是什么呢，这个地址显示了一个网页，那么肯定这个网页是他自带的，其此，如果我们改了内容是不是就会显示自己的东西了呢，再者那么我们把自己的项目替换成他的这个文件是不是就可以访问我们自己项目了呢，当然如此，前端的很多项目部署其实非常简单，我们把自己项目拖到这个文件的地址就覆盖掉他了，但是我们怎么知道这个文件在什么目录，什么地址呢，那我们就得看看配置信息了。</p>
<p>在终端输入 <code v-pre>nginx -t</code>就可以显示具体信息了</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok
nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们可以看到<strong>nginx 的配置文件地址已经当前的配置文件是否合规可以使用</strong>如果你的配置文件有错误，这里也会提示你，那么我们可以<strong>cd 到配置目录</strong>然后看看它的默认配置，我们可以直接<code v-pre>open .</code>或者<code v-pre>cat nginx.conf</code>都可以查看默认配置，如下，</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';
    #access_log  logs/access.log  main;
    sendfile        on;
    #tcp_nopush     on;
    #keepalive_timeout  0;
    keepalive_timeout  65;
    #gzip  on
    server {
        listen       8080;
        server_name  localhost;
        #charset koi8-r;
        #access_log  logs/host.access.log  main;
        location / {
            root   html;
            index  index.html index.htm;
        }
        #error_page  404              /404.html;
        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
    include servers/*;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的配置太多了，为了简单点，删除了一部分我们暂时不需要的配置，然后我们来分析一下，</p>
<h4 id="监听端口-8080" tabindex="-1"><a class="header-anchor" href="#监听端口-8080" aria-hidden="true">#</a> 监听端口 8080</h4>
<p>首先我们知道其默认端口是<strong>8080</strong>同时呢我们刚也说了，浏览器只有<strong>80 和 443 端口才是不需要我们拼接的</strong>，所以正常情况我们也不想要端口号，所以，我们就只需要找到<strong>8080 将其替换成 80 即可</strong>，所以我们现在就知道了<strong>listen</strong>这个配置就是指我们要监听哪个端口号，改为<strong>80 之后</strong>我们访问服务就不需要再加端口了，可以直接访问<strong>127.0.0.1</strong>即可，当然我们现在访问是不可以的，<strong>因为 Nginx 修改完配置之后需要重载</strong>，我们可以停止再启动，或者更简单的<code v-pre>nginx -s reload</code>重载即可，具体的更多命令我们后面再说，重载完成之后我们访问就会发现是同样的效果，如果是在我们的服务器上，安装这里就不说了，去官网或者随便百度都可以找到，我们把域名解析到自己服务器，这个时候访问自己的域名不加端口就能访问到项目了，如果你还是个初学者，不太会<strong>linux</strong>的一系列命令，那么我推荐你使用<strong>xshell</strong>和<strong>sftp</strong>使用可视化工具直接对文件进行拖拽操作即可晚上上述步骤，那么第一步我们的网站其实这样就可以部署完成了，如果你没有域名，那么直接输入你的<strong>服务器 ip</strong>同样可以访问成功。</p>
<h4 id="如何一台服务器部署多个网站" tabindex="-1"><a class="header-anchor" href="#如何一台服务器部署多个网站" aria-hidden="true">#</a> 如何一台服务器部署多个网站</h4>
<p>作为我们个人开发者来说，我们大多数情况下只有一个服务器，但是我们还想部署多个项目，这个时候该怎么办呢，我们就需要下一项配置呢，为了让很多同学更方便理解，我们以前端来举例，我们在自己电脑下开发项目的时候，我们同时启动了前端项目假如在<strong>8080 端口</strong>，同时启动了后端<strong>node 项目的 3000</strong>端口，那么我们是不是就可以通过两个端口启动了两个服务，那么在我们的服务端也是同理，多个服务只需要运行在不同端口即可，在<strong>Nginx</strong>的配置中，我们只需要根据用户访问的地址来指向不同的端口就行，那么这个怎么配置呢，以我个人的网站来一段基本配置：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>server {
    listen       80;
    server_name   chat.jiangly.com;
    location / {
        proxy_pass   http://127.0.0.1:7000;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现如此简单，两行即可，监听 80 端口，当访问的域名是<strong><a href="http://chat.jiangly.com" target="_blank" rel="noopener noreferrer">chat.jiangly.com<ExternalLinkIcon/></a></strong>的时候指向我们的 7000 端口，那么 7000 端口就是我们项目运行的真实端口，很明显呢这是一个后端<strong>node</strong>服务，这时候小伙伴有疑问了，如果我们是前端静态项目怎么办，我打了包了啊，好像没有端口了，直接访问了啊，那我哪来的这个<strong>proxy_pass 呢</strong>，也很简单：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>server {
        listen 80;
        server_name project1.jaingly.com;

        location / {
                root /data/project1/;
                index index.html;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现<strong>proxy_pass</strong>变成了<strong>root</strong>，<strong>root</strong>呢指向了一个地址，那么我们就把自己项目放这个地址就行了，原来前端的项目这么简单啊，这一下，我们就可以一下部署好多网站啦，既可以访问前端这种静态网站，也可以配置<strong>node 项目这种带端口的啦</strong>，这下服务器想部署多少项目不是都可以了么。如果小伙伴没有域名的话呢 <strong>server_name</strong>就需要变成<strong>127.0.0.1 加上端口号或者项目地址</strong>了，比如<strong>127.0.0.1:7000</strong>、<strong>127.0.0.1/project1</strong>这样来区分项目。同时需要注意的是，这里使用的是相对路径<strong>是以我们 nginx -t 那里的配置文件 nginx.conf 那一层为对比的路径</strong>，记住地址别放错了文件，否则找不到哟</p>
<h4 id="使用-https-服务" tabindex="-1"><a class="header-anchor" href="#使用-https-服务" aria-hidden="true">#</a> 使用 Https 服务</h4>
<p>这个时候有兴趣的同学发现，那我这个没有<strong>https 认证好丑啊</strong>，还提示不安全，我也想要一个<strong>Https</strong>，那我们怎么办呢，前面说到，<strong>Https 对应的是 443 的端口</strong>，那我们直接监听 443 不就可以了么，在默认配置中，我们看见有监听<strong>443 端口但是注释了</strong>，我们之间打开，配置和<strong>80</strong>完全一样没有区别，我们直接三下五初二，保存，重载，发现，咦报错了，原来说我们没有证书啊，没错，<strong>Https 是需要证书的</strong>，这个证书呢需要收费，但是作为卑微的开发仔当然不愿意去花这个钱了呗，我个人呢是使用的<strong>腾讯云</strong>,小伙伴们可能使用的是其他厂商，但是肯定都会提供免费的证书供大家使用，<strong>去到域名管理的地方</strong>找到申请免费的<strong>Https 证书</strong>，<strong>腾讯云</strong>在我个人使用每次申请最多一分钟非常的快，完了之后下载会发现里面有很多的格式。我么要下载<strong>Nginx</strong>的格式，下载之后呢，打开里面会有很多文件，但我们只需要两个，<strong>crt 格式的和 key 格式的</strong>，然后我先放一个个人的基本配置</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>server {
    listen 443 ssl;
    server_name   chat.jiangly.com;
    ssl_certificate conf.d/chat.jiangly.com_ssl/1_chat.jiangly.com_bundle.crt;
    ssl_certificate_key conf.d/chat.jiangly.com_ssl/2_chat.jiangly.com.key;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    location / {
        proxy_pass   http://127.0.0.1:7000;
        root html;
        index  index.html index.htm;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>别的地方都是一样的我们不用关心，我们看到两个配置项，<strong>ssl_certificate_key</strong>、<strong>ssl_certificate</strong>后面分别对应了两个地址，那么这个地址呢就是我们刚下载的两个文件的地址，/对应的相对地址呢和上面相同，只需要配置这两个文件，其他地方都不用改变，然后重载，这个时候就可以访问<strong>https 服务了</strong>，这样一看我们的网站就很正规了呢，我们通过这么几个基础功能就实现了自己的网站部署，并且可以多网站、多域名、没端口、带证书等等功能，当然这还不够，我们还可以做更多的事情</p>
<h4 id="websocket-服务" tabindex="-1"><a class="header-anchor" href="#websocket-服务" aria-hidden="true">#</a> Websocket 服务</h4>
<p>我们去开发项目的时候可能会经常使用到<strong>websocket</strong>服务，如果还是这样的配置呢，我们会发现，请求被拦截掉了，这是为什么呢？其实是因为我们使用<strong>ws 服务</strong>的时候需要告诉<strong>nginx</strong>我们需要对协议进行升级，所以当你遇到这个问题的时候只需要增加两行配置即可</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection $connection_upgrade;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果遇到这个问题，加上重载即可。</p>
<h4 id="server-匹配规则" tabindex="-1"><a class="header-anchor" href="#server-匹配规则" aria-hidden="true">#</a> server 匹配规则</h4>
<p>我们上面看到我们可以写很多组的<strong>server</strong>，那么<strong>Nginx</strong>是从上往下匹配的，当匹配到第一个之后就会立即退出，所以如果你遇到当你的配置怎么也不生效的时候，先看看是不是在上面被其他规则匹配到了。</p>
<h4 id="history-路由模式、跨域、缓存、反向代理" tabindex="-1"><a class="header-anchor" href="#history-路由模式、跨域、缓存、反向代理" aria-hidden="true">#</a> history 路由模式、跨域、缓存、反向代理</h4>
<p>当我们开发的前端项目例如<strong>vue</strong>时，路由通常会有两个选项，一个带**#<strong>的哈希路由一个不带，同时文档中还说了我们要使用，<strong>history</strong>就需要后端去改配置，实际这个在</strong>nginx<strong>就是简简单单的几行而已，我们只需要添加下面这几行，就可以使用</strong>history 路由了**，同时还有设置一些静态格式文件的缓存，设置跨域访问等等都是简单的配置就可以了</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># html设置history模式
location / {
    index index.html index.htm;
    proxy_set_header Host $host;
    # history模式最重要就是这里
    try_files $uri $uri/ /index.html;
    # index.html文件不可以设置强缓存 设置协商缓存即可
    add_header Cache-Control 'no-cache, must-revalidate, proxy-revalidate, max-age=0';
}

# 接口反向代理
location ^~ /api/ {
    # 跨域处理 设置头部域名
    add_header Access-Control-Allow-Origin *;
    # 跨域处理 设置头部方法
    add_header Access-Control-Allow-Methods 'GET,POST,DELETE,OPTIONS,HEAD';
    # 改写路径
    rewrite ^/api/(.*)$ /$1 break;
    # 反向代理
    proxy_pass http://static_env;
    proxy_set_header Host $http_host;
}

location ~* .(?:css(.map)?|js(.map)?|gif|svg|jfif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv)$ {
    # 静态资源设置七天强缓存
    expires 7d;
    access_log off;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="负载均衡-1" tabindex="-1"><a class="header-anchor" href="#负载均衡-1" aria-hidden="true">#</a> 负载均衡</h4>
<p>我们可以基于<strong>upstream 模块</strong>来做负载均衡，也就是设置权重以及配置地址</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>upstream backserver{
    # 哈希算法，自动定位到该服务器 保证唯一ip定位到同一部机器 用于解决session登录态的问题
    ip_hash;
    server 127.0.0.1:9090 down; (down 表示单前的server暂时不参与负载)
    server 127.0.0.1:8080 weight=2; (weight 默认为1.weight越大，负载的权重就越大)
    server 127.0.0.1:6060;
    server 127.0.0.1:7070 backup; (其它所有的非backup机器down或者忙的时候，请求backup机器)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到四个服务都是我们本机，正式的生产场景中呢，我们其实应该是别的服务器的<strong>ip 地址</strong>，一般<strong>nginx 会独立部署到一台服务器</strong>，其他的服务会部署在其他服务器，所以在这样的场景下，我们需要这多台服务器在一个内网环境中，否则如果走公网，那么就会白白增加耗时，这里是我们需要了解的点。</p>
<p>上述场景呢是我为大家总结的一些常用场景，其实<strong>Nginx</strong>还有其他许许多多的更细致的功能，例如，压缩，服务错误的优雅降级等等功能，如果有兴趣或者真实需要用到的时候再去查阅文档吧，毕竟这玩意儿记太多配置可就有点占用咱们大脑的宝贵内存了。</p>
<h2 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令" aria-hidden="true">#</a> 常用指令</h2>
<hr>
<p>说了上面那么多了，为大家总结几个常用指令供大家使用吧</p>
<table>
<thead>
<tr>
<th style="text-align:left">指令</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">nginx -s reopen</td>
<td style="text-align:left">重启 Nginx</td>
</tr>
<tr>
<td style="text-align:left">nginx -s reload</td>
<td style="text-align:left">重新加载配置文件，优雅重启 推荐使用</td>
</tr>
<tr>
<td style="text-align:left">nginx -s stop</td>
<td style="text-align:left">强制停止</td>
</tr>
<tr>
<td style="text-align:left">nginx -s quit</td>
<td style="text-align:left">安全退出</td>
</tr>
<tr>
<td style="text-align:left">nginx -t</td>
<td style="text-align:left">检测配置文件地址 以及检测配置是否正常</td>
</tr>
<tr>
<td style="text-align:left">nginx -v</td>
<td style="text-align:left">显示版本信息并退出</td>
</tr>
<tr>
<td style="text-align:left">killall nginx</td>
<td style="text-align:left">杀死所有 nginx 进程</td>
</tr>
</tbody>
</table>
<p>上述呢就是一些常用的基本命令了，更多命令呢平时用的较少了，需要再去查询吧，大部署的后端指令呢都是 -s 表示发射命令的意思，记住这些常用命令就足够我们日常使用了。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<hr>
<p>这里为大家从 0 开始分析了一些<strong>Nginx</strong>的具体使用场景和操作，省略了一些较为基础的部分，这是一份保姆级教程，如果你正想使用或对其有兴趣不妨自己动手试试吧。</p>
</div></template>


