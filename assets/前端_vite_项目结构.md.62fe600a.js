import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const p="/assets/image-20221118211643146.04430101.png",u=JSON.parse('{"title":"项目结构 --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"前端/vite/项目结构.md","filePath":"前端/vite/项目结构.md","lastUpdated":null}'),o={name:"前端/vite/项目结构.md"},e=l(`<h1 id="项目结构-笔记" tabindex="-1">项目结构 --笔记 <a class="header-anchor" href="#项目结构-笔记" aria-label="Permalink to &quot;项目结构 --笔记&quot;">​</a></h1><h2 id="一、-eslintrc-eslintignore" tabindex="-1">一、.eslintrc &amp; .eslintignore <a class="header-anchor" href="#一、-eslintrc-eslintignore" aria-label="Permalink to &quot;一、.eslintrc &amp; .eslintignore&quot;">​</a></h2><h3 id="eslintrc" tabindex="-1">.eslintrc <a class="header-anchor" href="#eslintrc" aria-label="Permalink to &quot;.eslintrc&quot;">​</a></h3><blockquote><p>该文件同package.json中添加eslintConfig属性相同</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">module.exports</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&quot;root&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#9ECBFF;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&quot;env&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">&quot;node&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&quot;extends&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">&quot;plugin:vue/essential&quot;</span><span style="color:#B392F0;">,</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">#启用 vue 的基础规则</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">&quot;eslint:recommended&quot;</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#启用 eslint 的推荐规则</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&quot;parserOptions&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">&quot;parser&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;babel-eslint&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#可对全部有效的babel代码进行lint处理。</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&quot;rules&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">module.exports</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&quot;root&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#032F62;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&quot;env&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">&quot;node&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&quot;extends&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">&quot;plugin:vue/essential&quot;</span><span style="color:#6F42C1;">,</span><span style="color:#24292E;">   </span><span style="color:#6A737D;">#启用 vue 的基础规则</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">&quot;eslint:recommended&quot;</span><span style="color:#24292E;">    </span><span style="color:#6A737D;">#启用 eslint 的推荐规则</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&quot;parserOptions&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">&quot;parser&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;babel-eslint&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">#可对全部有效的babel代码进行lint处理。</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&quot;rules&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span></code></pre></div><h3 id="eslintignore" tabindex="-1">.eslintignore <a class="header-anchor" href="#eslintignore" aria-label="Permalink to &quot;.eslintignore&quot;">​</a></h3><blockquote><p><code>.eslintignore</code> 文件是个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测。</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">/hello/*</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">开头有“/”，匹配相对于\`</span><span style="color:#B392F0;">.gitignore</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">文件本身的目录级别的。</span></span>
<span class="line"><span style="color:#B392F0;">hello/</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">结尾“/”，</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">匹配任意级别的hello目录下的所有目录（不包含文件）</span></span>
<span class="line"><span style="color:#B392F0;">hello.*</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">匹配以hello.开头的文件或者文件夹</span></span>
<span class="line"><span style="color:#B392F0;">hello/*</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">匹配hello目录下的所有目录和文件</span></span>
<span class="line"><span style="color:#F97583;">!</span><span style="color:#B392F0;">/foo/bar</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">排除目录</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo/bar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">之外的所有内容</span></span>
<span class="line"><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">/foo      // 前导 </span><span style="color:#9ECBFF;">&quot; \`</span><span style="color:#F97583;">**</span><span style="color:#9ECBFF;">\`&quot;</span><span style="color:#E1E4E8;">，在所有目录中匹配， 与foo相同</span></span>
<span class="line"><span style="color:#B392F0;">foo/**</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">尾随的“ \`</span><span style="color:#B392F0;">/**</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">”匹配里面的所有内容。匹配目录“ </span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">foo</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">”下的所有文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">例如：想忽略src下面的所有目录和文件，但除去src/views/hello目录。</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src/*</span><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">排除src目录下面所有的</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#B392F0;">src/views/</span><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">src/views下面所有的目录重新被包含回来</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src/views/*</span><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">排除</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">src/views下面所有的目录</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#B392F0;">src/views/hello/</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">src/views/hello下面所有的目录重新被包含回来</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">/hello/*</span><span style="color:#24292E;">    </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">开头有“/”，匹配相对于\`</span><span style="color:#6F42C1;">.gitignore</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">文件本身的目录级别的。</span></span>
<span class="line"><span style="color:#6F42C1;">hello/</span><span style="color:#24292E;">      </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">结尾“/”，</span><span style="color:#24292E;"> </span><span style="color:#032F62;">匹配任意级别的hello目录下的所有目录（不包含文件）</span></span>
<span class="line"><span style="color:#6F42C1;">hello.*</span><span style="color:#24292E;">     </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">匹配以hello.开头的文件或者文件夹</span></span>
<span class="line"><span style="color:#6F42C1;">hello/*</span><span style="color:#24292E;">     </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">匹配hello目录下的所有目录和文件</span></span>
<span class="line"><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">/foo/bar</span><span style="color:#24292E;">   </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">排除目录</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo/bar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">之外的所有内容</span></span>
<span class="line"><span style="color:#D73A49;">**</span><span style="color:#24292E;">/foo      // 前导 </span><span style="color:#032F62;">&quot; \`</span><span style="color:#D73A49;">**</span><span style="color:#032F62;">\`&quot;</span><span style="color:#24292E;">，在所有目录中匹配， 与foo相同</span></span>
<span class="line"><span style="color:#6F42C1;">foo/**</span><span style="color:#24292E;">      </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">尾随的“ \`</span><span style="color:#6F42C1;">/**</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">”匹配里面的所有内容。匹配目录“ </span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">foo</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">”下的所有文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">例如：想忽略src下面的所有目录和文件，但除去src/views/hello目录。</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src/*</span><span style="color:#24292E;">              </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">排除src目录下面所有的</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">src/views/</span><span style="color:#24292E;">        </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src/views下面所有的目录重新被包含回来</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src/views/*</span><span style="color:#24292E;">        </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">排除</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src/views下面所有的目录</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">src/views/hello/</span><span style="color:#24292E;">  </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src/views/hello下面所有的目录重新被包含回来</span></span></code></pre></div><p>demo</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">*.sh</span></span>
<span class="line"><span style="color:#e1e4e8;">node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">*.md</span></span>
<span class="line"><span style="color:#e1e4e8;">*.woff</span></span>
<span class="line"><span style="color:#e1e4e8;">*.ttf</span></span>
<span class="line"><span style="color:#e1e4e8;">.vscode</span></span>
<span class="line"><span style="color:#e1e4e8;">.idea</span></span>
<span class="line"><span style="color:#e1e4e8;">dist</span></span>
<span class="line"><span style="color:#e1e4e8;">/public</span></span>
<span class="line"><span style="color:#e1e4e8;">/docs</span></span>
<span class="line"><span style="color:#e1e4e8;">.husky</span></span>
<span class="line"><span style="color:#e1e4e8;">.local</span></span>
<span class="line"><span style="color:#e1e4e8;">/bin</span></span>
<span class="line"><span style="color:#e1e4e8;">Dockerfile</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">*.sh</span></span>
<span class="line"><span style="color:#24292e;">node_modules</span></span>
<span class="line"><span style="color:#24292e;">*.md</span></span>
<span class="line"><span style="color:#24292e;">*.woff</span></span>
<span class="line"><span style="color:#24292e;">*.ttf</span></span>
<span class="line"><span style="color:#24292e;">.vscode</span></span>
<span class="line"><span style="color:#24292e;">.idea</span></span>
<span class="line"><span style="color:#24292e;">dist</span></span>
<span class="line"><span style="color:#24292e;">/public</span></span>
<span class="line"><span style="color:#24292e;">/docs</span></span>
<span class="line"><span style="color:#24292e;">.husky</span></span>
<span class="line"><span style="color:#24292e;">.local</span></span>
<span class="line"><span style="color:#24292e;">/bin</span></span>
<span class="line"><span style="color:#24292e;">Dockerfile</span></span></code></pre></div><h2 id="二、prettier-config-js-prettierignore" tabindex="-1">二、prettier.config.js &amp; .prettierignore <a class="header-anchor" href="#二、prettier-config-js-prettierignore" aria-label="Permalink to &quot;二、prettier.config.js &amp; .prettierignore&quot;">​</a></h2><h3 id="prettier-config-js" tabindex="-1">prettier.config.js <a class="header-anchor" href="#prettier-config-js" aria-label="Permalink to &quot;prettier.config.js&quot;">​</a></h3><blockquote><p>prettier依赖的文件格式化标准</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  printWidth: </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  tabWidth: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useTabs: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  semi: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//语句末尾使用分号</span></span>
<span class="line"><span style="color:#E1E4E8;">  vueIndentScriptAndStyle: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  singleQuote: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用单引号</span></span>
<span class="line"><span style="color:#E1E4E8;">  quoteProps: </span><span style="color:#9ECBFF;">&#39;as-needed&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  bracketSpacing: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  trailingComma: </span><span style="color:#9ECBFF;">&#39;es5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  jsxBracketSameLine: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  jsxSingleQuote: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  arrowParens: </span><span style="color:#9ECBFF;">&#39;always&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  insertPragma: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  requirePragma: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  proseWrap: </span><span style="color:#9ECBFF;">&#39;never&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  htmlWhitespaceSensitivity: </span><span style="color:#9ECBFF;">&#39;strict&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  endOfLine: </span><span style="color:#9ECBFF;">&#39;auto&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  rangeStart: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  printWidth: </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  tabWidth: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  useTabs: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  semi: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//语句末尾使用分号</span></span>
<span class="line"><span style="color:#24292E;">  vueIndentScriptAndStyle: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  singleQuote: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用单引号</span></span>
<span class="line"><span style="color:#24292E;">  quoteProps: </span><span style="color:#032F62;">&#39;as-needed&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  bracketSpacing: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  trailingComma: </span><span style="color:#032F62;">&#39;es5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  jsxBracketSameLine: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  jsxSingleQuote: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  arrowParens: </span><span style="color:#032F62;">&#39;always&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  insertPragma: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  requirePragma: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  proseWrap: </span><span style="color:#032F62;">&#39;never&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  htmlWhitespaceSensitivity: </span><span style="color:#032F62;">&#39;strict&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  endOfLine: </span><span style="color:#032F62;">&#39;auto&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  rangeStart: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="prettierignore" tabindex="-1">.prettierignore <a class="header-anchor" href="#prettierignore" aria-label="Permalink to &quot;.prettierignore&quot;">​</a></h3><blockquote><p>不需要被格式化的代码</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/dist/*</span></span>
<span class="line"><span style="color:#e1e4e8;">.local</span></span>
<span class="line"><span style="color:#e1e4e8;">.output.js</span></span>
<span class="line"><span style="color:#e1e4e8;">/node_modules/**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**/*.svg</span></span>
<span class="line"><span style="color:#e1e4e8;">**/*.sh</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/public/*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/dist/*</span></span>
<span class="line"><span style="color:#24292e;">.local</span></span>
<span class="line"><span style="color:#24292e;">.output.js</span></span>
<span class="line"><span style="color:#24292e;">/node_modules/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">**/*.svg</span></span>
<span class="line"><span style="color:#24292e;">**/*.sh</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/public/*</span></span></code></pre></div><h2 id="三、stylelint-config-js-stylelintignore" tabindex="-1">三、stylelint.config.js &amp; .stylelintignore <a class="header-anchor" href="#三、stylelint-config-js-stylelintignore" aria-label="Permalink to &quot;三、stylelint.config.js &amp; .stylelintignore&quot;">​</a></h2><h3 id="stylelint-config-js" tabindex="-1">stylelint.config.js <a class="header-anchor" href="#stylelint-config-js" aria-label="Permalink to &quot;stylelint.config.js&quot;">​</a></h3><blockquote><p>样式校验</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  root: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#9ECBFF;">&#39;stylelint-order&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// scss项目在extends中加入&#39;stylelint-scss&#39;插件</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span><span style="color:#9ECBFF;">&#39;stylelint-config-standard&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;stylelint-config-rational-order&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  overrides: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      files: [</span><span style="color:#9ECBFF;">&quot;**/*.{html,vue}&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      customSyntax: </span><span style="color:#9ECBFF;">&quot;postcss-html&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      files: [</span><span style="color:#9ECBFF;">&quot;**/*.less&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      customSyntax: </span><span style="color:#9ECBFF;">&quot;postcss-less&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: { </span><span style="color:#6A737D;">// 覆盖stylelint-config-standard的配置 null为禁用规则</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;function-url-quotes&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 设置url(路径可不加引号)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;selector-class-pattern&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 设置类名选择器不遵循 kebab-case</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-descending-specificity&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//设置允许低优先级的选择器出现在高优先级的选择器之后</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-empty-source&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许文件内容为空</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;font-family-no-missing-generic-family-keyword&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 设置允许定义非&quot;generic-family&quot;风格字体</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//  &#39;order/properties-order&#39;: []    // 设置css属性书写顺序，会覆盖stylelint-config-rational-order</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  root: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#032F62;">&#39;stylelint-order&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// scss项目在extends中加入&#39;stylelint-scss&#39;插件</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span><span style="color:#032F62;">&#39;stylelint-config-standard&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;stylelint-config-rational-order&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  overrides: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      files: [</span><span style="color:#032F62;">&quot;**/*.{html,vue}&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      customSyntax: </span><span style="color:#032F62;">&quot;postcss-html&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      files: [</span><span style="color:#032F62;">&quot;**/*.less&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      customSyntax: </span><span style="color:#032F62;">&quot;postcss-less&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  rules: { </span><span style="color:#6A737D;">// 覆盖stylelint-config-standard的配置 null为禁用规则</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;function-url-quotes&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 设置url(路径可不加引号)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;selector-class-pattern&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 设置类名选择器不遵循 kebab-case</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-descending-specificity&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//设置允许低优先级的选择器出现在高优先级的选择器之后</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-empty-source&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许文件内容为空</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;font-family-no-missing-generic-family-keyword&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 设置允许定义非&quot;generic-family&quot;风格字体</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//  &#39;order/properties-order&#39;: []    // 设置css属性书写顺序，会覆盖stylelint-config-rational-order</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="stylelintignore" tabindex="-1">.stylelintignore <a class="header-anchor" href="#stylelintignore" aria-label="Permalink to &quot;.stylelintignore&quot;">​</a></h3><blockquote><p>忽略不需要打包的样式库</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/dist/*</span></span>
<span class="line"><span style="color:#e1e4e8;">/public/*</span></span>
<span class="line"><span style="color:#e1e4e8;">public/*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/dist/*</span></span>
<span class="line"><span style="color:#24292e;">/public/*</span></span>
<span class="line"><span style="color:#24292e;">public/*</span></span></code></pre></div><h2 id="四、-yarnclean" tabindex="-1">四、.yarnclean <a class="header-anchor" href="#四、-yarnclean" aria-label="Permalink to &quot;四、.yarnclean&quot;">​</a></h2><blockquote><p>用于自动（永久）清除不需要的依赖包</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># test directories</span></span>
<span class="line"><span style="color:#B392F0;">__tests__</span></span>
<span class="line"><span style="color:#79B8FF;">test</span></span>
<span class="line"><span style="color:#B392F0;">tests</span></span>
<span class="line"><span style="color:#B392F0;">powered-test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># asset directories</span></span>
<span class="line"><span style="color:#B392F0;">docs</span></span>
<span class="line"><span style="color:#B392F0;">doc</span></span>
<span class="line"><span style="color:#B392F0;">website</span></span>
<span class="line"><span style="color:#B392F0;">images</span></span>
<span class="line"><span style="color:#B392F0;">assets</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># examples</span></span>
<span class="line"><span style="color:#B392F0;">example</span></span>
<span class="line"><span style="color:#B392F0;">examples</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># code coverage directories</span></span>
<span class="line"><span style="color:#B392F0;">coverage</span></span>
<span class="line"><span style="color:#B392F0;">.nyc_output</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># build scripts</span></span>
<span class="line"><span style="color:#B392F0;">Makefile</span></span>
<span class="line"><span style="color:#B392F0;">Gulpfile.js</span></span>
<span class="line"><span style="color:#B392F0;">Gruntfile.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># configs</span></span>
<span class="line"><span style="color:#B392F0;">appveyor.yml</span></span>
<span class="line"><span style="color:#B392F0;">circle.yml</span></span>
<span class="line"><span style="color:#B392F0;">codeship-services.yml</span></span>
<span class="line"><span style="color:#B392F0;">codeship-steps.yml</span></span>
<span class="line"><span style="color:#B392F0;">wercker.yml</span></span>
<span class="line"><span style="color:#B392F0;">.tern-project</span></span>
<span class="line"><span style="color:#B392F0;">.gitattributes</span></span>
<span class="line"><span style="color:#B392F0;">.editorconfig</span></span>
<span class="line"><span style="color:#79B8FF;">.</span><span style="color:#E1E4E8;">*ignore</span></span>
<span class="line"><span style="color:#B392F0;">.eslintrc</span></span>
<span class="line"><span style="color:#B392F0;">.jshintrc</span></span>
<span class="line"><span style="color:#B392F0;">.flowconfig</span></span>
<span class="line"><span style="color:#B392F0;">.documentup.json</span></span>
<span class="line"><span style="color:#B392F0;">.yarn-metadata.json</span></span>
<span class="line"><span style="color:#B392F0;">.travis.yml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># misc</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">!</span><span style="color:#B392F0;">istanbul-reports/lib/html/assets</span></span>
<span class="line"><span style="color:#F97583;">!</span><span style="color:#B392F0;">istanbul-api/node_modules/istanbul-reports/lib/html/assets</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># test directories</span></span>
<span class="line"><span style="color:#6F42C1;">__tests__</span></span>
<span class="line"><span style="color:#005CC5;">test</span></span>
<span class="line"><span style="color:#6F42C1;">tests</span></span>
<span class="line"><span style="color:#6F42C1;">powered-test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># asset directories</span></span>
<span class="line"><span style="color:#6F42C1;">docs</span></span>
<span class="line"><span style="color:#6F42C1;">doc</span></span>
<span class="line"><span style="color:#6F42C1;">website</span></span>
<span class="line"><span style="color:#6F42C1;">images</span></span>
<span class="line"><span style="color:#6F42C1;">assets</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># examples</span></span>
<span class="line"><span style="color:#6F42C1;">example</span></span>
<span class="line"><span style="color:#6F42C1;">examples</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># code coverage directories</span></span>
<span class="line"><span style="color:#6F42C1;">coverage</span></span>
<span class="line"><span style="color:#6F42C1;">.nyc_output</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># build scripts</span></span>
<span class="line"><span style="color:#6F42C1;">Makefile</span></span>
<span class="line"><span style="color:#6F42C1;">Gulpfile.js</span></span>
<span class="line"><span style="color:#6F42C1;">Gruntfile.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># configs</span></span>
<span class="line"><span style="color:#6F42C1;">appveyor.yml</span></span>
<span class="line"><span style="color:#6F42C1;">circle.yml</span></span>
<span class="line"><span style="color:#6F42C1;">codeship-services.yml</span></span>
<span class="line"><span style="color:#6F42C1;">codeship-steps.yml</span></span>
<span class="line"><span style="color:#6F42C1;">wercker.yml</span></span>
<span class="line"><span style="color:#6F42C1;">.tern-project</span></span>
<span class="line"><span style="color:#6F42C1;">.gitattributes</span></span>
<span class="line"><span style="color:#6F42C1;">.editorconfig</span></span>
<span class="line"><span style="color:#005CC5;">.</span><span style="color:#24292E;">*ignore</span></span>
<span class="line"><span style="color:#6F42C1;">.eslintrc</span></span>
<span class="line"><span style="color:#6F42C1;">.jshintrc</span></span>
<span class="line"><span style="color:#6F42C1;">.flowconfig</span></span>
<span class="line"><span style="color:#6F42C1;">.documentup.json</span></span>
<span class="line"><span style="color:#6F42C1;">.yarn-metadata.json</span></span>
<span class="line"><span style="color:#6F42C1;">.travis.yml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># misc</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;">.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">istanbul-reports/lib/html/assets</span></span>
<span class="line"><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">istanbul-api/node_modules/istanbul-reports/lib/html/assets</span></span></code></pre></div><h2 id="五、commitlint-config-js" tabindex="-1">五、commitlint.config.js <a class="header-anchor" href="#五、commitlint-config-js" aria-label="Permalink to &quot;五、commitlint.config.js&quot;">​</a></h2><blockquote><p><code>husky</code>：简单认为他就是一个在你提交代码的时候进行格式校验的工具，git提交之前是提供了一些步骤供我们选择和拦截的,husky就是进行了gitcommit阶段进行拦截提交规范的一个工具,他结合<code>commitlint</code>可以对我们代码提交进行一个格式校验,保证我们代码提交的规范性和统一性,为后面的代码管理提供帮助!</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  ignores: [(</span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> commit.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;init&#39;</span><span style="color:#E1E4E8;">)],</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span><span style="color:#9ECBFF;">&#39;@commitlint/config-conventional&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;body-leading-blank&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;always&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;footer-leading-blank&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;always&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;header-max-length&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;always&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">108</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;subject-empty&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;never&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;type-empty&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;never&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;type-enum&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;always&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;feat&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;fix&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;perf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;style&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;docs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;test&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;refactor&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;build&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;ci&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;chore&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;revert&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;wip&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;workflow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;types&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;release&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  ignores: [(</span><span style="color:#E36209;">commit</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> commit.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;init&#39;</span><span style="color:#24292E;">)],</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span><span style="color:#032F62;">&#39;@commitlint/config-conventional&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  rules: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;body-leading-blank&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;always&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;footer-leading-blank&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;always&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;header-max-length&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;always&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">108</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;subject-empty&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;never&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;type-empty&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;never&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;type-enum&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;always&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;feat&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;fix&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;perf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;style&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;docs&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;test&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;refactor&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;build&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;ci&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;chore&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;revert&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;wip&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;workflow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;types&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;release&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="六、jest-config-mjs" tabindex="-1">六、jest.config.mjs <a class="header-anchor" href="#六、jest-config-mjs" aria-label="Permalink to &quot;六、jest.config.mjs&quot;">​</a></h2><blockquote><p>自动化测试代码：上线之前对它进行测试，而这些测试不是人肉的去点击，而是通过已经写好的代码去运行</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  preset: </span><span style="color:#9ECBFF;">&#39;ts-jest&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  roots: [</span><span style="color:#9ECBFF;">&#39;&lt;rootDir&gt;/tests/&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  clearMocks: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  moduleDirectories: [</span><span style="color:#9ECBFF;">&#39;node_modules&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  moduleFileExtensions: [</span><span style="color:#9ECBFF;">&#39;js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;ts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;tsx&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;jsx&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;node&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  modulePaths: [</span><span style="color:#9ECBFF;">&#39;&lt;rootDir&gt;/src&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&lt;rootDir&gt;/node_modules&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  testMatch: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;**/tests/**/*.[jt]s?(x)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;**/?(*.)+(spec|test).[tj]s?(x)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;(/__tests__/.*|(</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">.|/)(test|spec))</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">.(js|ts)$&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  testPathIgnorePatterns: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;&lt;rootDir&gt;/tests/server/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;&lt;rootDir&gt;/tests/__mocks__/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;/node_modules/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  transform: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;^.+</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">.tsx?$&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;ts-jest&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  transformIgnorePatterns: [</span><span style="color:#9ECBFF;">&#39;&lt;rootDir&gt;/tests/__mocks__/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/node_modules/&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// A map from regular expressions to module names that allow to stub out resources with a single module</span></span>
<span class="line"><span style="color:#E1E4E8;">  moduleNameMapper: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">.(vs|fs|vert|frag|glsl|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;&lt;rootDir&gt;/tests/__mocks__/fileMock.ts&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">.(sass|s?css|less)$&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&lt;rootDir&gt;/tests/__mocks__/styleMock.ts&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">?worker$&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&lt;rootDir&gt;/tests/__mocks__/workerMock.ts&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;^/@/(.*)$&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&lt;rootDir&gt;/src/$1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  testEnvironment: </span><span style="color:#9ECBFF;">&#39;jsdom&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  verbose: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  collectCoverage: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  coverageDirectory: </span><span style="color:#9ECBFF;">&#39;coverage&#39;</span><span style="color:#E1E4E8;">,   </span><span style="color:#6A737D;">//自动化测试结果的报告目录</span></span>
<span class="line"><span style="color:#E1E4E8;">  collectCoverageFrom: [</span><span style="color:#9ECBFF;">&#39;src/**/*.{js,ts,vue}&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  coveragePathIgnorePatterns: [</span><span style="color:#9ECBFF;">&#39;^.+</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">.d</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">.ts$&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  preset: </span><span style="color:#032F62;">&#39;ts-jest&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  roots: [</span><span style="color:#032F62;">&#39;&lt;rootDir&gt;/tests/&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  clearMocks: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  moduleDirectories: [</span><span style="color:#032F62;">&#39;node_modules&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;src&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  moduleFileExtensions: [</span><span style="color:#032F62;">&#39;js&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;ts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;tsx&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;jsx&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;node&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  modulePaths: [</span><span style="color:#032F62;">&#39;&lt;rootDir&gt;/src&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&lt;rootDir&gt;/node_modules&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  testMatch: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;**/tests/**/*.[jt]s?(x)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;**/?(*.)+(spec|test).[tj]s?(x)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;(/__tests__/.*|(</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">.|/)(test|spec))</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">.(js|ts)$&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  testPathIgnorePatterns: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;&lt;rootDir&gt;/tests/server/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;&lt;rootDir&gt;/tests/__mocks__/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;/node_modules/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  transform: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;^.+</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">.tsx?$&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;ts-jest&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  transformIgnorePatterns: [</span><span style="color:#032F62;">&#39;&lt;rootDir&gt;/tests/__mocks__/&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;/node_modules/&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// A map from regular expressions to module names that allow to stub out resources with a single module</span></span>
<span class="line"><span style="color:#24292E;">  moduleNameMapper: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">.(vs|fs|vert|frag|glsl|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;&lt;rootDir&gt;/tests/__mocks__/fileMock.ts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">.(sass|s?css|less)$&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&lt;rootDir&gt;/tests/__mocks__/styleMock.ts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">?worker$&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&lt;rootDir&gt;/tests/__mocks__/workerMock.ts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;^/@/(.*)$&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&lt;rootDir&gt;/src/$1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  testEnvironment: </span><span style="color:#032F62;">&#39;jsdom&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  verbose: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  collectCoverage: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  coverageDirectory: </span><span style="color:#032F62;">&#39;coverage&#39;</span><span style="color:#24292E;">,   </span><span style="color:#6A737D;">//自动化测试结果的报告目录</span></span>
<span class="line"><span style="color:#24292E;">  collectCoverageFrom: [</span><span style="color:#032F62;">&#39;src/**/*.{js,ts,vue}&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  coveragePathIgnorePatterns: [</span><span style="color:#032F62;">&#39;^.+</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">.d</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">.ts$&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p><img src="`+p+`" alt="image-20221118211643146"></p><h2 id="七、windicss" tabindex="-1">七、windicss <a class="header-anchor" href="#七、windicss" aria-label="Permalink to &quot;七、windicss&quot;">​</a></h2><blockquote><p>css处理 &amp; 移动端适配</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite-plugin-windicss&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { primaryColor } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./build/config/themeConfig&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  darkMode: </span><span style="color:#9ECBFF;">&#39;class&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#B392F0;">createEnterPlugin</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">  theme: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    extend: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      zIndex: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;-1&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      colors: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        primary: primaryColor,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      screens: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        sm: </span><span style="color:#9ECBFF;">&#39;576px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        md: </span><span style="color:#9ECBFF;">&#39;768px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lg: </span><span style="color:#9ECBFF;">&#39;992px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        xl: </span><span style="color:#9ECBFF;">&#39;1200px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;2xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;1600px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Used for animation when the element is displayed</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">maxOutput</span><span style="color:#6A737D;"> The larger the maxOutput output, the larger the generated css volume</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createEnterPlugin</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">maxOutput</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createCss</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">index</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">d</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">upd</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> d.</span><span style="color:#B392F0;">toUpperCase</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#9ECBFF;">\`*&gt; .enter-\${</span><span style="color:#E1E4E8;">d</span><span style="color:#9ECBFF;">}:nth-child(\${</span><span style="color:#E1E4E8;">index</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">]: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        transform: </span><span style="color:#9ECBFF;">\`translate\${</span><span style="color:#E1E4E8;">upd</span><span style="color:#9ECBFF;">}(50px)\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#9ECBFF;">\`*&gt; .-enter-\${</span><span style="color:#E1E4E8;">d</span><span style="color:#9ECBFF;">}:nth-child(\${</span><span style="color:#E1E4E8;">index</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">]: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        transform: </span><span style="color:#9ECBFF;">\`translate\${</span><span style="color:#E1E4E8;">upd</span><span style="color:#9ECBFF;">}(-50px)\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#9ECBFF;">\`* &gt; .enter-\${</span><span style="color:#E1E4E8;">d</span><span style="color:#9ECBFF;">}:nth-child(\${</span><span style="color:#E1E4E8;">index</span><span style="color:#9ECBFF;">}),* &gt; .-enter-\${</span><span style="color:#E1E4E8;">d</span><span style="color:#9ECBFF;">}:nth-child(\${</span><span style="color:#E1E4E8;">index</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">]: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;z-index&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">-</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">index</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        opacity: </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        animation: </span><span style="color:#9ECBFF;">\`enter-\${</span><span style="color:#E1E4E8;">d</span><span style="color:#9ECBFF;">}-animation 0.4s ease-in-out 0.3s\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;animation-fill-mode&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;forwards&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;animation-delay&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">index</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">*</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">) </span><span style="color:#F97583;">/</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">}s\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handler</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">addBase</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">addRawCss</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; index </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> maxOutput; index</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(addRawCss, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">createCss</span><span style="color:#E1E4E8;">(index, </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">createCss</span><span style="color:#E1E4E8;">(index, </span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">addBase</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">addRawCss,</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#9ECBFF;">\`@keyframes enter-x-animation\`</span><span style="color:#E1E4E8;">]: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        to: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          opacity: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          transform: </span><span style="color:#9ECBFF;">&#39;translateX(0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#9ECBFF;">\`@keyframes enter-y-animation\`</span><span style="color:#E1E4E8;">]: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        to: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          opacity: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          transform: </span><span style="color:#9ECBFF;">&#39;translateY(0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> { handler };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite-plugin-windicss&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { primaryColor } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./build/config/themeConfig&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  darkMode: </span><span style="color:#032F62;">&#39;class&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#6F42C1;">createEnterPlugin</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">  theme: {</span></span>
<span class="line"><span style="color:#24292E;">    extend: {</span></span>
<span class="line"><span style="color:#24292E;">      zIndex: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;-1&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      colors: {</span></span>
<span class="line"><span style="color:#24292E;">        primary: primaryColor,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      screens: {</span></span>
<span class="line"><span style="color:#24292E;">        sm: </span><span style="color:#032F62;">&#39;576px&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        md: </span><span style="color:#032F62;">&#39;768px&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        lg: </span><span style="color:#032F62;">&#39;992px&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        xl: </span><span style="color:#032F62;">&#39;1200px&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;2xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;1600px&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Used for animation when the element is displayed</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">maxOutput</span><span style="color:#6A737D;"> The larger the maxOutput output, the larger the generated css volume</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createEnterPlugin</span><span style="color:#24292E;">(</span><span style="color:#E36209;">maxOutput</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createCss</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">index</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">d</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;x&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">upd</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> d.</span><span style="color:#6F42C1;">toUpperCase</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      [</span><span style="color:#032F62;">\`*&gt; .enter-\${</span><span style="color:#24292E;">d</span><span style="color:#032F62;">}:nth-child(\${</span><span style="color:#24292E;">index</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">]: {</span></span>
<span class="line"><span style="color:#24292E;">        transform: </span><span style="color:#032F62;">\`translate\${</span><span style="color:#24292E;">upd</span><span style="color:#032F62;">}(50px)\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      [</span><span style="color:#032F62;">\`*&gt; .-enter-\${</span><span style="color:#24292E;">d</span><span style="color:#032F62;">}:nth-child(\${</span><span style="color:#24292E;">index</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">]: {</span></span>
<span class="line"><span style="color:#24292E;">        transform: </span><span style="color:#032F62;">\`translate\${</span><span style="color:#24292E;">upd</span><span style="color:#032F62;">}(-50px)\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      [</span><span style="color:#032F62;">\`* &gt; .enter-\${</span><span style="color:#24292E;">d</span><span style="color:#032F62;">}:nth-child(\${</span><span style="color:#24292E;">index</span><span style="color:#032F62;">}),* &gt; .-enter-\${</span><span style="color:#24292E;">d</span><span style="color:#032F62;">}:nth-child(\${</span><span style="color:#24292E;">index</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">]: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;z-index&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\`\${</span><span style="color:#005CC5;">10</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">-</span><span style="color:#032F62;"> </span><span style="color:#24292E;">index</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        opacity: </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        animation: </span><span style="color:#032F62;">\`enter-\${</span><span style="color:#24292E;">d</span><span style="color:#032F62;">}-animation 0.4s ease-in-out 0.3s\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;animation-fill-mode&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;forwards&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;animation-delay&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\`\${</span><span style="color:#032F62;">(</span><span style="color:#24292E;">index</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">*</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">1</span><span style="color:#032F62;">) </span><span style="color:#D73A49;">/</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">}s\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">addBase</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">addRawCss</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; index </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> maxOutput; index</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(addRawCss, {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">createCss</span><span style="color:#24292E;">(index, </span><span style="color:#032F62;">&#39;x&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">createCss</span><span style="color:#24292E;">(index, </span><span style="color:#032F62;">&#39;y&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">addBase</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">addRawCss,</span></span>
<span class="line"><span style="color:#24292E;">      [</span><span style="color:#032F62;">\`@keyframes enter-x-animation\`</span><span style="color:#24292E;">]: {</span></span>
<span class="line"><span style="color:#24292E;">        to: {</span></span>
<span class="line"><span style="color:#24292E;">          opacity: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          transform: </span><span style="color:#032F62;">&#39;translateX(0)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      [</span><span style="color:#032F62;">\`@keyframes enter-y-animation\`</span><span style="color:#24292E;">]: {</span></span>
<span class="line"><span style="color:#24292E;">        to: {</span></span>
<span class="line"><span style="color:#24292E;">          opacity: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          transform: </span><span style="color:#032F62;">&#39;translateY(0)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> { handler };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="八、vite-config-ts-tsconfig-json" tabindex="-1">八、vite.config.ts &amp; tsconfig.json <a class="header-anchor" href="#八、vite-config-ts-tsconfig-json" aria-label="Permalink to &quot;八、vite.config.ts &amp; tsconfig.json&quot;">​</a></h2><h3 id="vite-config-ts" tabindex="-1">vite.config.ts <a class="header-anchor" href="#vite-config-ts" aria-label="Permalink to &quot;vite.config.ts&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//全局配置Vite的插件、服务及别名</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { UserConfig, ConfigEnv } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pkg </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./package.json&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> dayjs </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;dayjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { loadEnv } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { resolve } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">//require(&#39;vue-jeecg-plugs/packages/utils&#39;)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { generateModifyVars } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./build/generate/generateModifyVars&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createProxy } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./build/vite/proxy&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { wrapperEnv } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./build/utils&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createVitePlugins } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./build/vite/plugin&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { OUTPUT_DIR } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./build/constant&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pathResolve</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dir</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">, dir);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">dependencies</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">devDependencies</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">version</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pkg;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__APP_INFO__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  pkg: { dependencies, devDependencies, name, version },</span></span>
<span class="line"><span style="color:#E1E4E8;">  lastBuildTime: </span><span style="color:#B392F0;">dayjs</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;YYYY-MM-DD HH:mm:ss&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">mode</span><span style="color:#E1E4E8;"> }</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ConfigEnv</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UserConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">env</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadEnv</span><span style="color:#E1E4E8;">(mode, root);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// The boolean type read by loadEnv is a string. This function can be converted to boolean type</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">viteEnv</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wrapperEnv</span><span style="color:#E1E4E8;">(env);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">VITE_PORT</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">VITE_PUBLIC_PATH</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">VITE_PROXY</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">VITE_DROP_CONSOLE</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viteEnv;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isBuild</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> command </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;build&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    base: </span><span style="color:#79B8FF;">VITE_PUBLIC_PATH</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    root,</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      alias: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          find: </span><span style="color:#9ECBFF;">&#39;vue-i18n&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          replacement: </span><span style="color:#9ECBFF;">&#39;vue-i18n/dist/vue-i18n.cjs.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// /@/xxxx =&gt; src/xxxx</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          find:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">@</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          replacement: </span><span style="color:#B392F0;">pathResolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// /#/xxxx =&gt; types/xxxx</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          find:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">#</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          replacement: </span><span style="color:#B392F0;">pathResolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;types&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Listening on all local IPs</span></span>
<span class="line"><span style="color:#E1E4E8;">      host: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      https: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      port: </span><span style="color:#79B8FF;">VITE_PORT</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Load proxy configuration from .env</span></span>
<span class="line"><span style="color:#E1E4E8;">      proxy: </span><span style="color:#B392F0;">createProxy</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">VITE_PROXY</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      minify: </span><span style="color:#9ECBFF;">&#39;terser&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 进行压缩计算</span></span>
<span class="line"><span style="color:#E1E4E8;">      brotliSize: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      target: </span><span style="color:#9ECBFF;">&#39;es2015&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 【VUEN-872】css编译兼容低版本chrome内核（例如360浏览器）</span></span>
<span class="line"><span style="color:#E1E4E8;">      cssTarget: </span><span style="color:#9ECBFF;">&#39;chrome80&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      outDir: </span><span style="color:#79B8FF;">OUTPUT_DIR</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      terserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        compress: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          keep_infinity: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// Used to delete console in production environment</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 打包自动删除console</span></span>
<span class="line"><span style="color:#E1E4E8;">          drop_console: </span><span style="color:#79B8FF;">VITE_DROP_CONSOLE</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          drop_debugger: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Turning off brotliSize display can slightly reduce packaging time</span></span>
<span class="line"><span style="color:#E1E4E8;">      chunkSizeWarningLimit: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    define: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// setting vue-i18-next</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Suppress warning</span></span>
<span class="line"><span style="color:#E1E4E8;">      __INTLIFY_PROD_DEVTOOLS__: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      __APP_INFO__: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(__APP_INFO__),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    css: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      preprocessorOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        less: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          modifyVars: </span><span style="color:#B392F0;">generateModifyVars</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">          javascriptEnabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// The vite plugin used by the project. The quantity is large, so it is separately extracted and managed</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: </span><span style="color:#B392F0;">createVitePlugins</span><span style="color:#E1E4E8;">(viteEnv, isBuild),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    optimizeDeps: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      esbuildOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: </span><span style="color:#9ECBFF;">&#39;es2020&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// @iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly</span></span>
<span class="line"><span style="color:#E1E4E8;">      include: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;@vue/runtime-core&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;@vue/shared&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;@iconify/iconify&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;ant-design-vue/es/locale/zh_CN&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;ant-design-vue/es/locale/en_US&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//全局配置Vite的插件、服务及别名</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { UserConfig, ConfigEnv } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pkg </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./package.json&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> dayjs </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;dayjs&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { loadEnv } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { resolve } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//require(&#39;vue-jeecg-plugs/packages/utils&#39;)</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { generateModifyVars } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./build/generate/generateModifyVars&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createProxy } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./build/vite/proxy&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { wrapperEnv } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./build/utils&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createVitePlugins } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./build/vite/plugin&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { OUTPUT_DIR } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./build/constant&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pathResolve</span><span style="color:#24292E;">(</span><span style="color:#E36209;">dir</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(process.</span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">(), </span><span style="color:#032F62;">&#39;.&#39;</span><span style="color:#24292E;">, dir);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">dependencies</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">devDependencies</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">name</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">version</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pkg;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__APP_INFO__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  pkg: { dependencies, devDependencies, name, version },</span></span>
<span class="line"><span style="color:#24292E;">  lastBuildTime: </span><span style="color:#6F42C1;">dayjs</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">format</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;YYYY-MM-DD HH:mm:ss&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">command</span><span style="color:#24292E;">, </span><span style="color:#E36209;">mode</span><span style="color:#24292E;"> }</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ConfigEnv</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">root</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> process.</span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">env</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadEnv</span><span style="color:#24292E;">(mode, root);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// The boolean type read by loadEnv is a string. This function can be converted to boolean type</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">viteEnv</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wrapperEnv</span><span style="color:#24292E;">(env);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">VITE_PORT</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">VITE_PUBLIC_PATH</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">VITE_PROXY</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">VITE_DROP_CONSOLE</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viteEnv;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isBuild</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> command </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;build&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    base: </span><span style="color:#005CC5;">VITE_PUBLIC_PATH</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    root,</span></span>
<span class="line"><span style="color:#24292E;">    resolve: {</span></span>
<span class="line"><span style="color:#24292E;">      alias: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          find: </span><span style="color:#032F62;">&#39;vue-i18n&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          replacement: </span><span style="color:#032F62;">&#39;vue-i18n/dist/vue-i18n.cjs.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// /@/xxxx =&gt; src/xxxx</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          find:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\/</span><span style="color:#032F62;">@</span><span style="color:#22863A;font-weight:bold;">\\/</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          replacement: </span><span style="color:#6F42C1;">pathResolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;src&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// /#/xxxx =&gt; types/xxxx</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          find:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\/</span><span style="color:#032F62;">#</span><span style="color:#22863A;font-weight:bold;">\\/</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          replacement: </span><span style="color:#6F42C1;">pathResolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;types&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    server: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Listening on all local IPs</span></span>
<span class="line"><span style="color:#24292E;">      host: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      https: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      port: </span><span style="color:#005CC5;">VITE_PORT</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Load proxy configuration from .env</span></span>
<span class="line"><span style="color:#24292E;">      proxy: </span><span style="color:#6F42C1;">createProxy</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">VITE_PROXY</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    build: {</span></span>
<span class="line"><span style="color:#24292E;">      minify: </span><span style="color:#032F62;">&#39;terser&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 进行压缩计算</span></span>
<span class="line"><span style="color:#24292E;">      brotliSize: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      target: </span><span style="color:#032F62;">&#39;es2015&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 【VUEN-872】css编译兼容低版本chrome内核（例如360浏览器）</span></span>
<span class="line"><span style="color:#24292E;">      cssTarget: </span><span style="color:#032F62;">&#39;chrome80&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      outDir: </span><span style="color:#005CC5;">OUTPUT_DIR</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      terserOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        compress: {</span></span>
<span class="line"><span style="color:#24292E;">          keep_infinity: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// Used to delete console in production environment</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 打包自动删除console</span></span>
<span class="line"><span style="color:#24292E;">          drop_console: </span><span style="color:#005CC5;">VITE_DROP_CONSOLE</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          drop_debugger: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Turning off brotliSize display can slightly reduce packaging time</span></span>
<span class="line"><span style="color:#24292E;">      chunkSizeWarningLimit: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    define: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// setting vue-i18-next</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Suppress warning</span></span>
<span class="line"><span style="color:#24292E;">      __INTLIFY_PROD_DEVTOOLS__: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      __APP_INFO__: </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(__APP_INFO__),</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    css: {</span></span>
<span class="line"><span style="color:#24292E;">      preprocessorOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        less: {</span></span>
<span class="line"><span style="color:#24292E;">          modifyVars: </span><span style="color:#6F42C1;">generateModifyVars</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">          javascriptEnabled: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// The vite plugin used by the project. The quantity is large, so it is separately extracted and managed</span></span>
<span class="line"><span style="color:#24292E;">    plugins: </span><span style="color:#6F42C1;">createVitePlugins</span><span style="color:#24292E;">(viteEnv, isBuild),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    optimizeDeps: {</span></span>
<span class="line"><span style="color:#24292E;">      esbuildOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        target: </span><span style="color:#032F62;">&#39;es2020&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// @iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly</span></span>
<span class="line"><span style="color:#24292E;">      include: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;@vue/runtime-core&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;@vue/shared&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;@iconify/iconify&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;ant-design-vue/es/locale/zh_CN&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;ant-design-vue/es/locale/en_US&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="tsconfig-json" tabindex="-1">tsconfig.json <a class="header-anchor" href="#tsconfig-json" aria-label="Permalink to &quot;tsconfig.json&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//用于typescript配置，如识别别名路径</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//用于typescript配置，如识别别名路径</span></span></code></pre></div>`,42),c=[e];function t(r,E,y,i,F,d){return n(),a("div",null,c)}const g=s(o,[["render",t]]);export{u as __pageData,g as default};
