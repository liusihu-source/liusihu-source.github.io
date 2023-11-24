import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const d=JSON.parse('{"title":"本科毕设 --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"个人/个人/本科毕设.md","filePath":"个人/个人/本科毕设.md","lastUpdated":null}'),p={name:"个人/个人/本科毕设.md"},o=l(`<h1 id="本科毕设-笔记" tabindex="-1">本科毕设 --笔记 <a class="header-anchor" href="#本科毕设-笔记" aria-label="Permalink to &quot;本科毕设 --笔记&quot;">​</a></h1><p>首先启动了项目，这里我们先看看介绍</p><h2 id="登录界面" tabindex="-1">登录界面 <a class="header-anchor" href="#登录界面" aria-label="Permalink to &quot;登录界面&quot;">​</a></h2><ul><li>采用vue + element ui搭建系统登录界面 <ul><li>放了个樱花特效，显得好看些 <em><strong>O(∩_∩)O哈哈~</strong></em></li></ul></li><li>用node搭建后台并提供接口</li><li>用户信息user表存放于mysql数据库中</li></ul><h2 id="系统主界面" tabindex="-1">系统主界面 <a class="header-anchor" href="#系统主界面" aria-label="Permalink to &quot;系统主界面&quot;">​</a></h2><ul><li><p>默认加载村庄的三维模型（采用符合Cesium支持的3Dtiles格式，是一种针对流失传输大量3D内容而优化的开放规范，实质是JSON文件）</p><ul><li>村庄模型信息通过Cesiumlab 八叉树方式转换</li><li>并默认支持点击事件查询建筑属性信息</li></ul></li><li><p>主要包括五方面功能</p><ul><li><p>建筑白膜、村庄道路加载移除</p><ul><li><p><code>建筑白膜放到tomcat静态服务器中，道路信息存放于postgis数据库，通过geoserver发布WFS，通过Cesium.GeoJsonDataSource调用</code></p></li><li><p>通过viewer.scene.primitive来添加和移除建筑白膜</p><ul><li><p>记得取消完全删除源</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">viewer.scene.primitives.destroyPrimitives = false1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">viewer.scene.primitives.destroyPrimitives = false1</span></span></code></pre></div></li></ul></li><li><p>通过viewer.datasource来添加和移除全部道路信息</p><ul><li><p>记得取消完全删除源</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">viewer.dataSources.destroyPrimitives</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">viewer.dataSources.destroyPrimitives</span></span></code></pre></div></li></ul></li></ul></li><li><p>村庄统计信息图表可视化</p><ul><li>村庄的统计信息通过arcmap统计出这些信息</li><li>统计信息存放于mysql数据库</li><li>前端页面调用时，向node后台请求数据，<code>node通过express框架向mysql请求数据并返给前端</code></li><li>前端接收到数据后，<code>通过Echarts实现村庄统计信息图表可视化</code></li></ul></li><li><p>贴地和非贴地长度、面积测量</p><ul><li>贴地长度、面积测量 <ul><li>因为模型有高度，所以添加了贴地测量</li></ul></li><li>普通的非贴地长度、面积测量</li></ul></li><li><p>村庄建筑类型属性查询、定位功能</p><ul><li>通过询问Cesiumlab官方人员，得知通过Cesiumlab转后的模型，没有_selectedTiles内部的每个模型，这里自己通过<code>specialTileset.tileVisible.addEventListener</code>方式记录每个模型瓦片信息</li><li>通过匹配查找的具体模型ID或者类型来找到对应ID，并对其进行渲染</li></ul></li><li><p>村庄内道路导航功能</p><ul><li>主要用到工具包括：<code>PostGIS + Pgrouting + PostGreSQL + GeoServer</code><ul><li>准备工作 <ul><li>首先准备数据，将<code>村庄全部道路数据在arcmap中矢量化并打断</code></li><li>将数据通过postgis bundle插件将矢量数据存入postgis</li><li><code>postgresql来修改矢量表格内容，包括创建起点、终点、各点的经纬度等字段</code></li><li><code>pgrouter来创建拓扑并为字段赋值</code></li><li>geoserver <code>发布sql查询服务，数据传输格式是Geojson</code></li></ul></li><li>功能调用 <ul><li>通过<code>前端确定的起点、终点，传给geoserver，再到postgis中通过pgrouter底层的dijkstra算法来确定两点间最短路径，之后将查询到的结果路径（geojson）传给前台，前台通过Cesium Entity来创建实例并可视化路线</code></li></ul></li></ul></li></ul></li></ul></li></ul><p><code>这些老师可以自行查看</code></p><p>看右下角的图需要换个网，校园网看不到~~ 右下角的图如果有数据，可以模拟人员流动</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">OR</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">REPLACE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FUNCTION</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;public&quot;</span><span style="color:#E1E4E8;">.</span><span style="color:#9ECBFF;">&quot;pgr_fromatob&quot;</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;tbl&quot;</span><span style="color:#E1E4E8;"> varchar, </span><span style="color:#9ECBFF;">&quot;startx&quot;</span><span style="color:#E1E4E8;"> float8, </span><span style="color:#9ECBFF;">&quot;starty&quot;</span><span style="color:#E1E4E8;"> float8, </span><span style="color:#9ECBFF;">&quot;endx&quot;</span><span style="color:#E1E4E8;"> float8, </span><span style="color:#9ECBFF;">&quot;endy&quot;</span><span style="color:#E1E4E8;"> float8)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">RETURNS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;public&quot;</span><span style="color:#E1E4E8;">.</span><span style="color:#9ECBFF;">&quot;geometry&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">AS</span><span style="color:#E1E4E8;"> $BODY$  </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_startLine geometry;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">离起点最近的线 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_endLine geometry;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">离终点最近的线 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_startTarget integer;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">距离起点最近线的终点</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_startSource integer;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_endSource integer;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">距离终点最近线的起点</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_endTarget integer;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_statpoint geometry;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">在v_startLine上距离起点最近的点 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_endpoint geometry;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">在v_endLine上距离终点最近的点 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_res geometry;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">最短路径分析结果</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_res_a geometry;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_res_b geometry;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_res_c geometry;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_res_d geometry; </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_perStart float;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">v_statpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_perEnd float;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">v_endpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_shPath_se geometry;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">开始到结束</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_shPath_es geometry;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">结束到开始</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_shPath geometry;</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">最终结果</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    tempnode float;      </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">begin</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">查询离起点最近的线 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    execute </span><span style="color:#9ECBFF;">&#39;select geom, source, target  from &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">tbl</span><span style="color:#F97583;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39; where ST_DWithin(geom,ST_Geometryfromtext(&#39;&#39;point(&#39;</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">         startx </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> starty</span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;)&#39;&#39;,4326),150</span><span style="color:#FDAEB7;font-style:italic;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">order by </span><span style="color:#B392F0;">ST_Distance</span><span style="color:#E1E4E8;">(geom,</span><span style="color:#B392F0;">ST_GeometryFromText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#B392F0;">point</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;|| startx ||&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;|| starty ||&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4326</span><span style="color:#E1E4E8;">))  limit </span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">into v_startLine, v_startSource ,v_startTarget;</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">查询离终点最近的线 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">execute </span><span style="color:#9ECBFF;">&#39;select geom, source, target from &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">tbl</span><span style="color:#F97583;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39; where ST_DWithin(geom,ST_Geometryfromtext(&#39;&#39;point(&#39;</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> endx </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> endy </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;)&#39;&#39;,4326),150</span><span style="color:#FDAEB7;font-style:italic;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">order by </span><span style="color:#B392F0;">ST_Distance</span><span style="color:#E1E4E8;">(geom,</span><span style="color:#B392F0;">ST_GeometryFromText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#B392F0;">point</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;|| endx ||&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; || endy ||&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4326</span><span style="color:#E1E4E8;">))  limit </span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">into v_endLine, v_endSource,v_endTarget;</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">如果没找到最近的线，就返回null </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (v_startLine is </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">or</span><span style="color:#E1E4E8;"> (v_endLine is </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">end </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ; </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> ST_Distance </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">从开始的起点到结束的起点最短路径 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    execute </span><span style="color:#9ECBFF;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;FROM pgr_dijkstra(</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#79B8FF;">SELECT</span><span style="color:#E1E4E8;"> gid </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">, source, target, cost </span><span style="color:#79B8FF;">FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; || tbl ||&#39;&#39;&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_startSource </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_endSource</span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; ,false</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">) a, </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; b</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#79B8FF;">WHERE</span><span style="color:#E1E4E8;"> a.edge</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">b.gid </span><span style="color:#9ECBFF;">&#39; into v_res </span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">从开始的终点到结束的起点最短路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    execute </span><span style="color:#9ECBFF;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;FROM pgr_dijkstra(</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#79B8FF;">SELECT</span><span style="color:#E1E4E8;"> gid </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">, source, target, cost </span><span style="color:#79B8FF;">FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; || tbl ||&#39;&#39;&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_startTarget </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_endSource</span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; ,fals</span><span style="color:#FDAEB7;font-style:italic;">e</span></span>
<span class="line"><span style="color:#E1E4E8;">) a, </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; b</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#79B8FF;">WHERE</span><span style="color:#E1E4E8;"> a.edge</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">b.gid </span><span style="color:#9ECBFF;">&#39; into v_res_b </span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">从开始的起点到结束的终点最短路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    execute </span><span style="color:#9ECBFF;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;FROM pgr_dijkstra(</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#79B8FF;">SELECT</span><span style="color:#E1E4E8;"> gid </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">, source, target, cost </span><span style="color:#79B8FF;">FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; || tbl ||&#39;&#39;&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_startSource </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_endTarget</span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; ,false</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">) a, </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; b</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#79B8FF;">WHERE</span><span style="color:#E1E4E8;"> a.edge</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">b.gid </span><span style="color:#9ECBFF;">&#39; into v_res_c </span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">从开始的终点到结束的终点最短路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    execute </span><span style="color:#9ECBFF;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;FROM pgr_dijkstra(</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#79B8FF;">SELECT</span><span style="color:#E1E4E8;"> gid </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">, source, target, cost </span><span style="color:#79B8FF;">FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; || tbl ||&#39;&#39;&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_startTarget </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_endTarget</span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; ,fals</span><span style="color:#FDAEB7;font-style:italic;">e</span></span>
<span class="line"><span style="color:#E1E4E8;">) a, </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; b</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#79B8FF;">WHERE</span><span style="color:#E1E4E8;"> a.edge</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">b.gid </span><span style="color:#9ECBFF;">&#39; into v_res_d </span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ST_Length</span><span style="color:#E1E4E8;">(v_res) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ST_Length</span><span style="color:#E1E4E8;">(v_res_b)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">v_res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v_res_b;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">end </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ST_Length</span><span style="color:#E1E4E8;">(v_res) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ST_Length</span><span style="color:#E1E4E8;">(v_res_c)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">v_res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v_res_c;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">end </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ST_Length</span><span style="color:#E1E4E8;">(v_res) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ST_Length</span><span style="color:#E1E4E8;">(v_res_d)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">v_res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v_res_d;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">end </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">如果找不到最短路径，就返回null </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">--if</span><span style="color:#E1E4E8;">(v_res is </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">end </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">; </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">将v_res,v_startLine,v_endLine进行拼接 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">select  </span><span style="color:#B392F0;">st_linemerge</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ST_Union</span><span style="color:#E1E4E8;">(array[v_res,v_startLine,v_endLine])) into v_res;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">select  </span><span style="color:#B392F0;">ST_LineLocatePoint</span><span style="color:#E1E4E8;">(v_res, </span><span style="color:#B392F0;">ST_Geometryfromtext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;point(&#39;</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> startx </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> starty </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;)&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4326</span><span style="color:#E1E4E8;">)) into v_perStart;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">select  </span><span style="color:#B392F0;">ST_LineLocatePoint</span><span style="color:#E1E4E8;">(v_res, </span><span style="color:#B392F0;">ST_GeometryFromText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;point(&#39;</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> endx </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> endy </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;)&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4326</span><span style="color:#E1E4E8;">)) into v_perEnd;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(v_perStart </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> v_perEnd) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">tempnode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">  v_perStart;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">v_perStart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v_perEnd;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">v_perEnd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tempnode;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">end </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">截取v_res </span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ST_LineSubstring</span><span style="color:#E1E4E8;">(v_res,v_perStart, v_perEnd) into v_shPath;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> v_shPath; </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">end; </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">$BODY$</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">LANGUAGE</span><span style="color:#E1E4E8;"> plpgsql </span><span style="color:#79B8FF;">VOLATILE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">STRICT</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">COST</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">OR</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">REPLACE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FUNCTION</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;public&quot;</span><span style="color:#24292E;">.</span><span style="color:#032F62;">&quot;pgr_fromatob&quot;</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;tbl&quot;</span><span style="color:#24292E;"> varchar, </span><span style="color:#032F62;">&quot;startx&quot;</span><span style="color:#24292E;"> float8, </span><span style="color:#032F62;">&quot;starty&quot;</span><span style="color:#24292E;"> float8, </span><span style="color:#032F62;">&quot;endx&quot;</span><span style="color:#24292E;"> float8, </span><span style="color:#032F62;">&quot;endy&quot;</span><span style="color:#24292E;"> float8)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">RETURNS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;public&quot;</span><span style="color:#24292E;">.</span><span style="color:#032F62;">&quot;geometry&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">AS</span><span style="color:#24292E;"> $BODY$  </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_startLine geometry;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">离起点最近的线 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_endLine geometry;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">离终点最近的线 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_startTarget integer;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">距离起点最近线的终点</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_startSource integer;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_endSource integer;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">距离终点最近线的起点</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_endTarget integer;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_statpoint geometry;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">在v_startLine上距离起点最近的点 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_endpoint geometry;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">在v_endLine上距离终点最近的点 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_res geometry;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">最短路径分析结果</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_res_a geometry;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_res_b geometry;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_res_c geometry;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_res_d geometry; </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_perStart float;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">v_statpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_perEnd float;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">v_endpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_shPath_se geometry;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">开始到结束</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_shPath_es geometry;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">结束到开始</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_shPath geometry;</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">最终结果</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    tempnode float;      </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">begin</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">查询离起点最近的线 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    execute </span><span style="color:#032F62;">&#39;select geom, source, target  from &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">tbl</span><span style="color:#D73A49;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39; where ST_DWithin(geom,ST_Geometryfromtext(&#39;&#39;point(&#39;</span><span style="color:#D73A49;">||</span><span style="color:#24292E;">         startx </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> starty</span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;)&#39;&#39;,4326),150</span><span style="color:#B31D28;font-style:italic;">)</span></span>
<span class="line"><span style="color:#24292E;">order by </span><span style="color:#6F42C1;">ST_Distance</span><span style="color:#24292E;">(geom,</span><span style="color:#6F42C1;">ST_GeometryFromText</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#6F42C1;">point</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;|| startx ||&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;|| starty ||&#39;</span><span style="color:#24292E;">)</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4326</span><span style="color:#24292E;">))  limit </span><span style="color:#005CC5;">1</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">into v_startLine, v_startSource ,v_startTarget;</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">--</span><span style="color:#24292E;">查询离终点最近的线 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">execute </span><span style="color:#032F62;">&#39;select geom, source, target from &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">tbl</span><span style="color:#D73A49;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39; where ST_DWithin(geom,ST_Geometryfromtext(&#39;&#39;point(&#39;</span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> endx </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> endy </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;)&#39;&#39;,4326),150</span><span style="color:#B31D28;font-style:italic;">)</span></span>
<span class="line"><span style="color:#24292E;">order by </span><span style="color:#6F42C1;">ST_Distance</span><span style="color:#24292E;">(geom,</span><span style="color:#6F42C1;">ST_GeometryFromText</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#6F42C1;">point</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;|| endx ||&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; || endy ||&#39;</span><span style="color:#24292E;">)</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4326</span><span style="color:#24292E;">))  limit </span><span style="color:#005CC5;">1</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">into v_endLine, v_endSource,v_endTarget;</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">--</span><span style="color:#24292E;">如果没找到最近的线，就返回null </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (v_startLine is </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">or</span><span style="color:#24292E;"> (v_endLine is </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ; </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">--</span><span style="color:#24292E;"> ST_Distance </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">从开始的起点到结束的起点最短路径 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    execute </span><span style="color:#032F62;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;FROM pgr_dijkstra(</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;</span><span style="color:#005CC5;">SELECT</span><span style="color:#24292E;"> gid </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">, source, target, cost </span><span style="color:#005CC5;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; || tbl ||&#39;&#39;&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_startSource </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;, &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_endSource</span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; ,false</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#24292E;">) a, </span><span style="color:#032F62;">&#39;</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; b</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#005CC5;">WHERE</span><span style="color:#24292E;"> a.edge</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">b.gid </span><span style="color:#032F62;">&#39; into v_res </span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">从开始的终点到结束的起点最短路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    execute </span><span style="color:#032F62;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;FROM pgr_dijkstra(</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;</span><span style="color:#005CC5;">SELECT</span><span style="color:#24292E;"> gid </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">, source, target, cost </span><span style="color:#005CC5;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; || tbl ||&#39;&#39;&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_startTarget </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;, &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_endSource</span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; ,fals</span><span style="color:#B31D28;font-style:italic;">e</span></span>
<span class="line"><span style="color:#24292E;">) a, </span><span style="color:#032F62;">&#39;</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; b</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#005CC5;">WHERE</span><span style="color:#24292E;"> a.edge</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">b.gid </span><span style="color:#032F62;">&#39; into v_res_b </span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">从开始的起点到结束的终点最短路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    execute </span><span style="color:#032F62;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;FROM pgr_dijkstra(</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;</span><span style="color:#005CC5;">SELECT</span><span style="color:#24292E;"> gid </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">, source, target, cost </span><span style="color:#005CC5;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; || tbl ||&#39;&#39;&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_startSource </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;, &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_endTarget</span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; ,false</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#24292E;">) a, </span><span style="color:#032F62;">&#39;</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; b</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#005CC5;">WHERE</span><span style="color:#24292E;"> a.edge</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">b.gid </span><span style="color:#032F62;">&#39; into v_res_c </span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">从开始的终点到结束的终点最短路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    execute </span><span style="color:#032F62;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;FROM pgr_dijkstra(</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;</span><span style="color:#005CC5;">SELECT</span><span style="color:#24292E;"> gid </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">, source, target, cost </span><span style="color:#005CC5;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; || tbl ||&#39;&#39;&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_startTarget </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;, &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_endTarget</span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; ,fals</span><span style="color:#B31D28;font-style:italic;">e</span></span>
<span class="line"><span style="color:#24292E;">) a, </span><span style="color:#032F62;">&#39;</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; b</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#005CC5;">WHERE</span><span style="color:#24292E;"> a.edge</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">b.gid </span><span style="color:#032F62;">&#39; into v_res_d </span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ST_Length</span><span style="color:#24292E;">(v_res) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ST_Length</span><span style="color:#24292E;">(v_res_b)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">v_res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v_res_b;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ST_Length</span><span style="color:#24292E;">(v_res) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ST_Length</span><span style="color:#24292E;">(v_res_c)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">v_res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v_res_c;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ST_Length</span><span style="color:#24292E;">(v_res) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ST_Length</span><span style="color:#24292E;">(v_res_d)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">v_res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v_res_d;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">--</span><span style="color:#24292E;">如果找不到最短路径，就返回null </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">--if</span><span style="color:#24292E;">(v_res is </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">--</span><span style="color:#24292E;">end </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">; </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">--</span><span style="color:#24292E;">将v_res,v_startLine,v_endLine进行拼接 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">select  </span><span style="color:#6F42C1;">st_linemerge</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ST_Union</span><span style="color:#24292E;">(array[v_res,v_startLine,v_endLine])) into v_res;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">select  </span><span style="color:#6F42C1;">ST_LineLocatePoint</span><span style="color:#24292E;">(v_res, </span><span style="color:#6F42C1;">ST_Geometryfromtext</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;point(&#39;</span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> startx </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> starty </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;)&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4326</span><span style="color:#24292E;">)) into v_perStart;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">select  </span><span style="color:#6F42C1;">ST_LineLocatePoint</span><span style="color:#24292E;">(v_res, </span><span style="color:#6F42C1;">ST_GeometryFromText</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;point(&#39;</span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> endx </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> endy </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;)&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4326</span><span style="color:#24292E;">)) into v_perEnd;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(v_perStart </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> v_perEnd) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">tempnode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">  v_perStart;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">v_perStart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v_perEnd;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">v_perEnd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tempnode;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">--</span><span style="color:#24292E;">截取v_res </span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ST_LineSubstring</span><span style="color:#24292E;">(v_res,v_perStart, v_perEnd) into v_shPath;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> v_shPath; </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end; </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">$BODY$</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">LANGUAGE</span><span style="color:#24292E;"> plpgsql </span><span style="color:#005CC5;">VOLATILE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">STRICT</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">COST</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span></code></pre></div>`,9),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};
