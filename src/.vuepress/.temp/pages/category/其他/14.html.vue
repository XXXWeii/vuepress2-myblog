<template><div><h2 id="_0、前言" tabindex="-1"><a class="header-anchor" href="#_0、前言" aria-hidden="true">#</a> 0、前言</h2>
<hr>
<p>关于<code v-pre>promise、async/await</code>的使用相信很多小伙伴都比较熟悉了，但是提到<strong>事件循环机制输出结果</strong>类似的题目，你敢说都会？</p>
<p>试一试？</p>
<p>🌰1：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function async1 () {
    await new Promise((resolve, reject) => {
        resolve()
    })
    console.log('A')
}

async1()

new Promise((resolve) => {
    console.log('B')
    resolve()
}).then(() => {
    console.log('C')
}).then(() => {
    console.log('D')
})

// 最终结果👉: B A C D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌰2：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function async1 () {
    await async2()
    console.log('A')
}

async function async2 () {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

async1()

new Promise((resolve) => {
    console.log('B')
    resolve()
}).then(() => {
    console.log('C')
}).then(() => {
    console.log('D')
})

// 最终结果👉: B C D A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❓ 基本一样的代码为什么会出现差别，话不多说 👇</p>
<h2 id="_1、async-函数返回值" tabindex="-1"><a class="header-anchor" href="#_1、async-函数返回值" aria-hidden="true">#</a> 1、async 函数返回值</h2>
<hr>
<p>在讨论 <code v-pre>await</code> 之前，先聊一下 <code v-pre>async</code> 函数处理返回值的问题，它会像 <code v-pre>Promise.prototype.then</code> 一样，会对返回值的类型进行辨识。</p>
<p>👉<strong>根据返回值的类型，引起 <code v-pre>js引擎</code> 对返回值处理方式的不同</strong></p>
<blockquote>
<p>📑 结论：<code v-pre>async</code>函数在抛出返回值时，会根据返回值<strong>类型</strong>开启<strong>不同数目的微任务</strong></p>
<ul>
<li>return 结果值：非<code v-pre>thenable</code>、非<code v-pre>promise</code>（不等待）</li>
<li>return 结果值：<code v-pre>thenable</code>（等待 1 个<code v-pre>then</code>的时间）</li>
<li>return 结果值：<code v-pre>promise</code>（等待 2 个<code v-pre>then</code>的时间）</li>
</ul>
</blockquote>
<p>🌰1：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function testA () {
    return 1;
}

testA().then(() => console.log(1));
Promise.resolve()
    .then(() => console.log(2))
    .then(() => console.log(3));

// (不等待)最终结果👉: 1 2 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌰2：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function testB () {
    return {
        then (cb) {
            cb();
        }
    };
}

testB().then(() => console.log(1));
Promise.resolve()
    .then(() => console.log(2))
    .then(() => console.log(3));

// (等待一个then)最终结果👉: 2 1 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌰3：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function testC () {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

testC().then(() => console.log(1));
Promise.resolve()
    .then(() => console.log(2))
    .then(() => console.log(3));

// (等待两个then)最终结果👉: 2 3 1




async function testC () {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

testC().then(() => console.log(1));
Promise.resolve()
    .then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4))

// (等待两个then)最终结果👉: 2 3 1 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看了这三个 🌰 是不是对<code v-pre>上面的结论</code>有了更深的认识？</p>
<p>稍安勿躁，来试试一个经典面试题 👇</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function async1 () {
    console.log('1')
    await async2()
    console.log('AAA')
}

async function async2 () {
    console.log('3')
    return new Promise((resolve, reject) => {
        resolve()
        console.log('4')
    })
}

console.log('5')

setTimeout(() => {
    console.log('6')
}, 0);

async1()

new Promise((resolve) => {
    console.log('7')
    resolve()
}).then(() => {
    console.log('8')
}).then(() => {
    console.log('9')
}).then(() => {
    console.log('10')
})
console.log('11')

// 最终结果👉: 5 1 3 4 7 11 8 9 AAA 10 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👀 做错了吧？</p>
<p>哈哈没关系</p>
<blockquote>
<p>步骤拆分 👇：</p>
<ol>
<li>
<p>先执行同步代码，输出<code v-pre>5</code></p>
</li>
<li>
<p>执行<code v-pre>setTimeout</code>，是放入宏任务异步队列中</p>
</li>
<li>
<p>接着执行<code v-pre>async1</code>函数，输出<code v-pre>1</code></p>
</li>
<li>
<p>执行<code v-pre>async2</code>函数，输出<code v-pre>3</code></p>
</li>
<li>
<p><code v-pre>Promise</code>构造器中代码属于同步代码，输出<code v-pre>4</code></p>
<blockquote>
<p><code v-pre>async2</code>函数的返回值是<code v-pre>Promise</code>，等待<code v-pre>2</code>个<code v-pre>then</code>后放行，所以<code v-pre>AAA</code>暂时无法输出</p>
</blockquote>
</li>
<li>
<p><code v-pre>async1</code>函数<strong>暂时</strong>结束，继续往下走，输出<code v-pre>7</code></p>
</li>
<li>
<p>同步代码，输出<code v-pre>11</code></p>
</li>
<li>
<p>执行第一个<code v-pre>then</code>，输出<code v-pre>8</code></p>
</li>
<li>
<p>执行第二个<code v-pre>then</code>，输出<code v-pre>9</code></p>
</li>
<li>
<p>终于<strong>等</strong>到了两个<code v-pre>then</code>执行完毕，执行<code v-pre>async1</code>函数里面剩下的，输出<code v-pre>AAA</code></p>
</li>
<li>
<p>再执行最后一个微任务<code v-pre>then</code>，输出<code v-pre>10</code></p>
</li>
<li>
<p>执行最后的宏任务<code v-pre>setTimeout</code>，输出<code v-pre>6</code></p>
</li>
</ol>
</blockquote>
<p>❓ 是不是豁然开朗，欢迎点赞收藏！</p>
<h2 id="_2、await-右值类型区别" tabindex="-1"><a class="header-anchor" href="#_2、await-右值类型区别" aria-hidden="true">#</a> 2、await 右值类型区别</h2>
<hr>
<h3 id="_2-1、非-thenable" tabindex="-1"><a class="header-anchor" href="#_2-1、非-thenable" aria-hidden="true">#</a> 2.1、非 <code v-pre>thenable</code></h3>
<p>🌰1：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function test () {
    console.log(1);
    await 1;
    console.log(2);
}

test();
console.log(3);
// 最终结果👉: 1 3 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌰2：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function func () {
    console.log(2);
}

async function test () {
    console.log(1);
    await func();
    console.log(3);
}

test();
console.log(4);

// 最终结果👉: 1 2 4 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌰3：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function test () {
    console.log(1);
    await 123
    console.log(2);
}

test();
console.log(3);

Promise.resolve()
    .then(() => console.log(4))
    .then(() => console.log(5))
    .then(() => console.log(6))
    .then(() => console.log(7));

// 最终结果👉: 1 3 2 4 5 6 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Note:</p>
<p><code v-pre>await</code>后面接非 <code v-pre>thenable</code> 类型，会立即向微任务队列添加一个微任务<code v-pre>then</code>，<strong>但不需等待</strong></p>
</blockquote>
<h3 id="_2-2、thenable类型" tabindex="-1"><a class="header-anchor" href="#_2-2、thenable类型" aria-hidden="true">#</a> 2.2、<code v-pre>thenable</code>类型</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function test () {
    console.log(1);
    await {
        then (cb) {
            cb();
        },
    };
    console.log(2);
}

test();
console.log(3);

Promise.resolve()
    .then(() => console.log(4))
    .then(() => console.log(5))
    .then(() => console.log(6))
    .then(() => console.log(7));

// 最终结果👉: 1 3 4 2 5 6 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Note:</p>
<p><code v-pre>await</code> 后面接 <code v-pre>thenable</code> 类型，需要<strong>等待一个 <code v-pre>then</code> 的时间之后</strong>执行</p>
</blockquote>
<h3 id="_2-3、promise类型" tabindex="-1"><a class="header-anchor" href="#_2-3、promise类型" aria-hidden="true">#</a> 2.3、<code v-pre>Promise</code>类型</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function test () {
    console.log(1);
    await new Promise((resolve, reject) => {
        resolve()
    })
    console.log(2);
}

test();
console.log(3);

Promise.resolve()
    .then(() => console.log(4))
    .then(() => console.log(5))
    .then(() => console.log(6))
    .then(() => console.log(7));

// 最终结果👉: 1 3 2 4 5 6 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❓ 为什么表现的和非 <code v-pre>thenable</code> 值一样呢？为什么不等待两个 <code v-pre>then</code> 的时间呢？</p>
<blockquote>
<p>Note:</p>
<ul>
<li>TC 39(ECMAScript 标准制定者) 对<code v-pre>await</code> 后面是 <code v-pre>promise</code> 的情况如何处理进行了一次修改，<strong>移除</strong>了额外的两个微任务，在<strong>早期版本</strong>，依然会等待两个 <code v-pre>then</code> 的时间</li>
<li>有大佬翻译了官方解释：<strong>更快的 async 函数和 promises</strong>[1]，但在这次更新中并没有修改 <code v-pre>thenable</code> 的情况</li>
</ul>
</blockquote>
<hr>
<p>这样做可以极大的优化 <code v-pre>await</code> 等待的速度 👇</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function func () {
    console.log(1);
    await 1;
    console.log(2);
    await 2;
    console.log(3);
    await 3;
    console.log(4);
}

async function test () {
    console.log(5);
    await func();
    console.log(6);
}

test();
console.log(7);

Promise.resolve()
    .then(() => console.log(8))
    .then(() => console.log(9))
    .then(() => console.log(10))
    .then(() => console.log(11));

// 最终结果👉: 5 1 7 2 8 3 9 4 10 6 11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Note：</p>
<p><code v-pre>await</code> 和 <code v-pre>Promise.prototype.then</code> 虽然很多时候可以在<strong>时间顺序</strong>上能等效，但是它们之间有<strong>本质的区别</strong>。</p>
</blockquote>
<blockquote>
<ul>
<li><code v-pre>test</code> 函数中的 <code v-pre>await</code> 会等待 <code v-pre>func</code> 函数中所有的 <code v-pre>await</code> 取得 恢复函数执行 的命令并且整个函数执行完毕后才能获得取得 <strong>恢复函数执行</strong>的命令；</li>
<li>也就是说，<code v-pre>func</code> 函数的 <code v-pre>await</code> 此时<strong>不能在时间的顺序上等效</strong> <code v-pre>then</code>，而要等待到 <code v-pre>test</code> 函数完全执行完毕；</li>
<li>比如这里的数字<code v-pre>6</code>很晚才输出，<strong>如果</strong>单纯看成<code v-pre>then</code>的话，在下一个微任务队列执行时<code v-pre>6</code>就应该作为同步代码输出了才对。</li>
</ul>
</blockquote>
<hr>
<p>所以我们可以合并两个函数的代码 👇</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function test () {
    console.log(5);

    console.log(1);
    await 1;
    console.log(2);
    await 2;
    console.log(3);
    await 3;
    console.log(4);
    await null;

    console.log(6);
}

test();
console.log(7);

Promise.resolve()
    .then(() => console.log(8))
    .then(() => console.log(9))
    .then(() => console.log(10))
    .then(() => console.log(11));

// 最终结果👉: 5 1 7 2 8 3 9 4 10 6 11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>因为将原本的函数融合，此时的 <code v-pre>await</code> 可以等效为 <code v-pre>Promise.prototype.then</code>，又完全可以等效如下代码 👇</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function test () {
    console.log(5);
    console.log(1);
    Promise.resolve()
        .then(() => console.log(2))
        .then(() => console.log(3))
        .then(() => console.log(4))
        .then(() => console.log(6))
}

test();
console.log(7);

Promise.resolve()
    .then(() => console.log(8))
    .then(() => console.log(9))
    .then(() => console.log(10))
    .then(() => console.log(11));

// 最终结果👉: 5 1 7 2 8 3 9 4 10 6 11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>以上三种写法在时间的顺序上完全等效，所以你 <strong>完全可以将 <code v-pre>await</code> 后面的代码可以看做在 <code v-pre>then</code> 里面执行的结果</strong>，又因为 <code v-pre>async</code> 函数会返回 <code v-pre>promise</code> 实例，所以还可以等效成 👇</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function test () {
    console.log(5);
    console.log(1);
}

test()
    .then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(6))

console.log(7);

Promise.resolve()
    .then(() => console.log(8))
    .then(() => console.log(9))
    .then(() => console.log(10))
    .then(() => console.log(11));

// 最终结果👉: 5 1 7 2 8 3 9 4 10 6 11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，<code v-pre>test</code> 函数全是走的同步代码...</p>
<p>所以 👉：<strong><code v-pre>async/await</code> 是用同步的方式，执行异步操作</strong></p>
<h2 id="_3、🌰" tabindex="-1"><a class="header-anchor" href="#_3、🌰" aria-hidden="true">#</a> 3、🌰</h2>
<hr>
<p>🌰1：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function async2 () {
    new Promise((resolve, reject) => {
        resolve()
    })
}

async function async3 () {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

async function async1 () {
    // 方式一：最终结果：B A C D
    // await new Promise((resolve, reject) => {
    //     resolve()
    // })

    // 方式二：最终结果：B A C D
    // await async2()

    // 方式三：最终结果：B C D A
    await async3()

    console.log('A')
}

async1()

new Promise((resolve) => {
    console.log('B')
    resolve()
}).then(() => {
    console.log('C')
}).then(() => {
    console.log('D')
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>大致思路 👇：</p>
<ul>
<li>首先，<strong><code v-pre>async</code>函数的整体返回值永远都是<code v-pre>Promise</code>，无论值本身是什么</strong></li>
<li>方式一：<code v-pre>await</code>的是<code v-pre>Promise</code>，无需等待</li>
<li>方式二：<code v-pre>await</code>的是<code v-pre>async</code>函数，但是该函数的返回值本身是<strong>非<code v-pre>thenable</code></strong>，无需等待</li>
<li>方式三：<code v-pre>await</code>的是<code v-pre>async</code>函数，且返回值本身是<code v-pre>Promise</code>，需等待两个<code v-pre>then</code>时间</li>
</ul>
</blockquote>
<p>🌰2：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function func () {
    console.log(2);

    // 方式一：1 2 4  5 3 6 7
    // Promise.resolve()
    //     .then(() => console.log(5))
    //     .then(() => console.log(6))
    //     .then(() => console.log(7))

    // 方式二：1 2 4  5 6 7 3
    return Promise.resolve()
        .then(() => console.log(5))
        .then(() => console.log(6))
        .then(() => console.log(7))
}

async function test () {
    console.log(1);
    await func();
    console.log(3);
}

test();
console.log(4);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>步骤拆分 👇：</p>
<ul>
<li>
<p>方式一：</p>
</li>
<li>
<ul>
<li>同步代码输出<code v-pre>1、2</code>，接着将<code v-pre>log(5)</code>处的<code v-pre>then1</code>加入微任务队列，<code v-pre>await</code>拿到确切的<code v-pre>func</code>函数返回值<code v-pre>undefined</code>，将后续代码放入微任务队列（<code v-pre>then2</code>，可以这样理解）</li>
<li>执行同步代码输出<code v-pre>4</code>，到此，所有同步代码完毕</li>
<li>执行第一个放入的微任务<code v-pre>then1</code>输出<code v-pre>5</code>，产生<code v-pre>log(6)</code>的微任务<code v-pre>then3</code></li>
<li>执行第二个放入的微任务<code v-pre>then2</code>输出<code v-pre>3</code></li>
<li>然后执行微任务<code v-pre>then3</code>，输出<code v-pre>6</code>，产生<code v-pre>log(7)</code>的微任务<code v-pre>then4</code></li>
<li>执行<code v-pre>then4</code>，输出<code v-pre>7</code></li>
</ul>
</li>
<li>
<p>方式二：</p>
</li>
<li>
<ul>
<li>同步代码输出<code v-pre>1、2</code>，<code v-pre>await</code>拿到<code v-pre>func</code>函数返回值，但是并未获得<strong>具体的结果</strong>（由<code v-pre>Promise</code>本身机制决定），暂停执行当前<code v-pre>async</code>函数内的代码（跳出、让行）</li>
<li>输出<code v-pre>4</code>，到此，所有同步代码完毕</li>
<li><code v-pre>await</code>一直等到<code v-pre>Promise.resolve().then...</code>执行完成，再放行输出<code v-pre>3</code></li>
</ul>
</li>
</ul>
</blockquote>
<p>方式二没太明白 ❓</p>
<p>继续 👇</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function func () {
    console.log(2);

    return Promise.resolve()
        .then(() => console.log(5))
        .then(() => console.log(6))
        .then(() => console.log(7))
}

async function test () {
    console.log(1);
    await func()
    console.log(3);
}

test();
console.log(4);

new Promise((resolve) => {
    console.log('B')
    resolve()
}).then(() => {
    console.log('C')
}).then(() => {
    console.log('D')
})

// 最终结果👉: 1 2 4    B 5 C 6 D 7 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还是没懂？</p>
<p>继续 👇</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function test () {
    console.log(1);
    await Promise.resolve()
        .then(() => console.log(5))
        .then(() => console.log(6))
        .then(() => console.log(7))
    console.log(3);
}

test();
console.log(4);

new Promise((resolve) => {
    console.log('B')
    resolve()
}).then(() => {
    console.log('C')
}).then(() => {
    console.log('D')
})

// 最终结果👉: 1 4    B 5 C 6 D 7 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Note:</p>
<p>综上，<code v-pre>await</code>一定要等到右侧的表达式有<strong>确切的值</strong>才会放行，否则将一直等待（阻塞当前<code v-pre>async</code>函数内的后续代码），不服看看这个 👇</p>
<ul>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function func () {
  return new Promise((resolve) => {
      console.log('B')
      // resolve() 故意一直保持pending
  })
}

async function test () {
  console.log(1);
  await func()
  console.log(3);
}

test();
console.log(4);
// 最终结果👉: 1 B 4 (永远不会打印3)


// ---------------------或者写为👇-------------------
async function test () {
  console.log(1);
  await new Promise((resolve) => {
      console.log('B')
      // resolve() 故意一直保持pending
  })
  console.log(3);
}

test();
console.log(4);
// 最终结果👉: 1 B 4 (永远不会打印3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</blockquote>
<p>🌰3：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>async function func () {
    console.log(2);
    return {
        then (cb) {
            cb()
        }
    }
}

async function test () {
    console.log(1);
    await func();
    console.log(3);
}

test();
console.log(4);

new Promise((resolve) => {
    console.log('B')
    resolve()
}).then(() => {
    console.log('C')
}).then(() => {
    console.log('D')
})

// 最终结果👉: 1 2 4 B C 3 D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>步骤拆分 👇：</p>
<ul>
<li>同步代码输出<code v-pre>1、2</code></li>
<li><code v-pre>await</code>拿到<code v-pre>func</code>函数的具体返回值<code v-pre>thenable</code>，将当前<code v-pre>async</code>函数内的后续代码放入微任务<code v-pre>then1</code>(但是需要等待一个<code v-pre>then</code>时间)</li>
<li>同步代码输出<code v-pre>4、B</code>，产生<code v-pre>log(C)</code>的微任务<code v-pre>then2</code></li>
<li>由于<code v-pre>then1</code>滞后一个<code v-pre>then</code>时间，直接执行<code v-pre>then2</code>输出<code v-pre>C</code>，产生<code v-pre>log(D)</code>的微任务<code v-pre>then3</code></li>
<li>执行原本滞后一个<code v-pre>then</code>时间的微任务<code v-pre>then1</code>，输出<code v-pre>3</code></li>
<li>执行最后一个微任务<code v-pre>then3</code>输出<code v-pre>D</code></li>
</ul>
</blockquote>
<h2 id="_4、总结" tabindex="-1"><a class="header-anchor" href="#_4、总结" aria-hidden="true">#</a> 4、总结</h2>
<hr>
<blockquote>
<p><code v-pre>async</code>函数返回值</p>
<ul>
<li>
<p>📑 结论：<code v-pre>async</code>函数在抛出返回值时，会根据返回值<strong>类型</strong>开启<strong>不同数目的微任务</strong></p>
</li>
<li>
<ul>
<li>return 结果值：非<code v-pre>thenable</code>、非<code v-pre>promise</code>（不等待）</li>
<li>return 结果值：<code v-pre>thenable</code>（等待 1 个<code v-pre>then</code>的时间）</li>
<li>return 结果值：<code v-pre>promise</code>（等待 2 个<code v-pre>then</code>的时间）</li>
</ul>
</li>
</ul>
<p><code v-pre>await</code>右值类型区别</p>
<ul>
<li>
<p>接非 <code v-pre>thenable</code> 类型，会立即向微任务队列添加一个微任务<code v-pre>then</code>，<strong>但不需等待</strong></p>
</li>
<li>
<p>接 <code v-pre>thenable</code> 类型，需要<strong>等待一个 <code v-pre>then</code> 的时间之后</strong>执行</p>
</li>
<li>
<p>接<code v-pre>Promise</code>类型(有确定的返回值)，会立即向微任务队列添加一个微任务<code v-pre>then</code>，<strong>但不需等待</strong></p>
</li>
<li>
<ul>
<li>TC 39 对<code v-pre>await</code> 后面是 <code v-pre>promise</code> 的情况如何处理进行了一次修改，<strong>移除</strong>了额外的两个微任务，在<strong>早期版本</strong>，依然会等待两个 <code v-pre>then</code> 的时间</li>
</ul>
</li>
</ul>
</blockquote>
<h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<hr>
<p>[1]<a href="https://juejin.cn/post/6844903715342647310#heading-3:" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903715342647310#heading-3:<ExternalLinkIcon/></a> <em><a href="https://juejin.cn/post/6844903715342647310#heading-3" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903715342647310#heading-3<ExternalLinkIcon/></a></em></p>
</div></template>


