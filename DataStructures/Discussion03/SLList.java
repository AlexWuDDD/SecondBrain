package DataStructures.Discussion03;

public class SLList {
  private class IntNode{
    public int item;
    public IntNode next;
    public IntNode(int item, IntNode next){
      this.item = item;
      this.next = next;
    }
  }

  private IntNode first;

  public void addFirst(int x){
    first = new IntNode(x, first);
  }

  public void insert(int item, int position){
    IntNode cur = first;
    while(cur.next != null && position-1 > 0){
      cur = cur.next;
      --position;
    }
    IntNode next = cur.next;
    cur.next = new IntNode(item, next);
  }

  public int size(){
    int cnt = 0;
    IntNode cur = first;
    while(cur != null){
      ++cnt;
      cur = cur.next;
    }
    return cnt;
  }

  private IntNode getNode(int index){
    IntNode cur = first;
    for(int i = 0; i < index; ++i){
      cur = cur.next;
    }
    return cur;
  }


  public void reverse(){
    IntNode prev = null;
    IntNode cur = first;
    while(cur != null){
      IntNode next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    first = prev;
  }

  public void reverseRecursion(){
    first = reverseList(first);
  }

  private IntNode reverseList(IntNode head){
    if(null == head || null == head.next){
      return head;
    }

    IntNode newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }


  public void printSLList(){
    IntNode cur = first;
    while(cur != null){
      System.out.print(cur.item + " ");
      cur = cur.next;
    }
    System.out.println();
  }

  public static void main(String[] args) {
   SLList list = new SLList();
   list.addFirst(2); 
   list.addFirst(6); 
   list.addFirst(5);
   list.printSLList();
   
   list.insert(10,  1);
   list.printSLList();

   list.insert(10, 10);
   list.printSLList();

   System.out.println(list.size());
   list.reverse();
   list.printSLList();

   
   list.insert(99, 99);
   list.printSLList();

   list.reverse();
   list.printSLList();

   list.reverseRecursion();
   list.printSLList();
  }
}

