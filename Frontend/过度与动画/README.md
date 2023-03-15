# 过渡与动画

## transition过度

- transition过度属性是CSS3浓墨重彩的特性，过度可以为一个元素在不同样式之间变化自动添加“补间动画”

### transition属性基本使用

- transition属性有4个要素

```css
transition: width 1s linear 0s;
      /*什么属性要过渡 动画时长 变化速度曲线 延迟时间*/
```

### 哪些属性可以参与过度

- 所有数值类型的属性、都可以参与过渡， 比如width、height、left、top、border-radius
- 背景颜色和文字颜色都可以被过渡
- 所有变形（包括2D和3D）都能被过渡

### all

- 如果要所有属性都参与过度，可以写all

```css
transition: all 1s linear 0s;
```

### 过渡的四个小属性

属性|意义
-|-
transition-property|哪些属性要过度
transition-duration|动画时间
transition-timing-function|动画变化曲线（缓动效果）
transition-delay|延迟时间

## 过渡缓动效果

### 缓动参数

transition的第三个参数就是缓动参数，也是变化速度曲线

```css
transition: all 1s linear 0s;
                   /* 变化速度曲线*/
```

### 常用缓动参数

![常用缓动参数](./Capture1.PNG)

### 贝塞尔曲线

-网站https://cubic-bezier.com可以生成贝塞尔曲线，可以自定义动画欢动参数
