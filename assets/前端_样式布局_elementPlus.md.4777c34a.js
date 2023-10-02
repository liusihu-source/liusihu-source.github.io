import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const h=JSON.parse('{"title":"element-plus --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"前端/样式布局/elementPlus.md","filePath":"前端/样式布局/elementPlus.md","lastUpdated":null}'),p={name:"前端/样式布局/elementPlus.md"},o=l(`<h1 id="element-plus-笔记" tabindex="-1">element-plus --笔记 <a class="header-anchor" href="#element-plus-笔记" aria-label="Permalink to &quot;element-plus --笔记&quot;">​</a></h1><h2 id="一、深度监测" tabindex="-1">一、深度监测 <a class="header-anchor" href="#一、深度监测" aria-label="Permalink to &quot;一、深度监测&quot;">​</a></h2><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.all</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.el-carousel</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    :</span><span style="color:#79B8FF;">deep</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">.el-carousel__container</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//我支持深度检测哦</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.all</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.el-carousel</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    :</span><span style="color:#005CC5;">deep</span><span style="color:#24292E;">(</span><span style="color:#E36209;">.el-carousel__container</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//我支持深度检测哦</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">img</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="二、messagebox-和-elmessage-确实很-composion-api" tabindex="-1">二、MessageBox 和 ElMessage，确实很 Composion Api <a class="header-anchor" href="#二、messagebox-和-elmessage-确实很-composion-api" aria-label="Permalink to &quot;二、MessageBox 和 ElMessage，确实很 Composion Api&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ElMessageBox } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;element-plus&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ElMessage } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;element-plus&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这里我只是贴上两段代码，其余自行补上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">allDel</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      ElMessageBox.</span><span style="color:#B392F0;">confirm</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;此操作将永久删除该文件, 是否继续?&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;提示&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          confirmButtonText: </span><span style="color:#9ECBFF;">&#39;确定&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          cancelButtonText: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;warning&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          ElMessage.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            message: </span><span style="color:#9ECBFF;">&#39;删除成功!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          ElMessage.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            message: </span><span style="color:#9ECBFF;">&#39;已取消删除&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      allDel</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ElMessageBox } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;element-plus&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ElMessage } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;element-plus&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这里我只是贴上两段代码，其余自行补上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">allDel</span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">      ElMessageBox.</span><span style="color:#6F42C1;">confirm</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;此操作将永久删除该文件, 是否继续?&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;提示&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">          confirmButtonText: </span><span style="color:#032F62;">&#39;确定&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          cancelButtonText: </span><span style="color:#032F62;">&#39;取消&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;warning&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          ElMessage.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            message: </span><span style="color:#032F62;">&#39;删除成功!&#39;</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">        }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          ElMessage.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            message: </span><span style="color:#032F62;">&#39;已取消删除&#39;</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      allDel</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span></code></pre></div>`,5),e=[o];function c(t,E,r,y,i,F){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{h as __pageData,d as default};
