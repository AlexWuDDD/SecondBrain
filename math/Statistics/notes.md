# Statistics

[TOC]

## Last Update

2022-12-11

## 基础概念

### 概率事件

一个随机事件的概率是一个介于0与1之间的实数，这个实数的大小反映了这个事件发生的可能性。

- 不可能事件：概率为0意味着这个事件不可能发生
- 必然事件：概率为1意味着这个事件必然发生

如果我们用一个实数来代表抛硬币的结果：比如说1表示正面，0表示反面，那么我们称这个数为<u>**随机变量**</u>。

### 期望

一个随机变量的期望刻画的是这个随机变量的概率分布的“中心”

数学上对期望的定义是以概率（或密度）为权重的加权平均值。
$$
E[X] = \sum_{x \in X}xP(x)
$$

### 方差

方差刻画了概率分币的分散度。

方差的定义是一个随机变量与它的期望之间的平方的加权平均值。这里的权重仍然是概率（或者密度）。

$$
Var(X)=E[(X-E[X])^2]
$$

### 古典概型

古典概型本质上就是数数
排列与组合

### 条件概率

基于已有的相关信息得出的概率称为条件概率

## Bookmaker

[概率分布](https://seeing-theory.brown.edu/probability-distributions/cn.html)