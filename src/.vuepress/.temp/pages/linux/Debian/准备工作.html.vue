<template><div><h1 id="debian-准备工作" tabindex="-1"><a class="header-anchor" href="#debian-准备工作" aria-hidden="true">#</a> Debian 准备工作</h1>
<p><a href="https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html" target="_blank" rel="noopener noreferrer">https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html<ExternalLinkIcon/></a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#修改登录账户密码</span>
<span class="token function">passwd</span>

<span class="token comment"># 查看 Shell</span>
<span class="token function">cat</span> /etc/shells
<span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>

<span class="token comment">#改为使用 bash</span>
chsh <span class="token parameter variable">-s</span> /bin/bash

<span class="token comment"># 查看linux 版本</span>
lsb_release <span class="token parameter variable">-a</span>

<span class="token comment"># 修改  hostname  添加</span>
<span class="token function">vim</span> /etc/hostname
<span class="token function">vim</span> /etc/hosts


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-ssh-配置" tabindex="-1"><a class="header-anchor" href="#修改-ssh-配置" aria-hidden="true">#</a> 修改 ssh 配置</h2>
<p>vim /etc/ssh/sshd_config</p>
<div class="language-YML line-numbers-mode" data-ext="YML"><pre v-pre class="language-YML"><code>
PermitRootLogin yes

StrictModes no

PubkeyAuthentication yes

PasswordAuthentication yes

UsePAM yes

TCPKeepAlive yes

ClientAliveInterval 60

ClientAliveCountMax 3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启 ssh</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">service</span> <span class="token function">ssh</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="保持系统最新" tabindex="-1"><a class="header-anchor" href="#保持系统最新" aria-hidden="true">#</a> 保持系统最新</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="换源" tabindex="-1"><a class="header-anchor" href="#换源" aria-hidden="true">#</a> 换源</h2>
<p><a href="https://mirrors.tuna.tsinghua.edu.cn/help/debian/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/help/debian/<ExternalLinkIcon/></a></p>
<h2 id="查看文件数量限制" tabindex="-1"><a class="header-anchor" href="#查看文件数量限制" aria-hidden="true">#</a> 查看文件数量限制</h2>
<p>ulimit -Hn</p>
<h2 id="修改时区" tabindex="-1"><a class="header-anchor" href="#修改时区" aria-hidden="true">#</a> 修改时区</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
timedatectl set-timezone Asia/Shanghai

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装一些必要软件" tabindex="-1"><a class="header-anchor" href="#安装一些必要软件" aria-hidden="true">#</a> 安装一些必要软件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 安装 配置 git</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span>

<span class="token comment">## 安装 配置 nginx</span>
<span class="token function">apt</span> <span class="token function">install</span> nginx

<span class="token comment">## 安装 screenfetch</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> screenfetch

<span class="token comment">## 安装 nvm</span>

https://github.com/nvm-sh/nvm

<span class="token comment">## 安装 golang</span>

https://studygolang.com/dl

<span class="token comment">## 安装 mongodb</span>

https://www.mongodb.com/docs/mongodb-shell/install/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令行上色" tabindex="-1"><a class="header-anchor" href="#命令行上色" aria-hidden="true">#</a> 命令行上色</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
<span class="token function">vim</span> ~/.bashrc

<span class="token comment"># 取消对应的注释就好了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重启" tabindex="-1"><a class="header-anchor" href="#重启" aria-hidden="true">#</a> 重启</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装证书" tabindex="-1"><a class="header-anchor" href="#安装证书" aria-hidden="true">#</a> 安装证书</h2>
<p><a href="https://www.gingerdoc.com/tutorials/how-to-set-up-and-configure-a-certificate-authority-ca-on-debian-10" target="_blank" rel="noopener noreferrer">https://www.gingerdoc.com/tutorials/how-to-set-up-and-configure-a-certificate-authority-ca-on-debian-10<ExternalLinkIcon/></a></p>
</div></template>


