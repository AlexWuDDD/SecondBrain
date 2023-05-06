# Babel

Babel是JavaScript的编译器，用来将ES6的代码，转换成ES6之前的代码

Babel本身可以编译ES6的大部分语法，比如let、const、箭头函数、类

但对于ES6新增的API，比如Set、Map、Promise等全局对象，以及一些定义在全局对象上的方法（Object.assign/Array.from）都不能直接编译，需要借助其他的模块

Babel一般需要配合Webpack来编译模块语法