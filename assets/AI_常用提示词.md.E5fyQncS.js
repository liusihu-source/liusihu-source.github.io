import{_ as s,c as n,a2 as p,o as e}from"./chunks/framework.BQmytedh.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"AI/常用提示词.md","filePath":"AI/常用提示词.md","lastUpdated":null}'),i={name:"AI/常用提示词.md"};function t(l,a,o,c,r,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h3 id="prompt-样式" tabindex="-1">prompt - 样式 <a class="header-anchor" href="#prompt-样式" aria-label="Permalink to &quot;prompt - 样式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>不要修改任意样式，只帮我改格式要求如下</span></span>
<span class="line"><span>1.不要留任何空白行</span></span>
<span class="line"><span>2.所有样式都直接一行下，如 .s_course_card.locked .s_course_title h4 {color: #999;}，不要换行写，直接给我最终结果</span></span></code></pre></div><h3 id="prompt-figmatofront" tabindex="-1">prompt - figmaToFront <a class="header-anchor" href="#prompt-figmatofront" aria-label="Permalink to &quot;prompt - figmaToFront&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>将我选中的 Figma链接https://www.figma.com/design/MIQGEU1EkwUgu8ZUNZPPEr/%E7%BA%BF%E4%B8%8B%E5%9F%B9%E8%AE%AD%E5%B9%B3%E5%8F%B0?node-id=926-6042&amp;t=EJGv1Udw6i1X0jeI-4 生成对应的组件内容到s_analysisRuleSettingsCon中。具体要求如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 所有css样式名前边都用s_前缀,复杂名称中间采用_分割，不要用-分割，css 及下载的图标图片放在</span></span>
<span class="line"><span>​assets​中，无法下载的图标图片用i标签保留位置后续我自己替换。</span></span>
<span class="line"><span>2. 尽量延用之前的代码风格。</span></span>
<span class="line"><span>3. 代码结构清晰、语义化标签</span></span>
<span class="line"><span>4. 完全复刻：宽度、高度、内边距、外边距、位置、层级(z-index)</span></span>
<span class="line"><span>5. 颜色：直接使用 Figma 取色值（十六进制 / rgba）</span></span>
<span class="line"><span>6. 字体：字号、字重、行高完全与设计一致，字体不需要保持一致</span></span>
<span class="line"><span>7. 效果：阴影、圆角、透明度、渐变完全还原</span></span>
<span class="line"><span>8. 布局：使用 Flex 实现与设计相同的排版结构</span></span>
<span class="line"><span>9. 涉及的图片 svg可以用i标签留出空位，后续我自己添加</span></span>
<span class="line"><span>10. 交互逻辑内部不处理，只添加方法名及方法名的方法说明即可</span></span></code></pre></div><h3 id="prompt-figmatominiprogram" tabindex="-1">prompt - figmaToMiniProgram <a class="header-anchor" href="#prompt-figmatominiprogram" aria-label="Permalink to &quot;prompt - figmaToMiniProgram&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>将我选中的 Figma链接https://www.figma.com/design/MIQGEU1EkwUgu8ZUNZPPEr/%E7%BA%BF%E4%B8%8B%E5%9F%B9%E8%AE%AD%E5%B9%B3%E5%8F%B0?node-id=926-6042&amp;t=EJGv1Udw6i1X0jeI-4 转成小程序代码加到  中。具体要求如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 尽量延用之前的代码风格。</span></span>
<span class="line"><span>2. 代码结构清晰、语义化标签</span></span>
<span class="line"><span>3. 完全复刻：宽度、高度、内边距、外边距、位置、层级(z-index)</span></span>
<span class="line"><span>4. 颜色：直接使用 Figma 取色值（十六进制 / rgba）</span></span>
<span class="line"><span>5. 字体：字号、字重、行高完全与设计一致，字体不需要保持一致</span></span>
<span class="line"><span>6. 效果：阴影、圆角、透明度、渐变完全还原</span></span>
<span class="line"><span>7. 布局：使用 Flex 实现与设计相同的排版结构</span></span>
<span class="line"><span>8. 涉及的图片 svg可以用i标签留出空位，后续我自己添加</span></span>
<span class="line"><span>9. 交互逻辑内部不处理，只添加方法名及方法名的方法说明即可</span></span>
<span class="line"><span>10.所有方法用function 声明，不要用箭头函数</span></span></code></pre></div>`,6)]))}const h=s(i,[["render",t]]);export{g as __pageData,h as default};
