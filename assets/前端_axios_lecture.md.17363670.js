import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const d=JSON.parse('{"title":"axios --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"前端/axios/lecture.md","filePath":"前端/axios/lecture.md","lastUpdated":null}'),p={name:"前端/axios/lecture.md"},o=l(`<h1 id="axios-笔记" tabindex="-1">axios --笔记 <a class="header-anchor" href="#axios-笔记" aria-label="Permalink to &quot;axios --笔记&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//get请求</span></span>
<span class="line"><span style="color:#E1E4E8;">btn.</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        method:</span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&#39;http://localhost:3000/&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(response){</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(response)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//post添加</span></span>
<span class="line"><span style="color:#E1E4E8;">btn.</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&#39;http://localhost:3000/posts&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(response){</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(response)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//PUT更新</span></span>
<span class="line"><span style="color:#E1E4E8;">btn.</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;PUT&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&#39;http://localhost:3000/posts/3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(response){</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(response)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Delete删除</span></span>
<span class="line"><span style="color:#E1E4E8;">btn.</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;DELETE&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&#39;http://localhost:3000/posts/3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(response){</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(response)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//通用方式</span></span>
<span class="line"><span style="color:#E1E4E8;">btn.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;具体类型&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        baseURL: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        transformRequest:  </span><span style="color:#6A737D;">//预处理发送的请求参数,</span></span>
<span class="line"><span style="color:#E1E4E8;">        transformRequest: </span><span style="color:#6A737D;">//预处理返回的结果,</span></span>
<span class="line"><span style="color:#E1E4E8;">        headers:  </span><span style="color:#6A737D;">//请求头信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        params: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        timeout:  </span><span style="color:#6A737D;">//请求的超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.defaults.baseURL </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;....&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//也可以创建不同的axios对象实例，然后借由这些实例去调用不同的接口</span></span>
<span class="line"><span style="color:#6A737D;">//可以利用axios的CancelToken将请求取消</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//get请求</span></span>
<span class="line"><span style="color:#24292E;">btn.</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        method:</span><span style="color:#032F62;">&#39;GET&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        url: </span><span style="color:#032F62;">&#39;http://localhost:3000/&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(response){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(response)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//post添加</span></span>
<span class="line"><span style="color:#24292E;">btn.</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        method: </span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        url: </span><span style="color:#032F62;">&#39;http://localhost:3000/posts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(response){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(response)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//PUT更新</span></span>
<span class="line"><span style="color:#24292E;">btn.</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        method: </span><span style="color:#032F62;">&#39;PUT&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        url: </span><span style="color:#032F62;">&#39;http://localhost:3000/posts/3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(response){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(response)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Delete删除</span></span>
<span class="line"><span style="color:#24292E;">btn.</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        method: </span><span style="color:#032F62;">&#39;DELETE&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        url: </span><span style="color:#032F62;">&#39;http://localhost:3000/posts/3&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(response){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(response)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//通用方式</span></span>
<span class="line"><span style="color:#24292E;">btn.</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        method: </span><span style="color:#032F62;">&#39;具体类型&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        url: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        baseURL: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        transformRequest:  </span><span style="color:#6A737D;">//预处理发送的请求参数,</span></span>
<span class="line"><span style="color:#24292E;">        transformRequest: </span><span style="color:#6A737D;">//预处理返回的结果,</span></span>
<span class="line"><span style="color:#24292E;">        headers:  </span><span style="color:#6A737D;">//请求头信息</span></span>
<span class="line"><span style="color:#24292E;">        params: {},</span></span>
<span class="line"><span style="color:#24292E;">        timeout:  </span><span style="color:#6A737D;">//请求的超时时间</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">......</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">axios.defaults.baseURL </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;....&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//也可以创建不同的axios对象实例，然后借由这些实例去调用不同的接口</span></span>
<span class="line"><span style="color:#6A737D;">//可以利用axios的CancelToken将请求取消</span></span></code></pre></div>`,2),e=[o];function c(t,E,r,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
