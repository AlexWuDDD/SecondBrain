package DataStructures;
/*
 * An SLList is a list of integers, which hides the terrible
 * truth of the nakedness within
 */
public class SLList<T> implements List61B<T>{

  private static class StuffNode<T> {
    public T item;
    public StuffNode<T> next;
  
    public StuffNode(T i, StuffNode<T> n){
      item = i;
      next = n;
    }
  }

  private StuffNode<T> sentinel;
  private int size;

  public SLList(){
    sentinel = new StuffNode<T>(null, null);
    size = 0;
  }

  public SLList(T x){
    sentinel = new StuffNode<T>(null, null);
    sentinel.next = new StuffNode<T>(x, null);
    size = 1;
  }

  /** Adds x to the front of the list*/ 
  public void addFirst(T x){
    // StuffNode newFirst = new StuffNode(x, first);
    // first = newFirst;
    sentinel.next = new StuffNode<T>(x, sentinel.next);
    size += 1;
  }

  /** Return the first item in the list*/
  public T getFirst(){
    return sentinel.next.item;
  }

  /** Adds an item to the end of the list */
  public void addLast(T x){

    size += 1;

    StuffNode<T> p = sentinel;

    while(null != p.next){
      p = p.next;
    }

    p.next = new StuffNode<T>(x, null);

  }

  /** Returns the size of the list starting at StuffNode p*/
  // private static int size(StuffNode p){
  //   if(null == p.next){
  //     return 1;
  //   }

  //   return 1 + size(p.next);
  // }  

  public int size(){
    // return size(first);
    return size;
  }

  public T get(int index){
    StuffNode<T> cur = sentinel;
    index = index+1;
    for(int i = 0 ; i < index; ++i){
      cur = cur.next;
    }
    return cur.item;
  }

  public static void main(String[] args) {
    SLList<Integer> L1 = new SLList<>(10);
    L1.addLast(30);
    System.out.println(L1.getFirst());
    L1.addFirst(20);
    System.out.println(L1.getFirst());
    L1.addLast(5);
    System.out.println(L1.size());

    SLList<Integer> L2 = new SLList<>();
    L2.addLast(30);
    L2.addFirst(20);
    System.out.println(L2.getFirst());
    System.out.println(L2.size());
    System.out.println(L2.getFirst());
  }

  @Override
  public T getLast() {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public T removeLast() {
    StuffNode<T> cur = sentinel;
    for(int i = 0; i < size-1; ++i){
      cur = cur.next;
    }
    T ret = cur.next.item;
    cur.next = null;
    --size;
    return ret;
  }

  @Override
  public void insert(T x, int position) {
    // TODO Auto-generated method stub
    
  }
}