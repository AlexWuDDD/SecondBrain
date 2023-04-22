# ES6 More

## 剩余参数

[Demo](./%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0.html)

### 注意事项

[Demo](./%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.html)

### 应用

[Demo](./%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0%E7%9A%84%E5%BA%94%E7%94%A8.html)

## 数组展开符

### 基本用法

```js

const arr = [1,2,3]
console.log(Math.min(...arr));

```

### 区分剩余参数和展开运算符

```js

//根本区别
//展开运算符
//[3,1,2] => 3,1,2
//剩余参数
//3,1,2=> [3,1,2]
```

### 数组展开运算符的应用

- 复制数组
- 合并数组
- 字符转转为数组
  - ...'alex'

## 对象展开运算符

[Demo](./%E5%AF%B9%E8%B1%A1%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6.html)

### 对象展开运算符的注意事项

- 如果展开运算符后面是字符串，它会自动转成一个类似数组的对象，因此返回的不是空对象

### 对象展开运算符的实际应用

```js

const defaultParam = {
  username: "xxx",
  age: 0,
  sex: 'male'
}

const {username, age, sex} = {...defaultParam, ...userParam};
```
