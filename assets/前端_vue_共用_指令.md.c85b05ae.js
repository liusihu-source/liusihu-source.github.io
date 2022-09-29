import{_ as s,c as n,o as a,a as l}from"./app.20566e53.js";const p="/assets/image-20220408151723180.ebcea968.png",u=JSON.parse('{"title":"Vue\u6307\u4EE4 --\u7B14\u8BB0","description":"","frontmatter":{},"headers":[{"level":2,"title":"v-for & v-if & v-model","slug":"v-for-v-if-v-model","link":"#v-for-v-if-v-model","children":[]}],"relativePath":"\u524D\u7AEF/vue/\u5171\u7528/\u6307\u4EE4.md"}'),o={name:"\u524D\u7AEF/vue/\u5171\u7528/\u6307\u4EE4.md"},e=l('<h1 id="vue\u6307\u4EE4-\u7B14\u8BB0" tabindex="-1">Vue\u6307\u4EE4 --\u7B14\u8BB0 <a class="header-anchor" href="#vue\u6307\u4EE4-\u7B14\u8BB0" aria-hidden="true">#</a></h1><p><img src="'+p+`" alt="image-20220408151723180"></p><p><a href="https://cn.vuejs.org/v2/guide/index.html#" target="_blank" rel="noreferrer">https://cn.vuejs.org/v2/guide/index.html#</a></p><h2 id="v-for-v-if-v-model" tabindex="-1">v-for &amp; v-if &amp; v-model <a class="header-anchor" href="#v-for-v-if-v-model" aria-hidden="true">#</a></h2><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item in products</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> v-model.number=&#39;item.quantity&#39;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        {{</span><span style="color:#A6ACCD;"> item.quantity </span><span style="color:#89DDFF;">}} {{</span><span style="color:#A6ACCD;"> item.name </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">		&lt;span </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">products.quantity === 0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    		- out of stock</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @click=&quot;item.quantity += 1&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">Add</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;h2&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#C792EA;">Total</span><span style="color:#89DDFF;"> Inventory: {{</span><span style="color:#A6ACCD;">totalProducts</span><span style="color:#89DDFF;">}}            </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/h2&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#C792EA;">const</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">app</span><span style="color:#89DDFF;"> = </span><span style="color:#C792EA;">new</span><span style="color:#89DDFF;"> Vue({</span></span>
<span class="line"><span style="color:#89DDFF;">        el: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            products: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aaa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bbb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ccc</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">        computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">totalProducts</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">// reduce\u6570\u7EC4\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7528\u6765\u8FD4\u56DE\u603B\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">                return this.products.reduce((sum</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">product) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    return sum + product.quantity</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">        created(){</span></span>
<span class="line"><span style="color:#89DDFF;">            fetch(&#39;url&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">            	.then(response =&gt; response.json)</span></span>
<span class="line"><span style="color:#89DDFF;">            	.then(json =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                	</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">products </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> json</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">products</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">    })        </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,5),t=[e];function c(r,D,F,y,i,C){return a(),n("div",null,t)}const d=s(o,[["render",c]]);export{u as __pageData,d as default};
