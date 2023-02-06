package DataStructures;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ArraySet<T> implements Iterable<T>{

  private T[] items;
  private int size; // the next item to be added will be at position size

  public ArraySet(){
    items = (T[])new Object[100];
    size = 0;
  }

  public boolean contains(T x){
    for(int i = 0; i < size; ++i){
      if(items[i] == null){
        if(x == null){
          return true;
        }
      }

      if(items[i].equals(x)){
        return true;
      }
    }
    return false;
  }

  public void add(T x){
    if(x==null){
      throw new IllegalArgumentException("You can't add null to an ArraySet");
      // return;
    }

    if(contains(x)){
      return;
    }
    items[size] = x;
    ++size;
  }

  public int size(){
    return size;
  }

  @Override
  public Iterator<T> iterator() {
    return new ArraySetIterator();
  }

  private class ArraySetIterator implements Iterator<T>{

    private int wizPos;
    public ArraySetIterator(){
      wizPos = 0;
    }

    @Override
    public boolean hasNext() {
      return wizPos < size;
    }

    @Override
    public T next() {
      return items[wizPos++];
    }
    
  }

  // @Override
  // public String toString(){
  //   StringBuilder returnSB = new StringBuilder("{");
  //   for(int i = 0; i < size - 1; ++i){
  //     returnSB.append(items[i].toString());
  //     returnSB.append(", ");
  //   }
  //   returnSB.append(items[size-1]);
  //   returnSB.append("}");
  //   return returnSB.toString();
  // }

  @Override
  public String toString(){
    List<String> listOfItems = new ArrayList<>();
    for(T x: this){
      listOfItems.add(x.toString());
    }
    return "{" + String.join(",", listOfItems) + "}";
  }

  public static<T> ArraySet<T> of(T... stuff){
    ArraySet<T> ret = new ArraySet<>();
    for(T x : stuff){
      ret.add(x);
    }
    return ret;
  }

  @Override
  public boolean equals(Object other){
    if(this == other){
      return true;
    }

    if(other == null){
      return false;
    }

    if(other.getClass() != this.getClass()){
      return false;
    }

    ArraySet<T> o = (ArraySet<T>)other;
    if(o.size() != this.size()){
      return false;
    }

    for(T item : this){
      if(!o.contains(item)){
        return false;
      }
    }
    return true;
  }

  public static void main(String[] args) {
    ArraySet<String> s = new ArraySet<>();
    // s.add(null);  
    s.add("horse");  
    s.add("fish");  
    s.add("house");  
    s.add("fish");  

    Iterator<String> seer = s.iterator();
    while(seer.hasNext()){
      String i = seer.next();
      System.out.println(i);
    }
    System.out.println();
    for(String I : s){
      System.out.println(I);
    }

    System.out.println(s);

    //EXTRA VIDEO CODE
    ArraySet<String> asetOfStrings = ArraySet.of("hi", "I'm", "here");
    System.out.println(asetOfStrings);
  }

}