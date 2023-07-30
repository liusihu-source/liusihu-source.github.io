import{_ as s,c as n,o as a,a as l}from"./app.08de8fd9.js";const i=JSON.parse('{"title":"本科毕设 --笔记","description":"","frontmatter":{},"headers":[{"level":2,"title":"登录界面","slug":"登录界面","link":"#登录界面","children":[]},{"level":2,"title":"系统主界面","slug":"系统主界面","link":"#系统主界面","children":[]}],"relativePath":"个人/毕设/本科毕设.md","lastUpdated":1685614265000}'),p={name:"个人/毕设/本科毕设.md"},o=l(`<h1 id="本科毕设-笔记" tabindex="-1">本科毕设 --笔记 <a class="header-anchor" href="#本科毕设-笔记" aria-hidden="true">#</a></h1><p>首先启动了项目，这里我们先看看介绍</p><h2 id="登录界面" tabindex="-1">登录界面 <a class="header-anchor" href="#登录界面" aria-hidden="true">#</a></h2><ul><li>采用vue + element ui搭建系统登录界面 <ul><li>放了个樱花特效，显得好看些 <em><strong>O(∩_∩)O哈哈~</strong></em></li></ul></li><li>用node搭建后台并提供接口</li><li>用户信息user表存放于mysql数据库中</li></ul><h2 id="系统主界面" tabindex="-1">系统主界面 <a class="header-anchor" href="#系统主界面" aria-hidden="true">#</a></h2><ul><li><p>默认加载村庄的三维模型（采用符合Cesium支持的3Dtiles格式，是一种针对流失传输大量3D内容而优化的开放规范，实质是JSON文件）</p><ul><li>村庄模型信息通过Cesiumlab 八叉树方式转换</li><li>并默认支持点击事件查询建筑属性信息</li></ul></li><li><p>主要包括五方面功能</p><ul><li><p>建筑白膜、村庄道路加载移除</p><ul><li><p><code>建筑白膜放到tomcat静态服务器中，道路信息存放于postgis数据库，通过geoserver发布WFS，通过Cesium.GeoJsonDataSource调用</code></p></li><li><p>通过viewer.scene.primitive来添加和移除建筑白膜</p><ul><li><p>记得取消完全删除源</p></li><li><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">viewer.scene.primitives.destroyPrimitives = false1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul></li><li><p>通过viewer.datasource来添加和移除全部道路信息</p><ul><li><p>记得取消完全删除源</p></li><li><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">viewer.dataSources.destroyPrimitives</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul></li></ul></li><li><p>村庄统计信息图表可视化</p><ul><li>村庄的统计信息通过arcmap统计出这些信息</li><li>统计信息存放于mysql数据库</li><li>前端页面调用时，向node后台请求数据，<code>node通过express框架向mysql请求数据并返给前端</code></li><li>前端接收到数据后，<code>通过Echarts实现村庄统计信息图表可视化</code></li></ul></li><li><p>贴地和非贴地长度、面积测量</p><ul><li>贴地长度、面积测量 <ul><li>因为模型有高度，所以添加了贴地测量</li></ul></li><li>普通的非贴地长度、面积测量</li></ul></li><li><p>村庄建筑类型属性查询、定位功能</p><ul><li>通过询问Cesiumlab官方人员，得知通过Cesiumlab转后的模型，没有_selectedTiles内部的每个模型，这里自己通过<code>specialTileset.tileVisible.addEventListener</code>方式记录每个模型瓦片信息</li><li>通过匹配查找的具体模型ID或者类型来找到对应ID，并对其进行渲染</li></ul></li><li><p>村庄内道路导航功能</p><ul><li>主要用到工具包括：<code>PostGIS + Pgrouting + PostGreSQL + GeoServer</code><ul><li>准备工作 <ul><li>首先准备数据，将<code>村庄全部道路数据在arcmap中矢量化并打断</code></li><li>将数据通过postgis bundle插件将矢量数据存入postgis</li><li><code>postgresql来修改矢量表格内容，包括创建起点、终点、各点的经纬度等字段</code></li><li><code>pgrouter来创建拓扑并为字段赋值</code></li><li>geoserver <code>发布sql查询服务，数据传输格式是Geojson</code></li></ul></li><li>功能调用 <ul><li>通过<code>前端确定的起点、终点，传给geoserver，再到postgis中通过pgrouter底层的dijkstra算法来确定两点间最短路径，之后将查询到的结果路径（geojson）传给前台，前台通过Cesium Entity来创建实例并可视化路线</code></li></ul></li></ul></li></ul></li></ul></li></ul><p><code>这些老师可以自行查看</code></p><p>看右下角的图需要换个网，校园网看不到~~ 右下角的图如果有数据，可以模拟人员流动</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">CREATE OR REPLACE FUNCTION </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pgr_fromatob</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tbl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> varchar</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">startx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">starty</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">endx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">endy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8)</span></span>
<span class="line"><span style="color:#A6ACCD;">  RETURNS </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">geometry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> AS $BODY$  </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startLine geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">离起点最近的线 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endLine geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">离终点最近的线 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startTarget integer</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">距离起点最近线的终点</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startSource integer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endSource integer</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">距离终点最近线的起点</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endTarget integer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_statpoint geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">在v_startLine上距离起点最近的点 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endpoint geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">在v_endLine上距离终点最近的点 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">最短路径分析结果</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res_a geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res_b geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res_c geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res_d geometry</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_perStart float</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">v_statpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_perEnd float</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">v_endpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath_se geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">开始到结束</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath_es geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">结束到开始</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">最终结果</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    tempnode float</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">begin</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">查询离起点最近的线 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    execute </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select geom, source, target  from </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">tbl</span><span style="color:#89DDFF;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> where ST_DWithin(geom,ST_Geometryfromtext(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">point(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">         startx </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> starty</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,4326),150)</span></span>
<span class="line"><span style="color:#A6ACCD;">order by </span><span style="color:#82AAFF;">ST_Distance</span><span style="color:#A6ACCD;">(geom</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">ST_GeometryFromText</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#82AAFF;">point</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">|| startx ||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">|| starty ||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4326</span><span style="color:#A6ACCD;">))  limit </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">into v_startLine, v_startSource ,v_startTarget; </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">查询离终点最近的线 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">execute </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select geom, source, target from </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">tbl</span><span style="color:#89DDFF;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> where ST_DWithin(geom,ST_Geometryfromtext(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">point(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> endx </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> endy </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,4326),150)</span></span>
<span class="line"><span style="color:#A6ACCD;">order by </span><span style="color:#82AAFF;">ST_Distance</span><span style="color:#A6ACCD;">(geom</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">ST_GeometryFromText</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#82AAFF;">point</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">|| endx ||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> || endy ||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4326</span><span style="color:#A6ACCD;">))  limit </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">into v_endLine, v_endSource,v_endTarget; </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">如果没找到最近的线，就返回null </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (v_startLine is </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#82AAFF;">or</span><span style="color:#A6ACCD;"> (v_endLine is </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;"> ST_Distance </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">从开始的起点到结束的起点最短路径 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    execute </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">SELECT gid </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> source</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> || tbl ||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startSource </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endSource</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false </span></span>
<span class="line"><span style="color:#A6ACCD;">) a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">edge</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> into v_res ;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">从开始的终点到结束的起点最短路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    execute </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">SELECT gid </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> source</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> || tbl ||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startTarget </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endSource</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false</span></span>
<span class="line"><span style="color:#A6ACCD;">) a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">edge</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> into v_res_b ;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">从开始的起点到结束的终点最短路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    execute </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">SELECT gid </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> source</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> || tbl ||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startSource </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endTarget</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false </span></span>
<span class="line"><span style="color:#A6ACCD;">) a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">edge</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> into v_res_c ;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">从开始的终点到结束的终点最短路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    execute </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">SELECT gid </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> source</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> || tbl ||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startTarget </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endTarget</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false</span></span>
<span class="line"><span style="color:#A6ACCD;">) a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">edge</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> into v_res_d ;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res_b)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">v_res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_res_b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res_c)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">v_res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_res_c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res_d)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">v_res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_res_d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">如果找不到最短路径，就返回null </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(v_res is </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">将v_res</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v_startLine</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v_endLine进行拼接 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">select  </span><span style="color:#82AAFF;">st_linemerge</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">ST_Union</span><span style="color:#A6ACCD;">(array[v_res</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v_startLine</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v_endLine])) into v_res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">select  </span><span style="color:#82AAFF;">ST_LineLocatePoint</span><span style="color:#A6ACCD;">(v_res</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ST_Geometryfromtext</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">point(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> startx </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> starty </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4326</span><span style="color:#A6ACCD;">)) into v_perStart</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">select  </span><span style="color:#82AAFF;">ST_LineLocatePoint</span><span style="color:#A6ACCD;">(v_res</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ST_GeometryFromText</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">point(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> endx </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> endy </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4326</span><span style="color:#A6ACCD;">)) into v_perEnd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(v_perStart </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> v_perEnd) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">tempnode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  v_perStart</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">v_perStart </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_perEnd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">v_perEnd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tempnode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">截取v_res </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">SELECT </span><span style="color:#82AAFF;">ST_LineSubstring</span><span style="color:#A6ACCD;">(v_res</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v_perStart</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v_perEnd) into v_shPath</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> v_shPath</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">$BODY$</span></span>
<span class="line"><span style="color:#A6ACCD;">  LANGUAGE plpgsql VOLATILE STRICT</span></span>
<span class="line"><span style="color:#A6ACCD;">  COST </span><span style="color:#F78C6C;">100</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(c,D,r,y,C,F){return a(),n("div",null,e)}const _=s(p,[["render",t]]);export{i as __pageData,_ as default};
