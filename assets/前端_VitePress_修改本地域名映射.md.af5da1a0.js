import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.a7175731.js";const u=JSON.parse('{"title":"修改本地域名映射 --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"前端/VitePress/修改本地域名映射.md","filePath":"前端/VitePress/修改本地域名映射.md","lastUpdated":null}'),l={name:"前端/VitePress/修改本地域名映射.md"},p=a(`<h1 id="修改本地域名映射-笔记" tabindex="-1">修改本地域名映射 --笔记 <a class="header-anchor" href="#修改本地域名映射-笔记" aria-label="Permalink to &quot;修改本地域名映射 --笔记&quot;">​</a></h1><p>修改hosts文件位置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">C:\\Windows\\System32\\drivers\\etc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">C:\\Windows\\System32\\drivers\\etc</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Copyright (c) 1993-2009 Microsoft Corp.</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;"># This is a sample HOSTS file used by Microsoft TCP/IP for Windows.</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;"># This file contains the mappings of IP addresses to host names. Each</span></span>
<span class="line"><span style="color:#e1e4e8;"># entry should be kept on an individual line. The IP address should</span></span>
<span class="line"><span style="color:#e1e4e8;"># be placed in the first column followed by the corresponding host name.</span></span>
<span class="line"><span style="color:#e1e4e8;"># The IP address and the host name should be separated by at least one</span></span>
<span class="line"><span style="color:#e1e4e8;"># space.</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;"># Additionally, comments (such as these) may be inserted on individual</span></span>
<span class="line"><span style="color:#e1e4e8;"># lines or following the machine name denoted by a &#39;#&#39; symbol.</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;"># For example:</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;">#      102.54.94.97     rhino.acme.com          # source server</span></span>
<span class="line"><span style="color:#e1e4e8;">#       38.25.63.10     x.acme.com              # x client host</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># localhost name resolution is handled within DNS itself.</span></span>
<span class="line"><span style="color:#e1e4e8;">#	127.0.0.1       localhost</span></span>
<span class="line"><span style="color:#e1e4e8;">#	::1             localhost</span></span>
<span class="line"><span style="color:#e1e4e8;">61.164.246.245 windown.macxf.com </span></span>
<span class="line"><span style="color:#e1e4e8;">127.0.0.1 apps.corel.com</span></span>
<span class="line"><span style="color:#e1e4e8;">127.0.0.1 mc.corel.com</span></span>
<span class="line"><span style="color:#e1e4e8;">127.0.0.1 origin-mc.corel.com</span></span>
<span class="line"><span style="color:#e1e4e8;">127.0.0.1 iws.corel.com</span></span>
<span class="line"><span style="color:#e1e4e8;">140.82.113.4 github.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Copyright (c) 1993-2009 Microsoft Corp.</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;"># This is a sample HOSTS file used by Microsoft TCP/IP for Windows.</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;"># This file contains the mappings of IP addresses to host names. Each</span></span>
<span class="line"><span style="color:#24292e;"># entry should be kept on an individual line. The IP address should</span></span>
<span class="line"><span style="color:#24292e;"># be placed in the first column followed by the corresponding host name.</span></span>
<span class="line"><span style="color:#24292e;"># The IP address and the host name should be separated by at least one</span></span>
<span class="line"><span style="color:#24292e;"># space.</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;"># Additionally, comments (such as these) may be inserted on individual</span></span>
<span class="line"><span style="color:#24292e;"># lines or following the machine name denoted by a &#39;#&#39; symbol.</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;"># For example:</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;">#      102.54.94.97     rhino.acme.com          # source server</span></span>
<span class="line"><span style="color:#24292e;">#       38.25.63.10     x.acme.com              # x client host</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># localhost name resolution is handled within DNS itself.</span></span>
<span class="line"><span style="color:#24292e;">#	127.0.0.1       localhost</span></span>
<span class="line"><span style="color:#24292e;">#	::1             localhost</span></span>
<span class="line"><span style="color:#24292e;">61.164.246.245 windown.macxf.com </span></span>
<span class="line"><span style="color:#24292e;">127.0.0.1 apps.corel.com</span></span>
<span class="line"><span style="color:#24292e;">127.0.0.1 mc.corel.com</span></span>
<span class="line"><span style="color:#24292e;">127.0.0.1 origin-mc.corel.com</span></span>
<span class="line"><span style="color:#24292e;">127.0.0.1 iws.corel.com</span></span>
<span class="line"><span style="color:#24292e;">140.82.113.4 github.com</span></span></code></pre></div>`,4),o=[p];function c(t,i,r,d,h,y){return n(),e("div",null,o)}const _=s(l,[["render",c]]);export{u as __pageData,_ as default};
