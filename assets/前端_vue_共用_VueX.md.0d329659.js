import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const p="/assets/image-20220504192134546.9242ecb7.png",m=JSON.parse('{"title":"VueX --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"前端/vue/共用/VueX.md","filePath":"前端/vue/共用/VueX.md","lastUpdated":null}'),o={name:"前端/vue/共用/VueX.md"},e=l(`<h1 id="vuex-笔记" tabindex="-1">VueX --笔记 <a class="header-anchor" href="#vuex-笔记" aria-label="Permalink to &quot;VueX --笔记&quot;">​</a></h1><h2 id="一、vuex概述" tabindex="-1">一、Vuex概述 <a class="header-anchor" href="#一、vuex概述" aria-label="Permalink to &quot;一、Vuex概述&quot;">​</a></h2><h3 id="_1、原始共享方式" tabindex="-1">1、原始共享方式 <a class="header-anchor" href="#_1、原始共享方式" aria-label="Permalink to &quot;1、原始共享方式&quot;">​</a></h3><ul><li><p>父子传值</p><ul><li>v-bind &amp; v-on</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    我是子组件：</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:value=&quot;msg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@input=&quot;changeValFn&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;child&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: [</span><span style="color:#9ECBFF;">&#39;msg&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">changeValFn</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;changeMsg&#39;</span><span style="color:#E1E4E8;">, e.target.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    我是子组件：</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:value=&quot;msg&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@input=&quot;changeValFn&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;child&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  props: [</span><span style="color:#032F62;">&#39;msg&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">changeValFn</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;changeMsg&#39;</span><span style="color:#24292E;">, e.target.value)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;parent&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;我是父组件：{{ msg }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">child</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:msg=&quot;msg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@changeMsg=&quot;changeMsgFn&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">child</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./child&#39;</span></span>
<span class="line"><span style="color:#B392F0;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;parent&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    child,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">msg</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;hello!&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">changeMsgFn</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.msg </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;parent&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;我是父组件：{{ msg }}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">child</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:msg=&quot;msg&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@changeMsg=&quot;changeMsgFn&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">child</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./child&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">export</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;parent&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  components: {</span></span>
<span class="line"><span style="color:#24292E;">    child,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    return {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">msg</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;hello!&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">changeMsgFn</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.msg </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/script&gt;</span></span></code></pre></div></li><li><p>兄弟传值</p><ul><li>bus</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//组件一</span></span>
<span class="line"><span style="color:#E1E4E8;">bus.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;leftChartShow&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//组件二</span></span>
<span class="line"><span style="color:#E1E4E8;">bus.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;leftChartShow&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initCharts</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//组件一</span></span>
<span class="line"><span style="color:#24292E;">bus.</span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;leftChartShow&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//组件二</span></span>
<span class="line"><span style="color:#24292E;">bus.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;leftChartShow&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initCharts</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></li></ul><h3 id="_2、vuex概述" tabindex="-1">2、Vuex概述 <a class="header-anchor" href="#_2、vuex概述" aria-label="Permalink to &quot;2、Vuex概述&quot;">​</a></h3><ul><li>Vuex是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享。 <ul><li>能够在vuex集中管理共享数据</li><li>能够实现组件间的数据共享</li><li>响应式，实时保证数据与页面的同步</li></ul></li><li>一般需要共享的数据存放到vuex中，不需要共享的存放到自身data</li></ul><h2 id="二、vuex使用步骤" tabindex="-1">二、Vuex使用步骤 <a class="header-anchor" href="#二、vuex使用步骤" aria-label="Permalink to &quot;二、Vuex使用步骤&quot;">​</a></h2><h3 id="_1、安装依赖" tabindex="-1">1、安装依赖 <a class="header-anchor" href="#_1、安装依赖" aria-label="Permalink to &quot;1、安装依赖&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vuex@3.1.2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vuex@3.1.2</span></span></code></pre></div><h3 id="_2、新建modules文件夹" tabindex="-1">2、新建modules文件夹 <a class="header-anchor" href="#_2、新建modules文件夹" aria-label="Permalink to &quot;2、新建modules文件夹&quot;">​</a></h3><ul><li>根据不同需求创建不同的modules文件夹 <ul><li>每个文件夹内部有对应这个modules的store存储</li></ul></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//代码内容实例如下， 例如叫moduleA.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    namespaced: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">//带有命名空间的模块</span></span>
<span class="line"><span style="color:#E1E4E8;">    state: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    getters: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">showNumber</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;当前count值为&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> state.count </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    mutations: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            state.count </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">addN</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">step</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            state.count </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> step</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">sub</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            state.count </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">subN</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">step</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            state.count </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> step</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    actions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">addAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">step</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                context.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;addN&#39;</span><span style="color:#E1E4E8;">, step)</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//代码内容实例如下， 例如叫moduleA.js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    namespaced: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">//带有命名空间的模块</span></span>
<span class="line"><span style="color:#24292E;">    state: {</span></span>
<span class="line"><span style="color:#24292E;">        count: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    getters: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">showNumber</span><span style="color:#24292E;">(</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;当前count值为&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> state.count </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    mutations: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            state.count </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">addN</span><span style="color:#24292E;">(</span><span style="color:#E36209;">state</span><span style="color:#24292E;">, </span><span style="color:#E36209;">step</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            state.count </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> step</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">sub</span><span style="color:#24292E;">(</span><span style="color:#E36209;">state</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            state.count </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">subN</span><span style="color:#24292E;">(</span><span style="color:#E36209;">state</span><span style="color:#24292E;">, </span><span style="color:#E36209;">step</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            state.count </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> step</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    actions: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">addAsync</span><span style="color:#24292E;">(</span><span style="color:#E36209;">context</span><span style="color:#24292E;">,</span><span style="color:#E36209;">step</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                context.</span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;addN&#39;</span><span style="color:#24292E;">, step)</span></span>
<span class="line"><span style="color:#24292E;">            },</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_3、新建store-js" tabindex="-1">3、新建store.js <a class="header-anchor" href="#_3、新建store-js" aria-label="Permalink to &quot;3、新建store.js&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vuex </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(Vuex)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> moduleA </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;路径地址&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> moduleB </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;路径地址&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    modules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        moduleA,</span></span>
<span class="line"><span style="color:#E1E4E8;">        moduleB</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vuex </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(Vuex)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> moduleA </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;路径地址&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> moduleB </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;路径地址&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Vuex.</span><span style="color:#6F42C1;">Store</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    modules: {</span></span>
<span class="line"><span style="color:#24292E;">        moduleA,</span></span>
<span class="line"><span style="color:#24292E;">        moduleB</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="_4、main-js挂载store对象" tabindex="-1">4、main.js挂载store对象 <a class="header-anchor" href="#_4、main-js挂载store对象" aria-label="Permalink to &quot;4、main.js挂载store对象&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> store </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;store地址&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(app),</span></span>
<span class="line"><span style="color:#E1E4E8;">    router,</span></span>
<span class="line"><span style="color:#E1E4E8;">    store </span><span style="color:#6A737D;">// 将共享数据对象挂载到Vue实例，所有组件就可从store获取全局数据了</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> store </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;store地址&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">: </span><span style="color:#E36209;">h</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(app),</span></span>
<span class="line"><span style="color:#24292E;">    router,</span></span>
<span class="line"><span style="color:#24292E;">    store </span><span style="color:#6A737D;">// 将共享数据对象挂载到Vue实例，所有组件就可从store获取全局数据了</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="_5、vue组件使用" tabindex="-1">5、Vue组件使用 <a class="header-anchor" href="#_5、vue组件使用" aria-label="Permalink to &quot;5、Vue组件使用&quot;">​</a></h3><h4 id="组件一" tabindex="-1">组件一 <a class="header-anchor" href="#组件一" aria-label="Permalink to &quot;组件一&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">ComponentTwo</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">ComponentTwo</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">hr</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">ComponentThree</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">ComponentThree</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ComponentTwo </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./ComponentTwo&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ComponentThree </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./ComponentThree&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;ComponentOne&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  component: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      ComponentTwo,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ComponentThree</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">ComponentTwo</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">ComponentTwo</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">hr</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">ComponentThree</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">ComponentThree</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ComponentTwo </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./ComponentTwo&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ComponentThree </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./ComponentThree&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;ComponentOne&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  component: {</span></span>
<span class="line"><span style="color:#24292E;">      ComponentTwo,</span></span>
<span class="line"><span style="color:#24292E;">      ComponentThree</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h4 id="组件二" tabindex="-1">组件二 <a class="header-anchor" href="#组件二" aria-label="Permalink to &quot;组件二&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;当前count值:{{count}}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;{{showNumber}}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;"> = </span><span style="color:#9ECBFF;">&quot;add()&quot;</span><span style="color:#E1E4E8;">&gt;+1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;"> = </span><span style="color:#9ECBFF;">&quot;addN(3)&quot;</span><span style="color:#E1E4E8;">&gt;+N&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;"> = </span><span style="color:#9ECBFF;">&quot;addAsync(5)&quot;</span><span style="color:#E1E4E8;">&gt;+1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mapState, mapMutations, mapActions, mapGetters } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vuex&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;ComponentTwo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">selfVar</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;test&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">initNum</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//mapState(&#39;模块名称&#39;, [&#39;模块变量&#39;]),因为模块有多个，所以mapState可写多个，mapGetters同样</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">mapState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleA&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;count&#39;</span><span style="color:#E1E4E8;">]),   </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">mapGetters</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleA&#39;</span><span style="color:#E1E4E8;">,[</span><span style="color:#9ECBFF;">&#39;showNumber&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">selfCompu</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> initNum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//mapMutations(&#39;模块名称&#39;,[&#39;模块变量函数&#39;]),因为模块有多个，所以mapMutations可多个，mapActions同</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">mapMutations</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleA&#39;</span><span style="color:#E1E4E8;">,[</span><span style="color:#9ECBFF;">&#39;add&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;addN&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">mapActions</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleA&#39;</span><span style="color:#E1E4E8;">,[</span><span style="color:#9ECBFF;">&#39;addAsync&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">selfFunc</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;这里写组件自己的方法&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;当前count值:{{count}}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;{{showNumber}}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;"> = </span><span style="color:#032F62;">&quot;add()&quot;</span><span style="color:#24292E;">&gt;+1&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;"> = </span><span style="color:#032F62;">&quot;addN(3)&quot;</span><span style="color:#24292E;">&gt;+N&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;"> = </span><span style="color:#032F62;">&quot;addAsync(5)&quot;</span><span style="color:#24292E;">&gt;+1&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mapState, mapMutations, mapActions, mapGetters } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vuex&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;ComponentTwo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">selfVar</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;test&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">initNum</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  computed: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//mapState(&#39;模块名称&#39;, [&#39;模块变量&#39;]),因为模块有多个，所以mapState可写多个，mapGetters同样</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">mapState</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;moduleA&#39;</span><span style="color:#24292E;">, [</span><span style="color:#032F62;">&#39;count&#39;</span><span style="color:#24292E;">]),   </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">mapGetters</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;moduleA&#39;</span><span style="color:#24292E;">,[</span><span style="color:#032F62;">&#39;showNumber&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">selfCompu</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> initNum </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//mapMutations(&#39;模块名称&#39;,[&#39;模块变量函数&#39;]),因为模块有多个，所以mapMutations可多个，mapActions同</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">mapMutations</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;moduleA&#39;</span><span style="color:#24292E;">,[</span><span style="color:#032F62;">&#39;add&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;addN&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">mapActions</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;moduleA&#39;</span><span style="color:#24292E;">,[</span><span style="color:#032F62;">&#39;addAsync&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">selfFunc</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;这里写组件自己的方法&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h4 id="组件三" tabindex="-1">组件三 <a class="header-anchor" href="#组件三" aria-label="Permalink to &quot;组件三&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;当前count值: {{count}}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;"> = </span><span style="color:#9ECBFF;">&quot;btnSub&quot;</span><span style="color:#E1E4E8;">&gt;-1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;"> = </span><span style="color:#9ECBFF;">&quot;btnSubN&quot;</span><span style="color:#E1E4E8;">&gt;-1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mapState, mapMutations } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vuex&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;ComponentThree&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">selfVar</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;test&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">mapState</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;count&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">mapMutations</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;sub&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;subN&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">btnSub</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sub</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">btnSubN</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">subN</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;当前count值: {{count}}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;"> = </span><span style="color:#032F62;">&quot;btnSub&quot;</span><span style="color:#24292E;">&gt;-1&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;"> = </span><span style="color:#032F62;">&quot;btnSubN&quot;</span><span style="color:#24292E;">&gt;-1&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mapState, mapMutations } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vuex&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;ComponentThree&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">selfVar</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;test&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  computed: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">mapState</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;count&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">mapMutations</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;sub&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;subN&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">btnSub</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">sub</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">btnSubN</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">subN</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><img src="`+p+'" alt="image-20220504192134546"></p>',24),t=[e];function c(E,r,y,i,u,F){return n(),a("div",null,t)}const h=s(o,[["render",c]]);export{m as __pageData,h as default};
