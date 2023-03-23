"""
File: linkedlist_deque.py
Created Time: 2023-03-01
Author: Krahets (krahets@163.com)
"""

import sys, os.path as osp
sys.path.append(osp.dirname(osp.dirname(osp.abspath(__file__))))
from modules import *

class ListNode:
    """ 双向链表结点 """
    def __init__(self, val: int) -> None:
        """ 构造方法 """
        self.val: int = val
        self.next: Optional[ListNode] = None  # 后继结点引用（指针）
        self.prev: Optional[ListNode] = None  # 前驱结点引用（指针）

class LinkedListDeque:
    """ 基于双向链表实现的双向队列 """
    def __init__(self) -> None:
        """ 构造方法 """
        self.front: Optional[ListNode] = None # 头结点 front
        self.rear: Optional[ListNode] = None  # 尾结点 rear
        self.__size: int = 0        # 双向队列的长度

    def size(self) -> int:
        """ 获取双向队列的长度 """
        return self.__size

    def is_empty(self) -> bool:
        """ 判断双向队列是否为空 """
        return self.size() == 0

    def push(self, num: int, is_front: bool) -> None:
        """ 入队操作 """
        node = ListNode(num)
        # 若链表为空，则令 front, rear 都指向 node
        if self.is_empty():
            self.front = self.rear = node
        # 队首入队操作
        elif is_front:
            # 将 node 添加至链表头部
            self.front.prev = node
            node.next = self.front
            self.front = node  # 更新头结点
        # 队尾入队操作
        else:
            # 将 node 添加至链表尾部
            self.rear.next = node
            node.prev = self.rear
            self.rear = node  # 更新尾结点
        self.__size += 1  # 更新队列长度

    def push_first(self, num: int) -> None:
        """ 队首入队 """
        self.push(num, True)

    def push_last(self, num: int) -> None:
        """ 队尾入队 """
        self.push(num, False)

    def pop(self, is_front: bool) -> int:
        """ 出队操作 """
        # 若队列为空，直接返回 None
        if self.is_empty():
            return None
        # 队首出队操作
        if is_front:
            val: int = self.front.val  # 暂存头结点值
            # 删除头结点
            fnext: Optional[ListNode] = self.front.next
            if fnext != None:
                fnext.prev = None
                self.front.next = None
            self.front = fnext  # 更新头结点
        # 队尾出队操作
        else:
            val: int = self.rear.val  # 暂存尾结点值
            # 删除尾结点
            rprev: Optional[ListNode] = self.rear.prev
            if rprev != None:
                rprev.next = None
                self.rear.prev = None
            self.rear = rprev  # 更新尾结点
        self.__size -= 1  # 更新队列长度
        return val

    def pop_first(self) -> int:
        """ 队首出队 """
        return self.pop(True)

    def pop_last(self) -> int:
        """ 队尾出队 """
        return self.pop(False)

    def peek_first(self) -> int:
        """ 访问队首元素 """
        return None if self.is_empty() else self.front.val

    def peek_last(self) -> int:
        """ 访问队尾元素 """
        return None if self.is_empty() else self.rear.val

    def to_array(self) -> List[int]:
        """ 返回数组用于打印 """
        node: Optional[ListNode] = self.front
        res: List[int] = [0] * self.size()
        for i in range(self.size()):
            res[i] = node.val
            node = node.next
        return res


""" Driver Code """
if __name__ == "__main__":
    """ 初始化双向队列 """
    deque = LinkedListDeque()
    deque.push_last(3)
    deque.push_last(2)
    deque.push_last(5)
    print("双向队列 deque =", deque.to_array())

    """ 访问元素 """
    peek_first: int = deque.peek_first()
    print("队首元素 peek_first =", peek_first)
    peek_last: int = deque.peek_last()
    print("队尾元素 peek_last =", peek_last)

    """ 元素入队 """
    deque.push_last(4)
    print("元素 4 队尾入队后 deque =", deque.to_array())
    deque.push_first(1)
    print("元素 1 队首入队后 deque =", deque.to_array())

    """ 元素出队 """
    pop_last: int = deque.pop_last()
    print("队尾出队元素 =", pop_last, "，队尾出队后 deque =", deque.to_array())
    pop_first: int = deque.pop_first()
    print("队首出队元素 =", pop_first, "，队首出队后 deque =", deque.to_array())

    """ 获取双向队列的长度 """
    size: int = deque.size()
    print("双向队列长度 size =", size)

    """ 判断双向队列是否为空 """
    is_empty: bool = deque.is_empty()
    print("双向队列是否为空 =", is_empty)
