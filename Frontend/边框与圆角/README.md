# 边框与圆角

## border属性

- border属性需要三个要素：

```css
border: 1px solid red;
      /*线宽度 线型 线颜色*/
```

### 线型

线型值|意义
-|-
solid|实线
dashed|虚线
dotted|点状线

### 边框的三要素小属性

边框三要素可以拆为小属性

小属性|意义
-|-
border-width|线宽
border-style|线型
border-color|线颜色

## 四个方向的边框

属性|意义
-|-
border-top|上边框
border-right|右边框
border-bottom|下边框
border-left|左边框

### 四个方向边框的三要素小属性

属性|意义
-|-
border-top-width|上边框宽度
border-top-style|上边框线型
border-top-color|上边框颜色
border-right-width|右边框宽度
border-right-style|右边框线型
border-right-color|右边框颜色
border-bottom-width|下边框宽度
border-bottom-style|下边框线型
border-bottom-color|下边框颜色
border-left-width|左边框宽度
border-left-style|左边框线型
border-left-color|左边框颜色

>小属性用来层叠大属性

## 去掉边框

- border-left: none; 属性即可去掉左边框，以此类推

## 利用边框制作三角形

- 可以巧妙的利用边框的特性制作三角形

## box-shadow属性

```css
box-shadow: 10px 20px 30px rgba(0,0,0,.4);
          /*x偏移 y偏移 模糊量 颜色*/
```

### 阴影延展

```css
box-shadow: 10px 20px 30px 40px rgba(0,0,0,.4);
                        /*阴影延展*/
```

### 内阴影

box-shadow属性值前架inset单词，表示内阴影

```css
box-shadow: inset 10px 20px 30px rgba(0,0,0,.4);
          /*x偏移 y偏移 模糊量 颜色*/
```

### 多阴影

box-shadow属性值可以用逗号隔开多个，表示携带多个阴影
