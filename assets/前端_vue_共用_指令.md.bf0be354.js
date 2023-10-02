import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const p="/assets/image-20220408151723180.ebcea968.png",F=JSON.parse('{"title":"Vue指令 --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"前端/vue/共用/指令.md","filePath":"前端/vue/共用/指令.md","lastUpdated":null}'),t={name:"前端/vue/共用/指令.md"},o=l('<h1 id="vue指令-笔记" tabindex="-1">Vue指令 --笔记 <a class="header-anchor" href="#vue指令-笔记" aria-label="Permalink to &quot;Vue指令 --笔记&quot;">​</a></h1><p><img src="'+p+`" alt="image-20220408151723180"></p><p><a href="https://cn.vuejs.org/v2/guide/index.html#" target="_blank" rel="noreferrer">https://cn.vuejs.org/v2/guide/index.html#</a></p><h2 id="v-for-v-if-v-model" tabindex="-1">v-for &amp; v-if &amp; v-model <a class="header-anchor" href="#v-for-v-if-v-model" aria-label="Permalink to &quot;v-for &amp; v-if &amp; v-model&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;item in products&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    	&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;number&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">v-model.number=&#39;item.quantity&#39;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{ item.quantity }} {{ item.name }}</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#FDAEB7;font-style:italic;">&lt;span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;products.quantity === 0&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    		- out of stock</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;item.quantity</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">1&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">Add</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&lt;/button&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;h2&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">Total</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">Inventory:</span><span style="color:#E1E4E8;"> {{totalProducts}}            </span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/h2&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">Vue({</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">el:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">data:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            products: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&#39;aaa&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&#39;bbb&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&#39;ccc&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">computed:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">totalProducts</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// reduce数组的一个方法，可以用来返回总数</span></span>
<span class="line"><span style="color:#E1E4E8;">                return this.products.reduce((sum,product) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> product.quantity</span></span>
<span class="line"><span style="color:#E1E4E8;">                }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">created(){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">fetch(&#39;url&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">            	</span><span style="color:#FDAEB7;font-style:italic;">.then(response</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">response.json)</span></span>
<span class="line"><span style="color:#E1E4E8;">            	</span><span style="color:#FDAEB7;font-style:italic;">.then(json</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                	</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.products </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> json.products</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span><span style="color:#FDAEB7;font-style:italic;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">})</span><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;item in products&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    	&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;number&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">v-model.number=&#39;item.quantity&#39;&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {{ item.quantity }} {{ item.name }}</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#B31D28;font-style:italic;">&lt;span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;products.quantity === 0&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    		- out of stock</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;item.quantity</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">+=</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">1&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">Add</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;h2&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">Total</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">Inventory:</span><span style="color:#24292E;"> {{totalProducts}}            </span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/h2&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">app</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">new</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">Vue({</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">el:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">data:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            products: [</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&#39;aaa&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&#39;bbb&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&#39;ccc&#39;</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">computed:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">totalProducts</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// reduce数组的一个方法，可以用来返回总数</span></span>
<span class="line"><span style="color:#24292E;">                return this.products.reduce((sum,product) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> sum </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> product.quantity</span></span>
<span class="line"><span style="color:#24292E;">                }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">created(){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">fetch(&#39;url&#39;)</span></span>
<span class="line"><span style="color:#24292E;">            	</span><span style="color:#B31D28;font-style:italic;">.then(response</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">response.json)</span></span>
<span class="line"><span style="color:#24292E;">            	</span><span style="color:#B31D28;font-style:italic;">.then(json</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                	</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.products </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> json.products</span></span>
<span class="line"><span style="color:#24292E;">            }</span><span style="color:#B31D28;font-style:italic;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">})</span><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/script&gt;</span></span></code></pre></div>`,5),e=[o];function c(r,y,E,i,u,f){return n(),a("div",null,e)}const d=s(t,[["render",c]]);export{F as __pageData,d as default};
