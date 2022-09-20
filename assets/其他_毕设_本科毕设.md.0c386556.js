import{_ as s,c as n,o as a,a as l}from"./app.6aa74d9a.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u767B\u5F55\u754C\u9762","slug":"\u767B\u5F55\u754C\u9762","link":"#\u767B\u5F55\u754C\u9762","children":[]},{"level":2,"title":"\u7CFB\u7EDF\u4E3B\u754C\u9762","slug":"\u7CFB\u7EDF\u4E3B\u754C\u9762","link":"#\u7CFB\u7EDF\u4E3B\u754C\u9762","children":[]}],"relativePath":"\u5176\u4ED6/\u6BD5\u8BBE/\u672C\u79D1\u6BD5\u8BBE.md"}'),p={name:"\u5176\u4ED6/\u6BD5\u8BBE/\u672C\u79D1\u6BD5\u8BBE.md"},o=l(`<p>\u9996\u5148\u542F\u52A8\u4E86\u9879\u76EE\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5148\u770B\u770B\u4ECB\u7ECD</p><h2 id="\u767B\u5F55\u754C\u9762" tabindex="-1">\u767B\u5F55\u754C\u9762 <a class="header-anchor" href="#\u767B\u5F55\u754C\u9762" aria-hidden="true">#</a></h2><ul><li>\u91C7\u7528vue + element ui\u642D\u5EFA\u7CFB\u7EDF\u767B\u5F55\u754C\u9762 <ul><li>\u653E\u4E86\u4E2A\u6A31\u82B1\u7279\u6548\uFF0C\u663E\u5F97\u597D\u770B\u4E9B <em><strong>O(\u2229_\u2229)O\u54C8\u54C8~</strong></em></li></ul></li><li>\u7528node\u642D\u5EFA\u540E\u53F0\u5E76\u63D0\u4F9B\u63A5\u53E3</li><li>\u7528\u6237\u4FE1\u606Fuser\u8868\u5B58\u653E\u4E8Emysql\u6570\u636E\u5E93\u4E2D</li></ul><h2 id="\u7CFB\u7EDF\u4E3B\u754C\u9762" tabindex="-1">\u7CFB\u7EDF\u4E3B\u754C\u9762 <a class="header-anchor" href="#\u7CFB\u7EDF\u4E3B\u754C\u9762" aria-hidden="true">#</a></h2><ul><li><p>\u9ED8\u8BA4\u52A0\u8F7D\u6751\u5E84\u7684\u4E09\u7EF4\u6A21\u578B\uFF08\u91C7\u7528\u7B26\u5408Cesium\u652F\u6301\u76843Dtiles\u683C\u5F0F\uFF0C\u662F\u4E00\u79CD\u9488\u5BF9\u6D41\u5931\u4F20\u8F93\u5927\u91CF3D\u5185\u5BB9\u800C\u4F18\u5316\u7684\u5F00\u653E\u89C4\u8303\uFF0C\u5B9E\u8D28\u662FJSON\u6587\u4EF6\uFF09</p><ul><li>\u6751\u5E84\u6A21\u578B\u4FE1\u606F\u901A\u8FC7Cesiumlab \u516B\u53C9\u6811\u65B9\u5F0F\u8F6C\u6362</li><li>\u5E76\u9ED8\u8BA4\u652F\u6301\u70B9\u51FB\u4E8B\u4EF6\u67E5\u8BE2\u5EFA\u7B51\u5C5E\u6027\u4FE1\u606F</li></ul></li><li><p>\u4E3B\u8981\u5305\u62EC\u4E94\u65B9\u9762\u529F\u80FD</p><ul><li><p>\u5EFA\u7B51\u767D\u819C\u3001\u6751\u5E84\u9053\u8DEF\u52A0\u8F7D\u79FB\u9664</p><ul><li><p><code>\u5EFA\u7B51\u767D\u819C\u653E\u5230tomcat\u9759\u6001\u670D\u52A1\u5668\u4E2D\uFF0C\u9053\u8DEF\u4FE1\u606F\u5B58\u653E\u4E8Epostgis\u6570\u636E\u5E93\uFF0C\u901A\u8FC7geoserver\u53D1\u5E03WFS\uFF0C\u901A\u8FC7Cesium.GeoJsonDataSource\u8C03\u7528</code></p></li><li><p>\u901A\u8FC7viewer.scene.primitive\u6765\u6DFB\u52A0\u548C\u79FB\u9664\u5EFA\u7B51\u767D\u819C</p><ul><li><p>\u8BB0\u5F97\u53D6\u6D88\u5B8C\u5168\u5220\u9664\u6E90</p></li><li><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">viewer.scene.primitives.destroyPrimitives = false1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul></li><li><p>\u901A\u8FC7viewer.datasource\u6765\u6DFB\u52A0\u548C\u79FB\u9664\u5168\u90E8\u9053\u8DEF\u4FE1\u606F</p><ul><li><p>\u8BB0\u5F97\u53D6\u6D88\u5B8C\u5168\u5220\u9664\u6E90</p></li><li><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">viewer.dataSources.destroyPrimitives</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul></li></ul></li><li><p>\u6751\u5E84\u7EDF\u8BA1\u4FE1\u606F\u56FE\u8868\u53EF\u89C6\u5316</p><ul><li>\u6751\u5E84\u7684\u7EDF\u8BA1\u4FE1\u606F\u901A\u8FC7arcmap\u7EDF\u8BA1\u51FA\u8FD9\u4E9B\u4FE1\u606F</li><li>\u7EDF\u8BA1\u4FE1\u606F\u5B58\u653E\u4E8Emysql\u6570\u636E\u5E93</li><li>\u524D\u7AEF\u9875\u9762\u8C03\u7528\u65F6\uFF0C\u5411node\u540E\u53F0\u8BF7\u6C42\u6570\u636E\uFF0C<code>node\u901A\u8FC7express\u6846\u67B6\u5411mysql\u8BF7\u6C42\u6570\u636E\u5E76\u8FD4\u7ED9\u524D\u7AEF</code></li><li>\u524D\u7AEF\u63A5\u6536\u5230\u6570\u636E\u540E\uFF0C<code>\u901A\u8FC7Echarts\u5B9E\u73B0\u6751\u5E84\u7EDF\u8BA1\u4FE1\u606F\u56FE\u8868\u53EF\u89C6\u5316</code></li></ul></li><li><p>\u8D34\u5730\u548C\u975E\u8D34\u5730\u957F\u5EA6\u3001\u9762\u79EF\u6D4B\u91CF</p><ul><li>\u8D34\u5730\u957F\u5EA6\u3001\u9762\u79EF\u6D4B\u91CF <ul><li>\u56E0\u4E3A\u6A21\u578B\u6709\u9AD8\u5EA6\uFF0C\u6240\u4EE5\u6DFB\u52A0\u4E86\u8D34\u5730\u6D4B\u91CF</li></ul></li><li>\u666E\u901A\u7684\u975E\u8D34\u5730\u957F\u5EA6\u3001\u9762\u79EF\u6D4B\u91CF</li></ul></li><li><p>\u6751\u5E84\u5EFA\u7B51\u7C7B\u578B\u5C5E\u6027\u67E5\u8BE2\u3001\u5B9A\u4F4D\u529F\u80FD</p><ul><li>\u901A\u8FC7\u8BE2\u95EECesiumlab\u5B98\u65B9\u4EBA\u5458\uFF0C\u5F97\u77E5\u901A\u8FC7Cesiumlab\u8F6C\u540E\u7684\u6A21\u578B\uFF0C\u6CA1\u6709_selectedTiles\u5185\u90E8\u7684\u6BCF\u4E2A\u6A21\u578B\uFF0C\u8FD9\u91CC\u81EA\u5DF1\u901A\u8FC7<code>specialTileset.tileVisible.addEventListener</code>\u65B9\u5F0F\u8BB0\u5F55\u6BCF\u4E2A\u6A21\u578B\u74E6\u7247\u4FE1\u606F</li><li>\u901A\u8FC7\u5339\u914D\u67E5\u627E\u7684\u5177\u4F53\u6A21\u578BID\u6216\u8005\u7C7B\u578B\u6765\u627E\u5230\u5BF9\u5E94ID\uFF0C\u5E76\u5BF9\u5176\u8FDB\u884C\u6E32\u67D3</li></ul></li><li><p>\u6751\u5E84\u5185\u9053\u8DEF\u5BFC\u822A\u529F\u80FD</p><ul><li>\u4E3B\u8981\u7528\u5230\u5DE5\u5177\u5305\u62EC\uFF1A<code>PostGIS + Pgrouting + PostGreSQL + GeoServer</code><ul><li>\u51C6\u5907\u5DE5\u4F5C <ul><li>\u9996\u5148\u51C6\u5907\u6570\u636E\uFF0C\u5C06<code>\u6751\u5E84\u5168\u90E8\u9053\u8DEF\u6570\u636E\u5728arcmap\u4E2D\u77E2\u91CF\u5316\u5E76\u6253\u65AD</code></li><li>\u5C06\u6570\u636E\u901A\u8FC7postgis bundle\u63D2\u4EF6\u5C06\u77E2\u91CF\u6570\u636E\u5B58\u5165postgis</li><li><code>postgresql\u6765\u4FEE\u6539\u77E2\u91CF\u8868\u683C\u5185\u5BB9\uFF0C\u5305\u62EC\u521B\u5EFA\u8D77\u70B9\u3001\u7EC8\u70B9\u3001\u5404\u70B9\u7684\u7ECF\u7EAC\u5EA6\u7B49\u5B57\u6BB5</code></li><li><code>pgrouter\u6765\u521B\u5EFA\u62D3\u6251\u5E76\u4E3A\u5B57\u6BB5\u8D4B\u503C</code></li><li>geoserver <code>\u53D1\u5E03sql\u67E5\u8BE2\u670D\u52A1\uFF0C\u6570\u636E\u4F20\u8F93\u683C\u5F0F\u662FGeojson</code></li></ul></li><li>\u529F\u80FD\u8C03\u7528 <ul><li>\u901A\u8FC7<code>\u524D\u7AEF\u786E\u5B9A\u7684\u8D77\u70B9\u3001\u7EC8\u70B9\uFF0C\u4F20\u7ED9geoserver\uFF0C\u518D\u5230postgis\u4E2D\u901A\u8FC7pgrouter\u5E95\u5C42\u7684dijkstra\u7B97\u6CD5\u6765\u786E\u5B9A\u4E24\u70B9\u95F4\u6700\u77ED\u8DEF\u5F84\uFF0C\u4E4B\u540E\u5C06\u67E5\u8BE2\u5230\u7684\u7ED3\u679C\u8DEF\u5F84\uFF08geojson\uFF09\u4F20\u7ED9\u524D\u53F0\uFF0C\u524D\u53F0\u901A\u8FC7Cesium Entity\u6765\u521B\u5EFA\u5B9E\u4F8B\u5E76\u53EF\u89C6\u5316\u8DEF\u7EBF</code></li></ul></li></ul></li></ul></li></ul></li></ul><p><code>\u8FD9\u4E9B\u8001\u5E08\u53EF\u4EE5\u81EA\u884C\u67E5\u770B</code></p><p>\u770B\u53F3\u4E0B\u89D2\u7684\u56FE\u9700\u8981\u6362\u4E2A\u7F51\uFF0C\u6821\u56ED\u7F51\u770B\u4E0D\u5230~~ \u53F3\u4E0B\u89D2\u7684\u56FE\u5982\u679C\u6709\u6570\u636E\uFF0C\u53EF\u4EE5\u6A21\u62DF\u4EBA\u5458\u6D41\u52A8</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">CREATE OR REPLACE FUNCTION </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pgr_fromatob</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tbl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> varchar</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">startx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">starty</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">endx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">endy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> float8)</span></span>
<span class="line"><span style="color:#A6ACCD;">  RETURNS </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">geometry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> AS $BODY$  </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startLine geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">\u79BB\u8D77\u70B9\u6700\u8FD1\u7684\u7EBF </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endLine geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">\u79BB\u7EC8\u70B9\u6700\u8FD1\u7684\u7EBF </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startTarget integer</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">\u8DDD\u79BB\u8D77\u70B9\u6700\u8FD1\u7EBF\u7684\u7EC8\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_startSource integer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endSource integer</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">\u8DDD\u79BB\u7EC8\u70B9\u6700\u8FD1\u7EBF\u7684\u8D77\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endTarget integer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_statpoint geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">\u5728v_startLine\u4E0A\u8DDD\u79BB\u8D77\u70B9\u6700\u8FD1\u7684\u70B9 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_endpoint geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">\u5728v_endLine\u4E0A\u8DDD\u79BB\u7EC8\u70B9\u6700\u8FD1\u7684\u70B9 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_res geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">\u6700\u77ED\u8DEF\u5F84\u5206\u6790\u7ED3\u679C</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    v_perStart float</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">v_statpoint\u5728v_res\u4E0A\u7684\u767E\u5206\u6BD4 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_perEnd float</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">v_endpoint\u5728v_res\u4E0A\u7684\u767E\u5206\u6BD4 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath_se geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">\u5F00\u59CB\u5230\u7ED3\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath_es geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">\u7ED3\u675F\u5230\u5F00\u59CB</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shPath geometry</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">\u6700\u7EC8\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    tempnode float</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">begin</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">\u67E5\u8BE2\u79BB\u8D77\u70B9\u6700\u8FD1\u7684\u7EBF </span></span>
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
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">\u67E5\u8BE2\u79BB\u7EC8\u70B9\u6700\u8FD1\u7684\u7EBF </span></span>
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
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">\u5982\u679C\u6CA1\u627E\u5230\u6700\u8FD1\u7684\u7EBF\uFF0C\u5C31\u8FD4\u56DEnull </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (v_startLine is </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#82AAFF;">or</span><span style="color:#A6ACCD;"> (v_endLine is </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;"> ST_Distance </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">\u4ECE\u5F00\u59CB\u7684\u8D77\u70B9\u5230\u7ED3\u675F\u7684\u8D77\u70B9\u6700\u77ED\u8DEF\u5F84 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    execute </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">SELECT gid </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> source</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> || tbl ||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startSource </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endSource</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false </span></span>
<span class="line"><span style="color:#A6ACCD;">) a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">edge</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> into v_res ;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">\u4ECE\u5F00\u59CB\u7684\u7EC8\u70B9\u5230\u7ED3\u675F\u7684\u8D77\u70B9\u6700\u77ED\u8DEF\u5F84</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    execute </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">SELECT gid </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> source</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> || tbl ||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startTarget </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endSource</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false</span></span>
<span class="line"><span style="color:#A6ACCD;">) a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">edge</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> into v_res_b ;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">\u4ECE\u5F00\u59CB\u7684\u8D77\u70B9\u5230\u7ED3\u675F\u7684\u7EC8\u70B9\u6700\u77ED\u8DEF\u5F84</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    execute </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">SELECT gid </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> source</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> || tbl ||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startSource </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endTarget</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false </span></span>
<span class="line"><span style="color:#A6ACCD;">) a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">edge</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> into v_res_c ;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">\u4ECE\u5F00\u59CB\u7684\u7EC8\u70B9\u5230\u7ED3\u675F\u7684\u7EC8\u70B9\u6700\u77ED\u8DEF\u5F84</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    execute </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SELECT st_linemerge(st_union(b.geom)) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FROM pgr_dijkstra( </span></span>
<span class="line"><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">SELECT gid </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> source</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cost FROM </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> || tbl ||</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_startTarget </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">v_endTarget</span><span style="color:#89DDFF;">||</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ,false</span></span>
<span class="line"><span style="color:#A6ACCD;">) a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> tbl </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> b </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">edge</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gid </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> into v_res_d ;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res_b)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">v_res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_res_b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res_c)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">v_res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_res_c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ST_Length</span><span style="color:#A6ACCD;">(v_res_d)) then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">v_res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_res_d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">\u5982\u679C\u627E\u4E0D\u5230\u6700\u77ED\u8DEF\u5F84\uFF0C\u5C31\u8FD4\u56DEnull </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;">(v_res is </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">\u5C06v_res</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v_startLine</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v_endLine\u8FDB\u884C\u62FC\u63A5 </span></span>
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
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;">(v_perStart </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> v_perEnd) then </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">tempnode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  v_perStart</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">v_perStart </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v_perEnd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">v_perEnd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tempnode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">\u622A\u53D6v_res </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">SELECT </span><span style="color:#82AAFF;">ST_LineSubstring</span><span style="color:#A6ACCD;">(v_res</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v_perStart</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v_perEnd) into v_shPath</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> v_shPath</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">$BODY$</span></span>
<span class="line"><span style="color:#A6ACCD;">  LANGUAGE plpgsql VOLATILE STRICT</span></span>
<span class="line"><span style="color:#A6ACCD;">  COST </span><span style="color:#F78C6C;">100</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function c(t,D,r,y,C,F){return a(),n("div",null,e)}const _=s(p,[["render",c]]);export{i as __pageData,_ as default};
