# 笔记

## 一. Promise是什么？

> Promise是异步编程的一种解决方案，比传统的解决方案回调函数，更合理和更强大。ES6将其写进了语言标准，统一了用法，原生提供了Promise对象。

- 指定回调函数方式更灵活易懂。

- 解决异步 **回调地狱** 的问题。

### 1. 回调地狱

[说明](./01.html)

## 二. Promise基础使用

[说明1](./02_1.html)

[说明2](./02_2.html)

## 三. Promise对象的状态

Promise对象通过自身的状态，来控制异步操作。Promise实例具有三种状态。

```txt
异步操作未完成（pending）
异步操作成功（fulfilled）
异步操作未完成（rejected）
```

这三种状态的变化途径只有两种。

```txt
从“未完成”到“成功”
从“未完成”到“失败”
```

一旦状态发生变化，就凝固了，不会再有新的状态变化。这也是Promise这个名字的由来，它的英语意思是“承诺”，一旦承诺成效，就不得再改变了。
这也意味着，Promise实例的状态变化只可能发生一次。
因此，Promise的最终结果只有两种。

```txt
异步操作成功，Promise实例传回一个值（value),状态变为fulfilled。
异步操作失败，Promise实例抛出一个错误（error),状态变为rejected。
```

[说明](./03_1.html)

## 四. Promised结果

[说明](./04_1.html)

## 五. Promise封装AJAX

[说明](./05_1.html)

## 六. Promise对象方法

> Promise是一个对象，也是一个构造函数

### 1. Promise.resolve

将现有对象转为Promise对象

```js
Promise.resolve('Alex')
//等价于
new Promise(resolve => resolve('Alex'))
```

[说明1](./06_1.html)

[说明2](./06_2.html)

### 2. Promise.reject

Promise.reject(reason)方法也将返回一个新的Promise实例，该实例的状态为rejected

```js
const p = Promise.reject('error');
//等同于
const p = new Promise((resolve, reject)=>reject('error'))
```

[说明3](./06_3.html)

[说明4](./06_4.html)

[链式调用实例1](./06_5.html)



### 3. Promise.all

Promise.all()方法用于将多个Promise实例，包装成一个新的Promise实例。

```js
const p = Promise.all([p1, p2, p3]);

```

p的状态由p1,p2, p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成fulfilled, p的状态才会变成fulfilled, 此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected, p的状态就会变成rejected, 此时第一个被rejected的实例的返回值，会传递给p的回调函数。

[说明](./06_6.html)

### 4. Promise.race

Promise.race()方法同样是将多个Promise实例，包装成一个新的Promise实例

```js
const p = Promise.race([p1, p2, p2]);
```

上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的回调函数。

[说明1](./06_7.html)

[说明2](./06_8.html)

[怎么封装请求超时](./06_9.html)

### 5. Promise.allSettled

Promise.allSettled()方法，用来确定一组异步操作是否都结束了（不管成功或失败）。所以，它的名字叫做“Settled”，包含了“fulfilled”和“rejected”两种情况。

```js
const promises = [ajax("/aaa"), ajax("/bbb")];
Promise.allSettled(promises).then(resultes=>{
  //过滤出成功的请求
  results.filter(item=>item.status === "fulfilled");
  //过滤出失败的请求
  results.filter(item=>item.status === "rejected");
})
```

[说明](./06_10.html)

### 6. Promise.any

只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；
如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。

>Promise.any()跟Promise.race()方法很像，只有一点不同，就是Promise.any()不会因为某个Promise变成rejected状态而结束，必须等到所有参数Promise变成rejected状态才会结束。

## 七. finally

[说明](./07_1.html)

[loading](./07_2.html)

## 八. Async与Await

### 1. Async

async函数，使得异步操作变得更加方便。

- 更好的语义
- 返回值是Promise

```js

async function test(){

}
test();

```

### 2.Await

await命令后面是一个Promise对象，返回该对象的结果。如果不是Promise对象，就直接返回对应的值。

```js
async function test(){
  let res1 = await ajax("/aaa");
  let res2 = await ajax("/bbbb");
  return res2;
}

test().then(res=>{
  console.log("返回结果"，res);
}).catch(err=>{
  console.log("err", err);
})
```

### 3. 错误处理
