import{_ as a,c as n,a2 as t,o as p}from"./chunks/framework.BQmytedh.js";const h=JSON.parse('{"title":"多媒体标签","description":"","frontmatter":{},"headers":[],"relativePath":"计算机/前端/html/多媒体标签.md","filePath":"计算机/前端/html/多媒体标签.md","lastUpdated":null}'),e={name:"计算机/前端/html/多媒体标签.md"};function l(o,s,i,c,r,u){return p(),n("div",null,s[0]||(s[0]=[t(`<h1 id="多媒体标签" tabindex="-1">多媒体标签 <a class="header-anchor" href="#多媒体标签" aria-label="Permalink to &quot;多媒体标签&quot;">​</a></h1><h2 id="音频" tabindex="-1">音频 <a class="header-anchor" href="#音频" aria-label="Permalink to &quot;音频&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;audio src=&quot;AudioTest.ogg&quot; </span></span>
<span class="line"><span>   controls //表示是否启用自带控制组件</span></span>
<span class="line"><span>   autoplay //表示是否自动播放</span></span>
<span class="line"><span>   loop //是否默认循环播放</span></span>
<span class="line"><span>   muted //表示是否默认静音</span></span>
<span class="line"><span>   preload //表示是否默认缓冲</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>  &lt;p&gt;Your browser does not support the &lt;code&gt;audio&lt;/code&gt; element.&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/audio&gt;</span></span></code></pre></div><h2 id="视频" tabindex="-1">视频 <a class="header-anchor" href="#视频" aria-label="Permalink to &quot;视频&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;video</span></span>
<span class="line"><span>  src=&quot;myVideo.mp4&quot; </span></span>
<span class="line"><span>  width=&quot;100px&quot;</span></span>
<span class="line"><span>  height=&quot;100px&quot;</span></span>
<span class="line"><span>  controls</span></span>
<span class="line"><span>  autoplay</span></span>
<span class="line"><span>  loop</span></span>
<span class="line"><span>  muted</span></span>
<span class="line"><span>  preload</span></span>
<span class="line"><span>  poster=&quot;poster.mp4&quot; //表示视频封面 URL</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>  &lt;p&gt;Your browser does not support the &lt;code&gt;video&lt;/code&gt; element.&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/video&gt;</span></span></code></pre></div><p>💡 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MediaRecorder" target="_blank" rel="noreferrer">音视频比特率 =&gt; 更高的比特率 = 更少的压缩 = 更高的视频质量</a></p><h2 id="字幕标签" tabindex="-1">字幕标签 <a class="header-anchor" href="#字幕标签" aria-label="Permalink to &quot;字幕标签&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;video controls poster=&quot;/images/sample.gif&quot;&gt;</span></span>
<span class="line"><span>  &lt;source src=&quot;sample.mp4&quot; type=&quot;video/mp4&quot; /&gt;</span></span>
<span class="line"><span>  &lt;source src=&quot;sample.ogv&quot; type=&quot;video/ogv&quot; /&gt;</span></span>
<span class="line"><span>  &lt;track kind=&quot;captions&quot; src=&quot;sampleCaptions.vtt&quot; srclang=&quot;en&quot; /&gt;</span></span>
<span class="line"><span>  &lt;track kind=&quot;descriptions&quot; src=&quot;sampleDescriptions.vtt&quot; srclang=&quot;en&quot; /&gt;</span></span>
<span class="line"><span>  &lt;track kind=&quot;chapters&quot; src=&quot;sampleChapters.vtt&quot; srclang=&quot;en&quot; /&gt;</span></span>
<span class="line"><span>  &lt;track default kind=&quot;subtitles&quot; src=&quot;sampleSubtitles_en.vtt&quot; srclang=&quot;en&quot; /&gt;</span></span>
<span class="line"><span>&lt;/video&gt;</span></span></code></pre></div>`,8)]))}const g=a(e,[["render",l]]);export{h as __pageData,g as default};
