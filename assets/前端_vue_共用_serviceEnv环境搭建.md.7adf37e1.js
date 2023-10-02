import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const p="/assets/1664692350443.2d265b9b.png",C=JSON.parse('{"title":"serviceEnv环境搭建","description":"","frontmatter":{},"headers":[],"relativePath":"前端/vue/共用/serviceEnv环境搭建.md","filePath":"前端/vue/共用/serviceEnv环境搭建.md","lastUpdated":null}'),o={name:"前端/vue/共用/serviceEnv环境搭建.md"},e=l('<h1 id="serviceenv环境搭建" tabindex="-1">serviceEnv环境搭建 <a class="header-anchor" href="#serviceenv环境搭建" aria-label="Permalink to &quot;serviceEnv环境搭建&quot;">​</a></h1><h2 id="一、基本概念" tabindex="-1">一、基本概念 <a class="header-anchor" href="#一、基本概念" aria-label="Permalink to &quot;一、基本概念&quot;">​</a></h2><ul><li><p>可以根据不同模式加载不同的baseUrl地址，每一个模式可以创建一个与之对应的环境变量配置文件</p><ul><li>这三个文件在Vue根目录下创建</li></ul><p><img src="'+p+`" alt="1664692350443"></p></li></ul><p>生产环境 <code>.env.production</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">NODE_ENV = &quot;development&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_BASE_URL = &quot;http://192.168.3.161:8009&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">#CDNURL CDN方式引入依赖包，本地部署一个静态资源CDN保障稳定性</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_CDNURL = &quot;http://192.168.3.230:7080&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_GEOURL = &quot;http://192.168.3.161:8010&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">NODE_ENV = &quot;development&quot;</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_BASE_URL = &quot;http://192.168.3.161:8009&quot;</span></span>
<span class="line"><span style="color:#24292e;">#CDNURL CDN方式引入依赖包，本地部署一个静态资源CDN保障稳定性</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_CDNURL = &quot;http://192.168.3.230:7080&quot;</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_GEOURL = &quot;http://192.168.3.161:8010&quot;</span></span></code></pre></div><p>开发环境<code>.env.development</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">NODE_ENV = &quot;production&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_BASE_URL = &quot;http://124.70.78.39:8009&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_CDNURL = &quot;http://124.70.78.39&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_GEOURL = &quot;http://124.70.78.39:8010&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">NODE_ENV = &quot;production&quot;</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_BASE_URL = &quot;http://124.70.78.39:8009&quot;</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_CDNURL = &quot;http://124.70.78.39&quot;</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_GEOURL = &quot;http://124.70.78.39:8010&quot;</span></span></code></pre></div><h2 id="二、vue-cli使用方式" tabindex="-1">二、vue-cli使用方式 <a class="header-anchor" href="#二、vue-cli使用方式" aria-label="Permalink to &quot;二、vue-cli使用方式&quot;">​</a></h2><ol><li><p>在项目根目录下创建两个新文件 .env.development .env.production</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 开发环境  .env.development</span></span>
<span class="line"><span style="color:#e1e4e8;">NODE_ENV = &quot;development&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_BASE_URL = &quot;http://192.168.3.161:8009&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_CDNURL = &quot;http://192.168.3.230:7080&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_GEOURL = &quot;http://192.168.3.161:8010&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 开发环境  .env.development</span></span>
<span class="line"><span style="color:#24292e;">NODE_ENV = &quot;development&quot;</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_BASE_URL = &quot;http://192.168.3.161:8009&quot;</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_CDNURL = &quot;http://192.168.3.230:7080&quot;</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_GEOURL = &quot;http://192.168.3.161:8010&quot;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 生产环境 .env.production</span></span>
<span class="line"><span style="color:#e1e4e8;">NODE_ENV = &quot;production&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_BASE_URL = &quot;http://124.70.78.39:8009&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_CDNURL = &quot;http://124.70.78.39&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_GEOURL = &quot;http://124.70.78.39:8010&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 生产环境 .env.production</span></span>
<span class="line"><span style="color:#24292e;">NODE_ENV = &quot;production&quot;</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_BASE_URL = &quot;http://124.70.78.39:8009&quot;</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_CDNURL = &quot;http://124.70.78.39&quot;</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_GEOURL = &quot;http://124.70.78.39:8010&quot;</span></span></code></pre></div></li><li><p>封装axios并根据不同环境使用不同的<code>VUE_APP_URL</code> ,一般将 axios封装文件 和 apiUrl文件单独存放，方便统一管理</p><ul><li>axiosInterceptors.js</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;axios&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> qs </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;qs&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> that </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/main&#39;</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//相当于把Vue对象引过来,方便$message</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//配置拦截器</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.interceptors.request.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">  * 允许携带Token，解决跨域</span></span>
<span class="line"><span style="color:#6A737D;">  * */</span></span>
<span class="line"><span style="color:#E1E4E8;">  config.withCredentials </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">axios.interceptors.response.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response.data</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error.response)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//配置axiosInterceptors对象类并导出（构造函数，对应axios封装）</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AxiosInterceptors</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">localhost</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p<wbr>rocess.env.</span><span style="color:#79B8FF;">VUE_APP_BASE_URL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> url</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.params </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> params</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">  * 处理后台返回的非200错误</span></span>
<span class="line"><span style="color:#6A737D;">  * */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">successfun</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.code </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res.data</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      baseURL: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.localhost,</span></span>
<span class="line"><span style="color:#E1E4E8;">      url: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.url,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: qs.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.params),</span></span>
<span class="line"><span style="color:#E1E4E8;">      withCredentials: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timeout: </span><span style="color:#79B8FF;">5000</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.code </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">successfun</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          that.</span><span style="color:#B392F0;">$message</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;出错啦！&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(res.msg)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        that.</span><span style="color:#B392F0;">$message</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;出错啦！&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(err.msg)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      method: </span><span style="color:#9ECBFF;">&#39;get&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      baseURL: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.localhost,</span></span>
<span class="line"><span style="color:#E1E4E8;">      url: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.url,</span></span>
<span class="line"><span style="color:#E1E4E8;">      params: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.params,</span></span>
<span class="line"><span style="color:#E1E4E8;">      withCredentials: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timeout: </span><span style="color:#79B8FF;">5000</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.code </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">successfun</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          that.</span><span style="color:#B392F0;">$message</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;出错啦！&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(res.msg)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        that.</span><span style="color:#B392F0;">$message</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;出错啦！&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(err.msg)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getBIM</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      method: </span><span style="color:#9ECBFF;">&#39;get&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      baseURL: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.localhost,</span></span>
<span class="line"><span style="color:#E1E4E8;">      url: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.url,</span></span>
<span class="line"><span style="color:#E1E4E8;">      params: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.params,</span></span>
<span class="line"><span style="color:#E1E4E8;">      withCredentials: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timeout: </span><span style="color:#79B8FF;">5000</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">successfun</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        that.</span><span style="color:#B392F0;">$message</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;出错啦！&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(err.msg)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;axios&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> qs </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;qs&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> that </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/main&#39;</span><span style="color:#24292E;">   </span><span style="color:#6A737D;">//相当于把Vue对象引过来,方便$message</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//配置拦截器</span></span>
<span class="line"><span style="color:#24292E;">axios.interceptors.request.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#E36209;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">  * 允许携带Token，解决跨域</span></span>
<span class="line"><span style="color:#6A737D;">  * */</span></span>
<span class="line"><span style="color:#24292E;">  config.withCredentials </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">axios.interceptors.response.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#E36209;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> response.data</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error.response)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//配置axiosInterceptors对象类并导出（构造函数，对应axios封装）</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AxiosInterceptors</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">localhost</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p<wbr>rocess.env.</span><span style="color:#005CC5;">VUE_APP_BASE_URL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> url</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> params</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">  * 处理后台返回的非200错误</span></span>
<span class="line"><span style="color:#6A737D;">  * */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">successfun</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.code </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res.data</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">post</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      method: </span><span style="color:#032F62;">&#39;post&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      baseURL: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.localhost,</span></span>
<span class="line"><span style="color:#24292E;">      url: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.url,</span></span>
<span class="line"><span style="color:#24292E;">      data: qs.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.params),</span></span>
<span class="line"><span style="color:#24292E;">      withCredentials: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      timeout: </span><span style="color:#005CC5;">5000</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.code </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">successfun</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          that.</span><span style="color:#6F42C1;">$message</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;出错啦！&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(res.msg)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }, </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        that.</span><span style="color:#6F42C1;">$message</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;出错啦！&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(err.msg)</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      method: </span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      baseURL: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.localhost,</span></span>
<span class="line"><span style="color:#24292E;">      url: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.url,</span></span>
<span class="line"><span style="color:#24292E;">      params: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.params,</span></span>
<span class="line"><span style="color:#24292E;">      withCredentials: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      timeout: </span><span style="color:#005CC5;">5000</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.code </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">successfun</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          that.</span><span style="color:#6F42C1;">$message</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;出错啦！&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(res.msg)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }, </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        that.</span><span style="color:#6F42C1;">$message</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;出错啦！&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(err.msg)</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getBIM</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      method: </span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      baseURL: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.localhost,</span></span>
<span class="line"><span style="color:#24292E;">      url: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.url,</span></span>
<span class="line"><span style="color:#24292E;">      params: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.params,</span></span>
<span class="line"><span style="color:#24292E;">      withCredentials: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      timeout: </span><span style="color:#005CC5;">5000</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">successfun</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">      }, </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        that.</span><span style="color:#6F42C1;">$message</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;出错啦！&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(err.msg)</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li><p>AxiosApi.js，存放URL</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 1、获取建筑物列表</span></span>
<span class="line"><span style="color:#E1E4E8;">  getBuildList: </span><span style="color:#9ECBFF;">&#39;smartschool/build/getBuildList&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 2、获取建筑物geojson</span></span>
<span class="line"><span style="color:#E1E4E8;">  getBuildJSONList: </span><span style="color:#9ECBFF;">&#39;smartschool/build/getBuildJSONList&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 3、获取单独建筑物geojson</span></span>
<span class="line"><span style="color:#E1E4E8;">  getBuildJSONListByOBJECTID: </span><span style="color:#9ECBFF;">&#39;smartschool/build/getBuildJSONListByOBJECTID&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 4、导航</span></span>
<span class="line"><span style="color:#E1E4E8;">  getNavigationRoad: </span><span style="color:#9ECBFF;">&#39;smartschool/build/getNavigationRoad&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 5、获取所有停车场</span></span>
<span class="line"><span style="color:#E1E4E8;">  getAllpark: </span><span style="color:#9ECBFF;">&#39;smartschool/build/getAllpark&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 6、获取停车场详细信息</span></span>
<span class="line"><span style="color:#E1E4E8;">  getParkInfo: </span><span style="color:#9ECBFF;">&#39;smartschool/build/getParkInfo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 7、获取建筑物内部楼层房间</span></span>
<span class="line"><span style="color:#E1E4E8;">  getBuildFloor: </span><span style="color:#9ECBFF;">&#39;smartschool/build/getBuildFloor&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 8、获取水面</span></span>
<span class="line"><span style="color:#E1E4E8;">  getWaterArea: </span><span style="color:#9ECBFF;">&#39;smartschool/base/getWaterArea&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 9、获取飞行路线</span></span>
<span class="line"><span style="color:#E1E4E8;">  getFlightLine: </span><span style="color:#9ECBFF;">&#39;smartschool/base/getFlightLine&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 10、获取教室列表</span></span>
<span class="line"><span style="color:#E1E4E8;">  getClassRoomList: </span><span style="color:#9ECBFF;">&#39;smartschool/leftBar/getClassRoomList&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 11、获取教室课程表</span></span>
<span class="line"><span style="color:#E1E4E8;">  getCourseInformation: </span><span style="color:#9ECBFF;">&#39;smartschool/leftBar/getCourseInformation&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 12、获取单独建筑物geojson，Cesium 点击</span></span>
<span class="line"><span style="color:#E1E4E8;">  getBuildJSONListByOBJECTIDCesium:</span><span style="color:#9ECBFF;">&#39;smartschool/cesium/getBuildJSONListByOBJECTIDCesium&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 1、获取建筑物列表</span></span>
<span class="line"><span style="color:#24292E;">  getBuildList: </span><span style="color:#032F62;">&#39;smartschool/build/getBuildList&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 2、获取建筑物geojson</span></span>
<span class="line"><span style="color:#24292E;">  getBuildJSONList: </span><span style="color:#032F62;">&#39;smartschool/build/getBuildJSONList&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 3、获取单独建筑物geojson</span></span>
<span class="line"><span style="color:#24292E;">  getBuildJSONListByOBJECTID: </span><span style="color:#032F62;">&#39;smartschool/build/getBuildJSONListByOBJECTID&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 4、导航</span></span>
<span class="line"><span style="color:#24292E;">  getNavigationRoad: </span><span style="color:#032F62;">&#39;smartschool/build/getNavigationRoad&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 5、获取所有停车场</span></span>
<span class="line"><span style="color:#24292E;">  getAllpark: </span><span style="color:#032F62;">&#39;smartschool/build/getAllpark&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 6、获取停车场详细信息</span></span>
<span class="line"><span style="color:#24292E;">  getParkInfo: </span><span style="color:#032F62;">&#39;smartschool/build/getParkInfo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 7、获取建筑物内部楼层房间</span></span>
<span class="line"><span style="color:#24292E;">  getBuildFloor: </span><span style="color:#032F62;">&#39;smartschool/build/getBuildFloor&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 8、获取水面</span></span>
<span class="line"><span style="color:#24292E;">  getWaterArea: </span><span style="color:#032F62;">&#39;smartschool/base/getWaterArea&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 9、获取飞行路线</span></span>
<span class="line"><span style="color:#24292E;">  getFlightLine: </span><span style="color:#032F62;">&#39;smartschool/base/getFlightLine&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 10、获取教室列表</span></span>
<span class="line"><span style="color:#24292E;">  getClassRoomList: </span><span style="color:#032F62;">&#39;smartschool/leftBar/getClassRoomList&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 11、获取教室课程表</span></span>
<span class="line"><span style="color:#24292E;">  getCourseInformation: </span><span style="color:#032F62;">&#39;smartschool/leftBar/getCourseInformation&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 12、获取单独建筑物geojson，Cesium 点击</span></span>
<span class="line"><span style="color:#24292E;">  getBuildJSONListByOBJECTIDCesium:</span><span style="color:#032F62;">&#39;smartschool/cesium/getBuildJSONListByOBJECTIDCesium&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li><p>组件调用</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;SideBar space-between&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   111</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> AxiosInterceptors </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/config/AxiosInterceptors&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> AxiosAPI </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/config/AxiosAPI&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> sideBarListCom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;SideBar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    vueScroll</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      sideBarList: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">methodOne</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AxiosInterceptors</span><span style="color:#E1E4E8;">(AxiosAPI.getBuildList).</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        	sideBarListCom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res</span></span>
<span class="line"><span style="color:#E1E4E8;">        	</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.sideBarList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sideBarListCom</span></span>
<span class="line"><span style="color:#E1E4E8;">    	}</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">    async </span><span style="color:#B392F0;">methodTwo</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">BIMID</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">//加载本地文件  </span></span>
<span class="line"><span style="color:#E1E4E8;">          const result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> 			    	                              </span><span style="color:#B392F0;">AxiosInterceptors</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">env</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">VUE_APP_CDNURL</span><span style="color:#9ECBFF;">}/smartschoolModule/bim/info/\${</span><span style="color:#79B8FF;">BIMID</span><span style="color:#9ECBFF;">}.json\`</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getBIM</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;SideBar space-between&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   111</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> AxiosInterceptors </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/config/AxiosInterceptors&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> AxiosAPI </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/config/AxiosAPI&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> sideBarListCom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;SideBar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  components: {</span></span>
<span class="line"><span style="color:#24292E;">    vueScroll</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      sideBarList: []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">created</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">methodOne</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AxiosInterceptors</span><span style="color:#24292E;">(AxiosAPI.getBuildList).</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        	sideBarListCom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res</span></span>
<span class="line"><span style="color:#24292E;">        	</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.sideBarList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> sideBarListCom</span></span>
<span class="line"><span style="color:#24292E;">    	}</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">    async </span><span style="color:#6F42C1;">methodTwo</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">BIMID</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//加载本地文件  </span></span>
<span class="line"><span style="color:#24292E;">          const result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> 			    	                              </span><span style="color:#6F42C1;">AxiosInterceptors</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">process</span><span style="color:#032F62;">.</span><span style="color:#24292E;">env</span><span style="color:#032F62;">.</span><span style="color:#005CC5;">VUE_APP_CDNURL</span><span style="color:#032F62;">}/smartschoolModule/bim/info/\${</span><span style="color:#005CC5;">BIMID</span><span style="color:#032F62;">}.json\`</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getBIM</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  computed: {</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></li></ol><h2 id="三、vite使用方式" tabindex="-1">三、Vite使用方式 <a class="header-anchor" href="#三、vite使用方式" aria-label="Permalink to &quot;三、Vite使用方式&quot;">​</a></h2><h3 id="_1、创建-dev-、pro-和-env-d-ts" tabindex="-1">1、创建 dev 、pro 和 env.d.ts <a class="header-anchor" href="#_1、创建-dev-、pro-和-env-d-ts" aria-label="Permalink to &quot;1、创建 dev 、pro 和 env.d.ts&quot;">​</a></h3><p><code>项目根目录/.env.development</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">NODE_ENV = &quot;development&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VITE_BASE_URL = &quot;http://127.0.0.1:8888&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">NODE_ENV = &quot;development&quot;</span></span>
<span class="line"><span style="color:#24292e;">VITE_BASE_URL = &quot;http://127.0.0.1:8888&quot;</span></span></code></pre></div><p><code>项目根目录/.env.production</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">NODE_ENV = &quot;production&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">VUE_APP_BASE_URL = &quot;http://xxxxxxxxxx:8009&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">NODE_ENV = &quot;production&quot;</span></span>
<span class="line"><span style="color:#24292e;">VUE_APP_BASE_URL = &quot;http://xxxxxxxxxx:8009&quot;</span></span></code></pre></div><p><code>项目根目录/src/env.d.ts</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">interface ImportMetaEnv {</span></span>
<span class="line"><span style="color:#e1e4e8;">  readonly VITE_BASE_URL: string;</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 更多环境变量...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">interface ImportMetaEnv {</span></span>
<span class="line"><span style="color:#24292e;">  readonly VITE_BASE_URL: string;</span></span>
<span class="line"><span style="color:#24292e;">  // 更多环境变量...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_2、配置vite-config-ts-和-tsconfig-json" tabindex="-1">2、配置vite.config.ts 和 tsconfig.json <a class="header-anchor" href="#_2、配置vite-config-ts-和-tsconfig-json" aria-label="Permalink to &quot;2、配置vite.config.ts 和 tsconfig.json&quot;">​</a></h3><p><code>vite.config.ts</code></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//主要配置以下这两行</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;path&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createSvgIconsPlugin } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite-plugin-svg-icons&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">( {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//主要配置 createSvgIconsPlugin方法参数对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createSvgIconsPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Specify the icon folder to be cached</span></span>
<span class="line"><span style="color:#E1E4E8;">      iconDirs: [path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;src/assets&#39;</span><span style="color:#E1E4E8;">)],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Specify symbolId format</span></span>
<span class="line"><span style="color:#E1E4E8;">      symbolId: </span><span style="color:#9ECBFF;">&#39;icon-[dir]-[name]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  envPrefix: </span><span style="color:#9ECBFF;">&#39;VITE_&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//主要配置以下这两行</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;path&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createSvgIconsPlugin } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite-plugin-svg-icons&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">( {</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//主要配置 createSvgIconsPlugin方法参数对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createSvgIconsPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Specify the icon folder to be cached</span></span>
<span class="line"><span style="color:#24292E;">      iconDirs: [path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(process.</span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">(), </span><span style="color:#032F62;">&#39;src/assets&#39;</span><span style="color:#24292E;">)],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Specify symbolId format</span></span>
<span class="line"><span style="color:#24292E;">      symbolId: </span><span style="color:#032F62;">&#39;icon-[dir]-[name]&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  envPrefix: </span><span style="color:#032F62;">&#39;VITE_&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p><code>tsconfig.json</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;target&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ESNext&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;useDefineForClassFields&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;module&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ESNext&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;moduleResolution&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Node&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;strict&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;jsx&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;preserve&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;sourceMap&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;resolveJsonModule&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;isolatedModules&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;esModuleInterop&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;lib&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;ESNext&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;DOM&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;skipLibCheck&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;types&quot;</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">&quot;vite/client&quot;</span><span style="color:#E1E4E8;"> ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;include&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;src/**/*.ts&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;src/**/*.d.ts&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;src/**/*.tsx&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;src/**/*.vue&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;references&quot;</span><span style="color:#E1E4E8;">: [{ </span><span style="color:#79B8FF;">&quot;path&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./tsconfig.node.json&quot;</span><span style="color:#E1E4E8;"> }]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;target&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ESNext&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;useDefineForClassFields&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;module&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ESNext&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;moduleResolution&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Node&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;strict&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;jsx&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;preserve&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;sourceMap&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;resolveJsonModule&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;isolatedModules&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;esModuleInterop&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;lib&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;ESNext&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;DOM&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;skipLibCheck&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;types&quot;</span><span style="color:#24292E;">: [ </span><span style="color:#032F62;">&quot;vite/client&quot;</span><span style="color:#24292E;"> ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;include&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;src/**/*.ts&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;src/**/*.d.ts&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;src/**/*.tsx&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;src/**/*.vue&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;references&quot;</span><span style="color:#24292E;">: [{ </span><span style="color:#005CC5;">&quot;path&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./tsconfig.node.json&quot;</span><span style="color:#24292E;"> }]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="三、api封装使用" tabindex="-1">三、api封装使用 <a class="header-anchor" href="#三、api封装使用" aria-label="Permalink to &quot;三、api封装使用&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;axios&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">request</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  baseURL: </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.env.</span><span style="color:#79B8FF;">VITE_BASE_URL</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> request</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;axios&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">request</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  baseURL: </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.env.</span><span style="color:#005CC5;">VITE_BASE_URL</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> request</span></span></code></pre></div>`,24),t=[e];function c(r,E,y,i,u,F){return n(),a("div",null,t)}const h=s(o,[["render",c]]);export{C as __pageData,h as default};
