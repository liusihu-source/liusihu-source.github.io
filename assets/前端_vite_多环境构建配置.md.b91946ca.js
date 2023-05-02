import{_ as s,c as n,o as a,a as l}from"./app.eb215157.js";const E=JSON.parse('{"title":"多环境构建配置 --笔记","description":"","frontmatter":{},"headers":[{"level":5,"title":".env  在所有环境中都会被载入","slug":"env-在所有环境中都会被载入","link":"#env-在所有环境中都会被载入","children":[]},{"level":5,"title":".env.development 开发环境中被载入（程序启动默认走此配置）","slug":"env-development-开发环境中被载入-程序启动默认走此配置","link":"#env-development-开发环境中被载入-程序启动默认走此配置","children":[]},{"level":5,"title":".env.production 生产环境中加载（项目打包默认走此配置）","slug":"env-production-生产环境中加载-项目打包默认走此配置","link":"#env-production-生产环境中加载-项目打包默认走此配置","children":[]}],"relativePath":"前端/vite/多环境构建配置.md","lastUpdated":1669705325000}'),p={name:"前端/vite/多环境构建配置.md"},o=l(`<h1 id="多环境构建配置-笔记" tabindex="-1">多环境构建配置 --笔记 <a class="header-anchor" href="#多环境构建配置-笔记" aria-hidden="true">#</a></h1><blockquote><p>引入<code>.env.*</code>配置文件，<strong>根目录</strong>新增以下3个环境配置文件</p><p>.env &amp; .env.development &amp; .env.production</p></blockquote><h5 id="env-在所有环境中都会被载入" tabindex="-1">.env <code>在所有环境中都会被载入</code> <a class="header-anchor" href="#env-在所有环境中都会被载入" aria-hidden="true">#</a></h5><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># port前端项目默认端口号</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_PORT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3100</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  网站标题</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_GLOB_APP_TITLE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JeecgBoot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">企业级低代码平台</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_GLOB_APP_SHORT_NAME</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JeecgBootAdmin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 单点登录服务端地址</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_APP_CAS_BASE_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://cas.test.com:</span><span style="color:#F78C6C;">8443</span><span style="color:#C3E88D;">/cas</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 是否开启单点登录</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_GLOB_APP_OPEN_SSO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 开启微前端模式</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_APP_OPEN_QIANKUN</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 文件预览地址</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_ONLINE_VIEW_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://fileview.jeecg.com/onlinePreview</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h5 id="env-development-开发环境中被载入-程序启动默认走此配置" tabindex="-1">.env.development 开发环境中被载入（程序启动默认走此配置） <a class="header-anchor" href="#env-development-开发环境中被载入-程序启动默认走此配置" aria-hidden="true">#</a></h5><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 是否打开mock</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_USE_MOCK</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 发布路径</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_PUBLIC_PATH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 跨域代理，您可以配置多个 ,请注意，没有换行符</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_PROXY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/sihu-boot</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://223.2.42.217:8080/sihu-boot</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/upload</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:3300/upload</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 控制台不输出</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_DROP_CONSOLE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#后台接口父地址(必填)</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/sihu-boot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#后台接口全路径地址(必填)</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_DOMAIN_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://223.2.42.217:</span><span style="color:#F78C6C;">8080</span><span style="color:#C3E88D;">/sihu-boot</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#这样同一个局域网内所有的设备都可以访问到</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 接口前缀</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL_PREFIX</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#微前端qiankun应用,命名必须以VITE_APP_SUB_开头,jeecg-app-1为子应用的项目名称,也是子应用的路由父路径</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_APP_SUB_jeecg-app-1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//localhost:8092</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h5 id="env-production-生产环境中加载-项目打包默认走此配置" tabindex="-1">.env.production 生产环境中加载（项目打包默认走此配置） <a class="header-anchor" href="#env-production-生产环境中加载-项目打包默认走此配置" aria-hidden="true">#</a></h5><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 是否启用mock</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_USE_MOCK</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 发布路径，成功发布之后，所有的console.log均会去除</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_PUBLIC_PATH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 控制台不输出</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_DROP_CONSOLE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 是否启用gzip或brotli压缩</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 选项值: gzip | brotli | none</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果需要多个可以使用“,”分隔</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_BUILD_COMPRESS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gzip</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用压缩时是否删除原始文件，默认为false</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#后台接口父地址(必填)</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/jeecgboot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#后台接口全路径地址(必填)，上线后访问的服务器后端地址</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_DOMAIN_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://jeecg-boot-system:</span><span style="color:#F78C6C;">8080</span><span style="color:#C3E88D;">/jeecg-boot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 接口父路径前缀</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL_PREFIX</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 是否启用图像压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_USE_IMAGEMIN</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用pwa</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_USE_PWA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 是否兼容旧浏览器</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_LEGACY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><a href="https://cli.vuejs.org/zh/guide/mode-and-env.html" target="_blank" rel="noreferrer">https://cli.vuejs.org/zh/guide/mode-and-env.html</a></p><p><strong>vue-cli现在处于维护模式，尽量更换脚手架Vite</strong></p>`,10),e=[o];function t(c,r,i,y,C,D){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{E as __pageData,F as default};
