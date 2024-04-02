import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const C=JSON.parse('{"title":"Cesium动画  --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"GIS/Cesium/CesiumJS/Cesium动画.md","filePath":"GIS/Cesium/CesiumJS/Cesium动画.md","lastUpdated":null}'),p={name:"GIS/Cesium/CesiumJS/Cesium动画.md"},o=l(`<h1 id="cesium动画-笔记" tabindex="-1">Cesium动画 --笔记 <a class="header-anchor" href="#cesium动画-笔记" aria-label="Permalink to &quot;Cesium动画  --笔记&quot;">​</a></h1><blockquote><p>Cesium官网动画案例整理</p><ul><li>GPX</li><li>Interpolation🌟 🌟 <ul><li>原理：因为无法指定具体实体对象在每个时间点的 位置 和 方向速度等，需要插值</li><li>实现步骤： <ol><li>根据实际需要，创建带有多个不同指定点及位置坐标信息的数组，利用该数组创建Cesium.SampledPositionProperty对象。可通过该对象的addSample()方法依次添加数组元素，同时完成实体点对象的场景创建</li><li>创建指定时间内运动的模型对象实体。首先设置显示时间的起终点（其他时间该对象不可见），以SampledPositionProperty对象的元素为插值点<code>position</code>，并利用这些插值点完成<code>path</code>对象的创建并自定义显示样式</li><li>基于上述模型对象实体设置自定义的插值方式，如下常见的插值方式 <ul><li>Cesium.LinearApproximation,//线性逼近</li><li>Cesium.LagrangePolynomialApproximation, //拉格朗日多项式逼近</li><li>Cesium.HermitePolynomialApproximation,//埃尔米特多项式逼近</li></ul></li></ol></li></ul></li><li>Manually controlled animation <ul><li>与上面案例不同在于增加模型本身的动画 及 运动速率发生改变</li><li>实现步骤： <ol><li>填充SampledPositionProperty 实例 和 SampledProperty实例。因为要求速率发生变化，所以单位时间内的移动距离应当不同。根据需要添加SampledPositionProperty 内元素（时间 和 坐标），此外增加SampledProperty实例存储时间 和 每段之间的距离。</li><li>增加模型。因为模型本身运行一遍时间固定，欲实现模型速度加快，即这段模型运行时间内移动距离更快，所以利用<a href="https://cesium.com/learn/cesiumjs/ref-doc/ModelAnimation.html#animationTime" target="_blank" rel="noreferrer">ModelAnimation.animationTime</a> 调整速率。同时利用矩阵转换完成模型位置的实时变化（较难）</li><li>增加辅助速度牌div 和 其他信息label</li></ol></li></ul></li><li>Multi-part CZML <ul><li>路径存储在czml中</li></ul></li></ul><p>💡 注意shouldAnimate 的开启</p></blockquote><h2 id="一、gpx" tabindex="-1">一、GPX <a class="header-anchor" href="#一、gpx" aria-label="Permalink to &quot;一、GPX&quot;">​</a></h2><p><a href="https://sandcastle.cesium.com/index.html?src=GPX.html" target="_blank" rel="noreferrer">https://sandcastle.cesium.com/index.html?src=GPX.html</a></p><p>💡 gpx格式：一种常见的用于<code>存储地理位置数据的开放式XML文件格式</code>。它通常用于记录全球定位系统（GPS）设备生成的轨迹、航迹或路线等数据。GPX文件可以包含路线、轨迹点、航迹点和路线点等信息，以及相关的时间、海拔高度和地理坐标等元数据，案例如下</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">gpx</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.1&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">creator</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;My GPS Device&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;My Hiking Trip&lt;/</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">desc</span><span style="color:#E1E4E8;">&gt;A hiking trip through the mountains&lt;/</span><span style="color:#85E89D;">desc</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">author</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;John Doe&lt;/</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">email</span><span style="color:#E1E4E8;">&gt;john@example.com&lt;/</span><span style="color:#85E89D;">email</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">author</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">trk</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;Hiking Track&lt;/</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">trkseg</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">trkpt</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lat</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;40.123456&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;-105.678910&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">ele</span><span style="color:#E1E4E8;">&gt;1500&lt;/</span><span style="color:#85E89D;">ele</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">time</span><span style="color:#E1E4E8;">&gt;2023-11-13T08:00:00Z&lt;/</span><span style="color:#85E89D;">time</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">trkpt</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">trkpt</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lat</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;40.123457&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;-105.678911&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">ele</span><span style="color:#E1E4E8;">&gt;1520&lt;/</span><span style="color:#85E89D;">ele</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">time</span><span style="color:#E1E4E8;">&gt;2023-11-13T08:05:00Z&lt;/</span><span style="color:#85E89D;">time</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">trkpt</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">&lt;!-- More track points go here --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">trkseg</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">trk</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">gpx</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">gpx</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.1&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">creator</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;My GPS Device&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">metadata</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;My Hiking Trip&lt;/</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">desc</span><span style="color:#24292E;">&gt;A hiking trip through the mountains&lt;/</span><span style="color:#22863A;">desc</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">author</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;John Doe&lt;/</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">email</span><span style="color:#24292E;">&gt;john@example.com&lt;/</span><span style="color:#22863A;">email</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">author</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">metadata</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">trk</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;Hiking Track&lt;/</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">trkseg</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">trkpt</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lat</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;40.123456&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;-105.678910&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">ele</span><span style="color:#24292E;">&gt;1500&lt;/</span><span style="color:#22863A;">ele</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">time</span><span style="color:#24292E;">&gt;2023-11-13T08:00:00Z&lt;/</span><span style="color:#22863A;">time</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">trkpt</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">trkpt</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lat</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;40.123457&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;-105.678911&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">ele</span><span style="color:#24292E;">&gt;1520&lt;/</span><span style="color:#22863A;">ele</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">time</span><span style="color:#24292E;">&gt;2023-11-13T08:05:00Z&lt;/</span><span style="color:#22863A;">time</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">trkpt</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">&lt;!-- More track points go here --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">trkseg</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">trk</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">gpx</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">viewer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Viewer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;cesiumContainer&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  terrain: Cesium.Terrain.</span><span style="color:#B392F0;">fromWorldTerrain</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pinBuilder</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">PinBuilder</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Sandcastle.</span><span style="color:#B392F0;">addToolbarMenu</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&quot;Track with Waypoints&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onselect</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        viewer.dataSources</span></span>
<span class="line"><span style="color:#E1E4E8;">          .</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            Cesium.GpxDataSource.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">&quot;../SampleData/gpx/lamina.gpx&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                clampToGround: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            )</span></span>
<span class="line"><span style="color:#E1E4E8;">          )</span></span>
<span class="line"><span style="color:#E1E4E8;">          .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">dataSource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            viewer.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(dataSource.entities);</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&quot;Route&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onselect</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        viewer.dataSources</span></span>
<span class="line"><span style="color:#E1E4E8;">          .</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            Cesium.GpxDataSource.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">&quot;../SampleData/gpx/route.gpx&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                clampToGround: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            )</span></span>
<span class="line"><span style="color:#E1E4E8;">          )</span></span>
<span class="line"><span style="color:#E1E4E8;">          .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">dataSource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            viewer.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(dataSource.entities);</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&quot;Waypoints&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onselect</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        viewer.dataSources</span></span>
<span class="line"><span style="color:#E1E4E8;">          .</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            Cesium.GpxDataSource.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;../SampleData/gpx/wpt.gpx&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">              clampToGround: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"><span style="color:#E1E4E8;">          )</span></span>
<span class="line"><span style="color:#E1E4E8;">          .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">dataSource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            viewer.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(dataSource.entities);</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&quot;Multiple Tracks with Waypoints&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onselect</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        viewer.dataSources</span></span>
<span class="line"><span style="color:#E1E4E8;">          .</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            Cesium.GpxDataSource.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">&quot;../SampleData/gpx/complexTrk.gpx&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              { clampToGround: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">            )</span></span>
<span class="line"><span style="color:#E1E4E8;">          )</span></span>
<span class="line"><span style="color:#E1E4E8;">          .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">dataSource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            viewer.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(dataSource.entities);</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&quot;Symbology Options&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onselect</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        viewer.dataSources</span></span>
<span class="line"><span style="color:#E1E4E8;">          .</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            Cesium.GpxDataSource.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">&quot;../SampleData/gpx/lamina.gpx&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                clampToGround: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                trackColor: Cesium.Color.</span><span style="color:#79B8FF;">YELLOW</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                waypointImage: pinBuilder.</span><span style="color:#B392F0;">fromMakiIconId</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">&quot;bicycle&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  Cesium.Color.</span><span style="color:#79B8FF;">BLUE</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#79B8FF;">48</span></span>
<span class="line"><span style="color:#E1E4E8;">                ),</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            )</span></span>
<span class="line"><span style="color:#E1E4E8;">          )</span></span>
<span class="line"><span style="color:#E1E4E8;">          .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">dataSource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            viewer.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(dataSource.entities);</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;toolbar&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Sandcastle.</span><span style="color:#B392F0;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  viewer.dataSources.</span><span style="color:#B392F0;">removeAll</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//确定当到达#startTime或#stopTime时时钟应该如何工作，Cesium.ClockRange.UNBOUNDED表示始终按照当前方向（direction）前进（advance）时钟，也就是在任何时间范围内运行，不受任何限制</span></span>
<span class="line"><span style="color:#E1E4E8;">  viewer.clock.clockRange </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.ClockRange.</span><span style="color:#79B8FF;">UNBOUNDED</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//确定对Clock#tick的调用是依赖于帧还是依赖于系统时钟，Cesium.ClockStep.SYSTEM_CLOCK将时钟设置为当前系统时间；忽略所有其他设置</span></span>
<span class="line"><span style="color:#E1E4E8;">  viewer.clock.clockStep </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.ClockStep.</span><span style="color:#79B8FF;">SYSTEM_CLOCK</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">viewer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Viewer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;cesiumContainer&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  terrain: Cesium.Terrain.</span><span style="color:#6F42C1;">fromWorldTerrain</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pinBuilder</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">PinBuilder</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Sandcastle.</span><span style="color:#6F42C1;">addToolbarMenu</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&quot;Track with Waypoints&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onselect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        viewer.dataSources</span></span>
<span class="line"><span style="color:#24292E;">          .</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">            Cesium.GpxDataSource.</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#032F62;">&quot;../SampleData/gpx/lamina.gpx&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                clampToGround: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            )</span></span>
<span class="line"><span style="color:#24292E;">          )</span></span>
<span class="line"><span style="color:#24292E;">          .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dataSource</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            viewer.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(dataSource.entities);</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&quot;Route&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onselect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        viewer.dataSources</span></span>
<span class="line"><span style="color:#24292E;">          .</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">            Cesium.GpxDataSource.</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#032F62;">&quot;../SampleData/gpx/route.gpx&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                clampToGround: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            )</span></span>
<span class="line"><span style="color:#24292E;">          )</span></span>
<span class="line"><span style="color:#24292E;">          .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dataSource</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            viewer.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(dataSource.entities);</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&quot;Waypoints&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onselect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        viewer.dataSources</span></span>
<span class="line"><span style="color:#24292E;">          .</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">            Cesium.GpxDataSource.</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;../SampleData/gpx/wpt.gpx&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">              clampToGround: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"><span style="color:#24292E;">          )</span></span>
<span class="line"><span style="color:#24292E;">          .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dataSource</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            viewer.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(dataSource.entities);</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&quot;Multiple Tracks with Waypoints&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onselect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        viewer.dataSources</span></span>
<span class="line"><span style="color:#24292E;">          .</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">            Cesium.GpxDataSource.</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#032F62;">&quot;../SampleData/gpx/complexTrk.gpx&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              { clampToGround: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">            )</span></span>
<span class="line"><span style="color:#24292E;">          )</span></span>
<span class="line"><span style="color:#24292E;">          .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dataSource</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            viewer.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(dataSource.entities);</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&quot;Symbology Options&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onselect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        viewer.dataSources</span></span>
<span class="line"><span style="color:#24292E;">          .</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">            Cesium.GpxDataSource.</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#032F62;">&quot;../SampleData/gpx/lamina.gpx&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                clampToGround: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                trackColor: Cesium.Color.</span><span style="color:#005CC5;">YELLOW</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                waypointImage: pinBuilder.</span><span style="color:#6F42C1;">fromMakiIconId</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#032F62;">&quot;bicycle&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  Cesium.Color.</span><span style="color:#005CC5;">BLUE</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#005CC5;">48</span></span>
<span class="line"><span style="color:#24292E;">                ),</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            )</span></span>
<span class="line"><span style="color:#24292E;">          )</span></span>
<span class="line"><span style="color:#24292E;">          .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dataSource</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            viewer.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(dataSource.entities);</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;toolbar&quot;</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Sandcastle.</span><span style="color:#6F42C1;">reset</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  viewer.dataSources.</span><span style="color:#6F42C1;">removeAll</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//确定当到达#startTime或#stopTime时时钟应该如何工作，Cesium.ClockRange.UNBOUNDED表示始终按照当前方向（direction）前进（advance）时钟，也就是在任何时间范围内运行，不受任何限制</span></span>
<span class="line"><span style="color:#24292E;">  viewer.clock.clockRange </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.ClockRange.</span><span style="color:#005CC5;">UNBOUNDED</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//确定对Clock#tick的调用是依赖于帧还是依赖于系统时钟，Cesium.ClockStep.SYSTEM_CLOCK将时钟设置为当前系统时间；忽略所有其他设置</span></span>
<span class="line"><span style="color:#24292E;">  viewer.clock.clockStep </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.ClockStep.</span><span style="color:#005CC5;">SYSTEM_CLOCK</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="二、interpolation" tabindex="-1">二、Interpolation <a class="header-anchor" href="#二、interpolation" aria-label="Permalink to &quot;二、Interpolation&quot;">​</a></h2><p><a href="https://sandcastle.cesium.com/index.html?src=Interpolation.html" target="_blank" rel="noreferrer">https://sandcastle.cesium.com/index.html?src=Interpolation.html</a></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">viewer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Viewer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;cesiumContainer&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  infoBox: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//Disable InfoBox widget</span></span>
<span class="line"><span style="color:#E1E4E8;">  selectionIndicator: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//Disable selection indicator</span></span>
<span class="line"><span style="color:#E1E4E8;">  shouldAnimate: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Enable animations</span></span>
<span class="line"><span style="color:#E1E4E8;">  terrain: Cesium.Terrain.</span><span style="color:#B392F0;">fromWorldTerrain</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//启用光照效果后，Cesium会根据太阳的位置、地球表面的几何形状以及光的散射和反射等物理特性，计算出地球表面各个位置的光照情况。这样可以让地球表面在不同时间、不同位置的光照效果更加逼真，提升了场景的视觉质量和真实感。</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.scene.globe.enableLighting </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//当地形深度测试开启时，场景中的对象会根据地形的几何形状进行遮挡和显示。这有助于确保地形在视觉上位于正确的位置，并且能够与其他对象正确交互，提升了场景的视觉效果和真实感。</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.scene.globe.depthTestAgainstTerrain </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置随机数种子可以用于创建具有确定性的随机效果，例如在测试中确保相同的随机数序列被使用，或者在复现问题时保持一致的随机行为。这有助于提高代码的可重现性和可测试性。</span></span>
<span class="line"><span style="color:#E1E4E8;">Cesium.Math.</span><span style="color:#B392F0;">setRandomNumberSeed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置边界时间</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.JulianDate.</span><span style="color:#B392F0;">fromDate</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2015</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">));</span></span>
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
<span class="line"><span style="color:#E1E4E8;">viewer.clock.clockRange </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.ClockRange.</span><span style="color:#79B8FF;">LOOP_STOP</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//循环</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.clock.multiplier </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">//用于设置倍速</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Set timeline to simulation bounds</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.timeline.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(start, stop);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//创建 Cesium.SampledPositionProperty 对象.</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computeCirclularFlight</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">lon</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">lat</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">radius</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">SampledPositionProperty</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">360</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">) {</span></span>
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
<span class="line"><span style="color:#6A737D;">//创建指定时间段内的模型对象及路径</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">entity</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//实体将只在指定的时间段内显示，并在其他时间段内隐藏。</span></span>
<span class="line"><span style="color:#E1E4E8;">  availability: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">TimeIntervalCollection</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">TimeInterval</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      start: start,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stop: stop,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//使用Cesium.SampledPositionProperty对象数组点</span></span>
<span class="line"><span style="color:#E1E4E8;">  position: position,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//依据数组点自行计算速度 方向</span></span>
<span class="line"><span style="color:#E1E4E8;">  orientation: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">VelocityOrientationProperty</span><span style="color:#E1E4E8;">(position),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//用具体的模型代替指定实体</span></span>
<span class="line"><span style="color:#E1E4E8;">  model: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    uri: </span><span style="color:#9ECBFF;">&quot;../SampleData/models/CesiumAir/Cesium_Air.glb&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimumPixelSize: </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//与实体相关联的路径样式</span></span>
<span class="line"><span style="color:#E1E4E8;">  path: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolution: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    material: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">PolylineGlowMaterialProperty</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      glowPower: </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//发光强度</span></span>
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
<span class="line"><span style="color:#6A737D;">//基于指定时段内对象设置插值方式</span></span>
<span class="line"><span style="color:#E1E4E8;">Sandcastle.</span><span style="color:#B392F0;">addToolbarMenu</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&quot;Interpolation: Linear Approximation&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onselect</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        entity.position.</span><span style="color:#B392F0;">setInterpolationOptions</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//设置实体位置属性的插值算法和插值程度</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationDegree: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationAlgorithm: Cesium.LinearApproximation,</span><span style="color:#6A737D;">//线性逼近</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&quot;Interpolation: Lagrange Polynomial Approximation&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onselect</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        entity.position.</span><span style="color:#B392F0;">setInterpolationOptions</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationDegree: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationAlgorithm:</span></span>
<span class="line"><span style="color:#E1E4E8;">            Cesium.LagrangePolynomialApproximation, </span><span style="color:#6A737D;">//拉格朗日多项式逼近</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&quot;Interpolation: Hermite Polynomial Approximation&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onselect</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        entity.position.setInte</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">rpolationOptions</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationDegree: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          interpolationAlgorithm: Cesium.HermitePolynomialApproximation,</span><span style="color:#6A737D;">//埃尔米特多项式逼近</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;interpolationMenu&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">viewer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Viewer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;cesiumContainer&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  infoBox: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//Disable InfoBox widget</span></span>
<span class="line"><span style="color:#24292E;">  selectionIndicator: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//Disable selection indicator</span></span>
<span class="line"><span style="color:#24292E;">  shouldAnimate: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// Enable animations</span></span>
<span class="line"><span style="color:#24292E;">  terrain: Cesium.Terrain.</span><span style="color:#6F42C1;">fromWorldTerrain</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//启用光照效果后，Cesium会根据太阳的位置、地球表面的几何形状以及光的散射和反射等物理特性，计算出地球表面各个位置的光照情况。这样可以让地球表面在不同时间、不同位置的光照效果更加逼真，提升了场景的视觉质量和真实感。</span></span>
<span class="line"><span style="color:#24292E;">viewer.scene.globe.enableLighting </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//当地形深度测试开启时，场景中的对象会根据地形的几何形状进行遮挡和显示。这有助于确保地形在视觉上位于正确的位置，并且能够与其他对象正确交互，提升了场景的视觉效果和真实感。</span></span>
<span class="line"><span style="color:#24292E;">viewer.scene.globe.depthTestAgainstTerrain </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置随机数种子可以用于创建具有确定性的随机效果，例如在测试中确保相同的随机数序列被使用，或者在复现问题时保持一致的随机行为。这有助于提高代码的可重现性和可测试性。</span></span>
<span class="line"><span style="color:#24292E;">Cesium.Math.</span><span style="color:#6F42C1;">setRandomNumberSeed</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置边界时间</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">start</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.JulianDate.</span><span style="color:#6F42C1;">fromDate</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2015</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">));</span></span>
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
<span class="line"><span style="color:#24292E;">viewer.clock.clockRange </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.ClockRange.</span><span style="color:#005CC5;">LOOP_STOP</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//循环</span></span>
<span class="line"><span style="color:#24292E;">viewer.clock.multiplier </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">//用于设置倍速</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Set timeline to simulation bounds</span></span>
<span class="line"><span style="color:#24292E;">viewer.timeline.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(start, stop);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//创建 Cesium.SampledPositionProperty 对象.</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computeCirclularFlight</span><span style="color:#24292E;">(</span><span style="color:#E36209;">lon</span><span style="color:#24292E;">, </span><span style="color:#E36209;">lat</span><span style="color:#24292E;">, </span><span style="color:#E36209;">radius</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">property</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">SampledPositionProperty</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">360</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">) {</span></span>
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
<span class="line"><span style="color:#6A737D;">//创建指定时间段内的模型对象及路径</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">entity</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//实体将只在指定的时间段内显示，并在其他时间段内隐藏。</span></span>
<span class="line"><span style="color:#24292E;">  availability: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">TimeIntervalCollection</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">TimeInterval</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      start: start,</span></span>
<span class="line"><span style="color:#24292E;">      stop: stop,</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ]),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//使用Cesium.SampledPositionProperty对象数组点</span></span>
<span class="line"><span style="color:#24292E;">  position: position,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//依据数组点自行计算速度 方向</span></span>
<span class="line"><span style="color:#24292E;">  orientation: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">VelocityOrientationProperty</span><span style="color:#24292E;">(position),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//用具体的模型代替指定实体</span></span>
<span class="line"><span style="color:#24292E;">  model: {</span></span>
<span class="line"><span style="color:#24292E;">    uri: </span><span style="color:#032F62;">&quot;../SampleData/models/CesiumAir/Cesium_Air.glb&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    minimumPixelSize: </span><span style="color:#005CC5;">64</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//与实体相关联的路径样式</span></span>
<span class="line"><span style="color:#24292E;">  path: {</span></span>
<span class="line"><span style="color:#24292E;">    resolution: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    material: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">PolylineGlowMaterialProperty</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      glowPower: </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//发光强度</span></span>
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
<span class="line"><span style="color:#6A737D;">//基于指定时段内对象设置插值方式</span></span>
<span class="line"><span style="color:#24292E;">Sandcastle.</span><span style="color:#6F42C1;">addToolbarMenu</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&quot;Interpolation: Linear Approximation&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onselect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        entity.position.</span><span style="color:#6F42C1;">setInterpolationOptions</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//设置实体位置属性的插值算法和插值程度</span></span>
<span class="line"><span style="color:#24292E;">          interpolationDegree: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          interpolationAlgorithm: Cesium.LinearApproximation,</span><span style="color:#6A737D;">//线性逼近</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&quot;Interpolation: Lagrange Polynomial Approximation&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onselect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        entity.position.</span><span style="color:#6F42C1;">setInterpolationOptions</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          interpolationDegree: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          interpolationAlgorithm:</span></span>
<span class="line"><span style="color:#24292E;">            Cesium.LagrangePolynomialApproximation, </span><span style="color:#6A737D;">//拉格朗日多项式逼近</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&quot;Interpolation: Hermite Polynomial Approximation&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onselect</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        entity.position.setInte</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">rpolationOptions</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          interpolationDegree: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          interpolationAlgorithm: Cesium.HermitePolynomialApproximation,</span><span style="color:#6A737D;">//埃尔米特多项式逼近</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;interpolationMenu&quot;</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="三、manually-controlled-animation" tabindex="-1">三、Manually controlled animation <a class="header-anchor" href="#三、manually-controlled-animation" aria-label="Permalink to &quot;三、Manually controlled animation&quot;">​</a></h2><p><a href="https://sandcastle.cesium.com/index.html?src=Manually%20Controlled%20Animation.html" target="_blank" rel="noreferrer">https://sandcastle.cesium.com/index.html?src=Manually Controlled Animation.html</a></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">viewer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Viewer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;cesiumContainer&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  shouldAnimate: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Make sure viewer is at the desired time.</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.JulianDate.</span><span style="color:#B392F0;">fromDate</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2018</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">totalSeconds</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.JulianDate.</span><span style="color:#B392F0;">addSeconds</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  start,</span></span>
<span class="line"><span style="color:#E1E4E8;">  totalSeconds,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">JulianDate</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.clock.startTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> start.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.clock.stopTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> stop.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.clock.currentTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> start.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.clock.clockRange </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.ClockRange.</span><span style="color:#79B8FF;">LOOP_STOP</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.timeline.</span><span style="color:#B392F0;">zoomTo</span><span style="color:#E1E4E8;">(start, stop);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Create a path for our model by lerping between two positions.</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">SampledPositionProperty</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">distance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">SampledProperty</span><span style="color:#E1E4E8;">(Number);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">startPosition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian3</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2379556.799372864</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">4665528.205030263</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">3628013.106599678</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">endPosition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian3</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2379603.7074103747</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">4665623.48990283</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">3627860.82704567</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// A velocity vector property will give us the entity&#39;s speed and direction at any given time.</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">velocityVectorProperty</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">VelocityVectorProperty</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  position,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">velocityVector</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian3</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">numberOfSamples</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> prevLocation </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> startPosition;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> totalDistance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> numberOfSamples; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">factor</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> numberOfSamples;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">time</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.JulianDate.</span><span style="color:#B392F0;">addSeconds</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    start,</span></span>
<span class="line"><span style="color:#E1E4E8;">    factor </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> totalSeconds, </span><span style="color:#6A737D;">//s</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">JulianDate</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Lerp using a non-linear factor so that the model accelerates.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">locationFactor</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(factor, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">//非线性，平方</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Cartesian3.</span><span style="color:#B392F0;">lerp</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    startPosition,</span></span>
<span class="line"><span style="color:#E1E4E8;">    endPosition,</span></span>
<span class="line"><span style="color:#E1E4E8;">    locationFactor, </span><span style="color:#6A737D;">//插值百分比，单位时间段内的行走距离逐渐增加</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian3</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  position.</span><span style="color:#B392F0;">addSample</span><span style="color:#E1E4E8;">(time, location);</span></span>
<span class="line"><span style="color:#E1E4E8;">  distance.</span><span style="color:#B392F0;">addSample</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    time,</span></span>
<span class="line"><span style="color:#E1E4E8;">    (totalDistance </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> Cesium.Cartesian3.</span><span style="color:#B392F0;">distance</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      location,</span></span>
<span class="line"><span style="color:#E1E4E8;">      prevLocation</span></span>
<span class="line"><span style="color:#E1E4E8;">    ))  </span><span style="color:#6A737D;">//每段数据包含时间和对应的距离值，</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//如{ time: new Cesium.JulianDate(2459856.6), value: 100.0 }</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  prevLocation </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> location;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">updateSpeedLabel</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  velocityVectorProperty.</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(time, velocityVector);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">metersPerSecond</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.Cartesian3.</span><span style="color:#B392F0;">magnitude</span><span style="color:#E1E4E8;">(velocityVector);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">kmPerHour</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(metersPerSecond </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3.6</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">kmPerHour</span><span style="color:#9ECBFF;">} km/hr\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Add our model.</span></span>
<span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">modelPrimitive</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.scene.primitives.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> Cesium.Model.</span><span style="color:#B392F0;">fromGltfAsync</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      url: </span><span style="color:#9ECBFF;">&quot;../SampleData/models/CesiumMan/Cesium_Man.glb&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      scale: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  modelPrimitive.readyEvent.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    modelPrimitive.activeAnimations.</span><span style="color:#B392F0;">addAll</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      loop: Cesium.ModelAnimationLoop.</span><span style="color:#79B8FF;">REPEAT</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">animationTime</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">duration</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> distance.</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(viewer.clock.currentTime) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> duration; </span><span style="color:#6A737D;">//因为模型本身运行一遍时间固定，这里随着距离越大，速度也就越快</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      multiplier: </span><span style="color:#79B8FF;">0.25</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//模型整体的运行速率为原始0.25倍</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//根据模型的位置和速度属性来更新模型的旋转矩阵，以确保模型随着位置和速度的变化而正确旋转。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rotation</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Matrix3</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  viewer.scene.preUpdate.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">time</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.clock.currentTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pos</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> position.</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(time);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vel</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> velocityVectorProperty.</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(time);</span></span>
<span class="line"><span style="color:#E1E4E8;">    Cesium.Cartesian3.</span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(vel, vel);</span></span>
<span class="line"><span style="color:#E1E4E8;">    Cesium.Transforms.</span><span style="color:#B392F0;">rotationMatrixFromPositionVelocity</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      pos,</span></span>
<span class="line"><span style="color:#E1E4E8;">      vel,</span></span>
<span class="line"><span style="color:#E1E4E8;">      viewer.scene.globe.ellipsoid,</span></span>
<span class="line"><span style="color:#E1E4E8;">      rotation</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    Cesium.Matrix4.</span><span style="color:#B392F0;">fromRotationTranslation</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      rotation,</span></span>
<span class="line"><span style="color:#E1E4E8;">      pos,</span></span>
<span class="line"><span style="color:#E1E4E8;">      modelPrimitive.modelMatrix</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">modelLabel</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.entities.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  position: position,</span></span>
<span class="line"><span style="color:#E1E4E8;">  orientation: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">VelocityOrientationProperty</span><span style="color:#E1E4E8;">(position), </span></span>
<span class="line"><span style="color:#E1E4E8;">  label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">CallbackProperty</span><span style="color:#E1E4E8;">(updateSpeedLabel, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    font: </span><span style="color:#9ECBFF;">&quot;20px sans-serif&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    showBackground: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    distanceDisplayCondition: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">DistanceDisplayCondition</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">100.0</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//显示标志的距离范围，超出不可视</span></span>
<span class="line"><span style="color:#E1E4E8;">    ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    eyeOffset: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian3</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7.2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.trackedEntity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> modelLabel;</span></span>
<span class="line"><span style="color:#E1E4E8;">modelLabel.viewFrom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Cartesian3</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">30.0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10.0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10.0</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">viewer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Viewer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;cesiumContainer&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  shouldAnimate: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Make sure viewer is at the desired time.</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">start</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.JulianDate.</span><span style="color:#6F42C1;">fromDate</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2018</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">totalSeconds</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">stop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.JulianDate.</span><span style="color:#6F42C1;">addSeconds</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  start,</span></span>
<span class="line"><span style="color:#24292E;">  totalSeconds,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">JulianDate</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">viewer.clock.startTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> start.</span><span style="color:#6F42C1;">clone</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">viewer.clock.stopTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> stop.</span><span style="color:#6F42C1;">clone</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">viewer.clock.currentTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> start.</span><span style="color:#6F42C1;">clone</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">viewer.clock.clockRange </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.ClockRange.</span><span style="color:#005CC5;">LOOP_STOP</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">viewer.timeline.</span><span style="color:#6F42C1;">zoomTo</span><span style="color:#24292E;">(start, stop);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Create a path for our model by lerping between two positions.</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">position</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">SampledPositionProperty</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">distance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">SampledProperty</span><span style="color:#24292E;">(Number);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">startPosition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian3</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2379556.799372864</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">4665528.205030263</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">3628013.106599678</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">endPosition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian3</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2379603.7074103747</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">4665623.48990283</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">3627860.82704567</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// A velocity vector property will give us the entity&#39;s speed and direction at any given time.</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">velocityVectorProperty</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">VelocityVectorProperty</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  position,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">velocityVector</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian3</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">numberOfSamples</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> prevLocation </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> startPosition;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> totalDistance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> numberOfSamples; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">factor</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> numberOfSamples;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">time</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.JulianDate.</span><span style="color:#6F42C1;">addSeconds</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    start,</span></span>
<span class="line"><span style="color:#24292E;">    factor </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> totalSeconds, </span><span style="color:#6A737D;">//s</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">JulianDate</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Lerp using a non-linear factor so that the model accelerates.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">locationFactor</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">pow</span><span style="color:#24292E;">(factor, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">//非线性，平方</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Cartesian3.</span><span style="color:#6F42C1;">lerp</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    startPosition,</span></span>
<span class="line"><span style="color:#24292E;">    endPosition,</span></span>
<span class="line"><span style="color:#24292E;">    locationFactor, </span><span style="color:#6A737D;">//插值百分比，单位时间段内的行走距离逐渐增加</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian3</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">  position.</span><span style="color:#6F42C1;">addSample</span><span style="color:#24292E;">(time, location);</span></span>
<span class="line"><span style="color:#24292E;">  distance.</span><span style="color:#6F42C1;">addSample</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    time,</span></span>
<span class="line"><span style="color:#24292E;">    (totalDistance </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> Cesium.Cartesian3.</span><span style="color:#6F42C1;">distance</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      location,</span></span>
<span class="line"><span style="color:#24292E;">      prevLocation</span></span>
<span class="line"><span style="color:#24292E;">    ))  </span><span style="color:#6A737D;">//每段数据包含时间和对应的距离值，</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//如{ time: new Cesium.JulianDate(2459856.6), value: 100.0 }</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">  prevLocation </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> location;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">updateSpeedLabel</span><span style="color:#24292E;">(</span><span style="color:#E36209;">time</span><span style="color:#24292E;">, </span><span style="color:#E36209;">result</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  velocityVectorProperty.</span><span style="color:#6F42C1;">getValue</span><span style="color:#24292E;">(time, velocityVector);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">metersPerSecond</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.Cartesian3.</span><span style="color:#6F42C1;">magnitude</span><span style="color:#24292E;">(velocityVector);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">kmPerHour</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">(metersPerSecond </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3.6</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">kmPerHour</span><span style="color:#032F62;">} km/hr\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Add our model.</span></span>
<span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">modelPrimitive</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.scene.primitives.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> Cesium.Model.</span><span style="color:#6F42C1;">fromGltfAsync</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      url: </span><span style="color:#032F62;">&quot;../SampleData/models/CesiumMan/Cesium_Man.glb&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      scale: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  modelPrimitive.readyEvent.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    modelPrimitive.activeAnimations.</span><span style="color:#6F42C1;">addAll</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      loop: Cesium.ModelAnimationLoop.</span><span style="color:#005CC5;">REPEAT</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">animationTime</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">duration</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> distance.</span><span style="color:#6F42C1;">getValue</span><span style="color:#24292E;">(viewer.clock.currentTime) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> duration; </span><span style="color:#6A737D;">//因为模型本身运行一遍时间固定，这里随着距离越大，速度也就越快</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      multiplier: </span><span style="color:#005CC5;">0.25</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//模型整体的运行速率为原始0.25倍</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//根据模型的位置和速度属性来更新模型的旋转矩阵，以确保模型随着位置和速度的变化而正确旋转。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rotation</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Matrix3</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  viewer.scene.preUpdate.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">time</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.clock.currentTime;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pos</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> position.</span><span style="color:#6F42C1;">getValue</span><span style="color:#24292E;">(time);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vel</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> velocityVectorProperty.</span><span style="color:#6F42C1;">getValue</span><span style="color:#24292E;">(time);</span></span>
<span class="line"><span style="color:#24292E;">    Cesium.Cartesian3.</span><span style="color:#6F42C1;">normalize</span><span style="color:#24292E;">(vel, vel);</span></span>
<span class="line"><span style="color:#24292E;">    Cesium.Transforms.</span><span style="color:#6F42C1;">rotationMatrixFromPositionVelocity</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      pos,</span></span>
<span class="line"><span style="color:#24292E;">      vel,</span></span>
<span class="line"><span style="color:#24292E;">      viewer.scene.globe.ellipsoid,</span></span>
<span class="line"><span style="color:#24292E;">      rotation</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">    Cesium.Matrix4.</span><span style="color:#6F42C1;">fromRotationTranslation</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      rotation,</span></span>
<span class="line"><span style="color:#24292E;">      pos,</span></span>
<span class="line"><span style="color:#24292E;">      modelPrimitive.modelMatrix</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">  window.</span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">modelLabel</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.entities.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  position: position,</span></span>
<span class="line"><span style="color:#24292E;">  orientation: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">VelocityOrientationProperty</span><span style="color:#24292E;">(position), </span></span>
<span class="line"><span style="color:#24292E;">  label: {</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">CallbackProperty</span><span style="color:#24292E;">(updateSpeedLabel, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    font: </span><span style="color:#032F62;">&quot;20px sans-serif&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    showBackground: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    distanceDisplayCondition: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">DistanceDisplayCondition</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">100.0</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">//显示标志的距离范围，超出不可视</span></span>
<span class="line"><span style="color:#24292E;">    ),</span></span>
<span class="line"><span style="color:#24292E;">    eyeOffset: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian3</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7.2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">viewer.trackedEntity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> modelLabel;</span></span>
<span class="line"><span style="color:#24292E;">modelLabel.viewFrom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Cartesian3</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">30.0</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">10.0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10.0</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="四、multi-part-czml" tabindex="-1">四、Multi-part CZML <a class="header-anchor" href="#四、multi-part-czml" aria-label="Permalink to &quot;四、Multi-part CZML&quot;">​</a></h2><p><a href="https://sandcastle.cesium.com/index.html?src=Multi-part%20CZML.html" target="_blank" rel="noreferrer">https://sandcastle.cesium.com/index.html?src=Multi-part CZML.html</a></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">viewer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">Viewer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;cesiumContainer&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  shouldAnimate: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">statusDisplay</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fuelDisplay</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;div&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">czmlPath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../SampleData/&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> vehicleEntity;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Add a blank CzmlDataSource to hold our multi-part entity/entities.</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dataSource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Cesium.</span><span style="color:#B392F0;">CzmlDataSource</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">viewer.dataSources.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(dataSource);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// This demo shows how a single path can be broken up into several CZML streams.</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">partsToLoad</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&quot;MultipartVehicle_part1.czml&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    range: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1500</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    requested: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loaded: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&quot;MultipartVehicle_part2.czml&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    range: [</span><span style="color:#79B8FF;">1500</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    requested: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loaded: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&quot;MultipartVehicle_part3.czml&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    range: [</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4500</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    requested: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loaded: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">updateStatusDisplay</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> msg </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  partsToLoad.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">part</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    msg </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">part</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">} - \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (part.loaded) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Loaded.&lt;br/&gt;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (part.requested) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Loading now...&lt;br/&gt;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Not needed yet.&lt;br/&gt;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  statusDisplay.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> msg;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Helper function to mark a part as requested, and process it into the dataSource.</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">processPart</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">part</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  part.requested </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">updateStatusDisplay</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  dataSource.</span><span style="color:#B392F0;">process</span><span style="color:#E1E4E8;">(czmlPath </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> part.url).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    part.loaded </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">updateStatusDisplay</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Follow the vehicle with the camera.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">viewer.trackedEntity) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      viewer.trackedEntity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vehicleEntity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dataSource.entities.</span><span style="color:#B392F0;">getById</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;Vehicle&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Load the first part up front.</span></span>
<span class="line"><span style="color:#B392F0;">processPart</span><span style="color:#E1E4E8;">(partsToLoad[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Load a new section before the clock naturally gets there.</span></span>
<span class="line"><span style="color:#6A737D;">// Note this can&#39;t predict when a user may fast-forward to it.</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">preloadTimeInSeconds</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">viewer.clock.onTick.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">clock</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// This example uses time offsets from the start to identify which parts need loading.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">timeOffset</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cesium.JulianDate.</span><span style="color:#B392F0;">secondsDifference</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    clock.currentTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">    clock.startTime</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Filter the list of parts to just the ones that need loading right now.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Then, process each part that needs loading.</span></span>
<span class="line"><span style="color:#E1E4E8;">  partsToLoad</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">part</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">part.requested </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">        timeOffset </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> part.range[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> preloadTimeInSeconds </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">        timeOffset </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> part.range[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">part</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">processPart</span><span style="color:#E1E4E8;">(part);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (vehicleEntity) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fuel</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vehicleEntity.properties.fuel_remaining.</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      clock.currentTime</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (Cesium.</span><span style="color:#B392F0;">defined</span><span style="color:#E1E4E8;">(fuel)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      fuelDisplay.textContent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`Fuel: \${</span><span style="color:#E1E4E8;">fuel</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} gal\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Add a reset button, for convenience.</span></span>
<span class="line"><span style="color:#E1E4E8;">Sandcastle.</span><span style="color:#B392F0;">addToolbarButton</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Reset demo&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Put things back to the starting position.</span></span>
<span class="line"><span style="color:#E1E4E8;">  viewer.clock.currentTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewer.clock.startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">  viewer.clock.shouldAnimate </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  partsToLoad.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">part</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    part.requested </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    part.loaded </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  dataSource.entities.</span><span style="color:#B392F0;">removeAll</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">processPart</span><span style="color:#E1E4E8;">(partsToLoad[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Show the status display below the reset button.</span></span>
<span class="line"><span style="color:#E1E4E8;">statusDisplay.style.background </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;rgba(42, 42, 42, 0.7)&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">statusDisplay.style.padding </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;5px 10px&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;toolbar&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(statusDisplay);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Show a multi-part custom property being read from CZML.</span></span>
<span class="line"><span style="color:#E1E4E8;">fuelDisplay.style.background </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;rgba(42, 42, 42, 0.7)&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">fuelDisplay.style.padding </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;5px 10px&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">fuelDisplay.style.marginTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;5px&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;toolbar&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(fuelDisplay);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">viewer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">Viewer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;cesiumContainer&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  shouldAnimate: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">statusDisplay</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fuelDisplay</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">czmlPath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../SampleData/&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> vehicleEntity;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Add a blank CzmlDataSource to hold our multi-part entity/entities.</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dataSource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Cesium.</span><span style="color:#6F42C1;">CzmlDataSource</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">viewer.dataSources.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(dataSource);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// This demo shows how a single path can be broken up into several CZML streams.</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">partsToLoad</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    url: </span><span style="color:#032F62;">&quot;MultipartVehicle_part1.czml&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    range: [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1500</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    requested: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loaded: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    url: </span><span style="color:#032F62;">&quot;MultipartVehicle_part2.czml&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    range: [</span><span style="color:#005CC5;">1500</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    requested: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loaded: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    url: </span><span style="color:#032F62;">&quot;MultipartVehicle_part3.czml&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    range: [</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4500</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    requested: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loaded: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">updateStatusDisplay</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> msg </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  partsToLoad.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">part</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    msg </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">part</span><span style="color:#032F62;">.</span><span style="color:#24292E;">url</span><span style="color:#032F62;">} - \`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (part.loaded) {</span></span>
<span class="line"><span style="color:#24292E;">      msg </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Loaded.&lt;br/&gt;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (part.requested) {</span></span>
<span class="line"><span style="color:#24292E;">      msg </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Loading now...&lt;br/&gt;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      msg </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Not needed yet.&lt;br/&gt;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  statusDisplay.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> msg;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Helper function to mark a part as requested, and process it into the dataSource.</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">processPart</span><span style="color:#24292E;">(</span><span style="color:#E36209;">part</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  part.requested </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">updateStatusDisplay</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  dataSource.</span><span style="color:#6F42C1;">process</span><span style="color:#24292E;">(czmlPath </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> part.url).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    part.loaded </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">updateStatusDisplay</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Follow the vehicle with the camera.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">viewer.trackedEntity) {</span></span>
<span class="line"><span style="color:#24292E;">      viewer.trackedEntity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vehicleEntity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dataSource.entities.</span><span style="color:#6F42C1;">getById</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;Vehicle&quot;</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Load the first part up front.</span></span>
<span class="line"><span style="color:#6F42C1;">processPart</span><span style="color:#24292E;">(partsToLoad[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Load a new section before the clock naturally gets there.</span></span>
<span class="line"><span style="color:#6A737D;">// Note this can&#39;t predict when a user may fast-forward to it.</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">preloadTimeInSeconds</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">viewer.clock.onTick.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">clock</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// This example uses time offsets from the start to identify which parts need loading.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">timeOffset</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cesium.JulianDate.</span><span style="color:#6F42C1;">secondsDifference</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    clock.currentTime,</span></span>
<span class="line"><span style="color:#24292E;">    clock.startTime</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Filter the list of parts to just the ones that need loading right now.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Then, process each part that needs loading.</span></span>
<span class="line"><span style="color:#24292E;">  partsToLoad</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">part</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">part.requested </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">        timeOffset </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> part.range[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> preloadTimeInSeconds </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">        timeOffset </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> part.range[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">part</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">processPart</span><span style="color:#24292E;">(part);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (vehicleEntity) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fuel</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vehicleEntity.properties.fuel_remaining.</span><span style="color:#6F42C1;">getValue</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      clock.currentTime</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (Cesium.</span><span style="color:#6F42C1;">defined</span><span style="color:#24292E;">(fuel)) {</span></span>
<span class="line"><span style="color:#24292E;">      fuelDisplay.textContent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`Fuel: \${</span><span style="color:#24292E;">fuel</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">toFixed</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">2</span><span style="color:#032F62;">)</span><span style="color:#032F62;">} gal\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Add a reset button, for convenience.</span></span>
<span class="line"><span style="color:#24292E;">Sandcastle.</span><span style="color:#6F42C1;">addToolbarButton</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Reset demo&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Put things back to the starting position.</span></span>
<span class="line"><span style="color:#24292E;">  viewer.clock.currentTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewer.clock.startTime;</span></span>
<span class="line"><span style="color:#24292E;">  viewer.clock.shouldAnimate </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  partsToLoad.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">part</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    part.requested </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    part.loaded </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  dataSource.entities.</span><span style="color:#6F42C1;">removeAll</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">processPart</span><span style="color:#24292E;">(partsToLoad[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Show the status display below the reset button.</span></span>
<span class="line"><span style="color:#24292E;">statusDisplay.style.background </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;rgba(42, 42, 42, 0.7)&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">statusDisplay.style.padding </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;5px 10px&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;toolbar&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(statusDisplay);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Show a multi-part custom property being read from CZML.</span></span>
<span class="line"><span style="color:#24292E;">fuelDisplay.style.background </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;rgba(42, 42, 42, 0.7)&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">fuelDisplay.style.padding </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;5px 10px&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">fuelDisplay.style.marginTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;5px&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;toolbar&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(fuelDisplay);</span></span></code></pre></div>`,16),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{C as __pageData,m as default};
