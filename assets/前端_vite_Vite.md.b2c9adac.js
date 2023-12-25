import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a7175731.js";const h=JSON.parse('{"title":"Vite --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"前端/vite/Vite.md","filePath":"前端/vite/Vite.md","lastUpdated":null}'),p={name:"前端/vite/Vite.md"},o=l(`<h1 id="vite-笔记" tabindex="-1">Vite --笔记 <a class="header-anchor" href="#vite-笔记" aria-label="Permalink to &quot;Vite --笔记&quot;">​</a></h1><h2 id="一、打包-allowjs" tabindex="-1">一、打包 allowJS <a class="header-anchor" href="#一、打包-allowjs" aria-label="Permalink to &quot;一、打包 allowJS&quot;">​</a></h2><p>在tsconfig.js里面的compilerOptions对象下添加属性： “allowJs”: true,</p><p>文件：tsconfig.js：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;allowJs&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;allowJs&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="二、isolatedmodules" tabindex="-1">二、isolatedModules <a class="header-anchor" href="#二、isolatedmodules" aria-label="Permalink to &quot;二、isolatedModules&quot;">​</a></h2><p>在vue中使用ts定义变量的时候报如下错误：</p><p>cannot be compiled under &#39;--isolatedModules&#39; because it is considered a global script file. Add an import, export, or an empty &#39;export {}&#39; statement to make it a module.</p><h4 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;原因&quot;">​</a></h4><p>Typescript将没有导入/导出的文件视为旧脚本文件。这样的文件不是模块，它们的任何定义都已合并到全局名称空间中。 isolatedModules禁止此类文件。</p><p>将任何导入或导出添加到文件都使其成为一个模块，并且错误消失。</p><p>export {}也是一种方便的方法，可以在不导入任何内容的情况下使文件成为模块。</p><h4 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-label="Permalink to &quot;解决办法&quot;">​</a></h4><p>找到tsconfig.json配置文件，把isolatedModules字段改为false</p><h2 id="三、src配置全局路径" tabindex="-1">三、src配置全局路径@ <a class="header-anchor" href="#三、src配置全局路径" aria-label="Permalink to &quot;三、src配置全局路径@&quot;">​</a></h2><h3 id="_1-安装path依赖" tabindex="-1">1.安装path依赖 <a class="header-anchor" href="#_1-安装path依赖" aria-label="Permalink to &quot;1.安装path依赖&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">path</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><h3 id="_2-配置vite-config-ts" tabindex="-1">2.配置vite.config.ts <a class="header-anchor" href="#_2-配置vite-config-ts" aria-label="Permalink to &quot;2.配置vite.config.ts&quot;">​</a></h3><blockquote><p>在resolve选项中配置一个alias别名</p></blockquote><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        alias: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                find: </span><span style="color:#9ECBFF;">&#39;@&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                replacement: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;./src&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">    resolve: {</span></span>
<span class="line"><span style="color:#24292E;">        alias: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                find: </span><span style="color:#032F62;">&#39;@&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                replacement: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;./src&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><ul><li><p>此时已经可以通过 @ 符号引入vue组件和图片等如下，但是对于<code>ts文件可能找不到路径</code></p><ul><li><p>route路径对象可以使用</p></li><li><p>组件中ts代码加载图片可使用</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> firePng </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/assets/fire.png&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.viewer.scene.primitives.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">ParticleSystem</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">//此处可使用上面引用的图片地址  </span></span>
<span class="line"><span style="color:#E1E4E8;">          image: firePng,</span></span>
<span class="line"><span style="color:#E1E4E8;">          startColor: Cesium.Color.</span><span style="color:#79B8FF;">RED</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">withAlpha</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.7</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          endColor: Cesium.Color.</span><span style="color:#79B8FF;">YELLOW</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">withAlpha</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          startScale: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          endScale: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">//设定粒子寿命可能持续时间的最小限值(以秒为单位)，在此限值之上将随机选择粒子的实际寿命。</span></span>
<span class="line"><span style="color:#E1E4E8;">          minimumParticleLife: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          maximumParticleLife: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          minimumSpeed: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          maximumSpeed: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// Particles per second.</span></span>
<span class="line"><span style="color:#E1E4E8;">          emissionRate: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,   </span><span style="color:#6A737D;">//没秒施放的粒子数</span></span>
<span class="line"><span style="color:#E1E4E8;">          lifetime: </span><span style="color:#79B8FF;">16.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          emitter: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">CircleEmitter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5.0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          modelMatrix: </span><span style="color:#B392F0;">computeModelMatrix</span><span style="color:#E1E4E8;">(entity44.values[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">], Cesium.JulianDate.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()),</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">//modelMatrix: computeModelMatrix(entity44, Cesium.JulianDate.now()), //从模型转化成世界坐标</span></span>
<span class="line"><span style="color:#E1E4E8;">          emitterModelMatrix : </span><span style="color:#B392F0;">computeEmitterModelMatrix</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> firePng </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/assets/fire.png&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        window.viewer.scene.primitives.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">ParticleSystem</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//此处可使用上面引用的图片地址  </span></span>
<span class="line"><span style="color:#24292E;">          image: firePng,</span></span>
<span class="line"><span style="color:#24292E;">          startColor: Cesium.Color.</span><span style="color:#005CC5;">RED</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">withAlpha</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.7</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          endColor: Cesium.Color.</span><span style="color:#005CC5;">YELLOW</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">withAlpha</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.3</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          startScale: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          endScale: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//设定粒子寿命可能持续时间的最小限值(以秒为单位)，在此限值之上将随机选择粒子的实际寿命。</span></span>
<span class="line"><span style="color:#24292E;">          minimumParticleLife: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          maximumParticleLife: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          minimumSpeed: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          maximumSpeed: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// Particles per second.</span></span>
<span class="line"><span style="color:#24292E;">          emissionRate: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,   </span><span style="color:#6A737D;">//没秒施放的粒子数</span></span>
<span class="line"><span style="color:#24292E;">          lifetime: </span><span style="color:#005CC5;">16.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          emitter: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">CircleEmitter</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5.0</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          modelMatrix: </span><span style="color:#6F42C1;">computeModelMatrix</span><span style="color:#24292E;">(entity44.values[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">], Cesium.JulianDate.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">()),</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//modelMatrix: computeModelMatrix(entity44, Cesium.JulianDate.now()), //从模型转化成世界坐标</span></span>
<span class="line"><span style="color:#24292E;">          emitterModelMatrix : </span><span style="color:#6F42C1;">computeEmitterModelMatrix</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li></ul></li></ul><h3 id="_3-配置tsconfig-json" tabindex="-1">3.配置tsconfig.json <a class="header-anchor" href="#_3-配置tsconfig-json" aria-label="Permalink to &quot;3.配置tsconfig.json&quot;">​</a></h3><blockquote><p>在在 <code>compilerOptions</code> 选择中增加 <code>baseUrl</code> 及 <code>paths</code> 配置</p></blockquote><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// ...省略其它配置项</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;baseUrl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;paths&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;@/*&quot;</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">&quot;src/*&quot;</span><span style="color:#E1E4E8;"> ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// ...省略其它配置项</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;baseUrl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;paths&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;@/*&quot;</span><span style="color:#24292E;">: [ </span><span style="color:#032F62;">&quot;src/*&quot;</span><span style="color:#24292E;"> ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="四、配置局域网访问权限" tabindex="-1">四、配置局域网访问权限 <a class="header-anchor" href="#四、配置局域网访问权限" aria-label="Permalink to &quot;四、配置局域网访问权限&quot;">​</a></h2><h3 id="vite-config-ts" tabindex="-1">vite.config.ts <a class="header-anchor" href="#vite-config-ts" aria-label="Permalink to &quot;vite.config.ts&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">( {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//主要配置 createSvgIconsPlugin方法参数对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createSvgIconsPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Specify the icon folder to be cached</span></span>
<span class="line"><span style="color:#E1E4E8;">      iconDirs: [path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;src/assets&#39;</span><span style="color:#E1E4E8;">)],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Specify symbolId format</span></span>
<span class="line"><span style="color:#E1E4E8;">      symbolId: </span><span style="color:#9ECBFF;">&#39;icon-[dir]-[name]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">cesium</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 配置路径别名</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;@&#39;</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;./src&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  envPrefix: </span><span style="color:#9ECBFF;">&#39;VITE_&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否开启 https</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// https: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// port: 3000,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 监听所有地址</span></span>
<span class="line"><span style="color:#E1E4E8;">    host: </span><span style="color:#9ECBFF;">&#39;0.0.0.0&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 服务启动时是否自动打开浏览器</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// open: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 允许跨域</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// cors: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 自定义代理规则</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// proxy: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">( {</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//主要配置 createSvgIconsPlugin方法参数对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createSvgIconsPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Specify the icon folder to be cached</span></span>
<span class="line"><span style="color:#24292E;">      iconDirs: [path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(process.</span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">(), </span><span style="color:#032F62;">&#39;src/assets&#39;</span><span style="color:#24292E;">)],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Specify symbolId format</span></span>
<span class="line"><span style="color:#24292E;">      symbolId: </span><span style="color:#032F62;">&#39;icon-[dir]-[name]&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">cesium</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  resolve: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 配置路径别名</span></span>
<span class="line"><span style="color:#24292E;">    alias: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;@&#39;</span><span style="color:#24292E;">: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;./src&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  envPrefix: </span><span style="color:#032F62;">&#39;VITE_&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  server: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否开启 https</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// https: false,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 端口号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// port: 3000,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 监听所有地址</span></span>
<span class="line"><span style="color:#24292E;">    host: </span><span style="color:#032F62;">&#39;0.0.0.0&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 服务启动时是否自动打开浏览器</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// open: true,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 允许跨域</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// cors: true,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 自定义代理规则</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// proxy: {},</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,27),e=[o];function t(c,r,E,i,y,d){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{h as __pageData,F as default};
