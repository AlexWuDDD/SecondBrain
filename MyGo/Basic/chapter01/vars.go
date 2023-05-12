package main

import "fmt"

var version string = "1.0"

func main() {
	//定义一个string类型的变量me
	/*
		变量名需要满足标识符命名规则
		1. 必须由非空的unicode字符串组成、数字、_
		2. 不能以数字开头
		3. 不能为go的关键字(25个)
		4. 避免和go预定义标识符冲突
		5. 驼峰
		6. 标识符区分大小写
	*/
	var me string

	fmt.Println(me)

	me = "kk"

	fmt.Println(me)

	var name, user string = "kk", "ll"
	fmt.Println(name, user)

	var (
		age    int     = 30
		height float64 = 183.55
	)
	fmt.Println(age, height)

	var (
		s = "kk"
		a = 31
	)

	fmt.Println(s, a)

	//这是一个简短声明
	//只能在函数内部使用
	isBoy := true
	isGirl := false
	fmt.Println(isBoy, isGirl)

	s = "aaaaaa"

	fmt.Println(s)

	//交换
	var1, var2 := 1, 2
	fmt.Println(var1, var2)
	var1, var2 = var2, var1
	fmt.Println(var1, var2)

}
