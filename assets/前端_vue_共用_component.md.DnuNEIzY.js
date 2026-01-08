import{_ as n,c as i,a2 as a,o as e}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"component","description":"","frontmatter":{},"headers":[],"relativePath":"前端/vue/共用/component.md","filePath":"前端/vue/共用/component.md","lastUpdated":1767767988000}'),t={name:"前端/vue/共用/component.md"};function p(l,s,o,h,E,k){return e(),i("div",null,s[0]||(s[0]=[a(`<h1 id="component" tabindex="-1">component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;component&quot;">​</a></h1><p>通过 <code>:is</code>绑定组件名或组件选项对象、支持所有 Vue 组件（包括异步组件）</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">component</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stepModuleMap[currentStep]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stepModuleRef&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import basicInformation from &#39;@/views/perfessionConstruct/components/personComponents/modules/basicInformation.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import careerOrientation from &#39;@/views/perfessionConstruct/components/personComponents/modules/careerOrientation.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import objectivesSpecifications from &#39;@/views/perfessionConstruct/components/personComponents/modules/objectivesSpecifications.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const { currentStep } = storeToRefs(aiPersonStore)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const stepModuleMap = ref({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  0: comp0,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  1: comp1,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  2: comp2,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 基础信息填写</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const comp0 = shallowRef(basicInformation)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 确定职业面向</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const comp1 = shallowRef(careerOrientation)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 确定培养目标与规格</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const comp2 = shallowRef(objectivesSpecifications)</span></span></code></pre></div>`,3)]))}const d=n(t,[["render",p]]);export{c as __pageData,d as default};
