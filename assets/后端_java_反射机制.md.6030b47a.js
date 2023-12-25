import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const p="/assets/image-20231130104405728.ffb83c91.png",o="/assets/image-20231130104504771.a54acdcd.png",e="/assets/image-20231130112657815.5b47d0ad.png",t="/assets/image-20231130124817869.6f519162.png",c="/assets/image-20231130125748229.788f653a.png",r="/assets/image-20231130132820553.612e362d.png",E="/assets/image-20231130132829578.eb15e7c4.png",y="/assets/image-20231130134217847.40e86320.png",i="/assets/image-20231130135047206.e3821d9b.png",F="/assets/image-20231130135957848.64381a70.png",u="/assets/image-20231130140006774.ea9cdc61.png",d="/assets/image-20231130142759941.1fd01da8.png",S=JSON.parse('{"title":"反射机制 --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"后端/java/反射机制.md","filePath":"后端/java/反射机制.md","lastUpdated":null}'),A={name:"后端/java/反射机制.md"},g=l('<h1 id="反射机制-笔记" tabindex="-1">反射机制 --笔记 <a class="header-anchor" href="#反射机制-笔记" aria-label="Permalink to &quot;反射机制 --笔记&quot;">​</a></h1><h2 id="一、反射-reflection-的概念" tabindex="-1">一、反射(Reflection)的概念 <a class="header-anchor" href="#一、反射-reflection-的概念" aria-label="Permalink to &quot;一、反射(Reflection)的概念&quot;">​</a></h2><h3 id="_1-1-反射的出现背景" tabindex="-1">1.1 反射的出现背景 <a class="header-anchor" href="#_1-1-反射的出现背景" aria-label="Permalink to &quot;1.1 反射的出现背景&quot;">​</a></h3><p>Java程序中，所有的对象都有两种类型：<code>编译时类型</code>和<code>运行时类型</code>，而很多时候对象的编译时类型和运行时类型<code>不一致</code>。 Object obj = new String(&quot;hello&quot;); obj.getClass()</p><p>例如：某些变量或形参的声明类型是Object类型，但是程序却需要调用该对象运行时类型的方法，该方法不是Object中的方法，那么如何解决呢？</p><p>解决这个问题，有两种方案：</p><p>方案1：在编译和运行时都完全知道类型的具体信息，在这种情况下，我们可以直接先使用<code>instanceof</code>运算符进行判断，再利用强制类型转换符将其转换成运行时类型的变量即可。</p><p>方案2：编译时根本无法预知该对象和类的真实信息，程序只能依靠<code>运行时信息</code>来发现该对象和类的真实信息，这就必须使用反射。</p><h3 id="_1-2-反射概述" tabindex="-1">1.2 反射概述 <a class="header-anchor" href="#_1-2-反射概述" aria-label="Permalink to &quot;1.2 反射概述&quot;">​</a></h3><p>Reflection（反射）是被视为<code>动态语言</code>的关键，反射机制允许程序在<code>运行期间</code>借助于Reflection API取得任何类的内部信息，并能直接操作任意对象的内部属性及方法。</p><p>加载完类之后，在堆内存的方法区中就产生了一个Class类型的对象（一个类只有一个Class对象），这个对象就包含了完整的类的结构信息。我们可以通过这个对象看到类的结构。<code>这个对象就像一面镜子，透过这个镜子看到类的结构，所以，我们形象的称之为：反射。</code></p><p><img src="'+p+'" alt="image-20231130104405728"></p><p><strong>从内存加载上看反射：</strong></p><p><img src="'+o+'" alt="image-20231130104504771"></p><h3 id="_1-3-java反射机制研究及应用" tabindex="-1">1.3 Java反射机制研究及应用 <a class="header-anchor" href="#_1-3-java反射机制研究及应用" aria-label="Permalink to &quot;1.3  Java反射机制研究及应用&quot;">​</a></h3><p>Java反射机制提供的功能：</p><ul><li>在运行时判断任意一个对象所属的类</li><li>在运行时构造任意一个类的对象</li><li>在运行时判断任意一个类所具有的成员变量和方法</li><li>在运行时获取泛型信息</li><li>在运行时调用任意一个对象的成员变量和方法</li><li>在运行时处理注解</li><li>生成动态代理</li></ul><h3 id="_1-4-反射相关的主要api" tabindex="-1">1.4 反射相关的主要API <a class="header-anchor" href="#_1-4-反射相关的主要api" aria-label="Permalink to &quot;1.4 反射相关的主要API&quot;">​</a></h3><p><code>java.lang.Class</code>：代表一个类 java.lang.reflect.Method：代表类的方法 java.lang.reflect.Field：代表类的成员变量 java.lang.reflect.Constructor：代表类的构造器 … …</p><h3 id="_1-5-反射的优缺点" tabindex="-1">1.5 反射的优缺点 <a class="header-anchor" href="#_1-5-反射的优缺点" aria-label="Permalink to &quot;1.5 反射的优缺点&quot;">​</a></h3><p><strong>优点：</strong></p><ul><li><p>提高了Java程序的灵活性和扩展性，<code>降低了耦合性</code>，提高<code>自适应</code>能力</p></li><li><p>允许程序创建和控制任何类的对象，无需提前<code>硬编码</code>目标类</p></li></ul><p><strong>缺点：</strong></p><ul><li><p>反射的<code>性能较低</code>。</p><ul><li>反射机制主要应用在对灵活性和扩展性要求很高的系统框架上</li></ul></li><li><p>反射会<code>模糊</code>程序内部逻辑，<code>可读性较差</code>。</p></li></ul><h2 id="二、理解class类并获取class实例" tabindex="-1">二、理解Class类并获取Class实例 <a class="header-anchor" href="#二、理解class类并获取class实例" aria-label="Permalink to &quot;二、理解Class类并获取Class实例&quot;">​</a></h2><p>要想<code>解剖</code>一个类，必须先要获取到该类的Class对象。而剖析一个类或用反射解决具体的问题就是使用相关API:</p><ul><li>java.lang.Class 类似元数据</li><li>java.lang.reflect.*</li></ul><p>所以，Class对象是反射的根源。</p><h3 id="_2-1-理解class" tabindex="-1">2.1 理解Class <a class="header-anchor" href="#_2-1-理解class" aria-label="Permalink to &quot;2.1 理解Class&quot;">​</a></h3><h4 id="_2-1-1-理论上" tabindex="-1">2.1.1 理论上 <a class="header-anchor" href="#_2-1-1-理论上" aria-label="Permalink to &quot;2.1.1 理论上&quot;">​</a></h4><p>在Object类中定义了以下的方法，此方法将被所有子类继承：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> Class </span><span style="color:#B392F0;">getClass</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> Class </span><span style="color:#6F42C1;">getClass</span><span style="color:#24292E;">()</span></span></code></pre></div><p>以上的方法返回值的类型是一个Class类，此类是Java反射的源头，实际上所谓反射从程序的运行结果来看也很好理解，即：可以通过对象反射求出类的名称。</p><p><img src="'+e+'" alt="image-20231130112657815"></p><p>对象照镜子后可以得到的信息：某个类的属性、方法和构造器、某个类到底实现了哪些接口。对于每个类而言，JRE 都为其保留一个不变的 Class 类型的对象。一个 Class 对象包含了特定某个结构(class/interface/enum/annotation/primitive type/void/[])的有关信息。</p><ul><li>Class本身也是一个类</li><li>Class 对象只能由系统建立对象</li><li>一个加载的类在 JVM 中只会有一个Class实例</li><li>一个Class对象对应的是一个加载到JVM中的一个.class文件</li><li>每个类的实例都会记得自己是由哪个 Class 实例所生成</li><li>通过Class可以完整地得到一个类中的所有被加载的结构</li><li>Class类是Reflection的根源，针对任何你想动态加载、运行的类，唯有先获得相应的Class对象</li></ul><h4 id="_2-1-2-内存结构上" tabindex="-1">2.1.2 内存结构上 <a class="header-anchor" href="#_2-1-2-内存结构上" aria-label="Permalink to &quot;2.1.2 内存结构上&quot;">​</a></h4><p><img src="'+t+`" alt="image-20231130124817869"></p><p>💡<code> 上图中字符串常量池在JDK6中存储在方法区；JDK7及以后，存储在堆空间。</code></p><h3 id="_2-2-获取class类的实例-四种方法" tabindex="-1">2.2 获取Class类的实例(四种方法) <a class="header-anchor" href="#_2-2-获取class类的实例-四种方法" aria-label="Permalink to &quot;2.2 获取Class类的实例(四种方法)&quot;">​</a></h3><p>方式1：要求编译期间已知类型</p><p>前提：若已知具体的类，通过类的class属性获取，该方法最为安全可靠，程序性能最高</p><p>实例：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> String.class;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> String.class;</span></span></code></pre></div><p>方式2：获取对象的运行时类型</p><p>前提：已知某个类的实例，调用该实例的getClass()方法获取Class对象</p><p>实例：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test05</span><span style="color:#E1E4E8;">()throws UnknownHostException{</span></span>
<span class="line"><span style="color:#E1E4E8;">    Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;www.atguigu.com&quot;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getClass</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(clazz);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test05</span><span style="color:#24292E;">()throws UnknownHostException{</span></span>
<span class="line"><span style="color:#24292E;">    Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;www.atguigu.com&quot;</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getClass</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(clazz);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+c+`" alt="image-20231130125748229"></p><p>方式3：可以获取编译期间未知的类型</p><p>前提：已知一个类的全类名，且该类在类路径下，可通过Class类的静态方法forName()获取，可能抛出ClassNotFoundException</p><p>实例：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;java.lang.String&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;java.lang.String&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><p>方式4：其他方式(不做要求)</p><p>前提：可以用系统类加载对象或自定义加载器对象加载指定路径下的类型</p><p>实例：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ClassLoader cl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getClass</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getClassLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">Class clazz4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cl.</span><span style="color:#B392F0;">loadClass</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;类的全类名&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ClassLoader cl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getClass</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getClassLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">Class clazz4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cl.</span><span style="color:#6F42C1;">loadClass</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;类的全类名&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="_2-3-哪些类型可以有class对象" tabindex="-1">2.3 哪些类型可以有Class对象 <a class="header-anchor" href="#_2-3-哪些类型可以有class对象" aria-label="Permalink to &quot;2.3 哪些类型可以有Class对象&quot;">​</a></h3><p>简言之，所有Java类型！</p><p>（1）class：外部类，成员(成员内部类，静态内部类)，局部内部类，匿名内部类 （2）interface：接口 （3）[]：数组 （4）enum：枚举 （5）annotation：注解@interface （6）primitive type：基本数据类型 （7）void</p><p>举例：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Class c1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">Class c2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Comparable.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">Class c3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[].class;</span></span>
<span class="line"><span style="color:#E1E4E8;">Class c4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[][].class;</span></span>
<span class="line"><span style="color:#E1E4E8;">Class c5 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ElementType.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">Class c6 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Override.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">Class c7 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> int.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">Class c8 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> void.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">Class c9 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.class;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">Class c10 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a.</span><span style="color:#B392F0;">getClass</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">Class c11 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> b.</span><span style="color:#B392F0;">getClass</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 只要元素类型与维度一样，就是同一个Class</span></span>
<span class="line"><span style="color:#E1E4E8;">System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(c10 </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> c11);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Class c1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Object.class;</span></span>
<span class="line"><span style="color:#24292E;">Class c2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Comparable.class;</span></span>
<span class="line"><span style="color:#24292E;">Class c3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[].class;</span></span>
<span class="line"><span style="color:#24292E;">Class c4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[][].class;</span></span>
<span class="line"><span style="color:#24292E;">Class c5 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ElementType.class;</span></span>
<span class="line"><span style="color:#24292E;">Class c6 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Override.class;</span></span>
<span class="line"><span style="color:#24292E;">Class c7 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> int.class;</span></span>
<span class="line"><span style="color:#24292E;">Class c8 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> void.class;</span></span>
<span class="line"><span style="color:#24292E;">Class c9 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.class;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">Class c10 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a.</span><span style="color:#6F42C1;">getClass</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">Class c11 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> b.</span><span style="color:#6F42C1;">getClass</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 只要元素类型与维度一样，就是同一个Class</span></span>
<span class="line"><span style="color:#24292E;">System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(c10 </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> c11);</span></span></code></pre></div><h3 id="_2-4-class类的常用方法" tabindex="-1">2.4 Class类的常用方法 <a class="header-anchor" href="#_2-4-class类的常用方法" aria-label="Permalink to &quot;2.4 Class类的常用方法&quot;">​</a></h3><table><thead><tr><th><strong>方法名</strong></th><th><strong>功能说明</strong></th></tr></thead><tbody><tr><td>static Class forName(String name)</td><td>返回指定类名 name 的 Class 对象</td></tr><tr><td>Object newInstance()</td><td>调用缺省构造函数，返回该Class对象的一个实例</td></tr><tr><td>getName()</td><td>返回此Class对象所表示的实体（类、接口、数组类、基本类型或void）名称</td></tr><tr><td>Class getSuperClass()</td><td>返回当前Class对象的父类的Class对象</td></tr><tr><td>Class [] getInterfaces()</td><td>获取当前Class对象的接口</td></tr><tr><td>ClassLoader getClassLoader()</td><td>返回该类的类加载器</td></tr><tr><td>Class getSuperclass()</td><td>返回表示此Class所表示的实体的超类的Class</td></tr><tr><td>Constructor[] getConstructors()</td><td>返回一个包含某些Constructor对象的数组</td></tr><tr><td>Field[] getDeclaredFields()</td><td>返回Field对象的一个数组</td></tr><tr><td>Method getMethod(String name,Class … paramTypes)</td><td>返回一个Method对象，此对象的形参类型为paramType</td></tr></tbody></table><p>举例：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">String str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;test4.Person&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(str);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Object obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">newInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Field field </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getField</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">field.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(obj, </span><span style="color:#9ECBFF;">&quot;Peter&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">Object name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> field.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#E1E4E8;">System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(name);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//注：test4.Person是test4包下的Person类</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">String str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;test4.Person&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(str);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Object obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">newInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Field field </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getField</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">field.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(obj, </span><span style="color:#032F62;">&quot;Peter&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">Object name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> field.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(obj);</span></span>
<span class="line"><span style="color:#24292E;">System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(name);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//注：test4.Person是test4包下的Person类</span></span></code></pre></div><h2 id="三、类的加载与classloader的理解" tabindex="-1">三、类的加载与ClassLoader的理解 <a class="header-anchor" href="#三、类的加载与classloader的理解" aria-label="Permalink to &quot;三、类的加载与ClassLoader的理解&quot;">​</a></h2><h3 id="_3-1-类的生命周期" tabindex="-1">3.1 类的生命周期 <a class="header-anchor" href="#_3-1-类的生命周期" aria-label="Permalink to &quot;3.1 类的生命周期&quot;">​</a></h3><p>类在内存中完整的生命周期：加载--&gt;使用--&gt;卸载。其中加载过程又分为：装载、链接、初始化三个阶段。</p><p><img src="`+r+'" alt="image-20231130132820553"></p><h3 id="_3-2-类的加载过程" tabindex="-1">3.2 类的加载过程 <a class="header-anchor" href="#_3-2-类的加载过程" aria-label="Permalink to &quot;3.2 类的加载过程&quot;">​</a></h3><p>当程序主动使用某个类时，如果该类还未被加载到内存中，系统会通过加载、链接、初始化三个步骤来对该类进行初始化。如果没有意外，JVM将会连续完成这三个步骤，所以有时也把这三个步骤统称为类加载。</p><p><img src="'+E+'" alt="image-20231130132829578"></p><p>类加载的三个阶段：</p><p>（1）装载（Loading）</p><p>将类的class文件读入内存，并为之创建一个java.lang.Class对象。此过程由类加载器完成</p><p>（2）链接（Linking）</p><p>①验证Verify：确保加载的类信息符合JVM规范，例如：以cafebabe开头，没有安全方面的问题。</p><p>②准备Prepare ⭐ ：正式为类变量（static）分配内存并<code>设置类变量默认初始值</code>的阶段，这些内存都将在方法区中进行分配。</p><p>③解析Resolve：虚拟机常量池内的符号引用（常量名）替换为直接引用（地址）的过程。</p><p>（3）初始化（Initialization）</p><ul><li><p>执行<code>类构造器&lt;clinit&gt;()方法</code>的过程。<code>类构造器&lt;clinit&gt;()方法</code>是由编译期自动收集类中所有类变量的赋值动作和静态代码块中的语句合并产生的。（类构造器是构造类信息的，不是构造该类对象的构造器）。</p></li><li><p>当初始化一个类的时候，如果发现其父类还没有进行初始化，则需要先触发其父类的初始化。</p></li><li><p>虚拟机会保证一个<code>类的&lt;clinit&gt;()方法</code>在多线程环境中被正确加锁和同步。</p></li></ul><h3 id="_3-3-类加载器-classloader" tabindex="-1">3.3 类加载器（classloader) <a class="header-anchor" href="#_3-3-类加载器-classloader" aria-label="Permalink to &quot;3.3 类加载器（classloader)&quot;">​</a></h3><p><img src="'+y+'" alt="image-20231130134217847"></p><h4 id="_3-3-1-类装载器的作用" tabindex="-1">3.3.1 类装载器的作用 <a class="header-anchor" href="#_3-3-1-类装载器的作用" aria-label="Permalink to &quot;3.3.1 类装载器的作用&quot;">​</a></h4><p>将class文件字节码内容加载到内存中，并将这些静态数据转换成方法区的运行时数据结构，然后在堆中生成一个代表这个类的java.lang.Class对象，作为方法区中类数据的访问入口。</p><p>类缓存：标准的JavaSE类加载器可以按要求查找类，但一旦某个类被加载到类加载器中，它将维持加载（缓存）一段时间。不过JVM垃圾回收机制可以回收这些Class对象。</p><p><img src="'+i+'" alt="image-20231130135047206"></p><h4 id="_3-3-2-类装载器的分类-jdk8为例" tabindex="-1">3.3.2 类装载器的分类(JDK8为例) <a class="header-anchor" href="#_3-3-2-类装载器的分类-jdk8为例" aria-label="Permalink to &quot;3.3.2 类装载器的分类(JDK8为例)&quot;">​</a></h4><p>JVM支持两种类型的类加载器，分别为<code>引导类加载器（Bootstrap ClassLoader）</code>和<code>自定义类加载器（User-Defined ClassLoader）</code>。</p><p>从概念上来讲，自定义类加载器一般指的是程序中由开发人员自定义的一类类加载器，但是Java虚拟机规范却没有这么定义，而是将所有派生于抽象类ClassLoader的类加载器都划分为自定义类加载器。无论类加载器的类型如何划分，在程序中我们最常见的类加载器结构主要是如下情况：</p><p><img src="'+F+'" alt="image-20231130135957848"></p><p><strong>（1）启动类加载器（引导类加载器，Bootstrap ClassLoader）</strong></p><ul><li>这个类加载使用<code>C/C++语言</code>实现的，嵌套在JVM内部。获取它的对象时往往返回null</li><li>它用来加载Java的核心库（JAVA_HOME/jre/lib/rt.jar或sun.boot.class.path路径下的内容）。用于提供JVM自身需要的类。</li><li>并不继承自java.lang.ClassLoader，没有父加载器。</li><li>出于安全考虑，Bootstrap启动类加载器只加载包名为java、javax、sun等开头的类</li><li>加载扩展类和应用程序类加载器，并指定为他们的父类加载器。</li></ul><p><strong>（2）扩展类加载器（Extension ClassLoader）</strong></p><ul><li>Java语言编写，由sun.misc.Launcher$ExtClassLoader实现。</li><li>继承于ClassLoader类</li><li>父类加载器为启动类加载器</li><li>从java.ext.dirs系统属性所指定的目录中加载类库，或从JDK的安装目录的jre/lib/ext子目录下加载类库。如果用户创建的JAR放在此目录下，也会自动由扩展类加载器加载。</li></ul><p><img src="'+u+`" alt="image-20231130140006774"></p><p><strong>（3）应用程序类加载器（系统类加载器，AppClassLoader）</strong></p><ul><li>java语言编写，由sun.misc.Launcher$AppClassLoader实现</li><li>继承于ClassLoader类</li><li>父类加载器为扩展类加载器</li><li>它负责加载环境变量classpath或系统属性 java.class.path 指定路径下的类库</li><li>应用程序中的类加载器默认是系统类加载器。</li><li>它是用户自定义类加载器的默认父加载器</li><li>通过ClassLoader的getSystemClassLoader()方法可以获取到该类加载器</li></ul><p><strong>（4）用户自定义类加载器（了解）</strong></p><ul><li>在Java的日常应用程序开发中，类的加载几乎是由上述3种类加载器相互配合执行的。在必要时，我们还可以自定义类加载器，来定制类的加载方式。</li><li>体现Java语言强大生命力和巨大魅力的关键因素之一便是，Java开发者可以自定义类加载器来实现类库的动态加载，加载源可以是本地的JAR包，也可以是网络上的远程资源。</li><li>同时，自定义加载器能够实现<code>应用隔离</code>，例如 Tomcat，Spring等中间件和组件框架都在内部实现了自定义的加载器，并通过自定义加载器隔离不同的组件模块。这种机制比C/C++程序要好太多，想不修改C/C++程序就能为其新增功能，几乎是不可能的，仅仅一个兼容性便能阻挡住所有美好的设想。</li><li>自定义类加载器通常需要继承于ClassLoader。</li></ul><h4 id="_3-3-3-查看某个类的类加载器对象" tabindex="-1">3.3.3 查看某个类的类加载器对象 <a class="header-anchor" href="#_3-3-3-查看某个类的类加载器对象" aria-label="Permalink to &quot;3.3.3 查看某个类的类加载器对象&quot;">​</a></h4><p>（1）获取默认的系统类加载器</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ClassLoader classloader </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ClassLoader.</span><span style="color:#B392F0;">getSystemClassLoader</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ClassLoader classloader </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ClassLoader.</span><span style="color:#6F42C1;">getSystemClassLoader</span><span style="color:#24292E;">();</span></span></code></pre></div><p>（2）查看某个类是哪个类加载器加载的</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ClassLoader classloader </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;exer2.ClassloaderDemo&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getClassLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//如果是根加载器加载的类，则会得到null</span></span>
<span class="line"><span style="color:#E1E4E8;">ClassLoader classloader1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;java.lang.Object&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getClassLoader</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ClassLoader classloader </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;exer2.ClassloaderDemo&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getClassLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//如果是根加载器加载的类，则会得到null</span></span>
<span class="line"><span style="color:#24292E;">ClassLoader classloader1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;java.lang.Object&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getClassLoader</span><span style="color:#24292E;">();</span></span></code></pre></div><p>（3）获取某个类加载器的父加载器</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ClassLoader parentClassloader </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> classloader.</span><span style="color:#B392F0;">getParent</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ClassLoader parentClassloader </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> classloader.</span><span style="color:#6F42C1;">getParent</span><span style="color:#24292E;">();</span></span></code></pre></div><p>示例代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.loader;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestClassLoader</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test01</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        ClassLoader systemClassLoader </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ClassLoader.</span><span style="color:#B392F0;">getSystemClassLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;systemClassLoader = &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> systemClassLoader);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test02</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> Exception{</span></span>
<span class="line"><span style="color:#E1E4E8;">        ClassLoader c1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> String.class.</span><span style="color:#B392F0;">getClassLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;加载String类的类加载器：&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> c1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        ClassLoader c2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;sun.util.resources.cldr.zh.TimeZoneNames_zh&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getClassLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;加载sun.util.resources.cldr.zh.TimeZoneNames_zh类的类加载器：&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> c2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        ClassLoader c3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> TestClassLoader.class.</span><span style="color:#B392F0;">getClassLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;加载当前类的类加载器：&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> c3);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test03</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        ClassLoader c1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> TestClassLoader.class.</span><span style="color:#B392F0;">getClassLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;加载当前类的类加载器c1=&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> c1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        ClassLoader c2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> c1.</span><span style="color:#B392F0;">getParent</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;c1.parent = &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> c2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        ClassLoader c3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> c2.</span><span style="color:#B392F0;">getParent</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;c2.parent = &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> c3);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.loader;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestClassLoader</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test01</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        ClassLoader systemClassLoader </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ClassLoader.</span><span style="color:#6F42C1;">getSystemClassLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;systemClassLoader = &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> systemClassLoader);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test02</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> Exception{</span></span>
<span class="line"><span style="color:#24292E;">        ClassLoader c1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> String.class.</span><span style="color:#6F42C1;">getClassLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;加载String类的类加载器：&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> c1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        ClassLoader c2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;sun.util.resources.cldr.zh.TimeZoneNames_zh&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getClassLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;加载sun.util.resources.cldr.zh.TimeZoneNames_zh类的类加载器：&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> c2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        ClassLoader c3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> TestClassLoader.class.</span><span style="color:#6F42C1;">getClassLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;加载当前类的类加载器：&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> c3);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test03</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        ClassLoader c1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> TestClassLoader.class.</span><span style="color:#6F42C1;">getClassLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;加载当前类的类加载器c1=&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> c1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        ClassLoader c2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> c1.</span><span style="color:#6F42C1;">getParent</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;c1.parent = &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> c2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        ClassLoader c3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> c2.</span><span style="color:#6F42C1;">getParent</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;c2.parent = &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> c3);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_3-3-4-使用classloader获取流" tabindex="-1">3.3.4 使用ClassLoader获取流 <a class="header-anchor" href="#_3-3-4-使用classloader获取流" aria-label="Permalink to &quot;3.3.4 使用ClassLoader获取流&quot;">​</a></h4><p>关于类加载器的一个主要方法：getResourceAsStream(String str):获取类路径下的指定文件的输入流</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">InputStream in </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">in </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getClass</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getClassLoader</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getResourceAsStream</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;exer2</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">test.properties&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(in);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">InputStream in </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">in </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getClass</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getClassLoader</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getResourceAsStream</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;exer2</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">test.properties&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(in);</span></span></code></pre></div><p>举例：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//需要掌握如下的代码</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test5</span><span style="color:#E1E4E8;">() throws IOException {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Properties pros </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Properties</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//方式1：此时默认的相对路径是当前的module</span></span>
<span class="line"><span style="color:#6A737D;">//        FileInputStream is = new FileInputStream(&quot;info.properties&quot;);</span></span>
<span class="line"><span style="color:#6A737D;">//        FileInputStream is = new FileInputStream(&quot;src//info1.properties&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//方式2：使用类的加载器</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//此时默认的相对路径是当前module的src目录</span></span>
<span class="line"><span style="color:#E1E4E8;">        InputStream is </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ClassLoader.</span><span style="color:#B392F0;">getSystemClassLoader</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getResourceAsStream</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;info1.properties&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        pros.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(is);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//获取配置文件中的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        String name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pros.</span><span style="color:#B392F0;">getProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        String password </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pros.</span><span style="color:#B392F0;">getProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;password&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;name = &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;, password = &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> password);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//需要掌握如下的代码</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test5</span><span style="color:#24292E;">() throws IOException {</span></span>
<span class="line"><span style="color:#24292E;">        Properties pros </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Properties</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//方式1：此时默认的相对路径是当前的module</span></span>
<span class="line"><span style="color:#6A737D;">//        FileInputStream is = new FileInputStream(&quot;info.properties&quot;);</span></span>
<span class="line"><span style="color:#6A737D;">//        FileInputStream is = new FileInputStream(&quot;src//info1.properties&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//方式2：使用类的加载器</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//此时默认的相对路径是当前module的src目录</span></span>
<span class="line"><span style="color:#24292E;">        InputStream is </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ClassLoader.</span><span style="color:#6F42C1;">getSystemClassLoader</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getResourceAsStream</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;info1.properties&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        pros.</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(is);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//获取配置文件中的信息</span></span>
<span class="line"><span style="color:#24292E;">        String name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pros.</span><span style="color:#6F42C1;">getProperty</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        String password </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pros.</span><span style="color:#6F42C1;">getProperty</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name = &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;, password = &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> password);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div><h2 id="四、反射的基本应用" tabindex="-1">四、反射的基本应用 <a class="header-anchor" href="#四、反射的基本应用" aria-label="Permalink to &quot;四、反射的基本应用&quot;">​</a></h2><p>有了Class对象，能做什么？</p><h3 id="_4-1-应用1-创建运行时类的对象" tabindex="-1">4.1 应用1：创建运行时类的对象 <a class="header-anchor" href="#_4-1-应用1-创建运行时类的对象" aria-label="Permalink to &quot;4.1 应用1：创建运行时类的对象&quot;">​</a></h3><p>这是反射机制应用最多的地方。创建运行时类的对象有两种方式：</p><p><strong>方式1：直接调用Class对象的newInstance()方法</strong></p><p>要 求： 1）类必须有一个无参数的构造器。2）类的构造器的访问权限需要足够。</p><p><strong>方式2：通过获取构造器对象来进行实例化</strong></p><p>方式一的步骤：</p><p>1）获取该类型的Class对象 2）调用Class对象的newInstance()方法创建对象</p><p>方式二的步骤：</p><p>1）通过Class类的getDeclaredConstructor(Class … parameterTypes)取得本类的指定形参类型的构造器 2）向构造器的形参中传递一个对象数组进去，里面包含了构造器中所需的各个参数。 3）通过Constructor实例化对象。</p><blockquote><p>如果构造器的权限修饰符修饰的范围不可见，也可以调用setAccessible(true)</p></blockquote><p>示例代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.reflect;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.Constructor;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestCreateObject</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test1</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> Exception{</span></span>
<span class="line"><span style="color:#6A737D;">//        AtGuiguClass obj = new AtGuiguClass();//编译期间无法创建</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        Class&lt;</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">&gt; clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;com.atguigu.ext.demo.AtGuiguClass&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//clazz代表com.atguigu.ext.demo.AtGuiguClass类型</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//clazz.newInstance()创建的就是AtGuiguClass的对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">newInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test2</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> Exception{</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class&lt;</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">&gt; clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;com.atguigu.ext.demo.AtGuiguDemo&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//java.lang.InstantiationException: com.atguigu.ext.demo.AtGuiguDemo</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//Caused by: java.lang.NoSuchMethodException: com.atguigu.ext.demo.AtGuiguDemo.&lt;init&gt;()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//即说明AtGuiguDemo没有无参构造，就没有无参实例初始化方法&lt;init&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object stu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">newInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(stu);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test3</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> Exception{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//(1)获取Class对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class&lt;</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">&gt; clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;com.atguigu.ext.demo.AtGuiguDemo&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         * 获取AtGuiguDemo类型中的有参构造</span></span>
<span class="line"><span style="color:#6A737D;">         * 如果构造器有多个，我们通常是根据形参【类型】列表来获取指定的一个构造器的</span></span>
<span class="line"><span style="color:#6A737D;">         * 例如：public AtGuiguDemo(String title, int num)</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//(2)获取构造器对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        Constructor&lt;</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">&gt; constructor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getDeclaredConstructor</span><span style="color:#E1E4E8;">(String.class,int.class);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//(3)创建实例对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// T newInstance(Object... initargs)  这个Object...是在创建对象时，给有参构造的实参列表</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> constructor.</span><span style="color:#B392F0;">newInstance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;尚硅谷&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2022</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.reflect;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.Constructor;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestCreateObject</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test1</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> Exception{</span></span>
<span class="line"><span style="color:#6A737D;">//        AtGuiguClass obj = new AtGuiguClass();//编译期间无法创建</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        Class&lt;</span><span style="color:#D73A49;">?</span><span style="color:#24292E;">&gt; clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;com.atguigu.ext.demo.AtGuiguClass&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//clazz代表com.atguigu.ext.demo.AtGuiguClass类型</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//clazz.newInstance()创建的就是AtGuiguClass的对象</span></span>
<span class="line"><span style="color:#24292E;">        Object obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">newInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(obj);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test2</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> Exception{</span></span>
<span class="line"><span style="color:#24292E;">        Class&lt;</span><span style="color:#D73A49;">?</span><span style="color:#24292E;">&gt; clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;com.atguigu.ext.demo.AtGuiguDemo&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//java.lang.InstantiationException: com.atguigu.ext.demo.AtGuiguDemo</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//Caused by: java.lang.NoSuchMethodException: com.atguigu.ext.demo.AtGuiguDemo.&lt;init&gt;()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//即说明AtGuiguDemo没有无参构造，就没有无参实例初始化方法&lt;init&gt;</span></span>
<span class="line"><span style="color:#24292E;">        Object stu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">newInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(stu);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test3</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> Exception{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//(1)获取Class对象</span></span>
<span class="line"><span style="color:#24292E;">        Class&lt;</span><span style="color:#D73A49;">?</span><span style="color:#24292E;">&gt; clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;com.atguigu.ext.demo.AtGuiguDemo&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         * 获取AtGuiguDemo类型中的有参构造</span></span>
<span class="line"><span style="color:#6A737D;">         * 如果构造器有多个，我们通常是根据形参【类型】列表来获取指定的一个构造器的</span></span>
<span class="line"><span style="color:#6A737D;">         * 例如：public AtGuiguDemo(String title, int num)</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//(2)获取构造器对象</span></span>
<span class="line"><span style="color:#24292E;">        Constructor&lt;</span><span style="color:#D73A49;">?</span><span style="color:#24292E;">&gt; constructor </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getDeclaredConstructor</span><span style="color:#24292E;">(String.class,int.class);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//(3)创建实例对象</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// T newInstance(Object... initargs)  这个Object...是在创建对象时，给有参构造的实参列表</span></span>
<span class="line"><span style="color:#24292E;">        Object obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> constructor.</span><span style="color:#6F42C1;">newInstance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;尚硅谷&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2022</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(obj);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_4-2-应用2-获取运行时类的完整结构" tabindex="-1">4.2 应用2：获取运行时类的完整结构 <a class="header-anchor" href="#_4-2-应用2-获取运行时类的完整结构" aria-label="Permalink to &quot;4.2 应用2：获取运行时类的完整结构&quot;">​</a></h3><p>可以获取：包、修饰符、类型名、父类（包括泛型父类）、父接口（包括泛型父接口）、成员（属性、构造器、方法）、注解（类上的、方法上的、属性上的）。</p><h4 id="_4-2-1-相关api" tabindex="-1">4.2.1 相关API <a class="header-anchor" href="#_4-2-1-相关api" aria-label="Permalink to &quot;4.2.1 相关API&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.实现的全部接口</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getInterfaces</span><span style="color:#E1E4E8;">()   </span></span>
<span class="line"><span style="color:#6A737D;">//确定此对象所表示的类或接口实现的接口。 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.所继承的父类</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Class</span><span style="color:#F97583;">&lt;?</span><span style="color:#E1E4E8;"> Super T</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getSuperclass</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//返回表示此 Class 所表示的实体（类、接口、基本类型）的父类的 Class。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.全部的构造器</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Constructor</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">T</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getConstructors</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//返回此 Class 对象所表示的类的所有public构造方法。</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Constructor</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">T</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getDeclaredConstructors</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//返回此 Class 对象表示的类声明的所有构造方法。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Constructor类中：</span></span>
<span class="line"><span style="color:#6A737D;">//取得修饰符: </span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getModifiers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">//取得方法名称: </span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">//取得参数的类型：</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getParameterTypes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.全部的方法</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Method</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getDeclaredMethods</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//返回此Class对象所表示的类或接口的全部方法</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Method</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getMethods</span><span style="color:#E1E4E8;">()  </span></span>
<span class="line"><span style="color:#6A737D;">//返回此Class对象所表示的类或接口的public的方法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Method类中：</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getReturnType</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//取得全部的返回值</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getParameterTypes</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//取得全部的参数</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getModifiers</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//取得修饰符</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getExceptionTypes</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//取得异常信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//5.全部的Field</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Field</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getFields</span><span style="color:#E1E4E8;">() </span></span>
<span class="line"><span style="color:#6A737D;">//返回此Class对象所表示的类或接口的public的Field。</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Field</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getDeclaredFields</span><span style="color:#E1E4E8;">() </span></span>
<span class="line"><span style="color:#6A737D;">//返回此Class对象所表示的类或接口的全部Field。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Field方法中：</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getModifiers</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//以整数形式返回此Field的修饰符</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Class</span><span style="color:#F97583;">&lt;?&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getType</span><span style="color:#E1E4E8;">()  </span></span>
<span class="line"><span style="color:#6A737D;">//得到Field的属性类型</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">()  </span></span>
<span class="line"><span style="color:#6A737D;">//返回Field的名称。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//6. Annotation相关</span></span>
<span class="line"><span style="color:#E1E4E8;">get </span><span style="color:#B392F0;">Annotation</span><span style="color:#E1E4E8;">(Class</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">T</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> annotationClass) </span></span>
<span class="line"><span style="color:#B392F0;">getDeclaredAnnotations</span><span style="color:#E1E4E8;">() </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//7.泛型相关</span></span>
<span class="line"><span style="color:#6A737D;">//获取父类泛型类型：</span></span>
<span class="line"><span style="color:#E1E4E8;">Type </span><span style="color:#B392F0;">getGenericSuperclass</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//泛型类型：ParameterizedType</span></span>
<span class="line"><span style="color:#6A737D;">//获取实际的泛型类型参数数组：</span></span>
<span class="line"><span style="color:#B392F0;">getActualTypeArguments</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//8.类所在的包</span></span>
<span class="line"><span style="color:#E1E4E8;">Package </span><span style="color:#B392F0;">getPackage</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.实现的全部接口</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getInterfaces</span><span style="color:#24292E;">()   </span></span>
<span class="line"><span style="color:#6A737D;">//确定此对象所表示的类或接口实现的接口。 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.所继承的父类</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Class</span><span style="color:#D73A49;">&lt;?</span><span style="color:#24292E;"> Super T</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getSuperclass</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//返回表示此 Class 所表示的实体（类、接口、基本类型）的父类的 Class。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.全部的构造器</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Constructor</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">T</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getConstructors</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//返回此 Class 对象所表示的类的所有public构造方法。</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Constructor</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">T</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getDeclaredConstructors</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//返回此 Class 对象表示的类声明的所有构造方法。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Constructor类中：</span></span>
<span class="line"><span style="color:#6A737D;">//取得修饰符: </span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getModifiers</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">//取得方法名称: </span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> String </span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">//取得参数的类型：</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getParameterTypes</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.全部的方法</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Method</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getDeclaredMethods</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//返回此Class对象所表示的类或接口的全部方法</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Method</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getMethods</span><span style="color:#24292E;">()  </span></span>
<span class="line"><span style="color:#6A737D;">//返回此Class对象所表示的类或接口的public的方法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Method类中：</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getReturnType</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//取得全部的返回值</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getParameterTypes</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//取得全部的参数</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getModifiers</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//取得修饰符</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getExceptionTypes</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//取得异常信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//5.全部的Field</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Field</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getFields</span><span style="color:#24292E;">() </span></span>
<span class="line"><span style="color:#6A737D;">//返回此Class对象所表示的类或接口的public的Field。</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Field</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getDeclaredFields</span><span style="color:#24292E;">() </span></span>
<span class="line"><span style="color:#6A737D;">//返回此Class对象所表示的类或接口的全部Field。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Field方法中：</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getModifiers</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//以整数形式返回此Field的修饰符</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getType</span><span style="color:#24292E;">()  </span></span>
<span class="line"><span style="color:#6A737D;">//得到Field的属性类型</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> String </span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">()  </span></span>
<span class="line"><span style="color:#6A737D;">//返回Field的名称。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//6. Annotation相关</span></span>
<span class="line"><span style="color:#24292E;">get </span><span style="color:#6F42C1;">Annotation</span><span style="color:#24292E;">(Class</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">T</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> annotationClass) </span></span>
<span class="line"><span style="color:#6F42C1;">getDeclaredAnnotations</span><span style="color:#24292E;">() </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//7.泛型相关</span></span>
<span class="line"><span style="color:#6A737D;">//获取父类泛型类型：</span></span>
<span class="line"><span style="color:#24292E;">Type </span><span style="color:#6F42C1;">getGenericSuperclass</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//泛型类型：ParameterizedType</span></span>
<span class="line"><span style="color:#6A737D;">//获取实际的泛型类型参数数组：</span></span>
<span class="line"><span style="color:#6F42C1;">getActualTypeArguments</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//8.类所在的包</span></span>
<span class="line"><span style="color:#24292E;">Package </span><span style="color:#6F42C1;">getPackage</span><span style="color:#24292E;">()</span></span></code></pre></div><h4 id="_4-2-2-获取所有的属性及相关细节" tabindex="-1">4.2.2 获取所有的属性及相关细节 <a class="header-anchor" href="#_4-2-2-获取所有的属性及相关细节" aria-label="Permalink to &quot;4.2.2 获取所有的属性及相关细节&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.java2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.Field;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.Modifier;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> com.atguigu.java1.Person;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FieldTest</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test1</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span></span>
<span class="line"><span style="color:#E1E4E8;">		Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Person.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//getFields():获取到运行时类本身及其所有的父类中声明为public权限的属性</span></span>
<span class="line"><span style="color:#6A737D;">//		Field[] fields = clazz.getFields();</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">//		for(Field f : fields){</span></span>
<span class="line"><span style="color:#6A737D;">//			System.out.println(f);</span></span>
<span class="line"><span style="color:#6A737D;">//		}</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//getDeclaredFields():获取当前运行时类中声明的所有属性</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">Field</span><span style="color:#E1E4E8;">[] declaredFields </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getDeclaredFields</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(Field f </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> declaredFields){</span></span>
<span class="line"><span style="color:#E1E4E8;">			System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(f);</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//权限修饰符  变量类型  变量名</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test2</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">		Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Person.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">Field</span><span style="color:#E1E4E8;">[] declaredFields </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getDeclaredFields</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(Field f </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> declaredFields){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//1.权限修饰符</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         	* 0x是十六进制</span></span>
<span class="line"><span style="color:#6A737D;">         	* PUBLIC           = 0x00000001;  1    1</span></span>
<span class="line"><span style="color:#6A737D;">         	* PRIVATE          = 0x00000002;  2	10</span></span>
<span class="line"><span style="color:#6A737D;">         	* PROTECTED        = 0x00000004;  4	100</span></span>
<span class="line"><span style="color:#6A737D;">         	* STATIC           = 0x00000008;  8	1000</span></span>
<span class="line"><span style="color:#6A737D;">         	* FINAL            = 0x00000010;  16	10000</span></span>
<span class="line"><span style="color:#6A737D;">         	* ...</span></span>
<span class="line"><span style="color:#6A737D;">         	*</span></span>
<span class="line"><span style="color:#6A737D;">         	* 设计的理念，就是用二进制的某一位是1，来代表一种修饰符，整个二进制中只有一位是1，其余都是0</span></span>
<span class="line"><span style="color:#6A737D;">         	*</span></span>
<span class="line"><span style="color:#6A737D;">         	* mod = 17          0x00000011</span></span>
<span class="line"><span style="color:#6A737D;">         	* if ((mod &amp; PUBLIC) != 0)  说明修饰符中有public</span></span>
<span class="line"><span style="color:#6A737D;">         	* if ((mod &amp; FINAL) != 0)   说明修饰符中有final</span></span>
<span class="line"><span style="color:#6A737D;">         	*/</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> modifier </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> f.</span><span style="color:#B392F0;">getModifiers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(Modifier.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(modifier) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\t</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//            //2.数据类型</span></span>
<span class="line"><span style="color:#E1E4E8;">            Class type </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> f.</span><span style="color:#B392F0;">getType</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(type.</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\t</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">//            //3.变量名</span></span>
<span class="line"><span style="color:#E1E4E8;">            String fName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> f.</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(fName);</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">            System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.java2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.Field;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.Modifier;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> com.atguigu.java1.Person;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FieldTest</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test1</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">		</span></span>
<span class="line"><span style="color:#24292E;">		Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Person.class;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//getFields():获取到运行时类本身及其所有的父类中声明为public权限的属性</span></span>
<span class="line"><span style="color:#6A737D;">//		Field[] fields = clazz.getFields();</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">//		for(Field f : fields){</span></span>
<span class="line"><span style="color:#6A737D;">//			System.out.println(f);</span></span>
<span class="line"><span style="color:#6A737D;">//		}</span></span>
<span class="line"><span style="color:#24292E;">		</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//getDeclaredFields():获取当前运行时类中声明的所有属性</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">Field</span><span style="color:#24292E;">[] declaredFields </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getDeclaredFields</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(Field f </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> declaredFields){</span></span>
<span class="line"><span style="color:#24292E;">			System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(f);</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//权限修饰符  变量类型  变量名</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test2</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">		Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Person.class;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">Field</span><span style="color:#24292E;">[] declaredFields </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getDeclaredFields</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(Field f </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> declaredFields){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//1.权限修饰符</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         	* 0x是十六进制</span></span>
<span class="line"><span style="color:#6A737D;">         	* PUBLIC           = 0x00000001;  1    1</span></span>
<span class="line"><span style="color:#6A737D;">         	* PRIVATE          = 0x00000002;  2	10</span></span>
<span class="line"><span style="color:#6A737D;">         	* PROTECTED        = 0x00000004;  4	100</span></span>
<span class="line"><span style="color:#6A737D;">         	* STATIC           = 0x00000008;  8	1000</span></span>
<span class="line"><span style="color:#6A737D;">         	* FINAL            = 0x00000010;  16	10000</span></span>
<span class="line"><span style="color:#6A737D;">         	* ...</span></span>
<span class="line"><span style="color:#6A737D;">         	*</span></span>
<span class="line"><span style="color:#6A737D;">         	* 设计的理念，就是用二进制的某一位是1，来代表一种修饰符，整个二进制中只有一位是1，其余都是0</span></span>
<span class="line"><span style="color:#6A737D;">         	*</span></span>
<span class="line"><span style="color:#6A737D;">         	* mod = 17          0x00000011</span></span>
<span class="line"><span style="color:#6A737D;">         	* if ((mod &amp; PUBLIC) != 0)  说明修饰符中有public</span></span>
<span class="line"><span style="color:#6A737D;">         	* if ((mod &amp; FINAL) != 0)   说明修饰符中有final</span></span>
<span class="line"><span style="color:#6A737D;">         	*/</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> modifier </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> f.</span><span style="color:#6F42C1;">getModifiers</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(Modifier.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">(modifier) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\t</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//            //2.数据类型</span></span>
<span class="line"><span style="color:#24292E;">            Class type </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> f.</span><span style="color:#6F42C1;">getType</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(type.</span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\t</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">//            //3.变量名</span></span>
<span class="line"><span style="color:#24292E;">            String fName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> f.</span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(fName);</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">            System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_4-2-3-获取所有的方法及相关细节" tabindex="-1">4.2.3 获取所有的方法及相关细节 <a class="header-anchor" href="#_4-2-3-获取所有的方法及相关细节" aria-label="Permalink to &quot;4.2.3 获取所有的方法及相关细节&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.java2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.annotation.Annotation;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.Method;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.Modifier;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> com.atguigu.java1.Person;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MethodTest</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test1</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Person.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// getMethods():获取到运行时类本身及其所有的父类中声明为public权限的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// Method[] methods = clazz.getMethods();</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// for(Method m : methods){</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// System.out.println(m);</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// getDeclaredMethods():获取当前运行时类中声明的所有方法</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">Method</span><span style="color:#E1E4E8;">[] declaredMethods </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getDeclaredMethods</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (Method m </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> declaredMethods) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(m);</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 注解信息</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 权限修饰符 返回值类型 方法名(形参类型1 参数1,形参类型2 参数2,...) throws 异常类型1,...{}</span></span>
<span class="line"><span style="color:#E1E4E8;">	@</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test2</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Person.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">Method</span><span style="color:#E1E4E8;">[] declaredMethods </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getDeclaredMethods</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (Method m </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> declaredMethods) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// 1.获取方法声明的注解</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">Annotation</span><span style="color:#E1E4E8;">[] annos </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m.</span><span style="color:#B392F0;">getAnnotations</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (Annotation a </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> annos) {</span></span>
<span class="line"><span style="color:#E1E4E8;">				System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// 2.权限修饰符</span></span>
<span class="line"><span style="color:#E1E4E8;">			System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(Modifier.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(m.</span><span style="color:#B392F0;">getModifiers</span><span style="color:#E1E4E8;">()) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\t</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// 3.返回值类型</span></span>
<span class="line"><span style="color:#E1E4E8;">			System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(m.</span><span style="color:#B392F0;">getReturnType</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\t</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// 4.方法名</span></span>
<span class="line"><span style="color:#E1E4E8;">			System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(m.</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">			System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;(&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// 5.形参列表</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">Class</span><span style="color:#E1E4E8;">[] parameterTypes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m.</span><span style="color:#B392F0;">getParameterTypes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(parameterTypes </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> parameterTypes.length </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> parameterTypes.length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">					</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> parameterTypes.length </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">						System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(parameterTypes[i].</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot; args_&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> i);</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">					}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">					System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(parameterTypes[i].</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot; args_&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;,&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">				}</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;)&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// 6.抛出的异常</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">Class</span><span style="color:#E1E4E8;">[] exceptionTypes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m.</span><span style="color:#B392F0;">getExceptionTypes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (exceptionTypes.length </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">				System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;throws &quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> exceptionTypes.length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">					</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> exceptionTypes.length </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">						System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(exceptionTypes[i].</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">					}</span></span>
<span class="line"><span style="color:#E1E4E8;">					System.out.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(exceptionTypes[i].</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;,&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">				}</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">			System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.java2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.annotation.Annotation;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.Method;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.Modifier;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> com.atguigu.java1.Person;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MethodTest</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test1</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Person.class;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// getMethods():获取到运行时类本身及其所有的父类中声明为public权限的方法</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// Method[] methods = clazz.getMethods();</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// for(Method m : methods){</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// System.out.println(m);</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// getDeclaredMethods():获取当前运行时类中声明的所有方法</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">Method</span><span style="color:#24292E;">[] declaredMethods </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getDeclaredMethods</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (Method m </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> declaredMethods) {</span></span>
<span class="line"><span style="color:#24292E;">			System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(m);</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 注解信息</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 权限修饰符 返回值类型 方法名(形参类型1 参数1,形参类型2 参数2,...) throws 异常类型1,...{}</span></span>
<span class="line"><span style="color:#24292E;">	@</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test2</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Person.class;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">Method</span><span style="color:#24292E;">[] declaredMethods </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getDeclaredMethods</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (Method m </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> declaredMethods) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6A737D;">// 1.获取方法声明的注解</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">Annotation</span><span style="color:#24292E;">[] annos </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> m.</span><span style="color:#6F42C1;">getAnnotations</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (Annotation a </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> annos) {</span></span>
<span class="line"><span style="color:#24292E;">				System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(a);</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6A737D;">// 2.权限修饰符</span></span>
<span class="line"><span style="color:#24292E;">			System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(Modifier.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">(m.</span><span style="color:#6F42C1;">getModifiers</span><span style="color:#24292E;">()) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\t</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6A737D;">// 3.返回值类型</span></span>
<span class="line"><span style="color:#24292E;">			System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(m.</span><span style="color:#6F42C1;">getReturnType</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\t</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6A737D;">// 4.方法名</span></span>
<span class="line"><span style="color:#24292E;">			System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(m.</span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">			System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;(&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6A737D;">// 5.形参列表</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">Class</span><span style="color:#24292E;">[] parameterTypes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> m.</span><span style="color:#6F42C1;">getParameterTypes</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(parameterTypes </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> parameterTypes.length </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> parameterTypes.length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">					</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> parameterTypes.length </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">						System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(parameterTypes[i].</span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot; args_&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> i);</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">					}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">					System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(parameterTypes[i].</span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot; args_&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;,&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">				}</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;)&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6A737D;">// 6.抛出的异常</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">Class</span><span style="color:#24292E;">[] exceptionTypes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> m.</span><span style="color:#6F42C1;">getExceptionTypes</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (exceptionTypes.length </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">				System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;throws &quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> exceptionTypes.length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">					</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> exceptionTypes.length </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">						System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(exceptionTypes[i].</span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">					}</span></span>
<span class="line"><span style="color:#24292E;">					System.out.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(exceptionTypes[i].</span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;,&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">				}</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">			System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_4-2-4-获取其他结构-构造器、父类、接口、包、注解等" tabindex="-1">4.2.4 获取其他结构(构造器、父类、接口、包、注解等) <a class="header-anchor" href="#_4-2-4-获取其他结构-构造器、父类、接口、包、注解等" aria-label="Permalink to &quot;4.2.4 获取其他结构(构造器、父类、接口、包、注解等)&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.java2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> com.atguigu.java1.Person;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.annotation.Annotation;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.Constructor;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.ParameterizedType;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.Type;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@author</span><span style="color:#6A737D;"> 尚硅谷-宋红康</span></span>
<span class="line"><span style="color:#6A737D;"> * @create 2020 下午 2:47</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">OtherTest</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取当前类中的所有的构造器</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test1</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Person.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">Constructor</span><span style="color:#E1E4E8;">[] cons </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getDeclaredConstructors</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(Constructor c </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;">cons){</span></span>
<span class="line"><span style="color:#E1E4E8;">            System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(c);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取运行时类的父类</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test2</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Person.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class superclass </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getSuperclass</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(superclass);</span><span style="color:#6A737D;">//class com.atguigu.java1.Creature</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取运行时类的所在的包</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test3</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Person.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Package pack </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getPackage</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(pack);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取运行时类的注解</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test4</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Person.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">Annotation</span><span style="color:#E1E4E8;">[] annos </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getAnnotations</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (Annotation anno </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> annos) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(anno);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取运行时类所实现的接口</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test5</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Person.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">Class</span><span style="color:#E1E4E8;">[] interfaces </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getInterfaces</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (Class anInterface </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> interfaces) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(anInterface);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取运行时类的带泛型的父类</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test6</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Person.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Type genericSuperclass </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getGenericSuperclass</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(genericSuperclass);</span><span style="color:#6A737D;">//com.atguigu.java1.Creature&lt;java.lang.String&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.java2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> com.atguigu.java1.Person;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.annotation.Annotation;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.Constructor;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.ParameterizedType;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.Type;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@author</span><span style="color:#6A737D;"> 尚硅谷-宋红康</span></span>
<span class="line"><span style="color:#6A737D;"> * @create 2020 下午 2:47</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OtherTest</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取当前类中的所有的构造器</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test1</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Person.class;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">Constructor</span><span style="color:#24292E;">[] cons </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getDeclaredConstructors</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(Constructor c </span><span style="color:#D73A49;">:</span><span style="color:#24292E;">cons){</span></span>
<span class="line"><span style="color:#24292E;">            System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(c);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取运行时类的父类</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test2</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Person.class;</span></span>
<span class="line"><span style="color:#24292E;">        Class superclass </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getSuperclass</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(superclass);</span><span style="color:#6A737D;">//class com.atguigu.java1.Creature</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取运行时类的所在的包</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test3</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Person.class;</span></span>
<span class="line"><span style="color:#24292E;">        Package pack </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getPackage</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(pack);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取运行时类的注解</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test4</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Person.class;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">Annotation</span><span style="color:#24292E;">[] annos </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getAnnotations</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (Annotation anno </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> annos) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(anno);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取运行时类所实现的接口</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test5</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Person.class;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">Class</span><span style="color:#24292E;">[] interfaces </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getInterfaces</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (Class anInterface </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> interfaces) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(anInterface);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    	获取运行时类的带泛型的父类</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test6</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Person.class;</span></span>
<span class="line"><span style="color:#24292E;">        Type genericSuperclass </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getGenericSuperclass</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(genericSuperclass);</span><span style="color:#6A737D;">//com.atguigu.java1.Creature&lt;java.lang.String&gt;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_4-3-应用3-调用运行时类的指定结构" tabindex="-1">4.3 应用3：调用运行时类的指定结构 <a class="header-anchor" href="#_4-3-应用3-调用运行时类的指定结构" aria-label="Permalink to &quot;4.3 应用3：调用运行时类的指定结构&quot;">​</a></h3><h4 id="_4-3-1-调用指定的属性" tabindex="-1">4.3.1 调用指定的属性 <a class="header-anchor" href="#_4-3-1-调用指定的属性" aria-label="Permalink to &quot;4.3.1 调用指定的属性&quot;">​</a></h4><p>在反射机制中，可以直接通过Field类操作类中的属性，通过Field类提供的set()和get()方法就可以完成设置和取得属性内容的操作。</p><p>（1）获取该类型的Class对象</p><p>Class clazz = Class.forName(&quot;包.类名&quot;);</p><p>（2）获取属性对象</p><p>Field field = clazz.getDeclaredField(&quot;属性名&quot;);</p><p>（3）如果属性的权限修饰符不是public，那么需要设置属性可访问</p><p>field.setAccessible(true);</p><p>（4）创建实例对象：如果操作的是非静态属性，需要创建实例对象</p><p>Object obj = clazz.newInstance(); //有公共的无参构造</p><p>Object obj = 构造器对象.newInstance(实参...);//通过特定构造器对象创建实例对象</p><p>（5）设置指定对象obj上此Field的属性内容</p><p>field.set(obj,&quot;属性值&quot;);</p><blockquote><p>如果操作静态变量，那么实例对象可以省略，用null表示</p></blockquote><p>（6）取得指定对象obj上此Field的属性内容</p><p>Object value = field.get(obj);</p><blockquote><p>如果操作静态变量，那么实例对象可以省略，用null表示</p></blockquote><p>示例代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.reflect;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Student</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> String name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getId</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setId</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setName</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Student{&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;id=&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> id </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;, name=&#39;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&#39;}&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.reflect;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Student</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> id;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> String name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getId</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> id;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setId</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">id</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> id;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> String </span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setName</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> String </span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Student{&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;id=&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> id </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;, name=&#39;&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&#39;}&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.reflect;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.Field;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestField</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> Exception {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//1、获取Student的Class对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;com.atguigu.reflect.Student&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//2、获取属性对象，例如：id属性</span></span>
<span class="line"><span style="color:#E1E4E8;">        Field idField </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getDeclaredField</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//3、如果id是私有的等在当前类中不可访问access的，我们需要做如下操作</span></span>
<span class="line"><span style="color:#E1E4E8;">        idField.</span><span style="color:#B392F0;">setAccessible</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//4、创建实例对象，即，创建Student对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object stu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">newInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//5、获取属性值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         * 以前：int 变量= 学生对象.getId()</span></span>
<span class="line"><span style="color:#6A737D;">         * 现在：Object id属性对象.get(学生对象)</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> idField.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(stu);</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;id = &quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> value);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//6、设置属性值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         * 以前：学生对象.setId(值)</span></span>
<span class="line"><span style="color:#6A737D;">         * 现在：id属性对象.set(学生对象,值)</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#E1E4E8;">        idField.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(stu, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> idField.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(stu);</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;id = &quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> value);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.reflect;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.Field;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestField</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> Exception {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//1、获取Student的Class对象</span></span>
<span class="line"><span style="color:#24292E;">        Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;com.atguigu.reflect.Student&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//2、获取属性对象，例如：id属性</span></span>
<span class="line"><span style="color:#24292E;">        Field idField </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getDeclaredField</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//3、如果id是私有的等在当前类中不可访问access的，我们需要做如下操作</span></span>
<span class="line"><span style="color:#24292E;">        idField.</span><span style="color:#6F42C1;">setAccessible</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//4、创建实例对象，即，创建Student对象</span></span>
<span class="line"><span style="color:#24292E;">        Object stu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">newInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//5、获取属性值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         * 以前：int 变量= 学生对象.getId()</span></span>
<span class="line"><span style="color:#6A737D;">         * 现在：Object id属性对象.get(学生对象)</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#24292E;">        Object value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> idField.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(stu);</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;id = &quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> value);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//6、设置属性值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         * 以前：学生对象.setId(值)</span></span>
<span class="line"><span style="color:#6A737D;">         * 现在：id属性对象.set(学生对象,值)</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#24292E;">        idField.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(stu, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> idField.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(stu);</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;id = &quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> value);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><strong>关于setAccessible方法的使用：</strong></p><ul><li>Method和Field、Constructor对象都有setAccessible()方法。</li><li>setAccessible启动和禁用访问安全检查的开关。</li><li>参数值为true则指示反射的对象在使用时应该取消Java语言访问检查。 <ul><li>提高反射的效率。如果代码中必须用反射，而该句代码需要频繁的被调用，那么请设置为true。</li><li>使得原本无法访问的私有成员也可以访问</li></ul></li><li>参数值为false则指示反射的对象应该实施Java语言访问检查。</li></ul><h4 id="_4-3-2-调用指定的方法" tabindex="-1">4.3.2 调用指定的方法 <a class="header-anchor" href="#_4-3-2-调用指定的方法" aria-label="Permalink to &quot;4.3.2 调用指定的方法&quot;">​</a></h4><p><img src="`+d+`" alt="image-20231130142759941"></p><p>（1）获取该类型的Class对象</p><p>Class clazz = Class.forName(&quot;包.类名&quot;);</p><p>（2）获取方法对象</p><p>Method method = clazz.getDeclaredMethod(&quot;方法名&quot;,方法的形参类型列表);</p><p>（3）创建实例对象</p><p>Object obj = clazz.newInstance();</p><p>（4）调用方法</p><p>Object result = method.invoke(obj, 方法的实参值列表);</p><blockquote><p>如果方法的权限修饰符修饰的范围不可见，也可以调用setAccessible(true)</p><p>如果方法是静态方法，实例对象也可以省略，用null代替</p></blockquote><p>示例代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.reflect;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.Method;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestMethod</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> Exception {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 1、获取Student的Class对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class&lt;</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">&gt; clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;com.atguigu.reflect.Student&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//2、获取方法对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         * 在一个类中，唯一定位到一个方法，需要：（1）方法名（2）形参列表，因为方法可能重载</span></span>
<span class="line"><span style="color:#6A737D;">         *</span></span>
<span class="line"><span style="color:#6A737D;">         * 例如：void setName(String name)</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#E1E4E8;">        Method setNameMethod </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getDeclaredMethod</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;setName&quot;</span><span style="color:#E1E4E8;">, String.class);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//3、创建实例对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object stu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">newInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//4、调用方法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         * 以前：学生对象.setName(值)</span></span>
<span class="line"><span style="color:#6A737D;">         * 现在：方法对象.invoke(学生对象，值)</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object setNameMethodReturnValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> setNameMethod.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(stu, </span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;stu = &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> stu);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//setName方法返回值类型void，没有返回值，所以setNameMethodReturnValue为null</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;setNameMethodReturnValue = &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> setNameMethodReturnValue);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        Method getNameMethod </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getDeclaredMethod</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;getName&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object getNameMethodReturnValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> getNameMethod.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(stu);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//getName方法返回值类型String，有返回值，getNameMethod.invoke的返回值就是getName方法的返回值</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;getNameMethodReturnValue = &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> getNameMethodReturnValue);</span><span style="color:#6A737D;">//张三</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test02</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> Exception{</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class&lt;</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">&gt; clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;com.atguigu.ext.demo.AtGuiguClass&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        Method printInfoMethod </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getMethod</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;printInfo&quot;</span><span style="color:#E1E4E8;">, String.class);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//printInfo方法是静态方法</span></span>
<span class="line"><span style="color:#E1E4E8;">        printInfoMethod.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;尚硅谷&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.reflect;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.Method;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestMethod</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> Exception {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 1、获取Student的Class对象</span></span>
<span class="line"><span style="color:#24292E;">        Class&lt;</span><span style="color:#D73A49;">?</span><span style="color:#24292E;">&gt; clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;com.atguigu.reflect.Student&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//2、获取方法对象</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         * 在一个类中，唯一定位到一个方法，需要：（1）方法名（2）形参列表，因为方法可能重载</span></span>
<span class="line"><span style="color:#6A737D;">         *</span></span>
<span class="line"><span style="color:#6A737D;">         * 例如：void setName(String name)</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#24292E;">        Method setNameMethod </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getDeclaredMethod</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;setName&quot;</span><span style="color:#24292E;">, String.class);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//3、创建实例对象</span></span>
<span class="line"><span style="color:#24292E;">        Object stu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">newInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//4、调用方法</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">         * 以前：学生对象.setName(值)</span></span>
<span class="line"><span style="color:#6A737D;">         * 现在：方法对象.invoke(学生对象，值)</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#24292E;">        Object setNameMethodReturnValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> setNameMethod.</span><span style="color:#6F42C1;">invoke</span><span style="color:#24292E;">(stu, </span><span style="color:#032F62;">&quot;张三&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;stu = &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> stu);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//setName方法返回值类型void，没有返回值，所以setNameMethodReturnValue为null</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;setNameMethodReturnValue = &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> setNameMethodReturnValue);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        Method getNameMethod </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getDeclaredMethod</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;getName&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        Object getNameMethodReturnValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> getNameMethod.</span><span style="color:#6F42C1;">invoke</span><span style="color:#24292E;">(stu);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//getName方法返回值类型String，有返回值，getNameMethod.invoke的返回值就是getName方法的返回值</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;getNameMethodReturnValue = &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> getNameMethodReturnValue);</span><span style="color:#6A737D;">//张三</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test02</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> Exception{</span></span>
<span class="line"><span style="color:#24292E;">        Class&lt;</span><span style="color:#D73A49;">?</span><span style="color:#24292E;">&gt; clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;com.atguigu.ext.demo.AtGuiguClass&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        Method printInfoMethod </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getMethod</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;printInfo&quot;</span><span style="color:#24292E;">, String.class);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//printInfo方法是静态方法</span></span>
<span class="line"><span style="color:#24292E;">        printInfoMethod.</span><span style="color:#6F42C1;">invoke</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;尚硅谷&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_4-3-3-练习" tabindex="-1">4.3.3 练习 <a class="header-anchor" href="#_4-3-3-练习" aria-label="Permalink to &quot;4.3.3 练习&quot;">​</a></h4><p>读取user.properties文件中的数据，通过反射完成User类对象的创建及对应方法的调用。</p><p>配置文件：user.properties</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">className:com.atguigu.bean.User</span></span>
<span class="line"><span style="color:#e1e4e8;">methodName:show</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">className:com.atguigu.bean.User</span></span>
<span class="line"><span style="color:#24292e;">methodName:show</span></span></code></pre></div><p>User.java文件：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.bean;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@author</span><span style="color:#6A737D;"> 尚硅谷-宋红康</span></span>
<span class="line"><span style="color:#6A737D;"> * @create 18:41</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">User</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> String name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">User</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">User</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;我是一个脉脉平台的用户&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.bean;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@author</span><span style="color:#6A737D;"> 尚硅谷-宋红康</span></span>
<span class="line"><span style="color:#6A737D;"> * @create 18:41</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">User</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> String name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">User</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">User</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;我是一个脉脉平台的用户&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>ReflectTest.java文件：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.java4;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.io.IOException;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.io.InputStream;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.Method;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.util.Properties;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@author</span><span style="color:#6A737D;"> 尚硅谷-宋红康</span></span>
<span class="line"><span style="color:#6A737D;"> * @create 18:43</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ReflectTest</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> Exception {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//1.创建Properties对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        Properties pro </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Properties</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//2.加载配置文件，转换为一个集合</span></span>
<span class="line"><span style="color:#E1E4E8;">        ClassLoader classLoader </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ClassLoader.</span><span style="color:#B392F0;">getSystemClassLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        InputStream is </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> classLoader.</span><span style="color:#B392F0;">getResourceAsStream</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;user.properties&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        pro.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(is);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//3.获取配置文件中定义的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        String className </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pro.</span><span style="color:#B392F0;">getProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;className&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        String methodName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pro.</span><span style="color:#B392F0;">getProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;methodName&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//4.加载该类进内存</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class clazz </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Class.</span><span style="color:#B392F0;">forName</span><span style="color:#E1E4E8;">(className);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//5.创建对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object instance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">newInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//6.获取方法对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        Method showMethod </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clazz.</span><span style="color:#B392F0;">getMethod</span><span style="color:#E1E4E8;">(methodName);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//7.执行方法</span></span>
<span class="line"><span style="color:#E1E4E8;">        showMethod.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(instance);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.java4;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> org.junit.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.io.IOException;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.io.InputStream;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.Method;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.util.Properties;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@author</span><span style="color:#6A737D;"> 尚硅谷-宋红康</span></span>
<span class="line"><span style="color:#6A737D;"> * @create 18:43</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ReflectTest</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> Exception {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//1.创建Properties对象</span></span>
<span class="line"><span style="color:#24292E;">        Properties pro </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Properties</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//2.加载配置文件，转换为一个集合</span></span>
<span class="line"><span style="color:#24292E;">        ClassLoader classLoader </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ClassLoader.</span><span style="color:#6F42C1;">getSystemClassLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        InputStream is </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> classLoader.</span><span style="color:#6F42C1;">getResourceAsStream</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;user.properties&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        pro.</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(is);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//3.获取配置文件中定义的数据</span></span>
<span class="line"><span style="color:#24292E;">        String className </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pro.</span><span style="color:#6F42C1;">getProperty</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;className&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        String methodName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pro.</span><span style="color:#6F42C1;">getProperty</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;methodName&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//4.加载该类进内存</span></span>
<span class="line"><span style="color:#24292E;">        Class clazz </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Class.</span><span style="color:#6F42C1;">forName</span><span style="color:#24292E;">(className);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//5.创建对象</span></span>
<span class="line"><span style="color:#24292E;">        Object instance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">newInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//6.获取方法对象</span></span>
<span class="line"><span style="color:#24292E;">        Method showMethod </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clazz.</span><span style="color:#6F42C1;">getMethod</span><span style="color:#24292E;">(methodName);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//7.执行方法</span></span>
<span class="line"><span style="color:#24292E;">        showMethod.</span><span style="color:#6F42C1;">invoke</span><span style="color:#24292E;">(instance);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_4-4-应用4-读取注解信息" tabindex="-1">4.4 应用4：读取注解信息 <a class="header-anchor" href="#_4-4-应用4-读取注解信息" aria-label="Permalink to &quot;4.4 应用4：读取注解信息&quot;">​</a></h3><p>一个完整的注解应该包含三个部分： （1）声明 （2）使用 （3）读取</p><h4 id="_4-4-1-声明自定义注解" tabindex="-1">4.4.1 声明自定义注解 <a class="header-anchor" href="#_4-4-1-声明自定义注解" aria-label="Permalink to &quot;4.4.1 声明自定义注解&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.annotation;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.annotation.</span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Inherited</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Target</span><span style="color:#E1E4E8;">(ElementType.TYPE)</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Retention</span><span style="color:#E1E4E8;">(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> @</span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Table</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    String </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.annotation;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.annotation.</span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Inherited</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Target</span><span style="color:#24292E;">(ElementType.TYPE)</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Retention</span><span style="color:#24292E;">(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> @</span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Table</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    String </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.annotation;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.annotation.</span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Inherited</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Target</span><span style="color:#E1E4E8;">(ElementType.FIELD)</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Retention</span><span style="color:#E1E4E8;">(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> @</span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Column</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    String </span><span style="color:#B392F0;">columnName</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    String </span><span style="color:#B392F0;">columnType</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.annotation;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.annotation.</span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Inherited</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Target</span><span style="color:#24292E;">(ElementType.FIELD)</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Retention</span><span style="color:#24292E;">(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> @</span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Column</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    String </span><span style="color:#6F42C1;">columnName</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    String </span><span style="color:#6F42C1;">columnType</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>自定义注解可以通过四个元注解@Retention,@Target，@Inherited,@Documented，分别说明它的声明周期，使用位置，是否被继承，是否被生成到API文档中。</li><li>Annotation 的成员在 Annotation 定义中以无参数有返回值的抽象方法的形式来声明，我们又称为配置参数。返回值类型只能是八种基本数据类型、String类型、Class类型、enum类型、Annotation类型、以上所有类型的数组</li><li>可以使用 default 关键字为抽象方法指定默认返回值</li><li>如果定义的注解含有抽象方法，那么使用时必须指定返回值，除非它有默认值。格式是“方法名 = 返回值”，如果只有一个抽象方法需要赋值，且方法名为value，可以省略“value=”，所以如果注解只有一个抽象方法成员，建议使用方法名value。</li></ul><h4 id="_4-4-2-使用自定义注解" tabindex="-1">4.4.2 使用自定义注解 <a class="header-anchor" href="#_4-4-2-使用自定义注解" aria-label="Permalink to &quot;4.4.2 使用自定义注解&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.annotation;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Table</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;t_stu&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Student</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Column</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">columnName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;sid&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">columnType</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;int&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Column</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">columnName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;sname&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">columnType</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;varchar(20)&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> String name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getId</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setId</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setName</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Student{&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;id=&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> id </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;, name=&#39;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&#39;}&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.annotation;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Table</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;t_stu&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Student</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Column</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">columnName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;sid&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">columnType</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;int&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> id;</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Column</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">columnName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;sname&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">columnType</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;varchar(20)&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> String name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getId</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> id;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setId</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">id</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> id;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> String </span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setName</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> String </span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Student{&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;id=&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> id </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;, name=&#39;&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&#39;}&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="_4-4-3-读取和处理自定义注解" tabindex="-1">4.4.3 读取和处理自定义注解 <a class="header-anchor" href="#_4-4-3-读取和处理自定义注解" aria-label="Permalink to &quot;4.4.3 读取和处理自定义注解&quot;">​</a></h4><p>自定义注解必须配上注解的信息处理流程才有意义。</p><p>我们自己定义的注解，只能使用反射的代码读取。所以自定义注解的声明周期必须是RetentionPolicy.RUNTIME。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.atguigu.annotation;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.lang.reflect.Field;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestAnnotation</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Class studentClass </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Student.class;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Table tableAnnotation </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (Table) studentClass.</span><span style="color:#B392F0;">getAnnotation</span><span style="color:#E1E4E8;">(Table.class);</span></span>
<span class="line"><span style="color:#E1E4E8;">        String tableName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(tableAnnotation </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            tableName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tableAnnotation.</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">Field</span><span style="color:#E1E4E8;">[] declaredFields </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> studentClass.</span><span style="color:#B392F0;">getDeclaredFields</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] columns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[declaredFields.length];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (Field declaredField </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> declaredFields) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            Column column </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> declaredField.</span><span style="color:#B392F0;">getAnnotation</span><span style="color:#E1E4E8;">(Column.class);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(column</span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                columns[index</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> column.</span><span style="color:#B392F0;">columnName</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        String sql </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;select &quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">index; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            sql </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> columns[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">index</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">                sql </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;,&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        sql </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot; from &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> tableName;</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;sql = &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> sql);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.atguigu.annotation;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.lang.reflect.Field;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestAnnotation</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        Class studentClass </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Student.class;</span></span>
<span class="line"><span style="color:#24292E;">        Table tableAnnotation </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (Table) studentClass.</span><span style="color:#6F42C1;">getAnnotation</span><span style="color:#24292E;">(Table.class);</span></span>
<span class="line"><span style="color:#24292E;">        String tableName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(tableAnnotation </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            tableName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tableAnnotation.</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">Field</span><span style="color:#24292E;">[] declaredFields </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> studentClass.</span><span style="color:#6F42C1;">getDeclaredFields</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] columns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[declaredFields.length];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (Field declaredField </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> declaredFields) {</span></span>
<span class="line"><span style="color:#24292E;">            Column column </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> declaredField.</span><span style="color:#6F42C1;">getAnnotation</span><span style="color:#24292E;">(Column.class);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(column</span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                columns[index</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> column.</span><span style="color:#6F42C1;">columnName</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        String sql </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;select &quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">index; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            sql </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> columns[i];</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">index</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">                sql </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;,&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        sql </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot; from &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> tableName;</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;sql = &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> sql);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,195),D=[g];function C(m,h,b,v,q,B){return n(),a("div",null,D)}const j=s(A,[["render",C]]);export{S as __pageData,j as default};
