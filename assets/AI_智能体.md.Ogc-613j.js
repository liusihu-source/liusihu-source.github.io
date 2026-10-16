import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.BQmytedh.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"AI/智能体.md","filePath":"AI/智能体.md","lastUpdated":null}'),i={name:"AI/智能体.md"};function l(t,s,c,o,d,h){return e(),n("div",null,s[0]||(s[0]=[p(`<h2 id="发展" tabindex="-1">发展 <a class="header-anchor" href="#发展" aria-label="Permalink to &quot;发展&quot;">​</a></h2><p>GPT &gt; MCP/Skills：</p><p>Google Brain - Transformer &gt;&gt; OpenAI - GPT &gt;&gt; Anthropic(创始人来自openai) - Claude &gt;&gt; Anthropic - MCP(外部工具与ai交互协议) &gt;&gt; Anthropic - skills(模块化工具) &gt;&gt; <code>行业共识：Agent(MCP+Skills) - Claude 4.5、Gemini 3.1、codeX（个人）、claude code（企业）</code></p><h2 id="mcp-skills" tabindex="-1">MCP &amp; SKILLS <a class="header-anchor" href="#mcp-skills" aria-label="Permalink to &quot;MCP &amp; SKILLS&quot;">​</a></h2><blockquote><p>MCP</p><p>工作机制：用户 &gt; 输入 &gt; 智能体 &gt; LLM连接每个mcp server(需要知道每个mcp的name description parmas demo</p><p>本质：MCP本质是 做标准化，把用户输入转为 规范的提示词、过多且相似的MCP可能造成LLM注意力下降</p><p>适用：第三方接入平台统一调用接口方式（让其他智能体按规范调用）</p><p>SKILL（提示词的产品化）</p><p>工作机制：用户 &gt; 输入 &gt; 智能体(支持SKILLS的agent客户端-claude龙虾) &gt; SKILLS的名称 和 描述 &gt; 按需查找（渐进式披露） &gt; 查找SKILL内部reference 并 调用 scripts脚本</p><p>本质：打包某个方向的能力</p><p>适用：批量重复性任务与标准范式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>元数据：name description</span></span>
<span class="line"><span>核心目标：target - 描述要做的事情</span></span>
<span class="line"><span>执行流程：progress - 使用步骤 (先 再 再 最后)</span></span>
<span class="line"><span>执行约束: out - 注意事项</span></span></code></pre></div><p>两者对比</p><ul><li>首次链接时候SKILL只需元数据（name ）token 远小于 MCP的name description parmas demo</li></ul></blockquote><h2 id="codex" tabindex="-1">CODEX <a class="header-anchor" href="#codex" aria-label="Permalink to &quot;CODEX&quot;">​</a></h2><p>1.全局安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @openai/codex</span></span></code></pre></div><p>2.检查并运行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>codex --version</span></span>
<span class="line"><span>C:\\Users\\Administrator&gt;codex --version</span></span>
<span class="line"><span>codex-cli 0.118.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>codex</span></span>
<span class="line"><span>C:\\Users\\Administrator&gt;codex</span></span>
<span class="line"><span>╭─────────────────────────────────────────────╮</span></span>
<span class="line"><span>│ &gt;_ OpenAI Codex (v0.118.0)                  │</span></span>
<span class="line"><span>│                                             │</span></span>
<span class="line"><span>│ model:     gpt-5.3-codex   /model to change │</span></span>
<span class="line"><span>│ directory: ~                                │</span></span>
<span class="line"><span>╰─────────────────────────────────────────────╯</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Tip: New Build faster with Codex.</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>› Summarize recent commits</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  gpt-5.3-codex default · 100% left · ~</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>api-key:</span></span></code></pre></div><p>3.使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div><p>4.卸载</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @openai/codex</span></span></code></pre></div><h2 id="项目架构师" tabindex="-1">项目架构师 <a class="header-anchor" href="#项目架构师" aria-label="Permalink to &quot;项目架构师&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>角色定位</span></span>
<span class="line"><span>资深 Vue 项目架构分析师，精通 Vue 工程解析、业务梳理、接口整理、Mermaid 流程图编写、前端架构问题排查与优化方案设计</span></span>
<span class="line"><span></span></span>
<span class="line"><span>执行任务</span></span>
<span class="line"><span>读取用户提供的指定项目目录，在用户指定目录根位置生成 业务流程.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>回复硬性规范</span></span>
<span class="line"><span>仅第一条回复开头使用固定前缀：oioi,，后续对话回复无需添加</span></span>
<span class="line"><span>输出仅保留专业有效信息，不添加客套、闲聊、多余解释文字</span></span>
<span class="line"><span>Mermaid 流程图里 [ ] 方括号内部不能再直接出现[], 内部再需要[] 用 \`&amp;#91;\` 和  \`&amp;#93;\` 代替</span></span>
<span class="line"><span></span></span>
<span class="line"><span>文档只包括如下四项内容，不要有其他</span></span>
<span class="line"><span>1.全量关联 API 接口明细总表：请求方法、入参、返回参数、接口业务用途，不需要详细的分表信息</span></span>
<span class="line"><span>2.顶层核心业务流程，附带 Mermaid 可渲染流程图</span></span>
<span class="line"><span>3.拆分全部细分的子业务流程，每一个子流程单独配备对应流程图</span></span>
<span class="line"><span>4.架构 &amp; 业务代码分析板块：梳理当前存在缺陷、潜在风险、性能问题，并给出对应的可优化方案</span></span></code></pre></div>`,17)]))}const u=a(i,[["render",l]]);export{g as __pageData,u as default};
