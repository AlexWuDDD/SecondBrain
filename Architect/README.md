# 架构设计

## 架构设计的相关特性

架构设计的关键思维是判断和取舍，程序设计的关键思维是逻辑与实现

## 架构到底是什么

### 系统与子系统

#### 系统

> 系统泛指由一群有**关联**的个体组成，根据某种**规则**运作，能完成个别元件不能单独完成的工作的群体。它的意思是“总体”、“整体”或“联盟”。

### 子系统

> 子系统也是由一群有关联的个体所组成的系统，多半会是更大系统中的一部分。

### 模块与组件

模块和组件都是系统的组成部分，只是从不同的角度拆分系统而已。

从逻辑的角度来拆分系统后，得到的单元就是“模块”；从物理的角度来拆分系统后，得到的单元就是“组件”(component, 零件，从物理上更容易理解)。

划分模块的主要目的是职责分离；划分组件的主要目的是单元复用。

### 框架与架构

>软件框架（Software framework）通常指的是为了实现某个业界标准或完成特定基本任务的软件组件规范，也指为了实现某个软件组件规范时，提供规范所要求之基础功能的软件产品。

- 框架是组件规范
- 框架提供基础功能的产品

> 软件架构指软件系统的“基础结构”，创造这些基础结构的准则，以及对这些结构的描述。

> 框架关注的是“规范”，架构关注的是“结构”。

### 重新定义架构

> 软件架构指关键系统的顶层结构

首先，“系统是一群关联个体组成；架构需要明确系统包含哪些”个体“。

其次，系统中的个体需要“根据某种规则”运作，架构需要明确个体运作和协作的规则。

