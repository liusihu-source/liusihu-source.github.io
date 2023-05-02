import{_ as s,c as n,o as a,a as l}from"./app.eb215157.js";const i=JSON.parse('{"title":"Geoserver --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"服务器/geoserver.md","lastUpdated":1667130584000}'),p={name:"服务器/geoserver.md"},o=l(`<h1 id="geoserver-笔记" tabindex="-1">Geoserver --笔记 <a class="header-anchor" href="#geoserver-笔记" aria-hidden="true">#</a></h1><ul><li><p>导航道路要先打断相交线</p><ul><li>略（ArcMap拓扑操作）</li></ul></li><li><p>空间数据库的扩展插件</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION postgis;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION postgis_topology;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION postgis_sfcgal;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION fuzzystrmatch;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION address_standardizer;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION address_standardizer_data_us;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION postgis_tiger_geocoder;</span></span>
<span class="line"></span></code></pre></div></li><li><p>利用postgis bundle 导入空间数据</p><ul><li>记得坐标系的选取</li></ul></li><li><p>自定义导航路线函数</p><ul><li><p>配置道路属性表属性名及类型</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> road</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">alter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> road </span><span style="color:#F78C6C;">drop</span><span style="color:#A6ACCD;"> column id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> AddGeometryColumn (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">road</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">geom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">4326</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">LINESTRING</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">index</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">gidx_road_geom</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">on</span><span style="color:#A6ACCD;"> road </span><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> gist(geom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--检查无效的几何对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> gid </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> road </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> ST_IsValid(the_geom) </span><span style="color:#F78C6C;">IS</span><span style="color:#A6ACCD;"> FALSE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">update</span><span style="color:#A6ACCD;"> road </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> geom</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">ST_LineMerge(the_geom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">alter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> road </span><span style="color:#F78C6C;">drop</span><span style="color:#A6ACCD;"> column the_geom;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--添加路网分析必须的字段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">alter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> road</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column source </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">/*当前线段起点连接至上一线段的id*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column </span><span style="color:#F78C6C;">target</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">/*当前线段终点连接至下一线段的id*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column cost </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">/*正向成本*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column cost_time </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">/*正向成本所需的时间*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column rcost </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">/*反向成本*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column rcost_time </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">/*反向成本所需的时间*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column x1 </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">/*当前线段起点坐标(x)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column y1 </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">/*当前线段起点坐标(Y)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column x2 </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">/*当前线段终点坐标(x)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column y2 </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">/*当前线段终点坐标(y)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column to_cost </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column rule </span><span style="color:#C792EA;">text</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column isolated </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">with</span><span style="color:#A6ACCD;"> base </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SPHEROID[&quot;WGS84&quot;,6378137,298.25728]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::spheroid </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> sph</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">update</span><span style="color:#A6ACCD;"> road </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> x1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> st_x(st_startpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                      y1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> st_y(st_startpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                      x2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> st_x(st_endpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                      y2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> st_y(st_endpoint(geom)),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  cost  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ST_LengthSpheroid(geom, f.sph)::</span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  rcost </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ST_LengthSpheroid(geom, f.sph)::</span><span style="color:#C792EA;">integer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> base </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> f;</span></span>
<span class="line"></span></code></pre></div></li><li><p>数据库通过SQL语句测试导航函数 <strong>pgr_fromatob</strong></p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">---------------------------自定义函部分</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE OR REPLACE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FUNCTION</span><span style="color:#A6ACCD;"> &quot;</span><span style="color:#82AAFF;">public</span><span style="color:#A6ACCD;">&quot;.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pgr_fromatob</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tbl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">startx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">starty</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">endx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">endy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">RETURNS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">geometry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> $BODY$  </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">declare</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startLine </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--离起点最近的线 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endLine </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--离终点最近的线 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startTarget </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--距离起点最近线的终点</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startSource </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endSource </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--距离终点最近线的起点</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endTarget </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_statpoint </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--在v_startLine上距离起点最近的点 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endpoint </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--在v_endLine上距离终点最近的点 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--最短路径分析结果</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res_a </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res_b </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res_c </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res_d </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_perStart </span><span style="color:#F78C6C;">float</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--v_statpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_perEnd </span><span style="color:#F78C6C;">float</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--v_endpoint在v_res上的百分比 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath_se </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--开始到结束</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath_es </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--结束到开始</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;font-style:italic;">--最终结果</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    tempnode </span><span style="color:#F78C6C;">float</span><span style="color:#A6ACCD;">;      </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--查询离起点最近的线 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">execute</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select geom, source, target  from </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">tbl</span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> where ST_DWithin(geom,ST_Geometryfromtext(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">point(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">         startx </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> starty</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,4326),150)</span></span>
<span class="line"><span style="color:#C3E88D;">                            order by ST_Distance(geom,ST_GeometryFromText(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">point(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> startx </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> starty </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,4326))  limit 1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#F78C6C;">into</span><span style="color:#A6ACCD;"> v_startLine, v_startSource ,v_startTarget; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--查询离终点最近的线 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">execute</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select geom, source, target from </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">tbl</span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> where ST_DWithin(geom,ST_Geometryfromtext(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">point(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> endx </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> endy </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,4326),150)</span></span>
<span class="line"><span style="color:#C3E88D;">                            order by ST_Distance(geom,ST_GeometryFromText(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">point(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> endx </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> endy </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,4326))  limit 1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#F78C6C;">into</span><span style="color:#A6ACCD;"> v_endLine, v_endSource,v_endTarget; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--如果没找到最近的线，就返回null </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;"> (v_startLine </span><span style="color:#F78C6C;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">or</span><span style="color:#A6ACCD;"> (v_endLine </span><span style="color:#F78C6C;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">then</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;">; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;"> ; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#676E95;font-style:italic;">-- ST_Distance </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--从开始的起点到结束的起点最短路径 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">execute</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#C3E88D;">    </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">SELECT gid as id, source, target, cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startSource </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endSource</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false </span></span>
<span class="line"><span style="color:#C3E88D;">    ) a, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#C3E88D;">    WHERE a.edge=b.gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">into</span><span style="color:#A6ACCD;"> v_res ;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--从开始的终点到结束的起点最短路径</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">execute</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#C3E88D;">    </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">SELECT gid as id, source, target, cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startTarget </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endSource</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false</span></span>
<span class="line"><span style="color:#C3E88D;">    ) a, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#C3E88D;">    WHERE a.edge=b.gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">into</span><span style="color:#A6ACCD;"> v_res_b ;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--从开始的起点到结束的终点最短路径</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">execute</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#C3E88D;">    </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">SELECT gid as id, source, target, cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startSource </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endTarget</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false </span></span>
<span class="line"><span style="color:#C3E88D;">    ) a, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#C3E88D;">    WHERE a.edge=b.gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">into</span><span style="color:#A6ACCD;"> v_res_c ;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--从开始的终点到结束的终点最短路径</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">execute</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#C3E88D;">    </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">SELECT gid as id, source, target, cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startTarget </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endTarget</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false</span></span>
<span class="line"><span style="color:#C3E88D;">    ) a, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#C3E88D;">    WHERE a.edge=b.gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">into</span><span style="color:#A6ACCD;"> v_res_d ;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;">(ST_Length(v_res) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ST_Length(v_res_b)) </span><span style="color:#F78C6C;">then</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">       v_res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_res_b;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;">(ST_Length(v_res) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ST_Length(v_res_c)) </span><span style="color:#F78C6C;">then</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">       v_res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_res_c;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;">(ST_Length(v_res) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ST_Length(v_res_d)) </span><span style="color:#F78C6C;">then</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">       v_res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_res_d;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">             </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--如果找不到最短路径，就返回null </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--if(v_res is null) then </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--    return null; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--end if; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--将v_res,v_startLine,v_endLine进行拼接 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;">  st_linemerge(ST_Union(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;">[v_res,v_startLine,v_endLine])) </span><span style="color:#F78C6C;">into</span><span style="color:#A6ACCD;"> v_res;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;">  ST_LineLocatePoint(v_res, ST_Geometryfromtext(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">point(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> startx </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> starty </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">4326</span><span style="color:#A6ACCD;">)) </span><span style="color:#F78C6C;">into</span><span style="color:#A6ACCD;"> v_perStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;">  ST_LineLocatePoint(v_res, ST_GeometryFromText(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">point(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> endx </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> endy </span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">4326</span><span style="color:#A6ACCD;">)) </span><span style="color:#F78C6C;">into</span><span style="color:#A6ACCD;"> v_perEnd;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;">(v_perStart </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> v_perEnd) </span><span style="color:#F78C6C;">then</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        tempnode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  v_perStart;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        v_perStart </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_perEnd;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        v_perEnd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tempnode;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">--截取v_res </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> ST_LineSubstring(v_res,v_perStart, v_perEnd) </span><span style="color:#F78C6C;">into</span><span style="color:#A6ACCD;"> v_shPath;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">return</span><span style="color:#A6ACCD;"> v_shPath; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">end</span><span style="color:#A6ACCD;">; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">$BODY$</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">LANGUAGE</span><span style="color:#A6ACCD;"> plpgsql VOLATILE STRICT</span></span>
<span class="line"><span style="color:#A6ACCD;">  COST </span><span style="color:#F78C6C;">100</span></span>
<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">--测试导航</span></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> pgr_createTopology(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">road</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">000001</span><span style="color:#A6ACCD;">, the_geom:</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">geom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, id:</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gid</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, source:</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">source</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">target</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">target</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> pgr_fromatob(</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">road</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">115</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">748654</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">36</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">102071</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">115</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">749094</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">36</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">102726</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span></code></pre></div></li></ul></li><li><p>Geoserver连接PostGre[PostGIS]</p><ul><li>通过postgres 和 对应数据库密码连接 <ul><li>预先设置空的工作区</li></ul></li><li>添加新的图层，配置导航SQL视图 <ul><li>SQL视图中注意函数的使用，<strong>是需要查找使用的表格，不要弄混</strong></li><li>最下方的类型 选择 Geometry即可</li></ul></li></ul></li></ul>`,2),e=[o];function t(c,C,r,y,D,A){return a(),n("div",null,e)}const E=s(p,[["render",t]]);export{i as __pageData,E as default};
