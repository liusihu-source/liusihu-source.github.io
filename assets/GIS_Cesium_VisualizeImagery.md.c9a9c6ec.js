import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.a7175731.js";const l="/assets/image-20220323110400312.1fde3f2a.png",o="/assets/image-20220323162950880.dee80ff1.png",p="/assets/image-20220323163007830.f8d71d98.png",F=JSON.parse('{"title":"VisualizeImagery --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"GIS/Cesium/VisualizeImagery.md","filePath":"GIS/Cesium/VisualizeImagery.md","lastUpdated":null}'),r={name:"GIS/Cesium/VisualizeImagery.md"},t=e(`<h1 id="visualizeimagery-笔记" tabindex="-1">VisualizeImagery --笔记 <a class="header-anchor" href="#visualizeimagery-笔记" aria-label="Permalink to &quot;VisualizeImagery --笔记&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">CesiumJS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">supports</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">drawing</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">layering</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">high-resolution</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">imagery</span><span style="color:#E1E4E8;"> (maps) from many services, including Cesium ion. Use Cesium ion to stream curated high resolution imagery or tile your own imagery layers from raster data to CesiumJS apps. Layers can be ordered and blended together. Each layer’s brightness, contrast, gamma, hue, and saturation can be dynamically changed. This tutorial introduces imagery layer concepts and the related CesiumJS APIs.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#translate</span></span>
<span class="line"><span style="color:#B392F0;">CesiumJS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">支持从包括</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Cesium</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ion</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">在内的许多服务中绘制和分层高分辨率图像（地图）。使用</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Cesium</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ion</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">流式传输精选的高分辨率图像或将您自己的图像层从栅格数据平铺到</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">CesiumJS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">应用程序。图层可以排序和混合在一起。每一层的亮度、对比度、伽玛、色调和饱和度都可以动态改变。本教程介绍图像层概念和相关的</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">CesiumJS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">API。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">CesiumJS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">supports</span><span style="color:#24292E;"> </span><span style="color:#032F62;">drawing</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">layering</span><span style="color:#24292E;"> </span><span style="color:#032F62;">high-resolution</span><span style="color:#24292E;"> </span><span style="color:#032F62;">imagery</span><span style="color:#24292E;"> (maps) from many services, including Cesium ion. Use Cesium ion to stream curated high resolution imagery or tile your own imagery layers from raster data to CesiumJS apps. Layers can be ordered and blended together. Each layer’s brightness, contrast, gamma, hue, and saturation can be dynamically changed. This tutorial introduces imagery layer concepts and the related CesiumJS APIs.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#translate</span></span>
<span class="line"><span style="color:#6F42C1;">CesiumJS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">支持从包括</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Cesium</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ion</span><span style="color:#24292E;"> </span><span style="color:#032F62;">在内的许多服务中绘制和分层高分辨率图像（地图）。使用</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Cesium</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ion</span><span style="color:#24292E;"> </span><span style="color:#032F62;">流式传输精选的高分辨率图像或将您自己的图像层从栅格数据平铺到</span><span style="color:#24292E;"> </span><span style="color:#032F62;">CesiumJS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">应用程序。图层可以排序和混合在一起。每一层的亮度、对比度、伽玛、色调和饱和度都可以动态改变。本教程介绍图像层概念和相关的</span><span style="color:#24292E;"> </span><span style="color:#032F62;">CesiumJS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">API。</span></span></code></pre></div><p>前言</p><p>可以在<code>Cesium ion</code>上传影像，之后通过 <code>Open complete code example</code> 查看自己上传的东西</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Grant CesiumJS access to your ion assets</span></span>
<span class="line"><span style="color:#E1E4E8;">Cesium.Ion.defaultAccessToken </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhYjIyNDk5Ni1hNmFlLTQyNzctOGMwOS1hYWU4NmEyMjcxZTEiLCJpZCI6NDM0MjEsImlhdCI6MTYxNTcyNDg5NH0.fyGAT3jkTTGTMKbvXAllYNUvXbU9qwcTMkhLEXcD9Rc&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">viewer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Viewer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;cesiumContainer&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">imageryLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.imageryLayers.</span><span style="color:#B392F0;">addImageryProvider</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">IonImageryProvider</span><span style="color:#E1E4E8;">({ assetId: </span><span style="color:#79B8FF;">890134</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> viewer.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(imageryLayer);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Grant CesiumJS access to your ion assets</span></span>
<span class="line"><span style="color:#24292E;">Cesium.Ion.defaultAccessToken </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhYjIyNDk5Ni1hNmFlLTQyNzctOGMwOS1hYWU4NmEyMjcxZTEiLCJpZCI6NDM0MjEsImlhdCI6MTYxNTcyNDg5NH0.fyGAT3jkTTGTMKbvXAllYNUvXbU9qwcTMkhLEXcD9Rc&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">viewer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Viewer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;cesiumContainer&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">imageryLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.imageryLayers.</span><span style="color:#6F42C1;">addImageryProvider</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">IonImageryProvider</span><span style="color:#24292E;">({ assetId: </span><span style="color:#005CC5;">890134</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> viewer.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(imageryLayer);</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})();</span></span></code></pre></div><p><img src="`+l+`" alt="image-20220323110400312"></p><ul><li>支持的影像数据格式</li></ul><table><thead><tr><th style="text-align:left;">format</th><th style="text-align:left;">file extensions</th></tr></thead><tbody><tr><td style="text-align:left;">GeoTIFF</td><td style="text-align:left;">.tiff, .tif</td></tr><tr><td style="text-align:left;">Floating Point Raster</td><td style="text-align:left;">.flt</td></tr><tr><td style="text-align:left;">Arc/Info ASCII Grid</td><td style="text-align:left;">.asc</td></tr><tr><td style="text-align:left;">Source Map</td><td style="text-align:left;">.src</td></tr><tr><td style="text-align:left;">Erdas Imagine</td><td style="text-align:left;">.img</td></tr><tr><td style="text-align:left;">USGS ASCII DEM and CDED</td><td style="text-align:left;">.dem</td></tr><tr><td style="text-align:left;">JPEG</td><td style="text-align:left;">.jpg, .jpeg</td></tr><tr><td style="text-align:left;">PNG</td><td style="text-align:left;">.png</td></tr><tr><td style="text-align:left;">Other common raster formats</td><td style="text-align:left;"></td></tr></tbody></table><p>Imagery files must be georeferenced before being loaded into Cesium ion. （必须先配准好）</p><ul><li>Files may be zipped.</li><li>Include any sidecar files when uploading (such as .aux, .xml, .tab, .tfw, .wld, .prj, .ovr, .rrd).</li><li>Uploaded imagery is automatically reprojected to EPSG:3857.</li></ul><h2 id="一、quick-start" tabindex="-1">一、Quick Start <a class="header-anchor" href="#一、quick-start" aria-label="Permalink to &quot;一、Quick Start&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Your access token can be found at: https://cesium.com/ion/tokens.</span></span>
<span class="line"><span style="color:#6A737D;">// This is the default access token from your ion account</span></span>
<span class="line"><span style="color:#E1E4E8;">Cesium.Ion.defaultAccessToken </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhYjIyNDk5Ni1hNmFlLTQyNzctOGMwOS1hYWU4NmEyMjcxZTEiLCJpZCI6NDM0MjEsImlhdCI6MTYxNTcyNDg5NH0.fyGAT3jkTTGTMKbvXAllYNUvXbU9qwcTMkhLEXcD9Rc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> viewer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Viewer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cesiumContainer&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    imageryProvider : Cesium.</span><span style="color:#B392F0;">createWorldImagery</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        style : Cesium.IonWorldImageryStyle.</span><span style="color:#79B8FF;">AERIAL_WITH_LABELS</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//only AERIAL, AERIAL_WITH_LABELS, and ROAD are currently supported.</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    baseLayerPicker : </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//imageryProvider  只有在baseLayerPicker为false时候有效，</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> layers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.scene.imageryLayers;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> blackMarble </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> layers.</span><span style="color:#B392F0;">addImageryProvider</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">IonImageryProvider</span><span style="color:#E1E4E8;">({ assetId: </span><span style="color:#79B8FF;">3812</span><span style="color:#E1E4E8;"> }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">blackMarble.alpha </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 0.0 is transparent.  1.0 is opaque.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">blackMarble.brightness </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2.0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// &gt; 1.0 increases brightness.  &lt; 1.0 decreases.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">layers.</span><span style="color:#B392F0;">addImageryProvider</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">SingleTileImageryProvider</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    url : </span><span style="color:#9ECBFF;">&#39;localhost:7080/img/test.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    rectangle : Cesium.Rectangle.</span><span style="color:#B392F0;">fromDegrees</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">75.0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">28.0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">67.0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">29.75</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Your access token can be found at: https://cesium.com/ion/tokens.</span></span>
<span class="line"><span style="color:#6A737D;">// This is the default access token from your ion account</span></span>
<span class="line"><span style="color:#24292E;">Cesium.Ion.defaultAccessToken </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhYjIyNDk5Ni1hNmFlLTQyNzctOGMwOS1hYWU4NmEyMjcxZTEiLCJpZCI6NDM0MjEsImlhdCI6MTYxNTcyNDg5NH0.fyGAT3jkTTGTMKbvXAllYNUvXbU9qwcTMkhLEXcD9Rc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> viewer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Viewer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;cesiumContainer&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    imageryProvider : Cesium.</span><span style="color:#6F42C1;">createWorldImagery</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        style : Cesium.IonWorldImageryStyle.</span><span style="color:#005CC5;">AERIAL_WITH_LABELS</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//only AERIAL, AERIAL_WITH_LABELS, and ROAD are currently supported.</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    baseLayerPicker : </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//imageryProvider  只有在baseLayerPicker为false时候有效，</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> layers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.scene.imageryLayers;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> blackMarble </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> layers.</span><span style="color:#6F42C1;">addImageryProvider</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">IonImageryProvider</span><span style="color:#24292E;">({ assetId: </span><span style="color:#005CC5;">3812</span><span style="color:#24292E;"> }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">blackMarble.alpha </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 0.0 is transparent.  1.0 is opaque.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">blackMarble.brightness </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2.0</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// &gt; 1.0 increases brightness.  &lt; 1.0 decreases.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">layers.</span><span style="color:#6F42C1;">addImageryProvider</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">SingleTileImageryProvider</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    url : </span><span style="color:#032F62;">&#39;localhost:7080/img/test.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    rectangle : Cesium.Rectangle.</span><span style="color:#6F42C1;">fromDegrees</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">75.0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">28.0</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">67.0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">29.75</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}));</span></span></code></pre></div><ul><li>可以通过创建viewer对象时候，就直接设置imageryProvider属性</li><li>可以后面通过viewer.scene获取到当前的imageryLayers，然后通过addImageryProvider方法添加新的底图图层，添加的这些图层可以是以下这些类型 <ul><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/ArcGisMapServerImageryProvider.html" target="_blank" rel="noreferrer">ArcGisMapServerImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/BingMapsImageryProvider.html" target="_blank" rel="noreferrer">BingMapsImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/OpenStreetMapImageryProvider.html" target="_blank" rel="noreferrer">OpenStreetMapImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/TileMapServiceImageryProvider.html" target="_blank" rel="noreferrer">TileMapServiceImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/GoogleEarthEnterpriseImageryProvider.html" target="_blank" rel="noreferrer">GoogleEarthEnterpriseImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/GoogleEarthEnterpriseMapsProvider.html" target="_blank" rel="noreferrer">GoogleEarthEnterpriseMapsProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/GridImageryProvider.html" target="_blank" rel="noreferrer">GridImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/IonImageryProvider.html" target="_blank" rel="noreferrer">IonImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/MapboxImageryProvider.html" target="_blank" rel="noreferrer">MapboxImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/MapboxStyleImageryProvider.html" target="_blank" rel="noreferrer">MapboxStyleImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/SingleTileImageryProvider.html" target="_blank" rel="noreferrer">SingleTileImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/TileCoordinatesImageryProvider.html" target="_blank" rel="noreferrer">TileCoordinatesImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/UrlTemplateImageryProvider.html" target="_blank" rel="noreferrer">UrlTemplateImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/WebMapServiceImageryProvider.html" target="_blank" rel="noreferrer">WebMapServiceImageryProvider</a></li><li><a href="https://cesium.com/learn/cesiumjs/ref-doc/WebMapTileServiceImageryProvider.html" target="_blank" rel="noreferrer">WebMapTileServiceImageryProvider</a></li></ul></li></ul><h2 id="二、cross-origin-resource-sharing" tabindex="-1">二、Cross-origin resource sharing <a class="header-anchor" href="#二、cross-origin-resource-sharing" aria-label="Permalink to &quot;二、Cross-origin resource sharing&quot;">​</a></h2><ul><li>支持跨域请求 <ul><li>用tomcat发布服务</li></ul></li></ul><h2 id="三、demo-可以实现的效果" tabindex="-1">三、demo（可以实现的效果） <a class="header-anchor" href="#三、demo-可以实现的效果" aria-label="Permalink to &quot;三、demo（可以实现的效果）&quot;">​</a></h2><p><a href="https://sandcastle.cesium.com/?src=Imagery%20Layers%20Manipulation.html" target="_blank" rel="noreferrer">https://sandcastle.cesium.com/?src=Imagery Layers Manipulation.html</a></p><p><img src="`+o+'" alt="image-20220323162950880"></p><p><a href="https://sandcastle.cesium.com/?src=Imagery%20Adjustment.html" target="_blank" rel="noreferrer">https://sandcastle.cesium.com/?src=Imagery Adjustment.html</a></p><p><img src="'+p+'" alt="image-20220323163007830"></p>',20),c=[t];function i(y,E,m,d,g,u){return a(),n("div",null,c)}const C=s(r,[["render",i]]);export{F as __pageData,C as default};