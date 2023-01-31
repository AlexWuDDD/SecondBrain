package DataStructures.project1B;

public class ArrayDeque<T> implements Deque<T>{
  
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
    
    int index1 = nextFirst + 1 >= items.length ? 0 : nextFirst + 1;
    int length1 = index1 + size >= items.length ? items.length - index1 : size;
    int index2 = index1 + length1 + 1 >= items.length ? 0 : index1 + length1;
    int length2 = size-length1;

    System.arraycopy(items, index1 ,newItems, 0, length1);
    System.arraycopy(items, index2 ,newItems, length1, length2);

    nextFirst = newCapacity-1;
    nextLast = size;
    items = newItems;
  }

  @Override
  public void addFirst(T item){
    if(size == items.length){
      resize(size*INCREASE_CAPACITY_R);
    }
    items[nextFirst] = item;
    nextFirst = nextFirst - 1 >=0 ? nextFirst - 1 : items.length - 1;
    ++size;
  }

  @Override
  public void addLast(T item){
    if(size == items.length){
      resize(items.length << 1);
    }
    items[nextLast] = item;
    nextLast = nextLast + 1 < items.length ? nextLast + 1 : 0;
    ++size;
  }

  @Override
  public T removeFirst(){
    T ret = get(0);
    nextFirst = nextFirst + 1 < items.length ? nextFirst + 1 : 0;
    items[nextFirst] = null;
    --size;
    if(size == items.length * DECREASE_CAPACITY_R){
      resize(items.length >> 1);
    }
    return ret;
  }

  @Override
  public T removeLast(){
    T ret = get(size-1);
    nextLast = nextLast - 1 >= 0 ? nextLast - 1 : items.length-1;
    items[nextLast] = null;
    --size;
    if(size == items.length * DECREASE_CAPACITY_R){
      resize(items.length >> 1);
    }
    return ret;
  }

  @Override
  public T get(int index){
    return items[(nextFirst+1+index)%items.length];
  }

  @Override
  public int size() {
    return size;
  }

  @Override
  public void printDeque() {
    // TODO Auto-generated method stub
    for(int i = 0; i < size; ++i){
      System.out.print(get(i) + " ");
    }
    System.out.println();
    
  }
}
