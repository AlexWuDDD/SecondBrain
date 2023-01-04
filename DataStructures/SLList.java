package DataStructures;
/*
 * An SLList is a list of integers, which hides the terrible
 * truth of the nakedness within
 */
public class SLList{

  private static class IntNode {
    public int item;
    public IntNode next;
  
    public IntNode(int i, IntNode n){
      item = i;
      next = n;
    }
  }

  private IntNode sentinel;
  private int size;

  public SLList(){
    sentinel = new IntNode(63, null);
    size = 0;
  }

  public SLList(int x){
    sentinel = new IntNode(63, null);
    sentinel.next = new IntNode(x, null);
    size = 1;
  }

  /** Adds x to the front of the list*/ 
  public void addFirst(int x){
    // IntNode newFirst = new IntNode(x, first);
    // first = newFirst;
    sentinel.next = new IntNode(x, sentinel.next);
    size += 1;
  }

  /** Return the first item in the list*/
  public int getFirst(){
    return sentinel.next.item;
  }

  /** Adds an item to the end of the list */
  public void addLast(int x){

    size += 1;

    IntNode p = sentinel;

    while(null != p.next){
      p = p.next;
    }

    p.next = new IntNode(x, null);

  }

  /** Returns the size of the list starting at IntNode p*/
  // private static int size(IntNode p){
  //   if(null == p.next){
  //     return 1;
  //   }

  //   return 1 + size(p.next);
  // }  

  public int size(){
    // return size(first);
    return size;
  }

  public static void main(String[] args) {
    SLList L1 = new SLList(10);
    L1.addLast(30);
    System.out.println(L1.getFirst());
    L1.addFirst(20);
    System.out.println(L1.getFirst());
    L1.addLast(5);
    System.out.println(L1.size());

    SLList L2 = new SLList();
    L2.addLast(30);
    L2.addFirst(20);
    System.out.println(L2.getFirst());
    System.out.println(L2.size());
    System.out.println(L2.getFirst());
  }
}