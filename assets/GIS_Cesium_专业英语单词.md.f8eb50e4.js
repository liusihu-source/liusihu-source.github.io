import{_ as s,c as n,o as a,a as l}from"./app.d13e8ac4.js";const h=JSON.parse('{"title":"Cesium\u5355\u8BCD --\u7B14\u8BB0","description":"","frontmatter":{},"headers":[{"level":2,"title":"Cesium\u7684\u82F1\u8BED\u5355\u8BCD","slug":"cesium\u7684\u82F1\u8BED\u5355\u8BCD","link":"#cesium\u7684\u82F1\u8BED\u5355\u8BCD","children":[{"level":3,"title":"3.6\u65E5","slug":"_3-6\u65E5","link":"#_3-6\u65E5","children":[]},{"level":3,"title":"3.8\u65E5","slug":"_3-8\u65E5","link":"#_3-8\u65E5","children":[]},{"level":3,"title":"3.10\u65E5","slug":"_3-10\u65E5","link":"#_3-10\u65E5","children":[]},{"level":3,"title":"3.11\u65E5","slug":"_3-11\u65E5","link":"#_3-11\u65E5","children":[]},{"level":3,"title":"3.12\u65E5","slug":"_3-12\u65E5","link":"#_3-12\u65E5","children":[]},{"level":3,"title":"3.13\u65E5","slug":"_3-13\u65E5","link":"#_3-13\u65E5","children":[]},{"level":3,"title":"3.15\u65E5","slug":"_3-15\u65E5","link":"#_3-15\u65E5","children":[]},{"level":3,"title":"3.16","slug":"_3-16","link":"#_3-16","children":[]},{"level":3,"title":"3.17","slug":"_3-17","link":"#_3-17","children":[]}]}],"relativePath":"GIS/Cesium/\u4E13\u4E1A\u82F1\u8BED\u5355\u8BCD.md"}'),e={name:"GIS/Cesium/\u4E13\u4E1A\u82F1\u8BED\u5355\u8BCD.md"},p=l(`<h1 id="cesium\u5355\u8BCD-\u7B14\u8BB0" tabindex="-1">Cesium\u5355\u8BCD --\u7B14\u8BB0 <a class="header-anchor" href="#cesium\u5355\u8BCD-\u7B14\u8BB0" aria-hidden="true">#</a></h1><h2 id="cesium\u7684\u82F1\u8BED\u5355\u8BCD" tabindex="-1">Cesium\u7684\u82F1\u8BED\u5355\u8BCD <a class="header-anchor" href="#cesium\u7684\u82F1\u8BED\u5355\u8BCD" aria-hidden="true">#</a></h2><h3 id="_3-6\u65E5" tabindex="-1">3.6\u65E5 <a class="header-anchor" href="#_3-6\u65E5" aria-hidden="true">#</a></h3><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">//word</span></span>
<span class="line"><span style="color:#A6ACCD;">radar  \u96F7\u8FBE</span></span>
<span class="line"><span style="color:#A6ACCD;">deploy \u90E8\u7F72</span></span>
<span class="line"><span style="color:#A6ACCD;">panel \u9762\u677F</span></span>
<span class="line"><span style="color:#A6ACCD;">toggle\u5207\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">parse \u5206\u6790\uFF0C\u88C5\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">curious \u597D\u5947\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">capture \u5360\u9886</span></span>
<span class="line"><span style="color:#A6ACCD;">sample \u6837\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">gate \u5927\u95E8</span></span>
<span class="line"><span style="color:#A6ACCD;">longitude \u7ECF\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">latitude \u7EAC\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">ellipsoid \u692D\u7403\u4F53</span></span>
<span class="line"><span style="color:#A6ACCD;">pre-processed  \u9884\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">individual \u4E2A\u4EBA\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">detach  \u5206\u79BB</span></span>
<span class="line"><span style="color:#A6ACCD;">multiplication  \u4E58\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">landmark  \u5730\u6807\uFF0C\u7740\u843D</span></span>
<span class="line"><span style="color:#A6ACCD;">orientation  \u65B9\u5411</span></span>
<span class="line"><span style="color:#A6ACCD;">interpolating  \u63D2\u503C</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//pharse</span></span>
<span class="line"><span style="color:#A6ACCD;">a number of methods  \u5F88\u591A\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> simplicity \u4E3A\u4E86\u7B80\u4FBF\u8D77\u89C1</span></span>
<span class="line"><span style="color:#A6ACCD;">mean sea level  \u6D77\u5E73\u9762\u9AD8\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">built-in  \u5185\u7F6E</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//sentence</span></span>
<span class="line"><span style="color:#A6ACCD;">The height </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> CesiumJS is </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> meters relative to the WGS84 ellipsoid. We\u2019ve pre-processed the radar data to convert the heights from feet relative to mean sea level to meters relative to the ellipsoid.</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="_3-8\u65E5" tabindex="-1">3.8\u65E5 <a class="header-anchor" href="#_3-8\u65E5" aria-hidden="true">#</a></h3><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">//word</span></span>
<span class="line"><span style="color:#A6ACCD;">compatible \u517C\u5BB9\u7684\u3001\u53EF\u5171\u7528\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">cartesian \u7B1B\u5361\u5C14</span></span>
<span class="line"><span style="color:#A6ACCD;">quote  \u5F15\u7528</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//pharse</span></span>
<span class="line"><span style="color:#A6ACCD;">by default  \u9ED8\u8BA4\u60C5\u51B5\u4E0B</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="_3-10\u65E5" tabindex="-1">3.10\u65E5 <a class="header-anchor" href="#_3-10\u65E5" aria-hidden="true">#</a></h3><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">//word</span></span>
<span class="line"><span style="color:#A6ACCD;">concise \u7B80\u6D01\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">declarative \u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">evaluate \u8BC4\u4F30</span></span>
<span class="line"><span style="color:#A6ACCD;">translucency \u534A\u900F\u660E\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">conditions \u6761\u4EF6</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-11\u65E5" tabindex="-1">3.11\u65E5 <a class="header-anchor" href="#_3-11\u65E5" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//word</span></span>
<span class="line"><span style="color:#A6ACCD;">panoramic  \u5168\u666F\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">capitol entryway  \u56FD\u4F1A\u5927\u53A6\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">prerequisite  \u5148\u51B3\u6761\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">compatible  \u517C\u5BB9\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">geolocating  \u5730\u7406\u5B9A\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">fine \u597D\u7684\uFF0C\u5408\u9002\u7684\uFF0C\u8F7B\u5FAE\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">tune \u8C03\u6574</span></span>
<span class="line"><span style="color:#A6ACCD;">initial  \u521D\u59CB\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-12\u65E5" tabindex="-1">3.12\u65E5 <a class="header-anchor" href="#_3-12\u65E5" aria-hidden="true">#</a></h3><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;">#word</span></span>
<span class="line"><span style="color:#A6ACCD;">optimize  \u4F18\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">curated \u7CBE\u786E\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">depot \u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">high resolution capture \u9AD8\u5206\u8FA8\u7387\u6355\u83B7</span></span>
<span class="line"><span style="color:#A6ACCD;">comprehensive \u5168\u9762\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">styling editor \u6837\u5F0F\u7F16\u8F91\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">time-dynamic visualization \u65F6\u95F4\u52A8\u6001\u53EF\u89C6\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">asset depot \u8D44\u6E90\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">high resolution drone capture \u9AD8\u5206\u8FA8\u7387\u65E0\u4EBA\u673A\u6355\u83B7</span></span>
<span class="line"><span style="color:#A6ACCD;">efficiently \u6709\u6548\u5730</span></span>
<span class="line"><span style="color:#A6ACCD;">photogrammetry model \u6444\u5F71\u6D4B\u91CF\u6A21\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">slide  \u5212\u7247\uFF0C\u5E7B\u706F\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">pedestrain sensor \u884C\u4EBA\u4F20\u611F\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">magnifying glass \u653E\u5927\u955C</span></span>
<span class="line"><span style="color:#A6ACCD;">choreograph  \u7F16\u6392\u821E\u8E48</span></span>
<span class="line"><span style="color:#A6ACCD;">inspect \u68C0\u67E5</span></span>
<span class="line"><span style="color:#A6ACCD;">aerial  \u822A\u7A7A\u7684\u3001\u822A\u5929\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">generate \u751F\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">spectrum  \u8C31\u3001\u8303\u56F4\u3001\u5E45\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">gradient  \u5761\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">continous gradient \u6301\u7EED\u68AF\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">discrete bucket \u5206\u6563\u7684\u6876</span></span>
<span class="line"><span style="color:#A6ACCD;">categorize \u5206\u7C7B</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#sentence</span></span>
<span class="line"><span style="color:#A6ACCD;">This tutorial will walk you through how to use the styling editor </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> Cesium Stories.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD9\u4E2A\u6559\u7A0B\u5C06\u4F1A\u6559\u60A8\u5982\u4F55\u4F7F\u7528Ceisum Stories\u4E2D\u7684\u6837\u5F0F\u7F16\u8F91\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">One category </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> this property is Individual. Enter that into the value and label field and </span><span style="color:#89DDFF;">then</span><span style="color:#A6ACCD;"> click the plus button</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD9\u4E2A\u5C5E\u6027\u4E4B\u4E00\u7684\u7C7B\u522B\u662F\u4E2A\u4EBA\u3002\u8F93\u5165\u8FD9\u4E2A\u5230\u503C\u4E0E\u6807\u7B7E\uFF0C\u7136\u540E\u70B9\u51FB+\u6309\u94AE</span></span>
<span class="line"><span style="color:#A6ACCD;">The value field should contain the exact value you\u2019re matching against </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> the dataset, so this is case-sensitive. The label field can be whatever meaningful name you want to display </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> your legend.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5728\u6570\u636E\u96C6\u4E2D\u8FD9\u4E2A\u5C5E\u6027\u503C\u5FC5\u987B\u5305\u542B\u60A8\u5339\u914D\u7684\u786E\u5207\u7684\u503C\uFF0C\u56E0\u6B64\u5B83\u662F\u533A\u5206\u5927\u5C0F\u5199\u7684\u3002\u6807\u7B7E\u5C5E\u6027\u53EF\u4EE5\u662F\u4EFB\u4F55\u60A8\u89C9\u5F97\u6709\u610F\u4E49\u3001\u60F3\u5C55\u793A\u5728\u56FE\u4F8B\u4E2D\u7684\u540D\u5B57\u3002</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-13\u65E5" tabindex="-1">3.13\u65E5 <a class="header-anchor" href="#_3-13\u65E5" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">drone flight scenario  \u65E0\u4EBA\u673A\u98DE\u884C\u573A\u666F</span></span>
<span class="line"><span style="color:#A6ACCD;">satellite orbits \u536B\u661F\u8F68\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">playback \u56DE\u653E</span></span>
<span class="line"><span style="color:#A6ACCD;">annotated  \u6CE8\u91CA</span></span>
<span class="line"><span style="color:#A6ACCD;">battery \u7535\u6C60</span></span>
<span class="line"><span style="color:#A6ACCD;">automate \u81EA\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">CZML is a JSON format for describing a time-dynamic graphical scene, primarily for display in a web browser running Cesium. It can be used to display 3D models, lines, labels and other types of data</span></span>
<span class="line"><span style="color:#A6ACCD;">CZML \u662F\u4E00\u79CDJson\u683C\u5F0F\uFF0C\u7528\u4E8E\u63CF\u8FF0\u65F6\u95F4\u52A8\u6001\u56FE\u5F62\u573A\u666F\uFF0C\u53EF\u4EE5\u7528\u6765\u5C55\u793A3D\u6A21\u578B\u3001\u7EBF\u3001\u6807\u7B7E\u4E2A\u5176\u4ED6\u7C7B\u578B\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The Cesium ion REST API allows you to leverage ion&#39;s powerful tiling and streaming capabilities from your own applications and workflows</span></span>
<span class="line"><span style="color:#A6ACCD;">Cesium ion Rest\u98CE\u683CAPI\u5141\u8BB8\u4F60\u4ECE\u81EA\u5DF1\u7684\u5E94\u7528\u6216\u8005\u5DE5\u4F5C\u6D41\u4E2D\u6700\u5927\u9650\u5EA6\u5229\u7528ion\u7684\u5F3A\u5927\u5E73\u94FA\u548C\u6D41\u5A92\u4F53\u529F\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The APIs described in this documentation are subject to Cesium&#39;s Terms of Service.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u672C\u6587\u4E2D\u63CF\u8FF0\u7684API\u53D7\u7EA6\u675F\u4E8ECesium\u6761\u6B3E\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-15\u65E5" tabindex="-1">3.15\u65E5 <a class="header-anchor" href="#_3-15\u65E5" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//words</span></span>
<span class="line"><span style="color:#A6ACCD;">identical \u5B8C\u5168\u76F8\u540C\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">identify \u9274\u522B\u3001\u8BA4\u4E3A</span></span>
<span class="line"><span style="color:#A6ACCD;">bucket \u6876\uFF0C\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//sentence</span></span>
<span class="line"><span style="color:#A6ACCD;">We\u2019ll also be relying to two third-party libraries to simplify things, the request-promise library for making requests, and the aws-sdk for uploading data.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6211\u4EEC\u5C06\u8981\u4F9D\u8D56\u4E24\u4E2A\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5305\u6765\u7B80\u5316\u5DE5\u4F5C\uFF0C\u4E00\u4E2A\u662F\u5236\u4F5Crequest\u8BF7\u6C42\u7684\u8BF7\u6C42\u5305\uFF0C\u53E6\u4E00\u4E2A\u662F\u4E0A\u4F20\u6570\u636E\u7528\u7684sdk</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Whether you have imagery, terrain, 3D buildings, point clouds, photogrammetry, or one of the many other types of data we support, ion creates a tiled version of it that we refer to as an asset.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u65E0\u8BBA\u4F60\u6709\u5F71\u50CF\u3001\u5730\u5F62\u30013D\u6A21\u578B\u3001\u70B9\u4E91\u3001\u5F71\u50CF\u6D4B\u91CF\u6216\u662F\u4F17\u591A\u5176\u4ED6\u4EFB\u610F\u4E4B\u4E00\u7684\u6211\u4EEC\u652F\u6301\u7684\u7C7B\u578B\uFF0Cion \u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5E73\u94FA\u7248\u672C\uFF0C\u6211\u4EEC\u5C06\u4E4B\u5B9A\u4E49\u4E3A\u8D44\u4EA7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">As this point, we can use the s3 instance to upload as many files as needed. In this example everything is contained in a single zip file, so we can use a single upload call. If you have multiple files, just make multiple s3.upload calls with different Body and Key properties. Be sure to replace path_to_file with the location of Reichstag.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">\u81F3\u6B64\uFF0C\u6211\u4EEC\u80FD\u6839\u636E\u9700\u6C42\u4F7F\u7528S3\u5B9E\u4F8B\u6765\u4E0A\u4F20\u8BB8\u591A\u6587\u4EF6\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u6BCF\u4E2A\u4E1C\u897F\u90FD\u88AB\u5305\u542B\u5728\u4E00\u4E2A\u5355\u72EC\u7684zip\u5305\uFF0C\u6240\u4EE5\u6211\u4EEC\u80FD\u4F7F\u7528\u4E00\u4E2A\u5355\u72EC\u7684\u4E0A\u4F20\u8C03\u7528\u3002\u5982\u679C\u6709\u591A\u4E2A\u6587\u4EF6\uFF0C\u4EC5\u5236\u4F5C\u591A\u4E2AS3\u8C03\u7528\u5B9E\u4F8B\u7528\u4E0D\u540C\u7684\u8BF7\u6C42\u4F53\u548C\u952E\u503C\u5C5E\u6027\u5373\u53EF\uFF0C\u786E\u4FDD\u66FF\u6362\u8DEF\u5F84\u5230\u6587\u4EF6\u7528Reichstag.zip\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-16" tabindex="-1">3.16 <a class="header-anchor" href="#_3-16" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">potential  \u6F5C\u5728\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">avatar \u5934\u50CF\uFF0C\u5316\u8EAB</span></span>
<span class="line"><span style="color:#A6ACCD;">granularity  \u7C92\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">malicious  \u6076\u610F\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">regenerate  \u518D\u751F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Note that requests using a token with Allowed URLs must include a referer header. You may have to configure the referrer policy for your app to send this header with your requests</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u610F\u4F7F\u7528\u4E00\u4E2A\u5E26\u6709url\u9650\u5236\u7684\u79D8\u94A5\u9700\u8981\u8BF7\u6C42\u5305\u542B\u4E00\u4E2A\u53C2\u8003\u5934\u3002\u4F60\u53EF\u4EE5\u5BF9\u60A8\u7684\u5E94\u7528\u914D\u7F6E\u53C2\u8003\u7B56\u7565\u6765\u53D1\u9001\u60A8\u7684request\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-17" tabindex="-1">3.17 <a class="header-anchor" href="#_3-17" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">fictional  \u865A\u6784\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">primitive  \u539F\u59CB\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">snippet  \u7247\u6BB5</span></span>
<span class="line"><span style="color:#A6ACCD;">metric \u6307\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">instantiate \u5B9E\u4F8B\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,20),o=[p];function c(i,t,r,C,A,y){return a(),n("div",null,o)}const D=s(e,[["render",c]]);export{h as __pageData,D as default};
