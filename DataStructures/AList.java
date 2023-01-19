package DataStructures;

import java.lang.reflect.Array;

public class AList<T> {

  private T[] arr;
  private Class<T[]> myClazz;
  private int size;

  private final int INITIAL_ARRAY_COMPACITY = 1;
  private final int RFACTOR = 2;
  private final double R = 0.25;

  private T[] createArr(Class<T[]> clazz, int capacity){
    return clazz.cast(Array.newInstance(clazz.getComponentType(), capacity));
  }
  
  public AList(Class<T[]> clazz){
    myClazz = clazz;
    arr = createArr(myClazz, INITIAL_ARRAY_COMPACITY);
    size = 0;
  }

  private void resizeCapacity(int newCapacity){
    T[] newarr = createArr(myClazz, newCapacity);
    System.arraycopy(arr, 0, newarr, 0, size);
    arr = newarr;
  }

  public void addLast(T item){
    if(size == arr.length){
      resizeCapacity(arr.length*RFACTOR);
    }
    arr[size] = item;
    ++size;
  }

  public T getLast(){
    if(size == 0){
      return null;
    }
    return arr[size-1];
  }

  public T get(int index){
    if(size == 0 || index < 0){
      return null;
    }
    else if(index >= size){
      return null;
    }
    else{
      return arr[index];
    }

  }

  public int size(){
    return size;
  }

  public T removeLast(){
    if(size == 0){
      return null;
    }
    T ret = getLast();
    /*save memory */
    arr[size-1] = null;
    --size;

    if(size <= arr.length * R ){
      resizeCapacity(arr.length/2);
    }
    return ret;
  }
  
  public static void main(String[] args) {
    AList<String> arr = new AList<String>(String[].class);
    arr.addLast("alex");
    arr.addLast("is");
    arr.addLast("cool");
    System.out.println(arr.size());
    for(int i = 0; i < arr.size(); ++i){
      System.out.println(arr.get(i));
    }
    arr.removeLast();
    System.out.println(arr.size());
    for(int i = 0; i < arr.size(); ++i){
      System.out.println(arr.get(i));
    }

  }
}
