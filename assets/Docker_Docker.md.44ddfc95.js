import{_ as e,c as s,o as a,a as l}from"./app.08de8fd9.js";const k=JSON.parse('{"title":"Docker --笔记","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、概述","slug":"一、概述","link":"#一、概述","children":[]},{"level":2,"title":"二、安装","slug":"二、安装","link":"#二、安装","children":[{"level":3,"title":"1.Docker组成","slug":"_1-docker组成","link":"#_1-docker组成","children":[]},{"level":3,"title":"2.安装","slug":"_2-安装","link":"#_2-安装","children":[{"level":4,"title":"linux","slug":"linux","link":"#linux","children":[]},{"level":4,"title":"windows","slug":"windows","link":"#windows","children":[]}]}]},{"level":2,"title":"三、命令","slug":"三、命令","link":"#三、命令","children":[]},{"level":2,"title":"四、镜像","slug":"四、镜像","link":"#四、镜像","children":[]},{"level":2,"title":"五、容器数据卷","slug":"五、容器数据卷","link":"#五、容器数据卷","children":[]},{"level":2,"title":"六、DockerFile","slug":"六、dockerfile","link":"#六、dockerfile","children":[]},{"level":2,"title":"七、Docker网络原理","slug":"七、docker网络原理","link":"#七、docker网络原理","children":[]},{"level":2,"title":"八、IDEA整合Docker","slug":"八、idea整合docker","link":"#八、idea整合docker","children":[]},{"level":2,"title":"九、Docker Compose / Docker Swarm 集群管理","slug":"九、docker-compose-docker-swarm-集群管理","link":"#九、docker-compose-docker-swarm-集群管理","children":[]}],"relativePath":"Docker/Docker.md","lastUpdated":1669705325000}'),n={name:"Docker/Docker.md"},o=l(`<h1 id="docker-笔记" tabindex="-1">Docker --笔记 <a class="header-anchor" href="#docker-笔记" aria-hidden="true">#</a></h1><h2 id="一、概述" tabindex="-1">一、概述 <a class="header-anchor" href="#一、概述" aria-hidden="true">#</a></h2><blockquote><p>打包项目带上环境（镜像） --&gt; Docker仓库 --&gt; 其他操作系统 <strong>下载对应的环境</strong> 并 <strong>运行</strong>即可。【每个项目集中单箱子管理】</p></blockquote><ul><li>补充：在window中装一个<strong>Vmware</strong>，通过这个软件可以虚拟一台或多台电脑【虚拟机】</li><li>Docker <ul><li>开发语言： Go</li><li>Docker官网：<a href="https://www.docker.com/" target="_blank" rel="noreferrer">https://www.docker.com/</a></li><li>DockerHub： <a href="https://hub.docker.com/" target="_blank" rel="noreferrer">https://hub.docker.com/</a></li><li>容器化技术：不是完整的操作系统，</li></ul></li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vm:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">虚拟出一套硬件，运行一个完整的操作系统，并在该系统上安装</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">和</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">运行软件</span></span>
<span class="line"><span style="color:#FFCB6B;">linux</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">centos原生镜像，大小GB级别,开启分钟级别</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">docker:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">容器内的应用直接运行在宿主机的内容，容器没有内核</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">和</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">虚拟硬件，每个容器间有自己的环境，互不影响</span></span>
<span class="line"><span style="color:#FFCB6B;">核心镜像，大小M/KB,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">秒级启动</span></span>
<span class="line"></span></code></pre></div><h2 id="二、安装" tabindex="-1">二、安装 <a class="header-anchor" href="#二、安装" aria-hidden="true">#</a></h2><h3 id="_1-docker组成" tabindex="-1">1.Docker组成 <a class="header-anchor" href="#_1-docker组成" aria-hidden="true">#</a></h3><ul><li><p>仓库：repository</p><ul><li>存放镜像的地方</li><li>公有仓库 / 私有仓库 <ul><li>公有仓库：Docker HUB</li><li>阿里云等（可配置镜像加速下载）</li></ul></li></ul></li><li><p>镜像：image，通过镜像来创建服务，如tomcat镜像 =&gt; run =&gt; tomcat01容器（提供服务器的角色）</p><ul><li>该镜像可以创建多个容器</li></ul></li><li><p>容器：container（简化版的linux）</p><ul><li>Docker利用容器技术，可运行一个或者一组应用</li><li>容器支持启动、停止、删除等基本命令</li></ul></li></ul><h3 id="_2-安装" tabindex="-1">2.安装 <a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a></h3><h4 id="linux" tabindex="-1">linux <a class="header-anchor" href="#linux" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/os-release</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#获取系统信息</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-0-3-centos ~]# cat /etc/os-release</span></span>
<span class="line"><span style="color:#A6ACCD;">NAME=&quot;CentOS Linux&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">VERSION=&quot;7 (Core)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">ID=&quot;centos&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">ID_LIKE=&quot;rhel fedora&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">VERSION_ID=&quot;7&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">PRETTY_NAME=&quot;CentOS Linux 7 (Core)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">ANSI_COLOR=&quot;0;31&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">CPE_NAME=&quot;cpe:/o:centos:centos:7&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">HOME_URL=&quot;https://www.centos.org/&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">BUG_REPORT_URL=&quot;https://bugs.centos.org/&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">CENTOS_MANTISBT_PROJECT=&quot;CentOS-7&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">CENTOS_MANTISBT_PROJECT_VERSION=&quot;7&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">REDHAT_SUPPORT_PRODUCT=&quot;centos&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">REDHAT_SUPPORT_PRODUCT_VERSION=&quot;7&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>P6</p><h4 id="windows" tabindex="-1">windows <a class="header-anchor" href="#windows" aria-hidden="true">#</a></h4><h2 id="三、命令" tabindex="-1">三、命令 <a class="header-anchor" href="#三、命令" aria-hidden="true">#</a></h2><ul><li>镜像命令</li><li>容器命令</li><li>操作命令</li></ul><h2 id="四、镜像" tabindex="-1">四、镜像 <a class="header-anchor" href="#四、镜像" aria-hidden="true">#</a></h2><h2 id="五、容器数据卷" tabindex="-1">五、容器数据卷 <a class="header-anchor" href="#五、容器数据卷" aria-hidden="true">#</a></h2><h2 id="六、dockerfile" tabindex="-1">六、DockerFile <a class="header-anchor" href="#六、dockerfile" aria-hidden="true">#</a></h2><h2 id="七、docker网络原理" tabindex="-1">七、Docker网络原理 <a class="header-anchor" href="#七、docker网络原理" aria-hidden="true">#</a></h2><h2 id="八、idea整合docker" tabindex="-1">八、IDEA整合Docker <a class="header-anchor" href="#八、idea整合docker" aria-hidden="true">#</a></h2><h2 id="九、docker-compose-docker-swarm-集群管理" tabindex="-1">九、Docker Compose / Docker Swarm 集群管理 <a class="header-anchor" href="#九、docker-compose-docker-swarm-集群管理" aria-hidden="true">#</a></h2>`,22),r=[o];function t(c,i,p,d,h,u){return a(),s("div",null,r)}const D=e(n,[["render",t]]);export{k as __pageData,D as default};