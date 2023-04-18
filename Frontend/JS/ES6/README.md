# ES6

## 基础

### ECMAScript6

- ECMAScript是语言的标准
- 6是版本号

> ES6 = ECMAScript这门语言的第6代标准

### ECMAScript

- 欧洲计算机制造商协会
- 标准化组织

> ECMAScript = 由ECMA这个标准化组织制定的一个语言标准

#### 具体是什么

- 语法
- API

#### 历史版本

ES1~3、ES5~6

- ES4被废弃了
- ES3
  - do while、switch、正则表达式
- ES5
  - forEach、map、filter、Object.create、Object.defineProperty
- ES6

#### 命名方式

- ES6 vs ES2015
  - ES6 -> ES7 -> ES8 -> ... = ES6+
  - ES2015 -> ES2016 -> ES2017 -> ...

![ES6](./ES6.PNG)

#### ES与JavaScript的关系

- JavaScript(浏览器端) = ECMAScript(语法+API) + DOM + BOM

#### ES6的兼容性

- 主流浏览器的最新版本几乎全部支持ES6
- IE老版本等不支持的浏览器，可以用**Babel**转码

### let和const

- let和const是什么
- let和const的用法
- 什么是变量，什么是常量

[Demo](./1.let%E5%92%8Cconst%E6%98%AF%E4%BB%80%E4%B9%88.html)

### const

- 为什么需要const
  - 就是为了那些一旦初始化就不希望重新赋值的情况设计的
- const的注意事项
  - 一旦声明，就必须立即初始化，不能留到以后赋值
  - const声明的常量，允许在不重新赋值的情况下修改它的值
    - 引用数据类型
- 什么时候用const. 什么时候用let
  - 不知道用什么的时候，先用const

### let、const与var的区别

- 重复声明
  - var 允许
  - let、const不允许
- 暂时性死区
  - let、const有，var没有
  - 只要作用域内存在ley、const,它们所声明的变量或常量就自动“绑定”这个区域，不再受外部作用域的影响
- winodw对象的属性和方法（全局作用域中）
  - 全局作用域中， var声明的变量，通过function声明的函数会自动变成window对象的属性或方法
  - let、const不会
- 变量提升
  - var会提升变量到当前作用域的顶部：
    - console.log(a);
    - var a = 1;
  - let、const不存在变量提升
    - 养成良好的编程习惯，对于所有的变量或常量，做到先声明、后使用
- **块级作用域**
  - [Demo](./%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F.html)

### let和const的应用

[理解作用域](./let%E5%92%8Cconst%E7%9A%84%E5%BA%94%E7%94%A8.html)

## 模板字符串与箭头函数

### 模板字符串

[Demo](./%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B21.html)

#### 模板字符串的注意事项

[Demo](./%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B22.html)

#### 模板字符串的应用

[Demo](./%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%BA%94%E7%94%A8.html)

### 箭头函数

#### 箭头函数是什么？

[Demo](./%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%98%AF%E4%BB%80%E4%B9%88.html)

#### 箭头函数的注意事项

[Demo](./%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.html)

### this指向

[非箭头函数中的this指向问题](./%E9%9D%9E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84this%E6%8C%87%E5%90%91%E9%97%AE%E9%A2%98.html
)

[箭头函数中的this指向问题](./%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84this%E6%8C%87%E5%90%91.html)

### 不适用箭头函数的场景

- 作为构造函数
- 需要this指向调用对象的时候
- 需要使用arguments的时候

### 箭头函数的应用

[Demo](./%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%BA%94%E7%94%A8.html)

## 解构赋值

[解构赋值是什么](./%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC%E6%98%AF%E4%BB%80%E4%B9%88.html)

### 数组的结构赋值

#### 数组解构赋值的原理

- 模式（结构）匹配
- 索引值相同的完成赋值

[Demo](./%E6%95%B0%E7%BB%84%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC%E7%9A%84%E5%8E%9F%E7%90%86.html)

#### 数组解构模式的默认值

[Demo](./%E6%95%B0%E7%BB%84%E8%A7%A3%E6%9E%84%E6%A8%A1%E5%BC%8F%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC.html)

#### 数组解构赋值的应用

[Demo](./%E6%95%B0%E7%BB%84%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC%E7%9A%84%E5%BA%94%E7%94%A8.html)

### 对象的解构赋值

#### 对象解构赋值的原理

- 模式（结构）匹配
- 属性名相同的完成赋值

[Demo](./%E5%AF%B9%E8%B1%A1%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC%E7%9A%84%E5%8E%9F%E7%90%86.html)

#### 对象解构赋值的注意事项

[Demo](./%E5%AF%B9%E8%B1%A1%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.html)

#### 对象解构赋值的应用

[Demo](./%E5%AF%B9%E8%B1%A1%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC%E7%9A%84%E5%BA%94%E7%94%A8.html)

### 其他数据类型的解构赋值

[Demo](./%E5%85%B6%E4%BB%96%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC.html)

## 对象字面量的增强

### 属性和方法的简洁表示法

![Demo](./%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95%E7%9A%84%E7%AE%80%E6%B4%81%E8%A1%A8%E7%A4%BA%E6%B3%95.html)

### 方括号表示法

![Demo](./%E6%96%B9%E6%8B%AC%E5%8F%B7%E8%A1%A8%E7%A4%BA%E6%B3%95.html)

## 函数参数的默认值

### 函数参数的默认值是什么

![Demo](./%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC%E6%98%AF%E4%BB%80%E4%B9%88.html)

### 函数参数默认值的注意事项

- 不传参数，或者明确的传递undefined作为参数，只有这两种情况下，默认值才会生效
- 默认值表达式
  - 如果默认值是表达式，默认值表达式是惰性求值的
- 设置默认值的小技巧
  - 函数参数的默认值，最好从参数列表的右边开始设置
  