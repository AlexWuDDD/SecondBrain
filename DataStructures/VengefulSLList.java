package DataStructures;

public class VengefulSLList<T> extends SLList<T>{
  private SLList<T> deltetdItems;

  public VengefulSLList(){
    super(); //optional
    deltetdItems = new SLList<>();
  }

  public VengefulSLList(T x){
    super(x); //required
    deltetdItems = new SLList<>();
  }

  @Override
  public T removeLast(){
    T x = super.removeLast();
    deltetdItems.addLast(x);
    return x;
  }

  public void printLostItems(){
    deltetdItems.print();
  }

  public static void main(String[] args) {
    VengefulSLList<Integer> vsl = new VengefulSLList<>(9);
    SLList<Integer> s1 = vsl;
    s1.addLast(50);
    s1.removeLast();

    // s1.print();
    // VengefulSLList<Integer> vsl2 = s1;
  }
}
