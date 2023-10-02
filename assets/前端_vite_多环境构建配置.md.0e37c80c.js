import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const A=JSON.parse('{"title":"多环境构建配置 --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"前端/vite/多环境构建配置.md","filePath":"前端/vite/多环境构建配置.md","lastUpdated":null}'),p={name:"前端/vite/多环境构建配置.md"},o=l(`<h1 id="多环境构建配置-笔记" tabindex="-1">多环境构建配置 --笔记 <a class="header-anchor" href="#多环境构建配置-笔记" aria-label="Permalink to &quot;多环境构建配置 --笔记&quot;">​</a></h1><blockquote><p>引入<code>.env.*</code>配置文件，<strong>根目录</strong>新增以下3个环境配置文件</p><p>.env &amp; .env.development &amp; .env.production</p></blockquote><h5 id="env-在所有环境中都会被载入" tabindex="-1">.env <code>在所有环境中都会被载入</code> <a class="header-anchor" href="#env-在所有环境中都会被载入" aria-label="Permalink to &quot;.env  \`在所有环境中都会被载入\`&quot;">​</a></h5><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># port前端项目默认端口号</span></span>
<span class="line"><span style="color:#B392F0;">VITE_PORT</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3100</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#  网站标题</span></span>
<span class="line"><span style="color:#B392F0;">VITE_GLOB_APP_TITLE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">JeecgBoot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">企业级低代码平台</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符</span></span>
<span class="line"><span style="color:#B392F0;">VITE_GLOB_APP_SHORT_NAME</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">JeecgBootAdmin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 单点登录服务端地址</span></span>
<span class="line"><span style="color:#E1E4E8;">VITE_GLOB_APP_CAS_BASE_URL</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">http://cas.test.com:8443/cas</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否开启单点登录</span></span>
<span class="line"><span style="color:#B392F0;">VITE_GLOB_APP_OPEN_SSO</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 开启微前端模式</span></span>
<span class="line"><span style="color:#E1E4E8;">VITE_GLOB_APP_OPEN_QIANKUN</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 文件预览地址</span></span>
<span class="line"><span style="color:#E1E4E8;">VITE_GLOB_ONLINE_VIEW_URL</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">http://fileview.jeecg.com/onlinePreview</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># port前端项目默认端口号</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_PORT</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3100</span><span style="color:#24292E;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#  网站标题</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_GLOB_APP_TITLE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">JeecgBoot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">企业级低代码平台</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_GLOB_APP_SHORT_NAME</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">JeecgBootAdmin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 单点登录服务端地址</span></span>
<span class="line"><span style="color:#24292E;">VITE_GLOB_APP_CAS_BASE_URL</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">http://cas.test.com:8443/cas</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否开启单点登录</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_GLOB_APP_OPEN_SSO</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 开启微前端模式</span></span>
<span class="line"><span style="color:#24292E;">VITE_GLOB_APP_OPEN_QIANKUN</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 文件预览地址</span></span>
<span class="line"><span style="color:#24292E;">VITE_GLOB_ONLINE_VIEW_URL</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">http://fileview.jeecg.com/onlinePreview</span></span></code></pre></div><h5 id="env-development-开发环境中被载入-程序启动默认走此配置" tabindex="-1">.env.development 开发环境中被载入（程序启动默认走此配置） <a class="header-anchor" href="#env-development-开发环境中被载入-程序启动默认走此配置" aria-label="Permalink to &quot;.env.development 开发环境中被载入（程序启动默认走此配置）&quot;">​</a></h5><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 是否打开mock</span></span>
<span class="line"><span style="color:#B392F0;">VITE_USE_MOCK</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 发布路径</span></span>
<span class="line"><span style="color:#B392F0;">VITE_PUBLIC_PATH</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 跨域代理，您可以配置多个 ,请注意，没有换行符</span></span>
<span class="line"><span style="color:#B392F0;">VITE_PROXY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> [[</span><span style="color:#9ECBFF;">&quot;/sihu-boot&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;http://223.2.42.217:8080/sihu-boot&quot;</span><span style="color:#E1E4E8;">],[</span><span style="color:#9ECBFF;">&quot;/upload&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;http://localhost:3300/upload&quot;</span><span style="color:#E1E4E8;">]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 控制台不输出</span></span>
<span class="line"><span style="color:#B392F0;">VITE_DROP_CONSOLE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#后台接口父地址(必填)</span></span>
<span class="line"><span style="color:#E1E4E8;">VITE_GLOB_API_URL</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">/sihu-boot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#后台接口全路径地址(必填)</span></span>
<span class="line"><span style="color:#E1E4E8;">VITE_GLOB_DOMAIN_URL</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">http://223.2.42.217:8080/sihu-boot</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#这样同一个局域网内所有的设备都可以访问到</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 接口前缀</span></span>
<span class="line"><span style="color:#E1E4E8;">VITE_GLOB_API_URL_PREFIX</span><span style="color:#F97583;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#微前端qiankun应用,命名必须以VITE_APP_SUB_开头,jeecg-app-1为子应用的项目名称,也是子应用的路由父路径</span></span>
<span class="line"><span style="color:#B392F0;">VITE_APP_SUB_jeecg-app-1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;//localhost:8092&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 是否打开mock</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_USE_MOCK</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 发布路径</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_PUBLIC_PATH</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 跨域代理，您可以配置多个 ,请注意，没有换行符</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_PROXY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> [[</span><span style="color:#032F62;">&quot;/sihu-boot&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;http://223.2.42.217:8080/sihu-boot&quot;</span><span style="color:#24292E;">],[</span><span style="color:#032F62;">&quot;/upload&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;http://localhost:3300/upload&quot;</span><span style="color:#24292E;">]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 控制台不输出</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_DROP_CONSOLE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#后台接口父地址(必填)</span></span>
<span class="line"><span style="color:#24292E;">VITE_GLOB_API_URL</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">/sihu-boot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#后台接口全路径地址(必填)</span></span>
<span class="line"><span style="color:#24292E;">VITE_GLOB_DOMAIN_URL</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">http://223.2.42.217:8080/sihu-boot</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">#这样同一个局域网内所有的设备都可以访问到</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 接口前缀</span></span>
<span class="line"><span style="color:#24292E;">VITE_GLOB_API_URL_PREFIX</span><span style="color:#D73A49;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#微前端qiankun应用,命名必须以VITE_APP_SUB_开头,jeecg-app-1为子应用的项目名称,也是子应用的路由父路径</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_APP_SUB_jeecg-app-1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;//localhost:8092&#39;</span></span></code></pre></div><h5 id="env-production-生产环境中加载-项目打包默认走此配置" tabindex="-1">.env.production 生产环境中加载（项目打包默认走此配置） <a class="header-anchor" href="#env-production-生产环境中加载-项目打包默认走此配置" aria-label="Permalink to &quot;.env.production 生产环境中加载（项目打包默认走此配置）&quot;">​</a></h5><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 是否启用mock</span></span>
<span class="line"><span style="color:#B392F0;">VITE_USE_MOCK</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 发布路径，成功发布之后，所有的console.log均会去除</span></span>
<span class="line"><span style="color:#B392F0;">VITE_PUBLIC_PATH</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 控制台不输出</span></span>
<span class="line"><span style="color:#B392F0;">VITE_DROP_CONSOLE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否启用gzip或brotli压缩</span></span>
<span class="line"><span style="color:#6A737D;"># 选项值: gzip | brotli | none</span></span>
<span class="line"><span style="color:#6A737D;"># 如果需要多个可以使用“,”分隔</span></span>
<span class="line"><span style="color:#B392F0;">VITE_BUILD_COMPRESS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;gzip&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用压缩时是否删除原始文件，默认为false</span></span>
<span class="line"><span style="color:#B392F0;">VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#后台接口父地址(必填)</span></span>
<span class="line"><span style="color:#E1E4E8;">VITE_GLOB_API_URL</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">/jeecgboot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#后台接口全路径地址(必填)，上线后访问的服务器后端地址</span></span>
<span class="line"><span style="color:#E1E4E8;">VITE_GLOB_DOMAIN_URL</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">http://jeecg-boot-system:8080/jeecg-boot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 接口父路径前缀</span></span>
<span class="line"><span style="color:#E1E4E8;">VITE_GLOB_API_URL_PREFIX</span><span style="color:#F97583;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否启用图像压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">VITE_USE_IMAGEMIN</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用pwa</span></span>
<span class="line"><span style="color:#B392F0;">VITE_USE_PWA</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否兼容旧浏览器</span></span>
<span class="line"><span style="color:#B392F0;">VITE_LEGACY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 是否启用mock</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_USE_MOCK</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 发布路径，成功发布之后，所有的console.log均会去除</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_PUBLIC_PATH</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 控制台不输出</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_DROP_CONSOLE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否启用gzip或brotli压缩</span></span>
<span class="line"><span style="color:#6A737D;"># 选项值: gzip | brotli | none</span></span>
<span class="line"><span style="color:#6A737D;"># 如果需要多个可以使用“,”分隔</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_BUILD_COMPRESS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;gzip&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用压缩时是否删除原始文件，默认为false</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#后台接口父地址(必填)</span></span>
<span class="line"><span style="color:#24292E;">VITE_GLOB_API_URL</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">/jeecgboot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#后台接口全路径地址(必填)，上线后访问的服务器后端地址</span></span>
<span class="line"><span style="color:#24292E;">VITE_GLOB_DOMAIN_URL</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">http://jeecg-boot-system:8080/jeecg-boot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 接口父路径前缀</span></span>
<span class="line"><span style="color:#24292E;">VITE_GLOB_API_URL_PREFIX</span><span style="color:#D73A49;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否启用图像压缩</span></span>
<span class="line"><span style="color:#24292E;">VITE_USE_IMAGEMIN</span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用pwa</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_USE_PWA</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否兼容旧浏览器</span></span>
<span class="line"><span style="color:#6F42C1;">VITE_LEGACY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span></code></pre></div><p><a href="https://cli.vuejs.org/zh/guide/mode-and-env.html" target="_blank" rel="noreferrer">https://cli.vuejs.org/zh/guide/mode-and-env.html</a></p><p><strong>vue-cli现在处于维护模式，尽量更换脚手架Vite</strong></p>`,10),e=[o];function c(t,r,E,y,i,_){return n(),a("div",null,e)}const B=s(p,[["render",c]]);export{A as __pageData,B as default};
