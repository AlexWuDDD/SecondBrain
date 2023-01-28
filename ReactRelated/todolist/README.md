# README

## imutable

state 不允许我们做任何的改变

## 可以与其它框架并存

## 单向数据流

## 视图层框架

## 函数式编程

## props, state与render函数的关系

1. 当组件的state或者props发生改变的时候, render函数就会重新执行
2. 当父组件的render函数被运行时，它的子组件的render都将被重新运行一次

## 虚拟DOM

1. state 数据
2. JSX 模板
3. 数据 + 模板 生成虚拟DOM （虚拟DOM就是一个JS对象，用它来描述真实DOM）（损耗了性能）

    ```txt
    ['div', {id: 'abc'}, ['span', {}, 'hello world']]
    ```

4. 用虚拟DOM的结构生成真实的DOM，来显示:

    ```<div id="abc"><span>hello world</span></div>```


5. state 发生变化
6. 数据 + 模板 生成新的虚拟DOM（极大的提升了性能）

    ```txt
    ['div', {id: 'abc'}, ['span', {}, 'bye bye']]
    ```

7. 比较原始虚拟DOM和新的虚拟DOM的区别[Diff算法](#diff算法)，找到区别是span中内容（极大的提升了性能）：
8. 直接操作DOM，改变span中的内容

```txt
减少了对真实DOM的创建，减少了对真实DOM的对比，取而代之的是创建的都是JS对象，比较的也是JS对象，实现了极大的新能飞跃
```

![虚拟DOM1](./%E8%99%9A%E6%8B%9FDOM1.PNG)

优点：

1. 性能提升了
2. 它使得跨段应用得以实现。React Native

### Diff算法

setState是异步操作
假如连续操作三次setState，react会合并这三次操作，节省性能

![setstate异步操作](./diff1.PNG)
同级比较，只要发现有一层不一样，其子层就不会在比较，会全部替换

- 比对算法简单，比对速度快，虽然会浪费性能

![同级比较](./diff2.PNG)

![虚拟DOM节点带key](./diff3.PNG)

> **提升React性能的关键是保证虚拟DOM节点的key值不变**
> 所以能不用index做key值，就不要用index做key值
