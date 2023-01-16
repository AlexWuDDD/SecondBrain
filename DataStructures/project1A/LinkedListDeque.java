package DataStructures.project1A;

public class LinkedListDeque<T> {


  private static class Node<T>{
    public T item;
    public Node<T> prev;
    public Node<T> next;

    public Node(T i, Node<T> p, Node<T> n){
      item = i;
      prev = p;
      next = n;
    }
  }

  private Node<T> sentinel;
  private int size;
  
  private void createSentinel(){
    sentinel = new Node<T>(null, null, null);
    sentinel.next = sentinel;
    sentinel.prev = sentinel;
  }

  public LinkedListDeque(){
    createSentinel();
    size = 0;
  }

  public LinkedListDeque(LinkedListDeque<T> other){
    if(other.isEmpty()){
      return;
    }

    createSentinel();

    for(int i = 0 ; i < other.size(); ++i){
      addLast(other.get(i));
    }
  }

  private T getRecursive(int r, Node<T> n){
    if(r == 0){
      return n.item;
    }
    return getRecursive(r-1, n.next);
  }

  public T getRecursive(int index){
    return getRecursive(index, sentinel.next);
  }

  public void addFirst(T item){
    Node<T> newFirst = new Node<>(item, null, null); 
    Node<T> oldFirst = sentinel.next;
    sentinel.next = newFirst;
    newFirst.next = oldFirst;
    newFirst.prev = sentinel;
    oldFirst.prev = newFirst;

    ++size;
  }

  public void addLast(T item){
    Node<T> newLast = new Node<>(item, null, null);
    Node<T> oldLast = sentinel.prev;
    sentinel.prev = newLast;
    newLast.prev = oldLast;
    newLast.next = sentinel;
    oldLast.next = newLast;

    ++size;
  }

  public boolean isEmpty(){
    return size == 0;
  }

  public int size(){
    return size;
  }

  public void printDeque(){
    Node<T> temp = sentinel.next;
    while(temp != sentinel){
      System.out.print(temp.item + " ");
      temp = temp.next;
    }
    System.out.println();
  }

  public T removeFirst(){
    Node<T> first = sentinel.next;
    sentinel.next = first.next;
    first.next.prev = sentinel;
    --size;
    return first.item;
  }

  public T removeLast(){
    Node<T> last = sentinel.prev;
    sentinel.prev = last.prev;
    last.prev.next = sentinel;
    --size;
    return last.item;
  }

  public T get(int index){
    if(index >= size){
      return null;
    }

    int mid = size/2;
    Node<T> cur = sentinel;
    if(index <= mid){
      cur = cur.next;
      for(int i = 0; i < index; ++i){
        cur = cur.next;
      }
    }
    else{
      cur = cur.prev;
      for(int i = 0; i < size-index -1; ++i){
        cur = cur.prev;
      }
    }
    return cur.item;
  }
}
