package DataStructures;

public class RotatingSLList<T> extends SLList<T>{
  
  public void rotateRight(){
    T last = removeLast();
    addFirst(last);
  }

  public static void main(String[] args) {
    RotatingSLList<Integer> rsl = new RotatingSLList<>();
    rsl.addLast(10);
    rsl.addLast(11);
    rsl.addLast(12);
    rsl.addLast(13);

    rsl.rotateRight();
    rsl.print();
  }
}