import{_ as s,c as n,o as a,a as l}from"./app.96efa879.js";const i=JSON.parse('{"title":"Geoserver --\u7B14\u8BB0","description":"","frontmatter":{},"headers":[],"relativePath":"\u670D\u52A1\u5668/geoserver.md"}'),p={name:"\u670D\u52A1\u5668/geoserver.md"},o=l(`<h1 id="geoserver-\u7B14\u8BB0" tabindex="-1">Geoserver --\u7B14\u8BB0 <a class="header-anchor" href="#geoserver-\u7B14\u8BB0" aria-hidden="true">#</a></h1><ul><li><p>\u5BFC\u822A\u9053\u8DEF\u8981\u5148\u6253\u65AD\u76F8\u4EA4\u7EBF</p><ul><li>\u7565\uFF08ArcMap\u62D3\u6251\u64CD\u4F5C\uFF09</li></ul></li><li><p>\u7A7A\u95F4\u6570\u636E\u5E93\u7684\u6269\u5C55\u63D2\u4EF6</p><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION postgis;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION postgis_topology;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION postgis_sfcgal;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION fuzzystrmatch;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION address_standardizer;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION address_standardizer_data_us;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> EXTENSION postgis_tiger_geocoder;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5229\u7528postgis bundle \u5BFC\u5165\u7A7A\u95F4\u6570\u636E</p><ul><li>\u8BB0\u5F97\u5750\u6807\u7CFB\u7684\u9009\u53D6</li></ul></li><li><p>\u81EA\u5B9A\u4E49\u5BFC\u822A\u8DEF\u7EBF\u51FD\u6570</p><ul><li><p>\u914D\u7F6E\u9053\u8DEF\u5C5E\u6027\u8868\u5C5E\u6027\u540D\u53CA\u7C7B\u578B</p><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> road</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">alter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> road </span><span style="color:#F78C6C;">drop</span><span style="color:#A6ACCD;"> column id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> AddGeometryColumn (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">road</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">geom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">4326</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">LINESTRING</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">index</span><span style="color:#A6ACCD;"> gidx_road_geom </span><span style="color:#F78C6C;">on</span><span style="color:#A6ACCD;"> road </span><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> gist(geom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">--\u68C0\u67E5\u65E0\u6548\u7684\u51E0\u4F55\u5BF9\u8C61</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> gid </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> road </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> ST_IsValid(the_geom) </span><span style="color:#F78C6C;">IS</span><span style="color:#A6ACCD;"> FALSE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">update</span><span style="color:#A6ACCD;"> road </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> geom</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">ST_LineMerge(the_geom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">alter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> road </span><span style="color:#F78C6C;">drop</span><span style="color:#A6ACCD;"> column the_geom;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">--\u6DFB\u52A0\u8DEF\u7F51\u5206\u6790\u5FC5\u987B\u7684\u5B57\u6BB5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">alter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> road</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column source </span><span style="color:#F78C6C;">integer</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;">/*\u5F53\u524D\u7EBF\u6BB5\u8D77\u70B9\u8FDE\u63A5\u81F3\u4E0A\u4E00\u7EBF\u6BB5\u7684id*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column </span><span style="color:#F78C6C;">target</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">integer</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;">/*\u5F53\u524D\u7EBF\u6BB5\u7EC8\u70B9\u8FDE\u63A5\u81F3\u4E0B\u4E00\u7EBF\u6BB5\u7684id*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column cost </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;">/*\u6B63\u5411\u6210\u672C*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column cost_time </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;">/*\u6B63\u5411\u6210\u672C\u6240\u9700\u7684\u65F6\u95F4*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column rcost </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;">/*\u53CD\u5411\u6210\u672C*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column rcost_time </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;">/*\u53CD\u5411\u6210\u672C\u6240\u9700\u7684\u65F6\u95F4*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column x1 </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;">/*\u5F53\u524D\u7EBF\u6BB5\u8D77\u70B9\u5750\u6807(x)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column y1 </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;">/*\u5F53\u524D\u7EBF\u6BB5\u8D77\u70B9\u5750\u6807(Y)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column x2 </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;">/*\u5F53\u524D\u7EBF\u6BB5\u7EC8\u70B9\u5750\u6807(x)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column y2 </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;">/*\u5F53\u524D\u7EBF\u6BB5\u7EC8\u70B9\u5750\u6807(y)*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column to_cost </span><span style="color:#C792EA;">double precision</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column rule </span><span style="color:#F78C6C;">text</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> column isolated </span><span style="color:#F78C6C;">integer</span><span style="color:#A6ACCD;">;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  cost  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ST_LengthSpheroid(geom, f.sph)::</span><span style="color:#F78C6C;">integer</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  rcost </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ST_LengthSpheroid(geom, f.sph)::</span><span style="color:#F78C6C;">integer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> base </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> f;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u6570\u636E\u5E93\u901A\u8FC7SQL\u8BED\u53E5\u6D4B\u8BD5\u5BFC\u822A\u51FD\u6570 <strong>pgr_fromatob</strong></p><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#676E95;">---------------------------\u81EA\u5B9A\u4E49\u51FD\u90E8\u5206</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">OR</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">REPLACE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FUNCTION</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pgr_fromatob</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tbl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">varchar</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">startx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">starty</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">endx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">endy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">RETURNS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">geometry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> $BODY$  </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">declare</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startLine </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--\u79BB\u8D77\u70B9\u6700\u8FD1\u7684\u7EBF </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endLine </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--\u79BB\u7EC8\u70B9\u6700\u8FD1\u7684\u7EBF </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startTarget </span><span style="color:#F78C6C;">integer</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--\u8DDD\u79BB\u8D77\u70B9\u6700\u8FD1\u7EBF\u7684\u7EC8\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startSource </span><span style="color:#F78C6C;">integer</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endSource </span><span style="color:#F78C6C;">integer</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--\u8DDD\u79BB\u7EC8\u70B9\u6700\u8FD1\u7EBF\u7684\u8D77\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endTarget </span><span style="color:#F78C6C;">integer</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_statpoint </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--\u5728v_startLine\u4E0A\u8DDD\u79BB\u8D77\u70B9\u6700\u8FD1\u7684\u70B9 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endpoint </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--\u5728v_endLine\u4E0A\u8DDD\u79BB\u7EC8\u70B9\u6700\u8FD1\u7684\u70B9 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--\u6700\u77ED\u8DEF\u5F84\u5206\u6790\u7ED3\u679C</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    v_perStart </span><span style="color:#F78C6C;">float</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--v_statpoint\u5728v_res\u4E0A\u7684\u767E\u5206\u6BD4 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_perEnd </span><span style="color:#F78C6C;">float</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--v_endpoint\u5728v_res\u4E0A\u7684\u767E\u5206\u6BD4 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath_se </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--\u5F00\u59CB\u5230\u7ED3\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath_es </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--\u7ED3\u675F\u5230\u5F00\u59CB</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath </span><span style="color:#F78C6C;">geometry</span><span style="color:#A6ACCD;">;</span><span style="color:#676E95;">--\u6700\u7EC8\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    tempnode </span><span style="color:#F78C6C;">float</span><span style="color:#A6ACCD;">;      </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--\u67E5\u8BE2\u79BB\u8D77\u70B9\u6700\u8FD1\u7684\u7EBF </span></span>
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
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--\u67E5\u8BE2\u79BB\u7EC8\u70B9\u6700\u8FD1\u7684\u7EBF </span></span>
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
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--\u5982\u679C\u6CA1\u627E\u5230\u6700\u8FD1\u7684\u7EBF\uFF0C\u5C31\u8FD4\u56DEnull </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;"> (v_startLine </span><span style="color:#F78C6C;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">or</span><span style="color:#A6ACCD;"> (v_endLine </span><span style="color:#F78C6C;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">then</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;">; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;"> ; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#676E95;">-- ST_Distance </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--\u4ECE\u5F00\u59CB\u7684\u8D77\u70B9\u5230\u7ED3\u675F\u7684\u8D77\u70B9\u6700\u77ED\u8DEF\u5F84 </span></span>
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
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--\u4ECE\u5F00\u59CB\u7684\u7EC8\u70B9\u5230\u7ED3\u675F\u7684\u8D77\u70B9\u6700\u77ED\u8DEF\u5F84</span></span>
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
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--\u4ECE\u5F00\u59CB\u7684\u8D77\u70B9\u5230\u7ED3\u675F\u7684\u7EC8\u70B9\u6700\u77ED\u8DEF\u5F84</span></span>
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
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--\u4ECE\u5F00\u59CB\u7684\u7EC8\u70B9\u5230\u7ED3\u675F\u7684\u7EC8\u70B9\u6700\u77ED\u8DEF\u5F84</span></span>
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
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--\u5982\u679C\u627E\u4E0D\u5230\u6700\u77ED\u8DEF\u5F84\uFF0C\u5C31\u8FD4\u56DEnull </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--if(v_res is null) then </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--    return null; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--end if; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--\u5C06v_res,v_startLine,v_endLine\u8FDB\u884C\u62FC\u63A5 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;">  st_linemerge(ST_Union(array[v_res,v_startLine,v_endLine])) </span><span style="color:#F78C6C;">into</span><span style="color:#A6ACCD;"> v_res;</span></span>
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
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">--\u622A\u53D6v_res </span></span>
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
<span class="line"></span></code></pre></div><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#676E95;">--\u6D4B\u8BD5\u5BFC\u822A</span></span>
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
<span class="line"></span></code></pre></div></li></ul></li><li><p>Geoserver\u8FDE\u63A5PostGre[PostGIS]</p><ul><li>\u901A\u8FC7postgres \u548C \u5BF9\u5E94\u6570\u636E\u5E93\u5BC6\u7801\u8FDE\u63A5 <ul><li>\u9884\u5148\u8BBE\u7F6E\u7A7A\u7684\u5DE5\u4F5C\u533A</li></ul></li><li>\u6DFB\u52A0\u65B0\u7684\u56FE\u5C42\uFF0C\u914D\u7F6E\u5BFC\u822ASQL\u89C6\u56FE <ul><li>SQL\u89C6\u56FE\u4E2D\u6CE8\u610F\u51FD\u6570\u7684\u4F7F\u7528\uFF0C<strong>\u662F\u9700\u8981\u67E5\u627E\u4F7F\u7528\u7684\u8868\u683C\uFF0C\u4E0D\u8981\u5F04\u6DF7</strong></li><li>\u6700\u4E0B\u65B9\u7684\u7C7B\u578B \u9009\u62E9 Geometry\u5373\u53EF</li></ul></li></ul></li></ul>`,2),e=[o];function c(t,C,r,y,D,A){return a(),n("div",null,e)}const E=s(p,[["render",c]]);export{i as __pageData,E as default};
