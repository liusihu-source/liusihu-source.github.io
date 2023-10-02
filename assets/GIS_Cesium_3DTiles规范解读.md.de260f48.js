import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const p="/assets/image-20220328143757423.3dd25b10.png",o="/assets/image-20220328143737825.93aa18f2.png",C=JSON.parse('{"title":"3Dtiles --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"GIS/Cesium/3DTiles规范解读.md","filePath":"GIS/Cesium/3DTiles规范解读.md","lastUpdated":null}'),e={name:"GIS/Cesium/3DTiles规范解读.md"},t=l('<h1 id="_3dtiles-笔记" tabindex="-1">3Dtiles --笔记 <a class="header-anchor" href="#_3dtiles-笔记" aria-label="Permalink to &quot;3Dtiles --笔记&quot;">​</a></h1><ul><li><p>原文地址：<a href="https://blog.csdn.net/lz5211314121/article/details/117954759?spm=1001.2014.3001.5502" target="_blank" rel="noreferrer">https://blog.csdn.net/lz5211314121/article/details/117954759?spm=1001.2014.3001.5502</a></p></li><li><p>是一种规范，类似于OCG标准的几个地理服务WMS WMTS WFS</p></li><li><p>特点</p><ul><li>异质性，即可以是多种类型的3D数据组合的，采用统一的标准来使数据跨越各类型平台流通</li></ul></li><li><p>优点：能加速数据流 和 精确渲染</p><ul><li>加速数据流<code>相当于对3D数据进行了切片，分级别加载，提升效率</code></li><li>精确渲染</li></ul></li><li><p>tileset.json</p><ul><li><p>总结说明：<code>3D瓦片的数据集，元数据 和 瓦片对象组成。平时生产的3D数据不能被3D引擎使用，需要一定规范转化，这个规范就是3Dtiles</code></p><ul><li>元数据：一些属性数据，描述数据</li><li>瓦片对象：如b3dm、i3dm、pnts、cmpt <ul><li>b3dm 批量3D模型</li><li>i3dm 实例化模型</li><li>pnts 点云</li><li>cmpt 复合材料</li><li><img src="'+p+`" alt="image-20220328143757423"></li></ul></li></ul></li><li><p>tile</p><ul><li>content <code>瓦片的内容</code><ul><li>feature table 要素表（存放如位置属性 和 外观属性）</li><li>batch table 批处理表（存放属性信息）</li></ul></li></ul></li><li><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//例子</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;boundingVolume&quot;</span><span style="color:#E1E4E8;">: {   </span><span style="color:#6A737D;">//boundingVolume字段用来指定你加载模型的边界范围，可以有三个选项分别是包围盒（box），包围球（sphere），和边界（region），边界就是一个范围线，没有高度</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;region&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">-1.2419052957251926</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">0.7395016240301894</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">-1.2415404171917719</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">0.7396563300150859</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">20.4</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;geometricError&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">43.88464075650763</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//geometricError叫几何误差</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;refine&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;ADD&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//当鼠标放大时的加载方式，有两个参数，替换和添加，就是等级切换时候，父级对象何去何从</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;content&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;boundingVolume&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;region&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">-1.2418882438584018</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">0.7395016240301894</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">-1.2415422846940714</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">0.7396461198389616</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">19.4</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;uri&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2/0/0.b3dm&quot;</span><span style="color:#6A737D;">//uri字段用来记录具体的模型的地址，也可以再引用一个tileset.json</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">&quot;extras&quot;</span><span style="color:#E1E4E8;">: {    </span><span style="color:#6A737D;">//extras字段用来描述模型的属性信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Empire State Building&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;children&quot;</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> [</span><span style="color:#FDAEB7;font-style:italic;">...</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//例子</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;boundingVolume&quot;</span><span style="color:#24292E;">: {   </span><span style="color:#6A737D;">//boundingVolume字段用来指定你加载模型的边界范围，可以有三个选项分别是包围盒（box），包围球（sphere），和边界（region），边界就是一个范围线，没有高度</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;region&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">-1.2419052957251926</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">0.7395016240301894</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">-1.2415404171917719</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">0.7396563300150859</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">20.4</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;geometricError&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">43.88464075650763</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//geometricError叫几何误差</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;refine&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;ADD&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//当鼠标放大时的加载方式，有两个参数，替换和添加，就是等级切换时候，父级对象何去何从</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;content&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;boundingVolume&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;region&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">-1.2418882438584018</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">0.7395016240301894</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">-1.2415422846940714</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">0.7396461198389616</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">19.4</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;uri&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2/0/0.b3dm&quot;</span><span style="color:#6A737D;">//uri字段用来记录具体的模型的地址，也可以再引用一个tileset.json</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#005CC5;">&quot;extras&quot;</span><span style="color:#24292E;">: {    </span><span style="color:#6A737D;">//extras字段用来描述模型的属性信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Empire State Building&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;children&quot;</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> [</span><span style="color:#B31D28;font-style:italic;">...</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li></ul></li><li><p>存储方式：八叉树</p><ul><li><img src="`+o+'" alt="image-20220328143737825"></li></ul></li></ul>',2),c=[t];function r(E,i,y,u,F,d){return n(),a("div",null,c)}const m=s(e,[["render",r]]);export{C as __pageData,m as default};
