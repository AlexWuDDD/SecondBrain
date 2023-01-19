package DataStructures.project1A;

public class ArrayDeque<T> {
  
  private T[] items;
  private int size;
  private int nextFirst;
  private int nextLast;

  private final int INITIAL_ARRAY_CAPACITY = 8;
  private final int INCREASE_CAPACITY_R = 2;
  private final double DECREASE_CAPACITY_R = 0.25;

  public ArrayDeque(){
    items = (T[]) new Object[INITIAL_ARRAY_CAPACITY];
    size = 0;
    nextFirst = INITIAL_ARRAY_CAPACITY/2;
    nextLast = INITIAL_ARRAY_CAPACITY/2+1;
  }

  public ArrayDeque(ArrayDeque<T> other){
    items = (T[]) new Object[other.size()];
    for(int i = 0; i < other.size(); ++i){
      items[i] = other.get(i);
    }
    size = other.size();
    nextFirst = size - 1;
    nextLast = 0;
  }

  private void resize(int newCapacity){
    T[] newItems = (T[]) new Object[newCapacity];
    System.arraycopy(items, nextLast, newItems, 0, items.length-nextLast);
    System.arraycopy(items, 0, newItems, items.length-nextLast, nextLast);
    nextFirst = newCapacity-1;
    nextLast = items.length;
    items = newItems;
  }

  public void addFrist(T item){
    if(size == items.length){
      resize(size*INCREASE_CAPACITY_R);
    }
    items[nextFirst] = item;
    nextFirst = nextFirst - 1 >=0 ? nextFirst - 1 : items.length - 1;
    ++size;
  }

  public void addLast(T item){
    if(size == items.length){
      resize(items.length << 1);
    }
    items[nextLast] = item;
    nextLast = nextLast + 1 < items.length ? nextLast + 1 : 0;
    ++size;
  }

  public T removeFirst(){
    T ret = get(0);
    nextFirst = nextFirst + 1 < items.length ? nextFirst + 1 : 0;
    items[nextFirst] = null;
    --size;
    if(size <= items.length * DECREASE_CAPACITY_R){
      resize(items.length >> 1);
    }
    return ret;
  }

  public T removeLast(){
    T ret = get(size-1);
    nextLast = nextLast - 1 >= 0 ? nextLast - 1 : items.length-1;
    items[nextLast] = null;
    --size;
    if(size <= items.length * DECREASE_CAPACITY_R){
      resize(items.length >> 1);
    }
    return ret;
  }

  public T get(int index){
    return items[(nextFirst+1+index)%items.length];
  }

  public int size() {
    return size;
  }

  public void printArray(){
    for(int i = 0; i < size; ++i){
      System.out.print(get(i) + " ");
    }
    System.out.println();
  }

  public static void main(String[] args) {
    ArrayDeque<String> arr = new ArrayDeque<>();
    arr.addLast("a");
    arr.addLast("b");
    arr.addFrist("c");
    arr.addLast("d");
    arr.addLast("e");
    arr.addFrist("f");
    arr.addLast("g");
    arr.addLast("h");
    arr.printArray();
    arr.addLast("Z");
    arr.addFrist("X");
    arr.addLast("Y");
    arr.printArray();
    arr.addFrist("M");
    arr.printArray();

    ArrayDeque<String> arr2 = new ArrayDeque<>(arr);
    arr2.printArray();
    System.out.println(arr2.size());
  }
}
