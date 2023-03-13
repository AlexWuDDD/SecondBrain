# 背景

## background-color 属性

- background-color属性表示背景颜色
- 背景颜色可以用十六进制、rgb()、rgba()表示法表示
- padding区域是有背景颜色的

## background-imgae属性

- background-image属性用来设置背景图片，图片路径要写到url()圆括号中，可以是相对路径，也可以是http://开头的绝对路径

```css
background-image: url(images/bg1.jpg)
```

- 如果样式是外链的，那么要书写从CSS出发到图片的路径，而不是从html出发

## background-size属性

- background-size属性用来设置背景图片的尺寸

```css
background-size: 100px 200px;
                /*宽度  高度*/
```

- 值也可以用百分数来设置，表示为盒子宽、高的百分之多少
- 需要等比例设置的值，写auto

### contain和cover

- contain和cover是两个特殊的background-size的值
- contain表示将背景图片只能改变尺寸以**容纳到盒子里**
- cover表示将背景图片只能改变尺寸以**撑满盒子**

## background-clip属性

- background-clip属性用来设置元素的背景裁切到哪个盒子

值|意义
-|-
border-box|背景延伸至边框（默认值）
padding-box|背景延伸到内边（padding），不会会知道边框处（仅在dotted、dashed边框可察觉）
content-box|背景被剪裁至内容区

## background-attachment属性