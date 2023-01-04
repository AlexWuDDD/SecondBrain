package DataStructures;

public class IntList{

  public int first;
  public IntList rest;

  public IntList(int f, IntList r){
    first = f;
    rest = r;
  }

  /** Return the size of the list using... recursion! */
  public int size(){
    if(rest == null){
      return 1;
    }

    return 1 + rest.size();
  }

  /** Return the size of the list using no recursion! */
  public int iterativeSize(){
    IntList p = this;
    int totalSize = 0;
    while(p != null){
      totalSize += 1;
      p = p.rest;
    }
    return totalSize;
  }

  /** Return the value in the index of the list using recursion! */
  public int get(int index){
    if(0 == index){
      return first;
    }

    return rest.get(index-1);
  }

  /** Return the value in the index of the list using no recursion! */
  public int iterativeGet(int index){
    IntList p = this;
    for(int i = 0; i < index; ++i){
      p = p.rest;
    }
    return p.first;
  }

  public static void main(String[] args) {
    IntList L = new IntList(15, null);
    L = new IntList(10, L);
    L = new IntList(5, L);

    System.out.println(L.size());
    System.out.println(L.iterativeSize());
    System.out.println(L.get(0));
    System.out.println(L.get(1));
    System.out.println(L.get(2));
    System.out.println(L.iterativeGet(0));
    System.out.println(L.iterativeGet(1));
    System.out.println(L.iterativeGet(2));
  }
}