import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const _=JSON.parse('{"title":"Geoserver使用案例 --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"服务器/geoserver其他.md","filePath":"服务器/geoserver其他.md","lastUpdated":null}'),p={name:"服务器/geoserver其他.md"},o=l(`<h1 id="geoserver使用案例-笔记" tabindex="-1">Geoserver使用案例 --笔记 <a class="header-anchor" href="#geoserver使用案例-笔记" aria-label="Permalink to &quot;Geoserver使用案例 --笔记&quot;">​</a></h1><ul><li><p>导航道路要先打断相交线</p><ul><li>略（ArcMap拓扑操作）</li></ul></li><li><p>空间数据库的扩展插件</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> EXTENSION postgis;</span></span>
<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> EXTENSION postgis_topology;</span></span>
<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> EXTENSION postgis_sfcgal;</span></span>
<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> EXTENSION fuzzystrmatch;</span></span>
<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> EXTENSION address_standardizer;</span></span>
<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> EXTENSION address_standardizer_data_us;</span></span>
<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> EXTENSION postgis_tiger_geocoder;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> EXTENSION postgis;</span></span>
<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> EXTENSION postgis_topology;</span></span>
<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> EXTENSION postgis_sfcgal;</span></span>
<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> EXTENSION fuzzystrmatch;</span></span>
<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> EXTENSION address_standardizer;</span></span>
<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> EXTENSION address_standardizer_data_us;</span></span>
<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> EXTENSION postgis_tiger_geocoder;</span></span></code></pre></div></li><li><p>利用postgis bundle 导入空间数据</p><ul><li>记得坐标系的选取</li></ul></li><li><p>自定义导航路线函数</p><ul><li><p>配置道路属性表属性名及类型</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> road</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">alter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">table</span><span style="color:#E1E4E8;"> road </span><span style="color:#F97583;">drop</span><span style="color:#E1E4E8;"> column id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> AddGeometryColumn (</span><span style="color:#9ECBFF;">&#39;road&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;geom&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4326</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;LINESTRING&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">index</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">gidx_road_geom</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">on</span><span style="color:#E1E4E8;"> road </span><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> gist(geom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">--检查无效的几何对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> gid </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> road </span><span style="color:#F97583;">where</span><span style="color:#E1E4E8;"> ST_IsValid(the_geom) </span><span style="color:#F97583;">IS</span><span style="color:#E1E4E8;"> FALSE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">update</span><span style="color:#E1E4E8;"> road </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> geom</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">ST_LineMerge(the_geom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">alter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">table</span><span style="color:#E1E4E8;"> road </span><span style="color:#F97583;">drop</span><span style="color:#E1E4E8;"> column the_geom;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">--添加路网分析必须的字段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">alter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">table</span><span style="color:#E1E4E8;"> road</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column source </span><span style="color:#F97583;">integer</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/*当前线段起点连接至上一线段的id*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column </span><span style="color:#F97583;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">integer</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/*当前线段终点连接至下一线段的id*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column cost </span><span style="color:#F97583;">double precision</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/*正向成本*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column cost_time </span><span style="color:#F97583;">double precision</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/*正向成本所需的时间*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column rcost </span><span style="color:#F97583;">double precision</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/*反向成本*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column rcost_time </span><span style="color:#F97583;">double precision</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/*反向成本所需的时间*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column x1 </span><span style="color:#F97583;">double precision</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/*当前线段起点坐标(x)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column y1 </span><span style="color:#F97583;">double precision</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/*当前线段起点坐标(Y)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column x2 </span><span style="color:#F97583;">double precision</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/*当前线段终点坐标(x)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column y2 </span><span style="color:#F97583;">double precision</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/*当前线段终点坐标(y)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column to_cost </span><span style="color:#F97583;">double precision</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column rule </span><span style="color:#F97583;">text</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">add</span><span style="color:#E1E4E8;"> column isolated </span><span style="color:#F97583;">integer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> base </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;SPHEROID[&quot;WGS84&quot;,6378137,298.25728]&#39;</span><span style="color:#E1E4E8;">::spheroid </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> sph</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">update</span><span style="color:#E1E4E8;"> road </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> x1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> st_x(st_startpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                      y1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> st_y(st_startpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                      x2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> st_x(st_endpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                      y2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> st_y(st_endpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  cost  </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ST_LengthSpheroid(geom, </span><span style="color:#79B8FF;">f</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">sph</span><span style="color:#E1E4E8;">)::</span><span style="color:#F97583;">integer</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  rcost </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ST_LengthSpheroid(geom, </span><span style="color:#79B8FF;">f</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">sph</span><span style="color:#E1E4E8;">)::</span><span style="color:#F97583;">integer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> base </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> f;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">select</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> road</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">alter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">table</span><span style="color:#24292E;"> road </span><span style="color:#D73A49;">drop</span><span style="color:#24292E;"> column id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">select</span><span style="color:#24292E;"> AddGeometryColumn (</span><span style="color:#032F62;">&#39;road&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;geom&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4326</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;LINESTRING&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">create</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">index</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">gidx_road_geom</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">on</span><span style="color:#24292E;"> road </span><span style="color:#D73A49;">using</span><span style="color:#24292E;"> gist(geom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">--检查无效的几何对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">select</span><span style="color:#24292E;"> gid </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> road </span><span style="color:#D73A49;">where</span><span style="color:#24292E;"> ST_IsValid(the_geom) </span><span style="color:#D73A49;">IS</span><span style="color:#24292E;"> FALSE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">update</span><span style="color:#24292E;"> road </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> geom</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">ST_LineMerge(the_geom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">alter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">table</span><span style="color:#24292E;"> road </span><span style="color:#D73A49;">drop</span><span style="color:#24292E;"> column the_geom;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">--添加路网分析必须的字段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">alter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">table</span><span style="color:#24292E;"> road</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column source </span><span style="color:#D73A49;">integer</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/*当前线段起点连接至上一线段的id*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column </span><span style="color:#D73A49;">target</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">integer</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/*当前线段终点连接至下一线段的id*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column cost </span><span style="color:#D73A49;">double precision</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/*正向成本*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column cost_time </span><span style="color:#D73A49;">double precision</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/*正向成本所需的时间*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column rcost </span><span style="color:#D73A49;">double precision</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/*反向成本*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column rcost_time </span><span style="color:#D73A49;">double precision</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/*反向成本所需的时间*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column x1 </span><span style="color:#D73A49;">double precision</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/*当前线段起点坐标(x)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column y1 </span><span style="color:#D73A49;">double precision</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/*当前线段起点坐标(Y)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column x2 </span><span style="color:#D73A49;">double precision</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/*当前线段终点坐标(x)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column y2 </span><span style="color:#D73A49;">double precision</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/*当前线段终点坐标(y)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column to_cost </span><span style="color:#D73A49;">double precision</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column rule </span><span style="color:#D73A49;">text</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">add</span><span style="color:#24292E;"> column isolated </span><span style="color:#D73A49;">integer</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">with</span><span style="color:#24292E;"> base </span><span style="color:#D73A49;">as</span><span style="color:#24292E;">(</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">select</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;SPHEROID[&quot;WGS84&quot;,6378137,298.25728]&#39;</span><span style="color:#24292E;">::spheroid </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> sph</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">) </span><span style="color:#D73A49;">update</span><span style="color:#24292E;"> road </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> x1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> st_x(st_startpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                      y1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> st_y(st_startpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                      x2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> st_x(st_endpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                      y2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> st_y(st_endpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  cost  </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ST_LengthSpheroid(geom, </span><span style="color:#005CC5;">f</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">sph</span><span style="color:#24292E;">)::</span><span style="color:#D73A49;">integer</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  rcost </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ST_LengthSpheroid(geom, </span><span style="color:#005CC5;">f</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">sph</span><span style="color:#24292E;">)::</span><span style="color:#D73A49;">integer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> base </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> f;</span></span></code></pre></div></li><li><p>数据库通过SQL语句测试导航函数 <strong>pgr_fromatob</strong></p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">---------------------------自定义函部分</span></span>
<span class="line"><span style="color:#F97583;">CREATE OR REPLACE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FUNCTION</span><span style="color:#E1E4E8;"> &quot;</span><span style="color:#B392F0;">public</span><span style="color:#E1E4E8;">&quot;.</span><span style="color:#9ECBFF;">&quot;pgr_fromatob&quot;</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;tbl&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">varchar</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;startx&quot;</span><span style="color:#E1E4E8;"> float8, </span><span style="color:#9ECBFF;">&quot;starty&quot;</span><span style="color:#E1E4E8;"> float8, </span><span style="color:#9ECBFF;">&quot;endx&quot;</span><span style="color:#E1E4E8;"> float8, </span><span style="color:#9ECBFF;">&quot;endy&quot;</span><span style="color:#E1E4E8;"> float8)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">RETURNS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;public&quot;</span><span style="color:#E1E4E8;">.</span><span style="color:#9ECBFF;">&quot;geometry&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> $BODY$  </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_startLine </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--离起点最近的线 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_endLine </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--离终点最近的线 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_startTarget </span><span style="color:#F97583;">integer</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--距离起点最近线的终点</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_startSource </span><span style="color:#F97583;">integer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_endSource </span><span style="color:#F97583;">integer</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--距离终点最近线的起点</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_endTarget </span><span style="color:#F97583;">integer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_statpoint </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--在v_startLine上距离起点最近的点 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_endpoint </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--在v_endLine上距离终点最近的点 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_res </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--最短路径分析结果</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_res_a </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_res_b </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_res_c </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_res_d </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">; </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_perStart </span><span style="color:#F97583;">float</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--v_statpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_perEnd </span><span style="color:#F97583;">float</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--v_endpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_shPath_se </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--开始到结束</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_shPath_es </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--结束到开始</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    v_shPath </span><span style="color:#F97583;">geometry</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">--最终结果</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    tempnode </span><span style="color:#F97583;">float</span><span style="color:#E1E4E8;">;      </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">begin</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--查询离起点最近的线 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">execute</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;select geom, source, target  from &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">tbl</span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#9ECBFF;">&#39; where ST_DWithin(geom,ST_Geometryfromtext(&#39;&#39;point(&#39;</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">         startx </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> starty</span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;)&#39;&#39;,4326),150)</span></span>
<span class="line"><span style="color:#9ECBFF;">                            order by ST_Distance(geom,ST_GeometryFromText(&#39;&#39;point(&#39;</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> startx </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> starty </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;)&#39;&#39;,4326))  limit 1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#F97583;">into</span><span style="color:#E1E4E8;"> v_startLine, v_startSource ,v_startTarget; </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--查询离终点最近的线 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">execute</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;select geom, source, target from &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">tbl</span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#9ECBFF;">&#39; where ST_DWithin(geom,ST_Geometryfromtext(&#39;&#39;point(&#39;</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> endx </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> endy </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;)&#39;&#39;,4326),150)</span></span>
<span class="line"><span style="color:#9ECBFF;">                            order by ST_Distance(geom,ST_GeometryFromText(&#39;&#39;point(&#39;</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> endx </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> endy </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;)&#39;&#39;,4326))  limit 1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#F97583;">into</span><span style="color:#E1E4E8;"> v_endLine, v_endSource,v_endTarget; </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--如果没找到最近的线，就返回null </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (v_startLine </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">null</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">or</span><span style="color:#E1E4E8;"> (v_endLine </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">null</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">then</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">null</span><span style="color:#E1E4E8;">; </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">end</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ; </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">-- ST_Distance </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--从开始的起点到结束的起点最短路径 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">execute</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;&#39;SELECT gid as id, source, target, cost FROM &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;&#39;&#39;,&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_startSource </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_endSource</span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; ,false </span></span>
<span class="line"><span style="color:#9ECBFF;">    ) a, &#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; b </span></span>
<span class="line"><span style="color:#9ECBFF;">    WHERE a.edge=b.gid &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">into</span><span style="color:#E1E4E8;"> v_res ;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--从开始的终点到结束的起点最短路径</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">execute</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;&#39;SELECT gid as id, source, target, cost FROM &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;&#39;&#39;,&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_startTarget </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_endSource</span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; ,false</span></span>
<span class="line"><span style="color:#9ECBFF;">    ) a, &#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; b </span></span>
<span class="line"><span style="color:#9ECBFF;">    WHERE a.edge=b.gid &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">into</span><span style="color:#E1E4E8;"> v_res_b ;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--从开始的起点到结束的终点最短路径</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">execute</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;&#39;SELECT gid as id, source, target, cost FROM &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;&#39;&#39;,&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_startSource </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_endTarget</span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; ,false </span></span>
<span class="line"><span style="color:#9ECBFF;">    ) a, &#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; b </span></span>
<span class="line"><span style="color:#9ECBFF;">    WHERE a.edge=b.gid &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">into</span><span style="color:#E1E4E8;"> v_res_c ;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--从开始的终点到结束的终点最短路径</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">execute</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;&#39;SELECT gid as id, source, target, cost FROM &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;&#39;&#39;,&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_startTarget </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">v_endTarget</span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; ,false</span></span>
<span class="line"><span style="color:#9ECBFF;">    ) a, &#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tbl </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; b </span></span>
<span class="line"><span style="color:#9ECBFF;">    WHERE a.edge=b.gid &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">into</span><span style="color:#E1E4E8;"> v_res_d ;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(ST_Length(v_res) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> ST_Length(v_res_b)) </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">       v_res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v_res_b;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">end</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(ST_Length(v_res) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> ST_Length(v_res_c)) </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">       v_res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v_res_c;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">end</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(ST_Length(v_res) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> ST_Length(v_res_d)) </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">       v_res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v_res_d;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">end</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">             </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--如果找不到最短路径，就返回null </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--if(v_res is null) then </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--    return null; </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--end if; </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--将v_res,v_startLine,v_endLine进行拼接 </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">select</span><span style="color:#E1E4E8;">  st_linemerge(ST_Union(</span><span style="color:#F97583;">array</span><span style="color:#E1E4E8;">[v_res,v_startLine,v_endLine])) </span><span style="color:#F97583;">into</span><span style="color:#E1E4E8;"> v_res;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">select</span><span style="color:#E1E4E8;">  ST_LineLocatePoint(v_res, ST_Geometryfromtext(</span><span style="color:#9ECBFF;">&#39;point(&#39;</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> startx </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> starty </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;)&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4326</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">into</span><span style="color:#E1E4E8;"> v_perStart;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">select</span><span style="color:#E1E4E8;">  ST_LineLocatePoint(v_res, ST_GeometryFromText(</span><span style="color:#9ECBFF;">&#39;point(&#39;</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> endx </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> endy </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;">&#39;)&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4326</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">into</span><span style="color:#E1E4E8;"> v_perEnd;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(v_perStart </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> v_perEnd) </span><span style="color:#F97583;">then</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        tempnode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">  v_perStart;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        v_perStart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v_perEnd;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        v_perEnd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tempnode;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">end</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">--截取v_res </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> ST_LineSubstring(v_res,v_perStart, v_perEnd) </span><span style="color:#F97583;">into</span><span style="color:#E1E4E8;"> v_shPath;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> v_shPath; </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">end</span><span style="color:#E1E4E8;">; </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">$BODY$</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">LANGUAGE</span><span style="color:#E1E4E8;"> plpgsql VOLATILE STRICT</span></span>
<span class="line"><span style="color:#E1E4E8;">  COST </span><span style="color:#79B8FF;">100</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">---------------------------自定义函部分</span></span>
<span class="line"><span style="color:#D73A49;">CREATE OR REPLACE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FUNCTION</span><span style="color:#24292E;"> &quot;</span><span style="color:#6F42C1;">public</span><span style="color:#24292E;">&quot;.</span><span style="color:#032F62;">&quot;pgr_fromatob&quot;</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;tbl&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">varchar</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;startx&quot;</span><span style="color:#24292E;"> float8, </span><span style="color:#032F62;">&quot;starty&quot;</span><span style="color:#24292E;"> float8, </span><span style="color:#032F62;">&quot;endx&quot;</span><span style="color:#24292E;"> float8, </span><span style="color:#032F62;">&quot;endy&quot;</span><span style="color:#24292E;"> float8)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">RETURNS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;public&quot;</span><span style="color:#24292E;">.</span><span style="color:#032F62;">&quot;geometry&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> $BODY$  </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_startLine </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--离起点最近的线 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_endLine </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--离终点最近的线 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_startTarget </span><span style="color:#D73A49;">integer</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--距离起点最近线的终点</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_startSource </span><span style="color:#D73A49;">integer</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_endSource </span><span style="color:#D73A49;">integer</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--距离终点最近线的起点</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_endTarget </span><span style="color:#D73A49;">integer</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_statpoint </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--在v_startLine上距离起点最近的点 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_endpoint </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--在v_endLine上距离终点最近的点 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_res </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--最短路径分析结果</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_res_a </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_res_b </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_res_c </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_res_d </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">; </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_perStart </span><span style="color:#D73A49;">float</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--v_statpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_perEnd </span><span style="color:#D73A49;">float</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--v_endpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_shPath_se </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--开始到结束</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_shPath_es </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--结束到开始</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    v_shPath </span><span style="color:#D73A49;">geometry</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">--最终结果</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    tempnode </span><span style="color:#D73A49;">float</span><span style="color:#24292E;">;      </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">begin</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--查询离起点最近的线 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">execute</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;select geom, source, target  from &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">tbl</span><span style="color:#D73A49;">||</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#032F62;">&#39; where ST_DWithin(geom,ST_Geometryfromtext(&#39;&#39;point(&#39;</span><span style="color:#D73A49;">||</span><span style="color:#24292E;">         startx </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> starty</span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;)&#39;&#39;,4326),150)</span></span>
<span class="line"><span style="color:#032F62;">                            order by ST_Distance(geom,ST_GeometryFromText(&#39;&#39;point(&#39;</span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> startx </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> starty </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;)&#39;&#39;,4326))  limit 1&#39;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#D73A49;">into</span><span style="color:#24292E;"> v_startLine, v_startSource ,v_startTarget; </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--查询离终点最近的线 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">execute</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;select geom, source, target from &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">tbl</span><span style="color:#D73A49;">||</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#032F62;">&#39; where ST_DWithin(geom,ST_Geometryfromtext(&#39;&#39;point(&#39;</span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> endx </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> endy </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;)&#39;&#39;,4326),150)</span></span>
<span class="line"><span style="color:#032F62;">                            order by ST_Distance(geom,ST_GeometryFromText(&#39;&#39;point(&#39;</span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> endx </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> endy </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;)&#39;&#39;,4326))  limit 1&#39;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#D73A49;">into</span><span style="color:#24292E;"> v_endLine, v_endSource,v_endTarget; </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--如果没找到最近的线，就返回null </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (v_startLine </span><span style="color:#D73A49;">is</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">or</span><span style="color:#24292E;"> (v_endLine </span><span style="color:#D73A49;">is</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">then</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">null</span><span style="color:#24292E;">; </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">end</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ; </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">-- ST_Distance </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--从开始的起点到结束的起点最短路径 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">execute</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#032F62;">    &#39;&#39;SELECT gid as id, source, target, cost FROM &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;&#39;&#39;,&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_startSource </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;, &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_endSource</span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; ,false </span></span>
<span class="line"><span style="color:#032F62;">    ) a, &#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; b </span></span>
<span class="line"><span style="color:#032F62;">    WHERE a.edge=b.gid &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">into</span><span style="color:#24292E;"> v_res ;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--从开始的终点到结束的起点最短路径</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">execute</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#032F62;">    &#39;&#39;SELECT gid as id, source, target, cost FROM &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;&#39;&#39;,&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_startTarget </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;, &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_endSource</span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; ,false</span></span>
<span class="line"><span style="color:#032F62;">    ) a, &#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; b </span></span>
<span class="line"><span style="color:#032F62;">    WHERE a.edge=b.gid &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">into</span><span style="color:#24292E;"> v_res_b ;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--从开始的起点到结束的终点最短路径</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">execute</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#032F62;">    &#39;&#39;SELECT gid as id, source, target, cost FROM &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;&#39;&#39;,&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_startSource </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;, &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_endTarget</span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; ,false </span></span>
<span class="line"><span style="color:#032F62;">    ) a, &#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; b </span></span>
<span class="line"><span style="color:#032F62;">    WHERE a.edge=b.gid &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">into</span><span style="color:#24292E;"> v_res_c ;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--从开始的终点到结束的终点最短路径</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">execute</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;SELECT st_linemerge(st_union(b.geom)) &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#032F62;">    &#39;&#39;SELECT gid as id, source, target, cost FROM &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;&#39;&#39;,&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_startTarget </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;, &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;">v_endTarget</span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; ,false</span></span>
<span class="line"><span style="color:#032F62;">    ) a, &#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> tbl </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; b </span></span>
<span class="line"><span style="color:#032F62;">    WHERE a.edge=b.gid &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">into</span><span style="color:#24292E;"> v_res_d ;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(ST_Length(v_res) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> ST_Length(v_res_b)) </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">       v_res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v_res_b;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">end</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(ST_Length(v_res) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> ST_Length(v_res_c)) </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">       v_res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v_res_c;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">end</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(ST_Length(v_res) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> ST_Length(v_res_d)) </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">       v_res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v_res_d;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">end</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">             </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--如果找不到最短路径，就返回null </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--if(v_res is null) then </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--    return null; </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--end if; </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--将v_res,v_startLine,v_endLine进行拼接 </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">select</span><span style="color:#24292E;">  st_linemerge(ST_Union(</span><span style="color:#D73A49;">array</span><span style="color:#24292E;">[v_res,v_startLine,v_endLine])) </span><span style="color:#D73A49;">into</span><span style="color:#24292E;"> v_res;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">select</span><span style="color:#24292E;">  ST_LineLocatePoint(v_res, ST_Geometryfromtext(</span><span style="color:#032F62;">&#39;point(&#39;</span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> startx </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> starty </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;)&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4326</span><span style="color:#24292E;">)) </span><span style="color:#D73A49;">into</span><span style="color:#24292E;"> v_perStart;</span></span>
<span class="line"><span style="color:#24292E;">		</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">select</span><span style="color:#24292E;">  ST_LineLocatePoint(v_res, ST_GeometryFromText(</span><span style="color:#032F62;">&#39;point(&#39;</span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> endx </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> endy </span><span style="color:#D73A49;">||</span><span style="color:#032F62;">&#39;)&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4326</span><span style="color:#24292E;">)) </span><span style="color:#D73A49;">into</span><span style="color:#24292E;"> v_perEnd;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(v_perStart </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> v_perEnd) </span><span style="color:#D73A49;">then</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        tempnode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">  v_perStart;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        v_perStart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v_perEnd;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        v_perEnd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tempnode;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">end</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">--截取v_res </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> ST_LineSubstring(v_res,v_perStart, v_perEnd) </span><span style="color:#D73A49;">into</span><span style="color:#24292E;"> v_shPath;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> v_shPath; </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">end</span><span style="color:#24292E;">; </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">$BODY$</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">LANGUAGE</span><span style="color:#24292E;"> plpgsql VOLATILE STRICT</span></span>
<span class="line"><span style="color:#24292E;">  COST </span><span style="color:#005CC5;">100</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">--测试导航</span></span>
<span class="line"><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> pgr_createTopology(</span><span style="color:#9ECBFF;">&#39;road&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">000001</span><span style="color:#E1E4E8;">, the_geom:</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;geom&#39;</span><span style="color:#E1E4E8;">, id:</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;gid&#39;</span><span style="color:#E1E4E8;">, source:</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;source&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">target</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;target&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> pgr_fromatob(</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">&#39;road&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">115</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">748654</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">36</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">102071</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">115</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">749094</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">36</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">102726</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">--测试导航</span></span>
<span class="line"><span style="color:#D73A49;">select</span><span style="color:#24292E;"> pgr_createTopology(</span><span style="color:#032F62;">&#39;road&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">000001</span><span style="color:#24292E;">, the_geom:</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;geom&#39;</span><span style="color:#24292E;">, id:</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;gid&#39;</span><span style="color:#24292E;">, source:</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;source&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">target</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;target&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> pgr_fromatob(</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">&#39;road&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">115</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">748654</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">36</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">102071</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">115</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">749094</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">36</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">102726</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div></li></ul></li><li><p>Geoserver连接PostGre[PostGIS]</p><ul><li>通过postgres 和 对应数据库密码连接 <ul><li>预先设置空的工作区</li></ul></li><li>添加新的图层，配置导航SQL视图 <ul><li>SQL视图中注意函数的使用，<strong>是需要查找使用的表格，不要弄混</strong></li><li>最下方的类型 选择 Geometry即可</li></ul></li></ul></li></ul>`,2),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{_ as __pageData,A as default};
