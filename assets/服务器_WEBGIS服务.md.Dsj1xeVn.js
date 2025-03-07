import{_ as e,c as d,a2 as r,o as a}from"./chunks/framework.BQmytedh.js";const p=JSON.parse('{"title":"OCG --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"服务器/WEBGIS服务.md","filePath":"服务器/WEBGIS服务.md","lastUpdated":null}'),s={name:"服务器/WEBGIS服务.md"};function i(n,t,o,l,h,c){return a(),d("div",null,t[0]||(t[0]=[r('<h1 id="ocg-笔记" tabindex="-1">OCG --笔记 <a class="header-anchor" href="#ocg-笔记" aria-label="Permalink to &quot;OCG --笔记&quot;">​</a></h1><p><code>OGC </code>全称是开放地理空间信息联盟(Open Geospatial Consortium),是一个非盈利的<a href="https://baike.baidu.com/item/%E5%9B%BD%E9%99%85%E6%A0%87%E5%87%86%E7%BB%84%E7%BB%87/6039607" target="_blank" rel="noreferrer">国际标准组织</a>，它制定了数据和服务的一系列标准，GIS厂商按照这个标准进行开发可保证空间数据的互操作。</p><h2 id="wms" tabindex="-1">WMS <a class="header-anchor" href="#wms" aria-label="Permalink to &quot;WMS&quot;">​</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>Web Map Service（网络地图服务），简称WMS，该规范定义了Web客户端从网络地图服务器获取地图的接口标准。这些地图通常用GIF、JPEG或PNG等图像格式，或者SVG、KML、VML和WebCGM等矢量图形格式来表现。使用者通过指定的参数获取相应的地图图片。</p><h3 id="服务操作列表" tabindex="-1">服务操作列表 <a class="header-anchor" href="#服务操作列表" aria-label="Permalink to &quot;服务操作列表&quot;">​</a></h3><p>WMS实现规范由三个基础性操作协议(GetCapabilities，GetMap和GetFeatureInfo)组成，这些协议共同构成了利用WMS创建和叠加显示不同来源的远程异构地图服务的基础。</p><table tabindex="0"><thead><tr><th style="text-align:center;"><strong>操作</strong></th><th><strong>实现要求</strong></th><th style="text-align:center;"><strong>描述</strong></th></tr></thead><tbody><tr><td style="text-align:center;">GetCapabilities</td><td>强制实现</td><td style="text-align:center;">获取<code>WMS</code>的能力文档（即元数据文档），里面包含服务的所有信息</td></tr><tr><td style="text-align:center;">GetMap</td><td>强制实现</td><td style="text-align:center;">获取地图图片。该操作根据客户端发出的请求参数在服务端进行检索，服务器端返回一个地图图像，其地理空间参数和大小参数是已经明确定义的，返回的地图图像可以是GIF、JPEG、PNG或SVG格式。</td></tr><tr><td style="text-align:center;">GetFeatureInfo</td><td>选择实现</td><td style="text-align:center;">该操作根据用户所请求的X、Y坐标或感兴趣的图层，返回地图上某些特殊要素的信息，信息以HTML，GML或ASCII的格式表示。</td></tr></tbody></table><h4 id="getcapabilities参数" tabindex="-1">GetCapabilities参数 <a class="header-anchor" href="#getcapabilities参数" aria-label="Permalink to &quot;GetCapabilities参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th><strong>参数名称</strong></th><th><strong>参数个数</strong></th><th><strong>参数类型和值</strong></th></tr></thead><tbody><tr><td>service</td><td>1个(必选)</td><td>字符类型，服务类型值为“WMS”</td></tr><tr><td>request</td><td>1个(必选)</td><td>字符类型，请求的操作名称，值为“GetCapabilities”</td></tr><tr><td>version</td><td>0或1个(可选)</td><td>字符类型，值为请求的WMS的版本号</td></tr><tr><td>format</td><td>0或1个(可选)</td><td>MIME（媒体类型）类型，值为服务元数据的输出格式</td></tr><tr><td>updateSequence</td><td>0或1个(可选)</td><td>字符类型，可取的值有none、any、equal、lower、higher，用来表示缓存数据更新的方式</td></tr></tbody></table><h4 id="getmap参数" tabindex="-1">GetMap参数 <a class="header-anchor" href="#getmap参数" aria-label="Permalink to &quot;GetMap参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th><strong>参数名称</strong></th><th><strong>参数个数</strong></th><th><strong>参数类型和值</strong></th></tr></thead><tbody><tr><td>service</td><td>1个(必选)</td><td>字符类型，服务类型标识值为“WMS”</td></tr><tr><td>request</td><td>1个(必选)</td><td>字符类型，值为“GetMap”</td></tr><tr><td>version</td><td>1个(必选)</td><td>字符类型，值为请求的WMS的版本号</td></tr><tr><td>layers</td><td>1个(必选)</td><td>字符类型，值为一个或多个地图图层列表，多个图层之间用”,”隔开</td></tr><tr><td>styles</td><td>1个(必选)</td><td>字符类型，值为请求图层的地图渲染样式</td></tr><tr><td>CRS</td><td>1个(必选)</td><td>字符类型，值为坐标参照系统</td></tr><tr><td>BBOX</td><td>1个(必选)</td><td>Wkt格式，值为某个CRS下的地图边界范围的坐标序列</td></tr><tr><td>width</td><td>1个(必选)</td><td>整型类型，值为地图图片的像素宽度</td></tr><tr><td>height</td><td>1个(必选)</td><td>整型类型，值为地图图片的像素高度</td></tr><tr><td>format</td><td>1个(必选)</td><td>字符类型，值为地图的输出格式</td></tr><tr><td>transparent</td><td>0或1个(可选)</td><td>字符类型，值为true或者false，用来表示地图图层是否透明(默认情况下是不透明的)</td></tr><tr><td>bgcolor</td><td>0或1个(可选)</td><td>值为十六进制的RGB值，表示地图的背景颜色</td></tr><tr><td>exceptions</td><td>0或1个(可选)</td><td>值为WMS的异常信息报告的格式(默认情况下是XML格式)</td></tr><tr><td>time</td><td>0或1个(可选)</td><td>时间类型，值为时间值，表示需要在图层中有时间信息</td></tr><tr><td>elevation</td><td>0或1个(可选)</td><td>数字类型，值为高程值，表示需要在图层中有高程信息</td></tr></tbody></table><h4 id="getfeatureinfo参数" tabindex="-1">GetFeatureInfo参数 <a class="header-anchor" href="#getfeatureinfo参数" aria-label="Permalink to &quot;GetFeatureInfo参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th><strong>参数名称</strong></th><th><strong>参数个数</strong></th><th><strong>参数类型和值</strong></th></tr></thead><tbody><tr><td>service</td><td>1个(必选)</td><td>字符类型，服务类型标识值为“WMS”</td></tr><tr><td>request</td><td>1个(必选)</td><td>字符类型，值为“GetFeatureInfo”</td></tr><tr><td>version</td><td>1个(必选)</td><td>字符类型，值为请求的WMS的版本号</td></tr><tr><td>map request part</td><td>1个(必选)</td><td>字符类型，值为获得地图的部分操作参数</td></tr><tr><td>query_layers</td><td>1个(必选)</td><td>字符类型，值为查询的一个或多个地图图层列表，多个图层之间用”,”隔开</td></tr><tr><td>info_format</td><td>1个(必选)</td><td>MIME类型，值为请求信息的返回类型</td></tr><tr><td>I</td><td>1个(必选)</td><td>整型类型，值为待查询点的在地图图片上的像素列号</td></tr><tr><td>J</td><td>1个(必选)</td><td>整型类型，值为待查询点的在地图图片上的像素行号</td></tr><tr><td>feature_count</td><td>0或1个(可选)</td><td>整型类型，值为返回信息中的要素的个数(默认是1)</td></tr><tr><td>exceptions</td><td>0或1个(可选)</td><td>值为WMS的异常信息报告的格式(默认情况下是XML格式)</td></tr></tbody></table><h3 id="实例demo" tabindex="-1">实例demo <a class="header-anchor" href="#实例demo" aria-label="Permalink to &quot;实例demo&quot;">​</a></h3><table tabindex="0"><thead><tr><th><strong>操作</strong></th><th><strong>调用示例</strong></th></tr></thead><tbody><tr><td>GetCapabilities</td><td><a href="http://tdt.fuzhou.gov.cn/serviceaccess/WMS/DMDZ?version=1.1.1&amp;request=GetCapabilities&amp;service=WMS" target="_blank" rel="noreferrer">http://tdt.fuzhou.gov.cn/serviceaccess/WMS/DMDZ?version=1.1.1&amp;request=GetCapabilities&amp;service=WMS</a></td></tr><tr><td>GetMap</td><td><a href="http://tdt.fuzhou.gov.cn/serviceaccess/WMS/DMDZ?version=1.1.1&amp;request=GetMap&amp;service=WMS&amp;mapservice=DMDZ&amp;layers=1&amp;styles=default&amp;width=1164&amp;height=371&amp;format=png&amp;transparent=true&amp;srs=EPSG%3A4490&amp;bbox=119.28758165903027,26.090243729688037,119.28914270467693,26.0907412794603" target="_blank" rel="noreferrer">http://tdt.fuzhou.gov.cn/serviceaccess/WMS/DMDZ?version=1.1.1&amp;request=GetMap&amp;service=WMS&amp;mapservice=DMDZ&amp;layers=1&amp;styles=default&amp;width=1164&amp;height=371&amp;format=png&amp;transparent=true&amp;srs=EPSG%3A4490&amp;bbox=119.28758165903027,26.090243729688037,119.28914270467693,26.0907412794603</a></td></tr></tbody></table><h2 id="wmts" tabindex="-1">WMTS <a class="header-anchor" href="#wmts" aria-label="Permalink to &quot;WMTS&quot;">​</a></h2><h3 id="简介-1" tabindex="-1">简介 <a class="header-anchor" href="#简介-1" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>Web Map Tile Service（网络地图瓦片服务），简称WMTS，是和WMS并列的重要OGC规范之一。WMTS不同于WMS,它最重要的特征是采用缓存技术能够缓解WebGIS服务器端数据处理的压力，提高交互响应速度，大幅改善在线地图应用客户端的用户体验。WMTS是OGC主推的缓存技术规范，是目前各种缓存技术相互兼容的一种方法。</p><h3 id="服务操作列表-1" tabindex="-1">服务操作列表 <a class="header-anchor" href="#服务操作列表-1" aria-label="Permalink to &quot;服务操作列表&quot;">​</a></h3><table tabindex="0"><thead><tr><th><strong>操作</strong></th><th><strong>操作</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>GetCapabilities</td><td>强制实现</td><td>获取<code>WMTS</code>的能力文档（即元数据文档），里面包含服务的所有信息</td></tr><tr><td>GetTile</td><td>强制实现</td><td>获取地图瓦片。该操作根据客户端发出的请求参数在服务端进行检索，服务器端返回地图瓦片图像。</td></tr><tr><td>GetFeatureInfo</td><td>强制实现</td><td>通过在<code>WMTS</code>图层上指定一定的条件，返回指定的地图瓦片内容对应的要素信息</td></tr></tbody></table><h4 id="getcapabilities参数-1" tabindex="-1">GetCapabilities参数 <a class="header-anchor" href="#getcapabilities参数-1" aria-label="Permalink to &quot;GetCapabilities参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th><strong>参数名称</strong></th><th><strong>参数个数</strong></th><th><strong>参数类型和值</strong></th></tr></thead><tbody><tr><td>service</td><td>1个(必选)</td><td>字符类型，服务类型值为“WMTS”</td></tr><tr><td>request</td><td>1个(必选)</td><td>字符类型，请求的操作名称，值为“GetCapabilities”</td></tr><tr><td>acceptVersions</td><td>0或1个(可选)</td><td>字符类型，值为请求的WMTS的版本号</td></tr><tr><td>sections</td><td>0或1个(可选)</td><td>字符类型，请求元数据文档0或多个节的名称，多个名称之间用“，”隔开，不须按顺序排列。值为空默认返回整个元数据文档</td></tr><tr><td>updateSequence</td><td>0或1个(可选)</td><td>字符类型，值为increased，为空时默认返回最新的元数据文档</td></tr><tr><td>acceptFormat</td><td>0或1个(可选)</td><td>MIME类型，值为服务元数据的输出格式</td></tr></tbody></table><h4 id="gettile参数" tabindex="-1">GetTile参数 <a class="header-anchor" href="#gettile参数" aria-label="Permalink to &quot;GetTile参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th><strong>参数名称</strong></th><th><strong>参数个数</strong></th><th><strong>参数类型和值</strong></th></tr></thead><tbody><tr><td>service</td><td>1个(必选)</td><td>字符类型，服务类型标识值为“WMTS”</td></tr><tr><td>request</td><td>1个(必选)</td><td>字符类型，请求的操作值为“GetTile”</td></tr><tr><td>version</td><td>1个(必选)</td><td>字符类型，值为请求的WMTS的版本号</td></tr><tr><td>layer</td><td>1个(必选)</td><td>字符类型，值为请求的图层名称</td></tr><tr><td>style</td><td>1个(必选)</td><td>字符类型，值为请求图层的渲染样式</td></tr><tr><td>format</td><td>1个(必选)</td><td>字符类型，值为瓦片地图的输出格式</td></tr><tr><td>tileMatrixSet</td><td>1个(必选)</td><td>字符类型，瓦片矩阵数据集，其值在服务的元数据文档中指定</td></tr><tr><td>tileMatrix</td><td>1个(必选)</td><td>字符类型，瓦片矩阵，其值在服务的元数据文档中指定</td></tr><tr><td>tileRow</td><td>1个(必选)</td><td>整型类型，值为大于0的整数，表示瓦片矩阵的行号</td></tr><tr><td>tileCol</td><td>1个(必选)</td><td>整型类型，值为大于0的整数，表示瓦片矩阵的列号</td></tr><tr><td>Other sample dimensions</td><td>0或1个(可选)</td><td>字符类型，其他允许的参数</td></tr></tbody></table><h4 id="getfeatureinfo参数-1" tabindex="-1">GetFeatureInfo参数 <a class="header-anchor" href="#getfeatureinfo参数-1" aria-label="Permalink to &quot;GetFeatureInfo参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th><strong>参数名称</strong></th><th><strong>参数个数</strong></th><th><strong>参数类型和值</strong></th></tr></thead><tbody><tr><td>service</td><td>1个(必选)</td><td>字符类型，服务类型值为“WMTS”</td></tr><tr><td>request</td><td>1个(必选)</td><td>字符类型，请求的操作值为“GetFeatureInfo”</td></tr><tr><td>version</td><td>1个(必选)</td><td>字符类型，值为请求的WMTS的版本号</td></tr><tr><td>J</td><td>1个(必选)</td><td>整型类型，值为大于0的整数，表示瓦片上一指定像素点的行号</td></tr><tr><td>I</td><td>1个(必选)</td><td>整型类型，值为大于0的整数，表示瓦片上一指定像素点的列号</td></tr><tr><td>info_forma</td><td>1个(必选)</td><td>MIME类型，值为请求信息的返回类型</td></tr><tr><td>layer, style, format, Sample dimension, tileMatrixSet, tileMatrix, tileRow, tileCol</td><td>1个(必选)</td><td>这些参数的值应与请求GetTile的相应参数保持一致</td></tr></tbody></table><h3 id="实例demo-1" tabindex="-1">实例demo <a class="header-anchor" href="#实例demo-1" aria-label="Permalink to &quot;实例demo&quot;">​</a></h3><table tabindex="0"><thead><tr><th><strong>实例名称</strong></th><th><strong>调用实例</strong></th></tr></thead><tbody><tr><td>GetCapabilities操作</td><td><a href="http://tdt.fuzhou.gov.cn/serviceaccess/wmts/Vector2012CGCS2000?service=WMTS&amp;request=GetCapabilities" target="_blank" rel="noreferrer">http://tdt.fuzhou.gov.cn/serviceaccess/wmts/Vector2012CGCS2000?service=WMTS&amp;request=GetCapabilities</a></td></tr><tr><td>GetTile操作</td><td><a href="http://tdt.fuzhou.gov.cn/serviceaccess/wmts/Vector2012CGCS2000?service=WMTS&amp;request=GetTile&amp;layer=0&amp;style=default&amp;tileMatrixSet=sss&amp;tileMatrix=10&amp;tileRow=93074&amp;tileCol=435872&amp;format=image/png" target="_blank" rel="noreferrer">http://tdt.fuzhou.gov.cn/serviceaccess/wmts/Vector2012CGCS2000?service=WMTS&amp;request=GetTile&amp;layer=0&amp;style=default&amp;tileMatrixSet=sss&amp;tileMatrix=10&amp;tileRow=93074&amp;tileCol=435872&amp;format=image/png</a></td></tr></tbody></table><h2 id="wfs" tabindex="-1">WFS <a class="header-anchor" href="#wfs" aria-label="Permalink to &quot;WFS&quot;">​</a></h2><h3 id="简介-2" tabindex="-1">简介 <a class="header-anchor" href="#简介-2" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>Web Feature Service（网络要素服务），简称WFS。该规范主要对OpenGIS简单要素的数据编辑操作进行规范，从而使服务器端和客户端能够在要素层面进行“通讯”。其返回结果的是XML格式的WFS服务元数据文档，通过该文档用户能够了解：WFS服务器支持的所有操作操作列表，GetFeature操作返回的数据格式，可用的坐标参照系统列表，操作异常信息的列表，WFS服务提供商的相关信息，WFS服务器的可用要素类列表等。</p><h3 id="服务操作列表-2" tabindex="-1">服务操作列表 <a class="header-anchor" href="#服务操作列表-2" aria-label="Permalink to &quot;服务操作列表&quot;">​</a></h3><table tabindex="0"><thead><tr><th><strong>操作</strong></th><th><strong>实现要求</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>GetCapabilities</td><td>强制实现</td><td>GetCapabilities请求用于查询WFS服务的能力信息，包括支持的操作、支持的格式、空间坐标、包含的资源等。它主要的目的是使客户端在使用GetFeature请求前可以对WFS服务有一个基本的了解，从而可以设置正确的参数。</td></tr><tr><td>DescribeFeatureType</td><td>强制实现</td><td>用于生成一个 Schema 描述，该 Schema 描述了 WFS 服务提供的要素类型（Feature Type），以及要素类型的结构信息。该 Schema 还定义了 WFS 服务所期望的要素实例在输入时如何编码以及输出时如何生成要素实例。</td></tr><tr><td>GetFeature</td><td>强制实现</td><td>GetFeature用于向WFS的客户端程序提供查询特定地理信息的能力，通过GetFeature操作可以由指定的属性条件、空间条件或者两者叠加的条件进行空间查询。</td></tr><tr><td>Transaction</td><td>选择实现</td><td>允许Transaction操作，使客户端可对服务器端所提供的地图要素类执插入，更新，删除等命令</td></tr><tr><td>GetGmlObject</td><td>选择实现</td><td>通过XLink获取GML对象</td></tr><tr><td>LockFeature</td><td>选择实现</td><td>在事务过程中锁定要素</td></tr></tbody></table><h4 id="getcapabilities参数-2" tabindex="-1">GetCapabilities参数 <a class="header-anchor" href="#getcapabilities参数-2" aria-label="Permalink to &quot;GetCapabilities参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:center;"><strong>参数名称</strong></th><th><strong>参数个数</strong></th><th style="text-align:center;"><strong>参数类型和值</strong></th></tr></thead><tbody><tr><td style="text-align:center;">service</td><td>1个(必选)</td><td style="text-align:center;">字符类型，服务类型值为“WFS”</td></tr><tr><td style="text-align:center;">request</td><td>1个(必选)</td><td style="text-align:center;">字符类型，请求的操作名称，值为“GetCapabilities”</td></tr><tr><td style="text-align:center;">versions</td><td>0或1个(可选)</td><td style="text-align:center;">字符类型，值为请求的WFS的版本号</td></tr></tbody></table><h4 id="describefeaturetype参数" tabindex="-1">DescribeFeatureType参数 <a class="header-anchor" href="#describefeaturetype参数" aria-label="Permalink to &quot;DescribeFeatureType参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th><strong>参数名称</strong></th><th><strong>参数个数</strong></th><th><strong>参数类型和值</strong></th></tr></thead><tbody><tr><td>service</td><td>1个(必选)</td><td>字符类型，服务类型值为“WFS”</td></tr><tr><td>request</td><td>1个(必选)</td><td>字符类型，请求的操作名称，值为“DescribeFeatureType”</td></tr><tr><td>typeName</td><td>0或1个(可选)</td><td>字符类型，值为要素类型的列表，多个值之间用“，”隔开，默认解析包括的全部要素类型</td></tr><tr><td>outputFormat</td><td>0或1个(可选)</td><td>MIME类型，值为输出格式</td></tr></tbody></table><h4 id="getfeature参数" tabindex="-1">GetFeature参数 <a class="header-anchor" href="#getfeature参数" aria-label="Permalink to &quot;GetFeature参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:center;"><strong>参数名称</strong></th><th style="text-align:center;"><strong>参数个数</strong></th><th><strong>参数类型和值</strong></th></tr></thead><tbody><tr><td style="text-align:center;">service</td><td style="text-align:center;">1个(必选)</td><td>字符类型，服务类型标识值为“WFS”</td></tr><tr><td style="text-align:center;">request</td><td style="text-align:center;">1个(必选)</td><td>字符类型，请求的操作值为“GetFeature”</td></tr><tr><td style="text-align:center;">typeName</td><td style="text-align:center;">1个(必选)</td><td>字符类型，值为请求的要素类型的名称，多个名称之间用“，”隔开</td></tr><tr><td style="text-align:center;">version</td><td style="text-align:center;">0或1个(可选)</td><td>字符类型，值为请求的WFS的版本号</td></tr><tr><td style="text-align:center;">outputFormat</td><td style="text-align:center;">0或1个(可选)</td><td>MIME类型，值为输出格式</td></tr><tr><td style="text-align:center;">resultType</td><td style="text-align:center;">0或1个(可选)</td><td>字符类型，值为请求的结果类型</td></tr><tr><td style="text-align:center;">propertyName</td><td style="text-align:center;">0或1个(可选)</td><td>字符类型，值为请求要素的属性名，多个值之间用“，”隔开</td></tr><tr><td style="text-align:center;">featureVersion</td><td style="text-align:center;">0或1个(可选)</td><td>字符类型，值为要素的版本，值为ALL返回请求的要素的所有版本，没有值默认为返回请求要素的最新版本</td></tr><tr><td style="text-align:center;">maxFeature</td><td style="text-align:center;">0或1个(可选)</td><td>整型类型，值为请求要素的最大数，默认值为满足查询的所有结果集</td></tr><tr><td style="text-align:center;">expiry</td><td style="text-align:center;">0或1个(可选)</td><td>数字类型，要素被锁定的时间</td></tr><tr><td style="text-align:center;">SRSName</td><td style="text-align:center;">0或1个(可选)</td><td>字符类型，值为坐标系统名</td></tr><tr><td style="text-align:center;">featureID</td><td style="text-align:center;">0或1个(可选)</td><td>字符类型，值为要素的ID，多个ID之间用“，”隔开</td></tr><tr><td style="text-align:center;">filter</td><td style="text-align:center;">0或1个(可选)</td><td>请求要素的过滤条件</td></tr><tr><td style="text-align:center;">bBox</td><td style="text-align:center;">0或1个(可选)</td><td>Wkt格式，请求指定要素查询范围，可以替代featureId和filter参数</td></tr><tr><td style="text-align:center;">sortby</td><td style="text-align:center;">0或1个(可选)</td><td>字符类型，查询结果属性值的排序依据</td></tr></tbody></table><h3 id="实例demo-2" tabindex="-1">实例demo <a class="header-anchor" href="#实例demo-2" aria-label="Permalink to &quot;实例demo&quot;">​</a></h3><table tabindex="0"><thead><tr><th><strong>操作</strong></th><th><strong>调用示例</strong></th></tr></thead><tbody><tr><td>GetCapabilities</td><td><a href="http://tdt.fuzhou.gov.cn/serviceaccess/WFS/DMDZ_WFS-G?service=WFS&amp;request=GetCapabilities&amp;version=1.0.0" target="_blank" rel="noreferrer">http://tdt.fuzhou.gov.cn/serviceaccess/WFS/DMDZ_WFS-G?service=WFS&amp;request=GetCapabilities&amp;version=1.0.0</a></td></tr><tr><td>DescribeFeatureType</td><td><a href="http://tdt.fuzhou.gov.cn/serviceaccess/WFS/DMDZ_WFS-G?service=WFS&amp;request=DescribeFeatureType&amp;typename=DMDZ:%E5%9C%B0%E5%90%8D&amp;version=1.0.0" target="_blank" rel="noreferrer">http://tdt.fuzhou.gov.cn/serviceaccess/WFS/DMDZ_WFS-G?service=WFS&amp;request=DescribeFeatureType&amp;typename=DMDZ:地名&amp;version=1.0.0</a></td></tr><tr><td>GetFeature</td><td><a href="http://tdt.fuzhou.gov.cn/serviceaccess/WFS/DMDZ_WFS-G?service=WFS&amp;request=GetFeature&amp;typename=DMDZ:%E5%9C%B0%E5%90%8D&amp;version=1.0.0" target="_blank" rel="noreferrer">http://tdt.fuzhou.gov.cn/serviceaccess/WFS/DMDZ_WFS-G?service=WFS&amp;request=GetFeature&amp;typename=DMDZ:地名&amp;version=1.0.0&amp;maxFeature=20</a></td></tr></tbody></table>',42)]))}const b=e(s,[["render",i]]);export{p as __pageData,b as default};
