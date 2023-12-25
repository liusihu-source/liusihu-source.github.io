import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const p="/assets/1666877621703.e4a719b1.png",o="/assets/1666877666094.29fe7a73.png",e="/assets/1666877639606.590d46a6.png",t="/assets/1666877645837.5b541499.png",c="/assets/1666877690217.727f3df5.png",r="/assets/1666877697366.d54bf320.png",y="/assets/1666877702205.28944fa8.png",E="/assets/1666877708229.0ccb8e69.png",i="/assets/1666877712069.f836d411.png",F="/assets/1666877716102.558b780b.png",C="/assets/1666877721364.3d4c9dcd.png",k=JSON.parse('{"title":"sklearn --笔记","description":"","frontmatter":{},"headers":[],"relativePath":"python/机器学习/sklearn.md","filePath":"python/机器学习/sklearn.md","lastUpdated":null}'),A={name:"python/机器学习/sklearn.md"},D=l(`<h1 id="sklearn-笔记" tabindex="-1">sklearn --笔记 <a class="header-anchor" href="#sklearn-笔记" aria-label="Permalink to &quot;sklearn --笔记&quot;">​</a></h1><h3 id="_1、测试images-py" tabindex="-1">1、测试images.py <a class="header-anchor" href="#_1、测试images-py" aria-label="Permalink to &quot;1、测试images.py&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> matplotlib.pyplot </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> plt</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn.datasets </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> load_digits</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">digits </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> load_digits()</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(digits.data.shape)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">plt.gray()   </span><span style="color:#6A737D;">#用于将颜色映射方式设置为灰度图像</span></span>
<span class="line"><span style="color:#E1E4E8;">plt.matshow(digits.images[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">])   </span><span style="color:#6A737D;">#mat是matrix缩写，矩阵意思。这里利用plt依赖库将读取到的8*8的矩阵绘制成8*8的灰度图像</span></span>
<span class="line"><span style="color:#E1E4E8;">plt.show()   </span><span style="color:#6A737D;">#这里是将刚才绘制的灰度图像显示出来</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> matplotlib.pyplot </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> plt</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn.datasets </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> load_digits</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">digits </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> load_digits()</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(digits.data.shape)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">plt.gray()   </span><span style="color:#6A737D;">#用于将颜色映射方式设置为灰度图像</span></span>
<span class="line"><span style="color:#24292E;">plt.matshow(digits.images[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">])   </span><span style="color:#6A737D;">#mat是matrix缩写，矩阵意思。这里利用plt依赖库将读取到的8*8的矩阵绘制成8*8的灰度图像</span></span>
<span class="line"><span style="color:#24292E;">plt.show()   </span><span style="color:#6A737D;">#这里是将刚才绘制的灰度图像显示出来</span></span></code></pre></div><h3 id="_2、neuralnetwork-py" tabindex="-1">2、NeuralNetwork.py <a class="header-anchor" href="#_2、neuralnetwork-py" aria-label="Permalink to &quot;2、NeuralNetwork.py&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#引入依赖包</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> numpy </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> np</span></span>
<span class="line"><span style="color:#6A737D;">#定义激活函数这些基本方法</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tanh</span><span style="color:#E1E4E8;">(x):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> np.tanh(x)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tanh_deriv</span><span style="color:#E1E4E8;">(x):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> np.tanh(x) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> np.tanh(x)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">logistic</span><span style="color:#E1E4E8;">(x):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> np.exp(</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">x))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">logistic_deriv</span><span style="color:#E1E4E8;">(x):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> logistic(x) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> logistic(x))</span></span>
<span class="line"><span style="color:#6A737D;">#创建NeuralNetwork类别</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NeuralNetwork</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#初始化</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__init__</span><span style="color:#E1E4E8;">(self, layers, activation</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;tanh&quot;</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#确定具体激活函数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> activation </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;logistic&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.activation </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> logistic</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.activation_deriv </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> logistic_deriv</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">elif</span><span style="color:#E1E4E8;"> activation </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tanh&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.activation </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tanh</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.activation_deriv </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tanh_deriv</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#创建weights列表，用于存储权重值，即存储相邻神经网络层间的权重连接值，即理解为如课堂上讲的hw11等</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.weights </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#这四个print用于个人理解代码时候测试使用</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(layers))   </span><span style="color:#6A737D;">#3，也就是三个层，输入、隐藏和输出三层神经</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(layers[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">#65，表示输入层，64个神经维度 + 1 = 65个维度，即1个有65维度的列向量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(layers[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">#101，表示隐藏层，100个神经维度 + 1 = 101维度，即1个有101维度的列向量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(np.random.random((layers[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, layers[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)))   </span><span style="color:#6A737D;">#生成一个65行 101列的浮点型列表，每个浮点数都在0-1之间</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">        这里range(1,2)，即只遍历l=1这一次</span></span>
<span class="line"><span style="color:#9ECBFF;">        np.random.random((layers[i - 1] + 1, layers[i] + 1))，返回一个65行 101列的浮点型列表，每个浮点数都在0-1之间，具体的计算见下图</span></span>
<span class="line"><span style="color:#9ECBFF;">        权重weights列表加入该65*101的二维列表</span></span>
<span class="line"><span style="color:#9ECBFF;">        后面的公式类似，weights再加入一个101 * 10 的二维列表，值的范围相同</span></span>
<span class="line"><span style="color:#9ECBFF;">        这两个二维列表可以理解为课堂上讲的输入层与隐藏层间的连接、隐藏层与输出层间的连接</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(layers) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#间接理解为建立层之间的连接，层之间的神经元连接权重是范围-0.25 ~ 0.25</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.weights.append((</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> np.random.random((layers[i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, layers[i] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.25</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">#生成一个65行 101列的二维矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.weights.append((</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> np.random.random((layers[i] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, layers[i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.25</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">#生成一个101行 10列的二维矩阵</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#定义fit方法，用于训练神经网络</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fit</span><span style="color:#E1E4E8;">(self, x, y, learning_rate</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">, epochs</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">        :param x:对应传过来的1347 * 64，内部值均已经归一化0-1</span></span>
<span class="line"><span style="color:#9ECBFF;">        :param y:对应1347 * 10，已经二值化后的结果</span></span>
<span class="line"><span style="color:#9ECBFF;">        :param learning_rate:学习率</span></span>
<span class="line"><span style="color:#9ECBFF;">        :param epochs:迭代次数，也是终止条件</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># atleast_2d，该方法将输入值改为二维数组，至少是二维矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">        x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> np.atleast_2d(x)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 返回一个具有指定形状和数据类型的新数组，并且数组值均为1，默认数据类型是float64，同时可以设置其他，如int8</span></span>
<span class="line"><span style="color:#E1E4E8;">        temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> np.ones([x.shape[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], x.shape[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">        此时temp是1347 * 65的二维矩阵，每个位置值均为1.0</span></span>
<span class="line"><span style="color:#9ECBFF;">        [:, 0:-1] = x，即所有行，所有行的前64列重新赋值为初始的已经归一化好的1347 * 64的二维列表的值，同时最后一列的1保持不变，即课堂上提到的偏置</span></span>
<span class="line"><span style="color:#9ECBFF;">        y是将1347 * 10的二维列表改为矩阵</span></span>
<span class="line"><span style="color:#9ECBFF;">        最后更新x、y结果，看如下图示</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        temp[:, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> x</span></span>
<span class="line"><span style="color:#E1E4E8;">        x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> temp</span></span>
<span class="line"><span style="color:#E1E4E8;">        y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> np.array(y)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#开始迭代训练</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(epochs):</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#randint是选出参数中的任一随机整数值，从1347*65矩阵的x中，从该0-1347中随机取出一个行数</span></span>
<span class="line"><span style="color:#E1E4E8;">            i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> np.random.randint(x.shape[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># 查看具体随机行数</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(i)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#此时a即 1 * 65，用该a首次训练神经网络模型</span></span>
<span class="line"><span style="color:#E1E4E8;">            a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [x[i]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#开始正向传递</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> l </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.weights)):</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;"># dot是矩阵乘积的方法，activation是用激活函数对乘积结果进行收敛</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;"># 此时先是乘积为 [1行65列] * [65行101列] = [1行101列]，</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;"># 因为是range(2)，所以之后再遍历第二次，此时乘积为 [1行101列] * [101行10列] = [1行10列]加一个数组，最后存储一个1*10的列向量矩阵，完成正向的传递</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;"># 最后用激活函数logistic对乘积结果进行收敛</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;"># print(&quot;a[&quot;+str(l)+&quot;]; &quot;+str(a[l])+&quot;  WEIGHT &quot;+str(self.weights[l])+str(len(self.weights)))</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;"># 可用上行注释查看两个矩阵，尝试自行乘积，之后用激活函数收敛。结课报告中提供思路尝试得到乘积结果并进行收敛计算</span></span>
<span class="line"><span style="color:#E1E4E8;">                a.append(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.activation(np.dot(a[l], </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.weights[l])))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># 是一个1*10的矩阵，其中有一个位置是1，其他均为0</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(y[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># 是一个1*10的矩阵，最后刚才的收敛结果</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(a[</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># 是一个1*10矩阵，即矩阵减法结果，误差率</span></span>
<span class="line"><span style="color:#E1E4E8;">            error </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> y[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a[</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(error)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#反向误差值计算，deltas = 误差率 * 最后一层的神经元值</span></span>
<span class="line"><span style="color:#E1E4E8;">            deltas </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [error </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.activation_deriv(a[</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#开始反向更新,内部诸多数学公式及数组内的序列计算过多，这里不做过多赘述。最终达到预设一定的循环次数10000后会保存一个神经网络模型.</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> l </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(a) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">                deltas.append(deltas[</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].dot(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.weights[l].T) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.activation_deriv(a[l]))</span></span>
<span class="line"><span style="color:#E1E4E8;">            deltas.reverse()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.weights)):</span></span>
<span class="line"><span style="color:#E1E4E8;">                layer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> np.atleast_2d(a[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">                delta </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> np.atleast_2d(deltas[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.weights[i] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> learning_rate </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> layer.T.dot(delta)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#定义predict方法，用于测试神经网络</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">predict</span><span style="color:#E1E4E8;">(self, x):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#这里同上面的fit初始x相同，最终目的得到1*65的矩阵，前边是x，最后加一个偏置1</span></span>
<span class="line"><span style="color:#E1E4E8;">        x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> np.array(x)</span></span>
<span class="line"><span style="color:#E1E4E8;">        temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> np.ones(x.shape[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        temp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> x</span></span>
<span class="line"><span style="color:#E1E4E8;">        a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> temp</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 这里先是[[1*65] * [65*101]] =&gt; [1*101] =&gt; [[1*101] * [101*10]] = &gt; [1 * 10], 最后激活函数收敛，返回a</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># a是 1 * 10，内部10个数字会有值之间的大小关系，最后用argmax取最大值的索引位置值，即表示这个测试集x可能代表的标签值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> l </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.weights)):</span></span>
<span class="line"><span style="color:#E1E4E8;">            a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.activation(np.dot(a, </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.weights[l]))</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> a</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#引入依赖包</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> numpy </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> np</span></span>
<span class="line"><span style="color:#6A737D;">#定义激活函数这些基本方法</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tanh</span><span style="color:#24292E;">(x):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> np.tanh(x)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tanh_deriv</span><span style="color:#24292E;">(x):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1.0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> np.tanh(x) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> np.tanh(x)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">logistic</span><span style="color:#24292E;">(x):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> np.exp(</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">logistic_deriv</span><span style="color:#24292E;">(x):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> logistic(x) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> logistic(x))</span></span>
<span class="line"><span style="color:#6A737D;">#创建NeuralNetwork类别</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NeuralNetwork</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#初始化</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__init__</span><span style="color:#24292E;">(self, layers, activation</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;tanh&quot;</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#确定具体激活函数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> activation </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;logistic&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.activation </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> logistic</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.activation_deriv </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> logistic_deriv</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">elif</span><span style="color:#24292E;"> activation </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tanh&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.activation </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tanh</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.activation_deriv </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tanh_deriv</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#创建weights列表，用于存储权重值，即存储相邻神经网络层间的权重连接值，即理解为如课堂上讲的hw11等</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.weights </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#这四个print用于个人理解代码时候测试使用</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(layers))   </span><span style="color:#6A737D;">#3，也就是三个层，输入、隐藏和输出三层神经</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(layers[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">#65，表示输入层，64个神经维度 + 1 = 65个维度，即1个有65维度的列向量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(layers[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">#101，表示隐藏层，100个神经维度 + 1 = 101维度，即1个有101维度的列向量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(np.random.random((layers[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, layers[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)))   </span><span style="color:#6A737D;">#生成一个65行 101列的浮点型列表，每个浮点数都在0-1之间</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#032F62;">        这里range(1,2)，即只遍历l=1这一次</span></span>
<span class="line"><span style="color:#032F62;">        np.random.random((layers[i - 1] + 1, layers[i] + 1))，返回一个65行 101列的浮点型列表，每个浮点数都在0-1之间，具体的计算见下图</span></span>
<span class="line"><span style="color:#032F62;">        权重weights列表加入该65*101的二维列表</span></span>
<span class="line"><span style="color:#032F62;">        后面的公式类似，weights再加入一个101 * 10 的二维列表，值的范围相同</span></span>
<span class="line"><span style="color:#032F62;">        这两个二维列表可以理解为课堂上讲的输入层与隐藏层间的连接、隐藏层与输出层间的连接</span></span>
<span class="line"><span style="color:#032F62;">        &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(layers) </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">#间接理解为建立层之间的连接，层之间的神经元连接权重是范围-0.25 ~ 0.25</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.weights.append((</span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> np.random.random((layers[i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, layers[i] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)) </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.25</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">#生成一个65行 101列的二维矩阵</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.weights.append((</span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> np.random.random((layers[i] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, layers[i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">])) </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.25</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">#生成一个101行 10列的二维矩阵</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#定义fit方法，用于训练神经网络</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fit</span><span style="color:#24292E;">(self, x, y, learning_rate</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0.2</span><span style="color:#24292E;">, epochs</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">10000</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#032F62;">        :param x:对应传过来的1347 * 64，内部值均已经归一化0-1</span></span>
<span class="line"><span style="color:#032F62;">        :param y:对应1347 * 10，已经二值化后的结果</span></span>
<span class="line"><span style="color:#032F62;">        :param learning_rate:学习率</span></span>
<span class="line"><span style="color:#032F62;">        :param epochs:迭代次数，也是终止条件</span></span>
<span class="line"><span style="color:#032F62;">        &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># atleast_2d，该方法将输入值改为二维数组，至少是二维矩阵</span></span>
<span class="line"><span style="color:#24292E;">        x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> np.atleast_2d(x)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 返回一个具有指定形状和数据类型的新数组，并且数组值均为1，默认数据类型是float64，同时可以设置其他，如int8</span></span>
<span class="line"><span style="color:#24292E;">        temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> np.ones([x.shape[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">], x.shape[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#032F62;">        此时temp是1347 * 65的二维矩阵，每个位置值均为1.0</span></span>
<span class="line"><span style="color:#032F62;">        [:, 0:-1] = x，即所有行，所有行的前64列重新赋值为初始的已经归一化好的1347 * 64的二维列表的值，同时最后一列的1保持不变，即课堂上提到的偏置</span></span>
<span class="line"><span style="color:#032F62;">        y是将1347 * 10的二维列表改为矩阵</span></span>
<span class="line"><span style="color:#032F62;">        最后更新x、y结果，看如下图示</span></span>
<span class="line"><span style="color:#032F62;">        &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">        temp[:, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> x</span></span>
<span class="line"><span style="color:#24292E;">        x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> temp</span></span>
<span class="line"><span style="color:#24292E;">        y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> np.array(y)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#开始迭代训练</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(epochs):</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">#randint是选出参数中的任一随机整数值，从1347*65矩阵的x中，从该0-1347中随机取出一个行数</span></span>
<span class="line"><span style="color:#24292E;">            i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> np.random.randint(x.shape[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;"># 查看具体随机行数</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(i)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">#此时a即 1 * 65，用该a首次训练神经网络模型</span></span>
<span class="line"><span style="color:#24292E;">            a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [x[i]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">#开始正向传递</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> l </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.weights)):</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;"># dot是矩阵乘积的方法，activation是用激活函数对乘积结果进行收敛</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;"># 此时先是乘积为 [1行65列] * [65行101列] = [1行101列]，</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;"># 因为是range(2)，所以之后再遍历第二次，此时乘积为 [1行101列] * [101行10列] = [1行10列]加一个数组，最后存储一个1*10的列向量矩阵，完成正向的传递</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;"># 最后用激活函数logistic对乘积结果进行收敛</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;"># print(&quot;a[&quot;+str(l)+&quot;]; &quot;+str(a[l])+&quot;  WEIGHT &quot;+str(self.weights[l])+str(len(self.weights)))</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;"># 可用上行注释查看两个矩阵，尝试自行乘积，之后用激活函数收敛。结课报告中提供思路尝试得到乘积结果并进行收敛计算</span></span>
<span class="line"><span style="color:#24292E;">                a.append(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.activation(np.dot(a[l], </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.weights[l])))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;"># 是一个1*10的矩阵，其中有一个位置是1，其他均为0</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(y[i])</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;"># 是一个1*10的矩阵，最后刚才的收敛结果</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(a[</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;"># 是一个1*10矩阵，即矩阵减法结果，误差率</span></span>
<span class="line"><span style="color:#24292E;">            error </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> y[i] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> a[</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(error)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">#反向误差值计算，deltas = 误差率 * 最后一层的神经元值</span></span>
<span class="line"><span style="color:#24292E;">            deltas </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [error </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.activation_deriv(a[</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">])]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">#开始反向更新,内部诸多数学公式及数组内的序列计算过多，这里不做过多赘述。最终达到预设一定的循环次数10000后会保存一个神经网络模型.</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> l </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(a) </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">                deltas.append(deltas[</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].dot(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.weights[l].T) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.activation_deriv(a[l]))</span></span>
<span class="line"><span style="color:#24292E;">            deltas.reverse()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.weights)):</span></span>
<span class="line"><span style="color:#24292E;">                layer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> np.atleast_2d(a[i])</span></span>
<span class="line"><span style="color:#24292E;">                delta </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> np.atleast_2d(deltas[i])</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.weights[i] </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> learning_rate </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> layer.T.dot(delta)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#定义predict方法，用于测试神经网络</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">predict</span><span style="color:#24292E;">(self, x):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#这里同上面的fit初始x相同，最终目的得到1*65的矩阵，前边是x，最后加一个偏置1</span></span>
<span class="line"><span style="color:#24292E;">        x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> np.array(x)</span></span>
<span class="line"><span style="color:#24292E;">        temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> np.ones(x.shape[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        temp[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> x</span></span>
<span class="line"><span style="color:#24292E;">        a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> temp</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 这里先是[[1*65] * [65*101]] =&gt; [1*101] =&gt; [[1*101] * [101*10]] = &gt; [1 * 10], 最后激活函数收敛，返回a</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># a是 1 * 10，内部10个数字会有值之间的大小关系，最后用argmax取最大值的索引位置值，即表示这个测试集x可能代表的标签值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> l </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.weights)):</span></span>
<span class="line"><span style="color:#24292E;">            a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.activation(np.dot(a, </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.weights[l]))</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a</span></span></code></pre></div><h3 id="_3、digitalreconginize" tabindex="-1">3、DigitalReconginize <a class="header-anchor" href="#_3、digitalreconginize" aria-label="Permalink to &quot;3、DigitalReconginize&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#引用依赖包</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> joblib</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn.preprocessing </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> LabelBinarizer</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> NeuralNetwork </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NeuralNetwork</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn.model_selection </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> train_test_split</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn.datasets </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> load_digits</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> numpy </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> np</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn.metrics </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> confusion_matrix, classification_report</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> warnings</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 过滤警告标签，warming 是 python内置库，python中常遇到报错的情况，但不影响程序的运行，对于这些错误可以通过warming来去除这些警告错误</span></span>
<span class="line"><span style="color:#E1E4E8;">warnings.filterwarnings(</span><span style="color:#9ECBFF;">&quot;ignore&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 加载全部数据集</span></span>
<span class="line"><span style="color:#E1E4E8;">digits </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> load_digits()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 所有训练集，内部包含1797个样本数据，每个数据是8*8的灰度图像，即64个维度，现在即1797 * 64</span></span>
<span class="line"><span style="color:#E1E4E8;">x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> digits.data</span></span>
<span class="line"><span style="color:#6A737D;"># 所有真实值标签，即样本代表的实际真实数字值</span></span>
<span class="line"><span style="color:#E1E4E8;">y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> digits.target</span></span>
<span class="line"><span style="color:#6A737D;"># 数据与处理，让特征值都处在0-1之间，即对应课堂上讲的归一化处理，具体的数学公式解释如下图</span></span>
<span class="line"><span style="color:#E1E4E8;">x </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> x.min()</span></span>
<span class="line"><span style="color:#E1E4E8;">x </span><span style="color:#F97583;">/=</span><span style="color:#E1E4E8;"> x.max()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建神经网络结构</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">利用上面引用的依赖包，创建对应该包中提供的NeuralNetwork类</span></span>
<span class="line"><span style="color:#9ECBFF;">该类有两个参数，第一个参数是一个列表，包含了每层神经网络包含多少个神经元</span></span>
<span class="line"><span style="color:#9ECBFF;">64,100,10 》》 输入层有64个神经维度，中间隐藏层有100个神经维度，输出层有10个神经维度，对应最终要识别的0-9这10个数字</span></span>
<span class="line"><span style="color:#9ECBFF;">第二个参数是激活函数，可选项，如果不做设置，默认选择tanh。这里只是设置了logistic，设置激活函数目的是防止神经节点的数值不能过大，避免出现不能最终收敛的情况，也可以加快学习速度【注意logistic不是取对数】。</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">nn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> NeuralNetwork([</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">], </span><span style="color:#9ECBFF;">&quot;logistic&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;"># 切分训练集和测试集</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">train_test_split是sklearn依赖包的内部方法，该方法可以将原始数据集将训练集和测试集差分，默认拆分比例是3:1，按照1797总数，所以训练集有1347个，测试集有450个</span></span>
<span class="line"><span style="color:#9ECBFF;">x_train是训练集的所有影像维度和，即1347 * 64；x_test是测试集所有影像维度和，即450 * 64；</span></span>
<span class="line"><span style="color:#9ECBFF;">y_train是训练集的所有真实标签和，即1347 * 1；y_test是测试集的所有真实标签和，即450 * 1；</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">x_train, x_test, y_train, y_test </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> train_test_split(x, y)</span></span>
<span class="line"><span style="color:#6A737D;"># 对标记进行二值化</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">fit_transform是sklearn依赖包的内部方法，该方法可以将某一具体数值进行二值化存储。</span></span>
<span class="line"><span style="color:#9ECBFF;">如数字4可以表示[0 0 0 0 1 0 0 0 0 0]；1可以表示为[0 1 0 0 0 0 0 0 0 0]</span></span>
<span class="line"><span style="color:#9ECBFF;">label_train，原先y_train是1347 * 1， 二值化后是1347 * 10</span></span>
<span class="line"><span style="color:#9ECBFF;">label_test，原先y_test是450 * 1，二值化后是450 * 10</span></span>
<span class="line"><span style="color:#9ECBFF;">这样存储真实标签值的目的是为了后面神经网络训练时候的误差检查及反向传递方便计算</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">label_train </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> LabelBinarizer().fit_transform(y_train)</span></span>
<span class="line"><span style="color:#E1E4E8;">label_test </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> LabelBinarizer().fit_transform(y_test)</span></span>
<span class="line"><span style="color:#6A737D;">#控制台输出start fitting..</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;start fitting..&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">fit是NeuralNetwork内的一个方法</span></span>
<span class="line"><span style="color:#9ECBFF;">该方法用于训练神经网络，最终得到一个较好的训练模型</span></span>
<span class="line"><span style="color:#9ECBFF;">x_train是刚才的训练集，1347 * 64(此时已经归一化好了)</span></span>
<span class="line"><span style="color:#9ECBFF;">label_train是刚才的训练集结果，1347 * 10(二值化后的结果)</span></span>
<span class="line"><span style="color:#9ECBFF;">epochs是迭代次数，是停止训练的中断条件，即超过10000次就不训练了，即认为大致精度可以了</span></span>
<span class="line"><span style="color:#9ECBFF;">具体如何训练的，请看NeuralNetwork内的代码详解</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">nn.fit(x_train, label_train, </span><span style="color:#FFAB70;">epochs</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#保存最后的训练模型，可以利用该模型进行其他测试数据集的测试</span></span>
<span class="line"><span style="color:#6A737D;">#joblib.dump(nn, &#39;E:\\\\课程\\\\大四上\\\\机器学习\\\\nnModel.m&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">#创建空数组，用于存储测试样本经过网络训练后得到的最终结果标签</span></span>
<span class="line"><span style="color:#E1E4E8;">predictions </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(y_test.shape[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]):</span></span>
<span class="line"><span style="color:#E1E4E8;">    o </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nn.predict(x_test[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#argmax是降维的方法，本次即取一个行矩阵中最大位置的值的索引值，也就代表了该测试样本的预测标签</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#最后遍历完所有的测试数据集，会为每一个样本生成一个预测的预测标签，并依次添加到predictions中</span></span>
<span class="line"><span style="color:#E1E4E8;">    predictions.append(np.argmax(o))</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">用测试数据集的预测标签和该样本的本身真实标签做对比</span></span>
<span class="line"><span style="color:#9ECBFF;">confusion_matrix是sklearn依赖包的内部方法，该方法最终会返回一个情形分析表，并以矩阵的方式存储真实类别和预测类别，具体详解见结果分析</span></span>
<span class="line"><span style="color:#9ECBFF;">classification_report是sklearn依赖包的内部方法，该方法会返回一个分析结果，具体详解见结果分析</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(confusion_matrix(y_test, predictions))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(classification_report(y_test, predictions))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#引用依赖包</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> joblib</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn.preprocessing </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> LabelBinarizer</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> NeuralNetwork </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> NeuralNetwork</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn.model_selection </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> train_test_split</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn.datasets </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> load_digits</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> numpy </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> np</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn.metrics </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> confusion_matrix, classification_report</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> warnings</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 过滤警告标签，warming 是 python内置库，python中常遇到报错的情况，但不影响程序的运行，对于这些错误可以通过warming来去除这些警告错误</span></span>
<span class="line"><span style="color:#24292E;">warnings.filterwarnings(</span><span style="color:#032F62;">&quot;ignore&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 加载全部数据集</span></span>
<span class="line"><span style="color:#24292E;">digits </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> load_digits()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 所有训练集，内部包含1797个样本数据，每个数据是8*8的灰度图像，即64个维度，现在即1797 * 64</span></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> digits.data</span></span>
<span class="line"><span style="color:#6A737D;"># 所有真实值标签，即样本代表的实际真实数字值</span></span>
<span class="line"><span style="color:#24292E;">y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> digits.target</span></span>
<span class="line"><span style="color:#6A737D;"># 数据与处理，让特征值都处在0-1之间，即对应课堂上讲的归一化处理，具体的数学公式解释如下图</span></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> x.min()</span></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">/=</span><span style="color:#24292E;"> x.max()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建神经网络结构</span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#032F62;">利用上面引用的依赖包，创建对应该包中提供的NeuralNetwork类</span></span>
<span class="line"><span style="color:#032F62;">该类有两个参数，第一个参数是一个列表，包含了每层神经网络包含多少个神经元</span></span>
<span class="line"><span style="color:#032F62;">64,100,10 》》 输入层有64个神经维度，中间隐藏层有100个神经维度，输出层有10个神经维度，对应最终要识别的0-9这10个数字</span></span>
<span class="line"><span style="color:#032F62;">第二个参数是激活函数，可选项，如果不做设置，默认选择tanh。这里只是设置了logistic，设置激活函数目的是防止神经节点的数值不能过大，避免出现不能最终收敛的情况，也可以加快学习速度【注意logistic不是取对数】。</span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">nn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> NeuralNetwork([</span><span style="color:#005CC5;">64</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">], </span><span style="color:#032F62;">&quot;logistic&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;"># 切分训练集和测试集</span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#032F62;">train_test_split是sklearn依赖包的内部方法，该方法可以将原始数据集将训练集和测试集差分，默认拆分比例是3:1，按照1797总数，所以训练集有1347个，测试集有450个</span></span>
<span class="line"><span style="color:#032F62;">x_train是训练集的所有影像维度和，即1347 * 64；x_test是测试集所有影像维度和，即450 * 64；</span></span>
<span class="line"><span style="color:#032F62;">y_train是训练集的所有真实标签和，即1347 * 1；y_test是测试集的所有真实标签和，即450 * 1；</span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">x_train, x_test, y_train, y_test </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> train_test_split(x, y)</span></span>
<span class="line"><span style="color:#6A737D;"># 对标记进行二值化</span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#032F62;">fit_transform是sklearn依赖包的内部方法，该方法可以将某一具体数值进行二值化存储。</span></span>
<span class="line"><span style="color:#032F62;">如数字4可以表示[0 0 0 0 1 0 0 0 0 0]；1可以表示为[0 1 0 0 0 0 0 0 0 0]</span></span>
<span class="line"><span style="color:#032F62;">label_train，原先y_train是1347 * 1， 二值化后是1347 * 10</span></span>
<span class="line"><span style="color:#032F62;">label_test，原先y_test是450 * 1，二值化后是450 * 10</span></span>
<span class="line"><span style="color:#032F62;">这样存储真实标签值的目的是为了后面神经网络训练时候的误差检查及反向传递方便计算</span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">label_train </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> LabelBinarizer().fit_transform(y_train)</span></span>
<span class="line"><span style="color:#24292E;">label_test </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> LabelBinarizer().fit_transform(y_test)</span></span>
<span class="line"><span style="color:#6A737D;">#控制台输出start fitting..</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;start fitting..&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#032F62;">fit是NeuralNetwork内的一个方法</span></span>
<span class="line"><span style="color:#032F62;">该方法用于训练神经网络，最终得到一个较好的训练模型</span></span>
<span class="line"><span style="color:#032F62;">x_train是刚才的训练集，1347 * 64(此时已经归一化好了)</span></span>
<span class="line"><span style="color:#032F62;">label_train是刚才的训练集结果，1347 * 10(二值化后的结果)</span></span>
<span class="line"><span style="color:#032F62;">epochs是迭代次数，是停止训练的中断条件，即超过10000次就不训练了，即认为大致精度可以了</span></span>
<span class="line"><span style="color:#032F62;">具体如何训练的，请看NeuralNetwork内的代码详解</span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">nn.fit(x_train, label_train, </span><span style="color:#E36209;">epochs</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">10000</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#保存最后的训练模型，可以利用该模型进行其他测试数据集的测试</span></span>
<span class="line"><span style="color:#6A737D;">#joblib.dump(nn, &#39;E:\\\\课程\\\\大四上\\\\机器学习\\\\nnModel.m&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">#创建空数组，用于存储测试样本经过网络训练后得到的最终结果标签</span></span>
<span class="line"><span style="color:#24292E;">predictions </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(y_test.shape[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]):</span></span>
<span class="line"><span style="color:#24292E;">    o </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nn.predict(x_test[i])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#argmax是降维的方法，本次即取一个行矩阵中最大位置的值的索引值，也就代表了该测试样本的预测标签</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#最后遍历完所有的测试数据集，会为每一个样本生成一个预测的预测标签，并依次添加到predictions中</span></span>
<span class="line"><span style="color:#24292E;">    predictions.append(np.argmax(o))</span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#032F62;">用测试数据集的预测标签和该样本的本身真实标签做对比</span></span>
<span class="line"><span style="color:#032F62;">confusion_matrix是sklearn依赖包的内部方法，该方法最终会返回一个情形分析表，并以矩阵的方式存储真实类别和预测类别，具体详解见结果分析</span></span>
<span class="line"><span style="color:#032F62;">classification_report是sklearn依赖包的内部方法，该方法会返回一个分析结果，具体详解见结果分析</span></span>
<span class="line"><span style="color:#032F62;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(confusion_matrix(y_test, predictions))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(classification_report(y_test, predictions))</span></span></code></pre></div><ul><li><strong>相关截图</strong></li></ul><p><img src="`+p+'" alt="1666877621703"></p><p><img src="'+o+'" alt="1666877666094"></p><p><img src="'+e+'" alt="1666877639606"></p><p><img src="'+t+'" alt="1666877645837"></p><p>​ <img src="'+c+'" alt="1666877690217"></p><p><img src="'+r+'" alt="1666877697366"></p><p><img src="'+y+'" alt="1666877702205"></p><p><img src="'+E+'" alt="1666877708229"></p><p><img src="'+i+'" alt="1666877712069"></p><p><img src="'+F+'" alt="1666877716102"></p><p><img src="'+C+'" alt="1666877721364"></p>',19),d=[D];function g(_,B,m,f,h,x){return n(),a("div",null,d)}const w=s(A,[["render",g]]);export{k as __pageData,w as default};
