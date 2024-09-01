import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const p="/assets/image-20220321141420324.de3d4737.png",o="/assets/image-20220321141405729.6bb20991.png",e="/assets/image-20220321142252745.85e09113.png",t="/assets/image-20220321143057313.262538b2.png",c="/assets/image-20220323101536512.d77ed636.png",r="/assets/image-20220321165418054.9ec44bf7.png",E="/assets/image-20220321165500983.67b73e05.png",g=JSON.parse('{"title":"CesiumEntities --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"GIS/Cesium/CesiumJS/二、CreateEntities.md","filePath":"GIS/Cesium/CesiumJS/二、CreateEntities.md","lastUpdated":null}'),y={name:"GIS/Cesium/CesiumJS/二、CreateEntities.md"},i=l(`<h1 id="cesiumentities-笔记" tabindex="-1">CesiumEntities --笔记 <a class="header-anchor" href="#cesiumentities-笔记" aria-label="Permalink to &quot;CesiumEntities --笔记&quot;">​</a></h1><h2 id="一、entity" tabindex="-1">一、Entity <a class="header-anchor" href="#一、entity" aria-label="Permalink to &quot;一、Entity&quot;">​</a></h2><h3 id="_1、实例对象demo" tabindex="-1">1、实例对象Demo <a class="header-anchor" href="#_1、实例对象demo" aria-label="Permalink to &quot;1、实例对象Demo&quot;">​</a></h3><ul><li>可创建的对象类型</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">viewer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Viewer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;cesiumContainer&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computeCircle</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">radius</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">positions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">360</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">radians</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Math.</span><span style="color:#B392F0;">toRadians</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">    positions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian2</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        radius </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">cos</span><span style="color:#E1E4E8;">(radians),</span></span>
<span class="line"><span style="color:#E1E4E8;">        radius </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">sin</span><span style="color:#E1E4E8;">(radians)</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> positions;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computeStar</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">arms</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">rOuter</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">rInner</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">angle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> arms;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> arms;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">positions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">(length);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">r</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> rOuter </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> rInner;</span></span>
<span class="line"><span style="color:#E1E4E8;">    positions[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian2</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      Math.</span><span style="color:#B392F0;">cos</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> angle) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r,</span></span>
<span class="line"><span style="color:#E1E4E8;">      Math.</span><span style="color:#B392F0;">sin</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> angle) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> positions;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">redTube</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;Red tube with rounded corners&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  polylineVolume: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    positions: Cesium.Cartesian3.</span><span style="color:#B392F0;">fromDegreesArray</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">85.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">32.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">85.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">36.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">89.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">36.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    shape: </span><span style="color:#B392F0;">computeCircle</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">60000.0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    material: Cesium.Color.</span><span style="color:#79B8FF;">RED</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">greenBox</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;Green box with beveled corners and outline&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  polylineVolume: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    positions: Cesium.Cartesian3.</span><span style="color:#B392F0;">fromDegreesArrayHeights</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">90.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">32.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">90.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">36.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">100000.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">94.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">36.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    shape: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian2</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">50000</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">50000</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian2</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">50000</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">50000</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian2</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">50000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">50000</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian2</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">50000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">50000</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    cornerType: Cesium.CornerType.</span><span style="color:#79B8FF;">BEVELED</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    material: Cesium.Color.</span><span style="color:#79B8FF;">GREEN</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">withAlpha</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    outline: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    outlineColor: Cesium.Color.</span><span style="color:#79B8FF;">BLACK</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">blueStar</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;Blue star with mitered corners and outline&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  polylineVolume: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    positions: Cesium.Cartesian3.</span><span style="color:#B392F0;">fromDegreesArrayHeights</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">95.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">32.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">95.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">36.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">100000.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">99.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">36.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">200000.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    shape: </span><span style="color:#B392F0;">computeStar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">70000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">50000</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    cornerType: Cesium.CornerType.</span><span style="color:#79B8FF;">MITERED</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    material: Cesium.Color.</span><span style="color:#79B8FF;">BLUE</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">viewer.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(viewer.entities);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">viewer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Viewer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;cesiumContainer&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computeCircle</span><span style="color:#24292E;">(</span><span style="color:#E36209;">radius</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">positions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">360</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">radians</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Math.</span><span style="color:#6F42C1;">toRadians</span><span style="color:#24292E;">(i);</span></span>
<span class="line"><span style="color:#24292E;">    positions.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian2</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        radius </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">cos</span><span style="color:#24292E;">(radians),</span></span>
<span class="line"><span style="color:#24292E;">        radius </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">sin</span><span style="color:#24292E;">(radians)</span></span>
<span class="line"><span style="color:#24292E;">      )</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> positions;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computeStar</span><span style="color:#24292E;">(</span><span style="color:#E36209;">arms</span><span style="color:#24292E;">, </span><span style="color:#E36209;">rOuter</span><span style="color:#24292E;">, </span><span style="color:#E36209;">rInner</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">angle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#005CC5;">PI</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> arms;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> arms;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">positions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">(length);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">r</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> rOuter </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> rInner;</span></span>
<span class="line"><span style="color:#24292E;">    positions[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian2</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      Math.</span><span style="color:#6F42C1;">cos</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> angle) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r,</span></span>
<span class="line"><span style="color:#24292E;">      Math.</span><span style="color:#6F42C1;">sin</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> angle) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> positions;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">redTube</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;Red tube with rounded corners&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  polylineVolume: {</span></span>
<span class="line"><span style="color:#24292E;">    positions: Cesium.Cartesian3.</span><span style="color:#6F42C1;">fromDegreesArray</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">85.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">32.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">85.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">36.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">89.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">36.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ]),</span></span>
<span class="line"><span style="color:#24292E;">    shape: </span><span style="color:#6F42C1;">computeCircle</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">60000.0</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    material: Cesium.Color.</span><span style="color:#005CC5;">RED</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">greenBox</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;Green box with beveled corners and outline&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  polylineVolume: {</span></span>
<span class="line"><span style="color:#24292E;">    positions: Cesium.Cartesian3.</span><span style="color:#6F42C1;">fromDegreesArrayHeights</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">90.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">32.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">90.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">36.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">100000.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">94.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">36.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ]),</span></span>
<span class="line"><span style="color:#24292E;">    shape: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian2</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">50000</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">50000</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian2</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">50000</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">50000</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian2</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">50000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">50000</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian2</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">50000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">50000</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    cornerType: Cesium.CornerType.</span><span style="color:#005CC5;">BEVELED</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    material: Cesium.Color.</span><span style="color:#005CC5;">GREEN</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">withAlpha</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    outline: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    outlineColor: Cesium.Color.</span><span style="color:#005CC5;">BLACK</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">blueStar</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;Blue star with mitered corners and outline&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  polylineVolume: {</span></span>
<span class="line"><span style="color:#24292E;">    positions: Cesium.Cartesian3.</span><span style="color:#6F42C1;">fromDegreesArrayHeights</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">95.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">32.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">95.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">36.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">100000.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">99.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">36.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">200000.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ]),</span></span>
<span class="line"><span style="color:#24292E;">    shape: </span><span style="color:#6F42C1;">computeStar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">70000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">50000</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    cornerType: Cesium.CornerType.</span><span style="color:#005CC5;">MITERED</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    material: Cesium.Color.</span><span style="color:#005CC5;">BLUE</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">viewer.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(viewer.entities);</span></span></code></pre></div><h3 id="_2、members" tabindex="-1">2、Members <a class="header-anchor" href="#_2、members" aria-label="Permalink to &quot;2、Members&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//可以控制材质</span></span>
<span class="line"><span style="color:#E1E4E8;">ellipse.material </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/docs/tutorials/creating-entities/images/cats.jpg&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//如果不需要单纯颜色 或者 图片方式填充，可以自行创建MaterialProperty实例，支持颜色、图像、棋盘、条纹和网格材质  详见链接  https://cesium.com/learn/cesiumjs-learn/cesiumjs-creating-entities/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//可以控制材质</span></span>
<span class="line"><span style="color:#24292E;">ellipse.material </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/docs/tutorials/creating-entities/images/cats.jpg&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//如果不需要单纯颜色 或者 图片方式填充，可以自行创建MaterialProperty实例，支持颜色、图像、棋盘、条纹和网格材质  详见链接  https://cesium.com/learn/cesiumjs-learn/cesiumjs-creating-entities/</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//glowPower 可以控制光效</span></span>
<span class="line"><span style="color:#E1E4E8;">polyline.material </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">PolylineGlowMaterialProperty</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    glowPower : </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    color : Cesium.Color.</span><span style="color:#79B8FF;">BLUE</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//glowPower 可以控制光效</span></span>
<span class="line"><span style="color:#24292E;">polyline.material </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">PolylineGlowMaterialProperty</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    glowPower : </span><span style="color:#005CC5;">0.2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    color : Cesium.Color.</span><span style="color:#005CC5;">BLUE</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p><img src="`+p+`" alt="image-20220321141420324"></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// corridor, ellipse, polygon, and rectangles  这四种类型可以被挤压，</span></span>
<span class="line"><span style="color:#E1E4E8;">wyoming.polygon.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">250000</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">//可以将wyomin设置到离地250000的高空</span></span>
<span class="line"><span style="color:#6A737D;">//要将形状挤出到体积中，请设置 extrudedHeight 属性。体积将在 height 和 extrudedHeight 之间创建。如果未定义高度，则体积从 0 开始。创建一个从 200,000 米开始并延伸到 250,000 米的体积。</span></span>
<span class="line"><span style="color:#E1E4E8;">wyoming.polygon.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">wyoming.polygon.extrudedHeight </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">250000</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// corridor, ellipse, polygon, and rectangles  这四种类型可以被挤压，</span></span>
<span class="line"><span style="color:#24292E;">wyoming.polygon.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">250000</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">//可以将wyomin设置到离地250000的高空</span></span>
<span class="line"><span style="color:#6A737D;">//要将形状挤出到体积中，请设置 extrudedHeight 属性。体积将在 height 和 extrudedHeight 之间创建。如果未定义高度，则体积从 0 开始。创建一个从 200,000 米开始并延伸到 250,000 米的体积。</span></span>
<span class="line"><span style="color:#24292E;">wyoming.polygon.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">wyoming.polygon.extrudedHeight </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">250000</span><span style="color:#24292E;">;</span></span></code></pre></div><p><img src="`+o+`" alt="image-20220321141405729"></p><h3 id="_3、methods" tabindex="-1">3、Methods <a class="header-anchor" href="#_3、methods" aria-label="Permalink to &quot;3、Methods&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// name 和 description 可以帮助显示标题和 段落文字、图片等，支持dom操作</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;Blue star with mitered corners and outline&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  description:</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;img</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  width=&quot;50%&quot;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  style=&quot;float:left; margin: 0 1em 1em 0;&quot;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  src=&quot;/docs/tutorials/creating-entities/Flag_of_Wyoming.svg&quot;/&gt;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;p&gt;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  Wyoming is a state in the mountain region of the Western </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  United States.</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/p&gt;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;p&gt;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  Wyoming is the 10th most extensive, but the least populous </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  and the second least densely populated of the 50 United </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  States. The western two thirds of the state is covered mostly </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  with the mountain ranges and rangelands in the foothills of </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  the eastern Rocky Mountains, while the eastern third of the </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  state is high elevation prairie known as the High Plains. </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  Cheyenne is the capital and the most populous city in Wyoming, </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  with a population estimate of 63,624 in 2017.</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/p&gt;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;p&gt;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  Source: </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;a style=&quot;color: WHITE&quot;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">    target=&quot;_blank&quot;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">    href=&quot;http://en.wikipedia.org/wiki/Wyoming&quot;&gt;Wikpedia&lt;/a&gt;</span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/p&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  polylineVolume: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    positions: Cesium.Cartesian3.</span><span style="color:#B392F0;">fromDegreesArrayHeights</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">95.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">32.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">95.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">36.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">100000.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">99.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">36.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">200000.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    shape: </span><span style="color:#B392F0;">computeStar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">70000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">50000</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    cornerType: Cesium.CornerType.</span><span style="color:#79B8FF;">MITERED</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    material: Cesium.Color.</span><span style="color:#79B8FF;">BLUE</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// name 和 description 可以帮助显示标题和 段落文字、图片等，支持dom操作</span></span>
<span class="line"><span style="color:#24292E;">viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;Blue star with mitered corners and outline&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  description:</span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">&lt;img</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  width=&quot;50%&quot;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  style=&quot;float:left; margin: 0 1em 1em 0;&quot;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  src=&quot;/docs/tutorials/creating-entities/Flag_of_Wyoming.svg&quot;/&gt;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">&lt;p&gt;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  Wyoming is a state in the mountain region of the Western </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  United States.</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">&lt;/p&gt;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">&lt;p&gt;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  Wyoming is the 10th most extensive, but the least populous </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  and the second least densely populated of the 50 United </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  States. The western two thirds of the state is covered mostly </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  with the mountain ranges and rangelands in the foothills of </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  the eastern Rocky Mountains, while the eastern third of the </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  state is high elevation prairie known as the High Plains. </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  Cheyenne is the capital and the most populous city in Wyoming, </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  with a population estimate of 63,624 in 2017.</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">&lt;/p&gt;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">&lt;p&gt;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  Source: </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">  &lt;a style=&quot;color: WHITE&quot;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">    target=&quot;_blank&quot;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">    href=&quot;http://en.wikipedia.org/wiki/Wyoming&quot;&gt;Wikpedia&lt;/a&gt;</span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">&lt;/p&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  polylineVolume: {</span></span>
<span class="line"><span style="color:#24292E;">    positions: Cesium.Cartesian3.</span><span style="color:#6F42C1;">fromDegreesArrayHeights</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">95.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">32.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">95.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">36.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">100000.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">99.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">36.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">200000.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ]),</span></span>
<span class="line"><span style="color:#24292E;">    shape: </span><span style="color:#6F42C1;">computeStar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">70000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">50000</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    cornerType: Cesium.CornerType.</span><span style="color:#005CC5;">MITERED</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    material: Cesium.Color.</span><span style="color:#005CC5;">BLUE</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p><img src="`+e+`" alt="image-20220321142252745"></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//使用 viewer.zoomTo 命令查看特定实体。还有一个viewer.flyTo 方法执行动画相机飞行到实体。这两种方法都可以传递给实体、EntityCollection、DataSource 或实体数组。任何一种方法都会计算所有提供的实体的视图。默认情况下，相机朝北，并从 45 度角向下看。通过传入一个 HeadingPitchRange 来自定义它。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> heading </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Math.</span><span style="color:#B392F0;">toRadians</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> pitch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Math.</span><span style="color:#B392F0;">toRadians</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(wyoming, </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">HeadingPitchRange</span><span style="color:#E1E4E8;">(heading, pitch));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//使用 viewer.zoomTo 命令查看特定实体。还有一个viewer.flyTo 方法执行动画相机飞行到实体。这两种方法都可以传递给实体、EntityCollection、DataSource 或实体数组。任何一种方法都会计算所有提供的实体的视图。默认情况下，相机朝北，并从 45 度角向下看。通过传入一个 HeadingPitchRange 来自定义它。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> heading </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Math.</span><span style="color:#6F42C1;">toRadians</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> pitch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Math.</span><span style="color:#6F42C1;">toRadians</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">viewer.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(wyoming, </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">HeadingPitchRange</span><span style="color:#24292E;">(heading, pitch));</span></span></code></pre></div><p><img src="`+t+`" alt="image-20220321143057313"></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//then  保持方法的执行顺序</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.</span><span style="color:#B392F0;">flyTo</span><span style="color:#E1E4E8;">(wyoming).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (result) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        viewer.selectedEntity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> wyoming;   </span><span style="color:#6A737D;">//飞完后，最终选中当前wyoming物体</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">//跟踪实体，而不是跟踪地球</span></span>
<span class="line"><span style="color:#E1E4E8;">wyoming.position </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Cartesian3.</span><span style="color:#B392F0;">fromDegrees</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">107.724</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">42.68</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.trackedEntity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> wyoming;</span></span>
<span class="line"><span style="color:#6A737D;">//通过将 viewer.trackedEntity 设置为 undefined 或双击远离实体来停止跟踪。调用 zoomTo 或 flyTo 也会取消跟踪。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//then  保持方法的执行顺序</span></span>
<span class="line"><span style="color:#24292E;">viewer.</span><span style="color:#6F42C1;">flyTo</span><span style="color:#24292E;">(wyoming).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">result</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (result) {</span></span>
<span class="line"><span style="color:#24292E;">        viewer.selectedEntity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> wyoming;   </span><span style="color:#6A737D;">//飞完后，最终选中当前wyoming物体</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">//跟踪实体，而不是跟踪地球</span></span>
<span class="line"><span style="color:#24292E;">wyoming.position </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Cartesian3.</span><span style="color:#6F42C1;">fromDegrees</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">107.724</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">42.68</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">viewer.trackedEntity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> wyoming;</span></span>
<span class="line"><span style="color:#6A737D;">//通过将 viewer.trackedEntity 设置为 undefined 或双击远离实体来停止跟踪。调用 zoomTo 或 flyTo 也会取消跟踪。</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//EntityCollection 是用于管理和监控一组实体的关联数组。EntityCollection 包括用于管理实体的 add、remove 和 removeAll 等方法。有时我们需要更新我们之前创建的实体。所有实体实例都有一个唯一的 ID，可用于从集合中检索实体。我们可以指定一个 ID，或者会自动生成一个。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//可以给之前创建的每个实体都增加一个ID</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    id : </span><span style="color:#9ECBFF;">&#39;uniqueId&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//查 In the event that no entity with the provided ID exists, undefined is returned.</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> entity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">getById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;uniqueId&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//查或者创建</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> entity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">getOrCreateEntity</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;uniqueId&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//增加</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> entity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Entity</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    id : </span><span style="color:#9ECBFF;">&#39;uniqueId&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(entity);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//当一次更新大量实体时，将更改排队并在最后发送一个大事件会更高效。这样，Cesium 可以一次处理所需的更改。当我们再次运行演示时，我们现在得到一个包含所有 65 个实体的事件。这些调用是引用计数的，因此可以嵌套多个挂起和恢复调用。</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onChanged</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">collection</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">added</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">removed</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">changed</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> msg </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Added ids&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> added.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    msg </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> added[i].id;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(msg);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.entities.collectionChanged.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(onChanged);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//EntityCollection 是用于管理和监控一组实体的关联数组。EntityCollection 包括用于管理实体的 add、remove 和 removeAll 等方法。有时我们需要更新我们之前创建的实体。所有实体实例都有一个唯一的 ID，可用于从集合中检索实体。我们可以指定一个 ID，或者会自动生成一个。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//可以给之前创建的每个实体都增加一个ID</span></span>
<span class="line"><span style="color:#24292E;">viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    id : </span><span style="color:#032F62;">&#39;uniqueId&#39;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//查 In the event that no entity with the provided ID exists, undefined is returned.</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> entity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">getById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;uniqueId&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//查或者创建</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> entity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">getOrCreateEntity</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;uniqueId&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//增加</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> entity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Entity</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    id : </span><span style="color:#032F62;">&#39;uniqueId&#39;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(entity);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//当一次更新大量实体时，将更改排队并在最后发送一个大事件会更高效。这样，Cesium 可以一次处理所需的更改。当我们再次运行演示时，我们现在得到一个包含所有 65 个实体的事件。这些调用是引用计数的，因此可以嵌套多个挂起和恢复调用。</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onChanged</span><span style="color:#24292E;">(</span><span style="color:#E36209;">collection</span><span style="color:#24292E;">, </span><span style="color:#E36209;">added</span><span style="color:#24292E;">, </span><span style="color:#E36209;">removed</span><span style="color:#24292E;">, </span><span style="color:#E36209;">changed</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> msg </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Added ids&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> added.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    msg </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> added[i].id;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(msg);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">viewer.entities.collectionChanged.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(onChanged);</span></span></code></pre></div><p><img src="`+c+`" alt="image-20220323101536512"></p><h2 id="二、pick" tabindex="-1">二、Pick <a class="header-anchor" href="#二、pick" aria-label="Permalink to &quot;二、Pick&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Returns the top-most entity at the provided window coordinates</span></span>
<span class="line"><span style="color:#6A737D;"> * or undefined if no entity is at that location.</span></span>
<span class="line"><span style="color:#6A737D;"> *  四虎 -----  返回单个对象</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Cartesian2}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">windowPosition</span><span style="color:#6A737D;"> The window coordinates.</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Entity}</span><span style="color:#6A737D;"> The picked entity or undefined.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pickEntity</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">viewer</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">windowPosition</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> picked </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.scene.</span><span style="color:#B392F0;">pick</span><span style="color:#E1E4E8;">(windowPosition);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">defined</span><span style="color:#E1E4E8;">(picked)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">defaultValue</span><span style="color:#E1E4E8;">(picked.id, picked.primitive.id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Cesium</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Entity</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Returns the list of entities at the provided window coordinates.</span></span>
<span class="line"><span style="color:#6A737D;"> * The entities are sorted front to back by their visual order.</span></span>
<span class="line"><span style="color:#6A737D;"> *  四虎----返回一组对象，穿透效果，点击射穿的对象集合</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Cartesian2}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">windowPosition</span><span style="color:#6A737D;"> The window coordinates.</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Entity[]}</span><span style="color:#6A737D;"> The picked entities or undefined.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">drillPickEntities</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">viewer</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">windowPosition</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> entity;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> picked;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> pickedPrimitives </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.scene.</span><span style="color:#B392F0;">drillPick</span><span style="color:#E1E4E8;">(windowPosition);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pickedPrimitives.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> hash </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    picked </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pickedPrimitives[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    entity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">defaultValue</span><span style="color:#E1E4E8;">(picked.id, picked.primitive.id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (entity </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Cesium</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Entity</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">Cesium.</span><span style="color:#B392F0;">defined</span><span style="color:#E1E4E8;">(hash[entity.id])) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(entity);</span></span>
<span class="line"><span style="color:#E1E4E8;">      hash[entity.id] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;    </span><span style="color:#6A737D;">//使得hash对象增加键entity.id  同时值为true，结果就是hash{entity.id = true}</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Returns the top-most entity at the provided window coordinates</span></span>
<span class="line"><span style="color:#6A737D;"> * or undefined if no entity is at that location.</span></span>
<span class="line"><span style="color:#6A737D;"> *  四虎 -----  返回单个对象</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{Cartesian2}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">windowPosition</span><span style="color:#6A737D;"> The window coordinates.</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{Entity}</span><span style="color:#6A737D;"> The picked entity or undefined.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pickEntity</span><span style="color:#24292E;">(</span><span style="color:#E36209;">viewer</span><span style="color:#24292E;">, </span><span style="color:#E36209;">windowPosition</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> picked </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.scene.</span><span style="color:#6F42C1;">pick</span><span style="color:#24292E;">(windowPosition);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">defined</span><span style="color:#24292E;">(picked)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">defaultValue</span><span style="color:#24292E;">(picked.id, picked.primitive.id);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Cesium</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Entity</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> id;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Returns the list of entities at the provided window coordinates.</span></span>
<span class="line"><span style="color:#6A737D;"> * The entities are sorted front to back by their visual order.</span></span>
<span class="line"><span style="color:#6A737D;"> *  四虎----返回一组对象，穿透效果，点击射穿的对象集合</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{Cartesian2}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">windowPosition</span><span style="color:#6A737D;"> The window coordinates.</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{Entity[]}</span><span style="color:#6A737D;"> The picked entities or undefined.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">drillPickEntities</span><span style="color:#24292E;">(</span><span style="color:#E36209;">viewer</span><span style="color:#24292E;">, </span><span style="color:#E36209;">windowPosition</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> entity;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> picked;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> pickedPrimitives </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.scene.</span><span style="color:#6F42C1;">drillPick</span><span style="color:#24292E;">(windowPosition);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pickedPrimitives.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> hash </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    picked </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pickedPrimitives[i];</span></span>
<span class="line"><span style="color:#24292E;">    entity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">defaultValue</span><span style="color:#24292E;">(picked.id, picked.primitive.id);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (entity </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Cesium</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Entity</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">Cesium.</span><span style="color:#6F42C1;">defined</span><span style="color:#24292E;">(hash[entity.id])) {</span></span>
<span class="line"><span style="color:#24292E;">      result.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(entity);</span></span>
<span class="line"><span style="color:#24292E;">      hash[entity.id] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;    </span><span style="color:#6A737D;">//使得hash对象增加键entity.id  同时值为true，结果就是hash{entity.id = true}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="三、points、billboards-and-labels" tabindex="-1">三、Points、billboards and labels <a class="header-anchor" href="#三、points、billboards-and-labels" aria-label="Permalink to &quot;三、Points、billboards and labels&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> viewer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Viewer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cesiumContainer&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> citizensBankPark </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name : </span><span style="color:#9ECBFF;">&#39;Citizens Bank Park&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    position : Cesium.Cartesian3.</span><span style="color:#B392F0;">fromDegrees</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">75.166493</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">39.9060534</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    point : {</span></span>
<span class="line"><span style="color:#E1E4E8;">        pixelSize : </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color : Cesium.Color.</span><span style="color:#79B8FF;">RED</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        outlineColor : Cesium.Color.</span><span style="color:#79B8FF;">WHITE</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        outlineWidth : </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    label : {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text : </span><span style="color:#9ECBFF;">&#39;Citizens Bank Park&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        font : </span><span style="color:#9ECBFF;">&#39;14pt monospace&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        style: Cesium.LabelStyle.</span><span style="color:#79B8FF;">FILL_AND_OUTLINE</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        outlineWidth : </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        verticalOrigin : Cesium.VerticalOrigin.</span><span style="color:#79B8FF;">BOTTOM</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        pixelOffset : </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian2</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">//将标签向上偏移9个像素，防止重叠</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">viewer.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(viewer.entities);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> viewer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Viewer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;cesiumContainer&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> citizensBankPark </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    name : </span><span style="color:#032F62;">&#39;Citizens Bank Park&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    position : Cesium.Cartesian3.</span><span style="color:#6F42C1;">fromDegrees</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">75.166493</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">39.9060534</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    point : {</span></span>
<span class="line"><span style="color:#24292E;">        pixelSize : </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color : Cesium.Color.</span><span style="color:#005CC5;">RED</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        outlineColor : Cesium.Color.</span><span style="color:#005CC5;">WHITE</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        outlineWidth : </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    label : {</span></span>
<span class="line"><span style="color:#24292E;">        text : </span><span style="color:#032F62;">&#39;Citizens Bank Park&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        font : </span><span style="color:#032F62;">&#39;14pt monospace&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        style: Cesium.LabelStyle.</span><span style="color:#005CC5;">FILL_AND_OUTLINE</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        outlineWidth : </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        verticalOrigin : Cesium.VerticalOrigin.</span><span style="color:#005CC5;">BOTTOM</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        pixelOffset : </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian2</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">//将标签向上偏移9个像素，防止重叠</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">viewer.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(viewer.entities);</span></span></code></pre></div><p><img src="`+r+`" alt="image-20220321165418054"></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> citizensBankPark </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  position : Cesium.Cartesian3.</span><span style="color:#B392F0;">fromDegrees</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">75.166493</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">39.9060534</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  billboard : {</span></span>
<span class="line"><span style="color:#E1E4E8;">    image : </span><span style="color:#9ECBFF;">&#39;/docs/images/tutorials/creating-entities/Philadelphia_Phillies.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width : </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height : </span><span style="color:#79B8FF;">64</span></span>
<span class="line"><span style="color:#E1E4E8;">  },   </span><span style="color:#6A737D;">//这次是设置广告牌，用图片的方式填充</span></span>
<span class="line"><span style="color:#E1E4E8;">  label : {</span></span>
<span class="line"><span style="color:#E1E4E8;">    text : </span><span style="color:#9ECBFF;">&#39;Citizens Bank Park&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    font : </span><span style="color:#9ECBFF;">&#39;14pt monospace&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    style: Cesium.LabelStyle.</span><span style="color:#79B8FF;">FILL_AND_OUTLINE</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    outlineWidth : </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    verticalOrigin : Cesium.VerticalOrigin.</span><span style="color:#79B8FF;">TOP</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    pixelOffset : </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian2</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> citizensBankPark </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  position : Cesium.Cartesian3.</span><span style="color:#6F42C1;">fromDegrees</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">75.166493</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">39.9060534</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  billboard : {</span></span>
<span class="line"><span style="color:#24292E;">    image : </span><span style="color:#032F62;">&#39;/docs/images/tutorials/creating-entities/Philadelphia_Phillies.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width : </span><span style="color:#005CC5;">64</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    height : </span><span style="color:#005CC5;">64</span></span>
<span class="line"><span style="color:#24292E;">  },   </span><span style="color:#6A737D;">//这次是设置广告牌，用图片的方式填充</span></span>
<span class="line"><span style="color:#24292E;">  label : {</span></span>
<span class="line"><span style="color:#24292E;">    text : </span><span style="color:#032F62;">&#39;Citizens Bank Park&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    font : </span><span style="color:#032F62;">&#39;14pt monospace&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    style: Cesium.LabelStyle.</span><span style="color:#005CC5;">FILL_AND_OUTLINE</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    outlineWidth : </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    verticalOrigin : Cesium.VerticalOrigin.</span><span style="color:#005CC5;">TOP</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    pixelOffset : </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian2</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">32</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p><img src="`+E+`" alt="image-20220321165500983"></p><h2 id="四、3dmodels" tabindex="-1">四、3Dmodels <a class="header-anchor" href="#四、3dmodels" aria-label="Permalink to &quot;四、3Dmodels&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> viewer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Viewer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cesiumContainer&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> entity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    position : Cesium.Cartesian3.</span><span style="color:#B392F0;">fromDegrees</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">123.0744619</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">44.0503706</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    model : {</span></span>
<span class="line"><span style="color:#E1E4E8;">        uri : </span><span style="color:#9ECBFF;">&#39;../../../../Apps/SampleData/models/GroundVehicle/GroundVehicle.glb&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.trackedEntity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> entity;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//控制模型的朝向角度</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> viewer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Viewer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cesiumContainer&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> position </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Cartesian3.</span><span style="color:#B392F0;">fromDegrees</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">123.0744619</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">44.0503706</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> heading </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Math.</span><span style="color:#B392F0;">toRadians</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">45.0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> pitch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Math.</span><span style="color:#B392F0;">toRadians</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">15.0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> roll </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Math.</span><span style="color:#B392F0;">toRadians</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> orientation </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Transforms.</span><span style="color:#B392F0;">headingPitchRollQuaternion</span><span style="color:#E1E4E8;">(position, </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">HeadingPitchRoll</span><span style="color:#E1E4E8;">(heading, pitch, roll));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> entity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    position : position,</span></span>
<span class="line"><span style="color:#E1E4E8;">    orientation : orientation,</span></span>
<span class="line"><span style="color:#E1E4E8;">    model : {</span></span>
<span class="line"><span style="color:#E1E4E8;">        uri : </span><span style="color:#9ECBFF;">&#39;../../../../Apps/SampleData/models/GroundVehicle/GroundVehicle.glb&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.trackedEntity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> entity;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> viewer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Viewer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;cesiumContainer&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> entity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    position : Cesium.Cartesian3.</span><span style="color:#6F42C1;">fromDegrees</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">123.0744619</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">44.0503706</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    model : {</span></span>
<span class="line"><span style="color:#24292E;">        uri : </span><span style="color:#032F62;">&#39;../../../../Apps/SampleData/models/GroundVehicle/GroundVehicle.glb&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">viewer.trackedEntity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> entity;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//控制模型的朝向角度</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> viewer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Viewer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;cesiumContainer&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> position </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Cartesian3.</span><span style="color:#6F42C1;">fromDegrees</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">123.0744619</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">44.0503706</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> heading </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Math.</span><span style="color:#6F42C1;">toRadians</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">45.0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> pitch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Math.</span><span style="color:#6F42C1;">toRadians</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">15.0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> roll </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Math.</span><span style="color:#6F42C1;">toRadians</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> orientation </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Transforms.</span><span style="color:#6F42C1;">headingPitchRollQuaternion</span><span style="color:#24292E;">(position, </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">HeadingPitchRoll</span><span style="color:#24292E;">(heading, pitch, roll));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> entity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    position : position,</span></span>
<span class="line"><span style="color:#24292E;">    orientation : orientation,</span></span>
<span class="line"><span style="color:#24292E;">    model : {</span></span>
<span class="line"><span style="color:#24292E;">        uri : </span><span style="color:#032F62;">&#39;../../../../Apps/SampleData/models/GroundVehicle/GroundVehicle.glb&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">viewer.trackedEntity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> entity;</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">viewer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Viewer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;cesiumContainer&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  infoBox: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//Disable InfoBox widget</span></span>
<span class="line"><span style="color:#E1E4E8;">  selectionIndicator: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//Disable selection indicator</span></span>
<span class="line"><span style="color:#E1E4E8;">  shouldAnimate: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Enable animations</span></span>
<span class="line"><span style="color:#E1E4E8;">  terrainProvider: Cesium.</span><span style="color:#B392F0;">createWorldTerrain</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//光照效果</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.scene.globe.enableLighting </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Enable depth testing so things behind the terrain disappear.</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.scene.globe.depthTestAgainstTerrain </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Set the random number seed for consistent results.</span></span>
<span class="line"><span style="color:#E1E4E8;">Cesium.Math.</span><span style="color:#B392F0;">setRandomNumberSeed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Set bounds of our simulation time</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.JulianDate.</span><span style="color:#B392F0;">fromDate</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2015</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">));  </span><span style="color:#6A737D;">//国外月份从-1开始，所以3.25</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.JulianDate.</span><span style="color:#B392F0;">addSeconds</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  start,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">360</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">JulianDate</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Make sure viewer is at the desired time.</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.clock.startTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> start.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.clock.stopTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> stop.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.clock.currentTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> start.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.clock.clockRange </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.ClockRange.</span><span style="color:#79B8FF;">LOOP_STOP</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//Loop at the end</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.clock.multiplier </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Set timeline to simulation bounds</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.timeline.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(start, stop);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Generate a random circular pattern with varying heights.</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computeCirclularFlight</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">lon</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">lat</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">radius</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">SampledPositionProperty</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">360</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//角度到弧度公式  弧度 = 角度 * π / 180 </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">radians</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Math.</span><span style="color:#B392F0;">toRadians</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">time</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.JulianDate.</span><span style="color:#B392F0;">addSeconds</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      start,</span></span>
<span class="line"><span style="color:#E1E4E8;">      i,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">JulianDate</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Cartesian3.</span><span style="color:#B392F0;">fromDegrees</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      lon </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> radius </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">cos</span><span style="color:#E1E4E8;">(radians),</span></span>
<span class="line"><span style="color:#E1E4E8;">      lat </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> radius </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">sin</span><span style="color:#E1E4E8;">(radians),</span></span>
<span class="line"><span style="color:#E1E4E8;">      Cesium.Math.</span><span style="color:#B392F0;">nextRandomNumber</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1750</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    property.</span><span style="color:#B392F0;">addSample</span><span style="color:#E1E4E8;">(time, position);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//Also create a point for each sample we generate.</span></span>
<span class="line"><span style="color:#E1E4E8;">    viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      position: position,</span></span>
<span class="line"><span style="color:#E1E4E8;">      point: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        pixelSize: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: Cesium.Color.</span><span style="color:#79B8FF;">TRANSPARENT</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        outlineColor: Cesium.Color.</span><span style="color:#79B8FF;">YELLOW</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        outlineWidth: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> property;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Compute the entity position property.</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computeCirclularFlight</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">112.110693</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">36.0994841</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.03</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Actually create the entity</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">entity</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//Set the entity availability to the same interval as the simulation time.</span></span>
<span class="line"><span style="color:#E1E4E8;">  availability: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">TimeIntervalCollection</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">TimeInterval</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      start: start,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stop: stop,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//Use our computed positions</span></span>
<span class="line"><span style="color:#E1E4E8;">  position: position,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//Automatically compute orientation based on position movement.</span></span>
<span class="line"><span style="color:#E1E4E8;">  orientation: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">VelocityOrientationProperty</span><span style="color:#E1E4E8;">(position),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//Load the Cesium plane model to represent the entity</span></span>
<span class="line"><span style="color:#E1E4E8;">  model: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    uri: </span><span style="color:#9ECBFF;">&quot;../SampleData/models/CesiumAir/Cesium_Air.glb&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimumPixelSize: </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//Show the path as a pink line sampled in 1 second increments.</span></span>
<span class="line"><span style="color:#E1E4E8;">  path: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolution: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    material: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">PolylineGlowMaterialProperty</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      glowPower: </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      color: Cesium.Color.</span><span style="color:#79B8FF;">YELLOW</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Add button to view the path from the top down</span></span>
<span class="line"><span style="color:#E1E4E8;">Sandcastle.</span><span style="color:#B392F0;">addDefaultToolbarButton</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;View Top Down&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  viewer.trackedEntity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  viewer.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    viewer.entities,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">HeadingPitchRange</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, Cesium.Math.</span><span style="color:#B392F0;">toRadians</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Add button to view the path from the side</span></span>
<span class="line"><span style="color:#E1E4E8;">Sandcastle.</span><span style="color:#B392F0;">addToolbarButton</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;View Side&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  viewer.trackedEntity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  viewer.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    viewer.entities,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">HeadingPitchRange</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      Cesium.Math.</span><span style="color:#B392F0;">toRadians</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      Cesium.Math.</span><span style="color:#B392F0;">toRadians</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">7500</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Add button to track the entity as it moves</span></span>
<span class="line"><span style="color:#E1E4E8;">Sandcastle.</span><span style="color:#B392F0;">addToolbarButton</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;View Aircraft&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  viewer.trackedEntity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> entity;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Add a combo box for selecting each interpolation mode.</span></span>
<span class="line"><span style="color:#E1E4E8;">Sandcastle.</span><span style="color:#B392F0;">addToolbarMenu</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&quot;Interpolation: Linear Approximation&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onselect</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        entity.position.</span><span style="color:#B392F0;">setInterpolationOptions</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationDegree: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationAlgorithm: Cesium.LinearApproximation,</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&quot;Interpolation: Lagrange Polynomial Approximation&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onselect</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        entity.position.</span><span style="color:#B392F0;">setInterpolationOptions</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationDegree: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationAlgorithm:</span></span>
<span class="line"><span style="color:#E1E4E8;">            Cesium.LagrangePolynomialApproximation,</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&quot;Interpolation: Hermite Polynomial Approximation&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onselect</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        entity.position.</span><span style="color:#B392F0;">setInterpolationOptions</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationDegree: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationAlgorithm: Cesium.HermitePolynomialApproximation,</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;interpolationMenu&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">viewer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Viewer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;cesiumContainer&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  infoBox: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//Disable InfoBox widget</span></span>
<span class="line"><span style="color:#24292E;">  selectionIndicator: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//Disable selection indicator</span></span>
<span class="line"><span style="color:#24292E;">  shouldAnimate: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// Enable animations</span></span>
<span class="line"><span style="color:#24292E;">  terrainProvider: Cesium.</span><span style="color:#6F42C1;">createWorldTerrain</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//光照效果</span></span>
<span class="line"><span style="color:#24292E;">viewer.scene.globe.enableLighting </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Enable depth testing so things behind the terrain disappear.</span></span>
<span class="line"><span style="color:#24292E;">viewer.scene.globe.depthTestAgainstTerrain </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Set the random number seed for consistent results.</span></span>
<span class="line"><span style="color:#24292E;">Cesium.Math.</span><span style="color:#6F42C1;">setRandomNumberSeed</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Set bounds of our simulation time</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">start</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.JulianDate.</span><span style="color:#6F42C1;">fromDate</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2015</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">));  </span><span style="color:#6A737D;">//国外月份从-1开始，所以3.25</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">stop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.JulianDate.</span><span style="color:#6F42C1;">addSeconds</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  start,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">360</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">JulianDate</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Make sure viewer is at the desired time.</span></span>
<span class="line"><span style="color:#24292E;">viewer.clock.startTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> start.</span><span style="color:#6F42C1;">clone</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">viewer.clock.stopTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> stop.</span><span style="color:#6F42C1;">clone</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">viewer.clock.currentTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> start.</span><span style="color:#6F42C1;">clone</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">viewer.clock.clockRange </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.ClockRange.</span><span style="color:#005CC5;">LOOP_STOP</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//Loop at the end</span></span>
<span class="line"><span style="color:#24292E;">viewer.clock.multiplier </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Set timeline to simulation bounds</span></span>
<span class="line"><span style="color:#24292E;">viewer.timeline.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(start, stop);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Generate a random circular pattern with varying heights.</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computeCirclularFlight</span><span style="color:#24292E;">(</span><span style="color:#E36209;">lon</span><span style="color:#24292E;">, </span><span style="color:#E36209;">lat</span><span style="color:#24292E;">, </span><span style="color:#E36209;">radius</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">property</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">SampledPositionProperty</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">360</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//角度到弧度公式  弧度 = 角度 * π / 180 </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">radians</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Math.</span><span style="color:#6F42C1;">toRadians</span><span style="color:#24292E;">(i);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">time</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.JulianDate.</span><span style="color:#6F42C1;">addSeconds</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      start,</span></span>
<span class="line"><span style="color:#24292E;">      i,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">JulianDate</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">position</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Cartesian3.</span><span style="color:#6F42C1;">fromDegrees</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      lon </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> radius </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1.5</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">cos</span><span style="color:#24292E;">(radians),</span></span>
<span class="line"><span style="color:#24292E;">      lat </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> radius </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">sin</span><span style="color:#24292E;">(radians),</span></span>
<span class="line"><span style="color:#24292E;">      Cesium.Math.</span><span style="color:#6F42C1;">nextRandomNumber</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1750</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">    property.</span><span style="color:#6F42C1;">addSample</span><span style="color:#24292E;">(time, position);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//Also create a point for each sample we generate.</span></span>
<span class="line"><span style="color:#24292E;">    viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      position: position,</span></span>
<span class="line"><span style="color:#24292E;">      point: {</span></span>
<span class="line"><span style="color:#24292E;">        pixelSize: </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color: Cesium.Color.</span><span style="color:#005CC5;">TRANSPARENT</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        outlineColor: Cesium.Color.</span><span style="color:#005CC5;">YELLOW</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        outlineWidth: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> property;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Compute the entity position property.</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">position</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computeCirclularFlight</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">112.110693</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">36.0994841</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.03</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Actually create the entity</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">entity</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//Set the entity availability to the same interval as the simulation time.</span></span>
<span class="line"><span style="color:#24292E;">  availability: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">TimeIntervalCollection</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">TimeInterval</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      start: start,</span></span>
<span class="line"><span style="color:#24292E;">      stop: stop,</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ]),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//Use our computed positions</span></span>
<span class="line"><span style="color:#24292E;">  position: position,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//Automatically compute orientation based on position movement.</span></span>
<span class="line"><span style="color:#24292E;">  orientation: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">VelocityOrientationProperty</span><span style="color:#24292E;">(position),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//Load the Cesium plane model to represent the entity</span></span>
<span class="line"><span style="color:#24292E;">  model: {</span></span>
<span class="line"><span style="color:#24292E;">    uri: </span><span style="color:#032F62;">&quot;../SampleData/models/CesiumAir/Cesium_Air.glb&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    minimumPixelSize: </span><span style="color:#005CC5;">64</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//Show the path as a pink line sampled in 1 second increments.</span></span>
<span class="line"><span style="color:#24292E;">  path: {</span></span>
<span class="line"><span style="color:#24292E;">    resolution: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    material: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">PolylineGlowMaterialProperty</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      glowPower: </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      color: Cesium.Color.</span><span style="color:#005CC5;">YELLOW</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Add button to view the path from the top down</span></span>
<span class="line"><span style="color:#24292E;">Sandcastle.</span><span style="color:#6F42C1;">addDefaultToolbarButton</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;View Top Down&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  viewer.trackedEntity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  viewer.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    viewer.entities,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">HeadingPitchRange</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, Cesium.Math.</span><span style="color:#6F42C1;">toRadians</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Add button to view the path from the side</span></span>
<span class="line"><span style="color:#24292E;">Sandcastle.</span><span style="color:#6F42C1;">addToolbarButton</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;View Side&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  viewer.trackedEntity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  viewer.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    viewer.entities,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">HeadingPitchRange</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      Cesium.Math.</span><span style="color:#6F42C1;">toRadians</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      Cesium.Math.</span><span style="color:#6F42C1;">toRadians</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">15</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">7500</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Add button to track the entity as it moves</span></span>
<span class="line"><span style="color:#24292E;">Sandcastle.</span><span style="color:#6F42C1;">addToolbarButton</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;View Aircraft&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  viewer.trackedEntity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> entity;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Add a combo box for selecting each interpolation mode.</span></span>
<span class="line"><span style="color:#24292E;">Sandcastle.</span><span style="color:#6F42C1;">addToolbarMenu</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&quot;Interpolation: Linear Approximation&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onselect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        entity.position.</span><span style="color:#6F42C1;">setInterpolationOptions</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          interpolationDegree: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          interpolationAlgorithm: Cesium.LinearApproximation,</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&quot;Interpolation: Lagrange Polynomial Approximation&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onselect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        entity.position.</span><span style="color:#6F42C1;">setInterpolationOptions</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          interpolationDegree: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          interpolationAlgorithm:</span></span>
<span class="line"><span style="color:#24292E;">            Cesium.LagrangePolynomialApproximation,</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&quot;Interpolation: Hermite Polynomial Approximation&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onselect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        entity.position.</span><span style="color:#6F42C1;">setInterpolationOptions</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          interpolationDegree: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          interpolationAlgorithm: Cesium.HermitePolynomialApproximation,</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;interpolationMenu&quot;</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div>`,29),F=[i];function C(d,u,m,h,A,D){return n(),a("div",null,F)}const v=s(y,[["render",C]]);export{g as __pageData,v as default};
