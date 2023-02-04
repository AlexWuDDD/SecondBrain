package DataStructures;

import java.util.Comparator;

public class Dog implements Comparable<Dog>{

  private String name;
  private int size;

  public Dog(String name, int size) {
    this.name = name;
    this.size = size;
  }

  public void bark(){
    System.out.println(name + " says: bark!!!");
  }

  public int size(){
    return size;
  }

  @Override
  public int compareTo(Dog o) {
    return this.size - o.size;
  }

  private static class NameComparator implements Comparator<Dog>{
    public int compare(Dog a, Dog b){
      return a.name.compareTo(b.name);
    }
  }

  public static Comparator<Dog> getNameComparator(){
    return new NameComparator();
  }

  
}

/*
 * Since there's only room for one compareTo method, if we want multiple ways to compare, we must turn to Comparator.
 */

