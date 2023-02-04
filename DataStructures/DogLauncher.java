package DataStructures;

import java.util.Comparator;

public class DogLauncher {
  public static void main(String[] args) {
    Dog d1 = new Dog("Elsye", 3); 
    Dog d2 = new Dog("Sture", 9); 
    Dog d3 = new Dog("Artemesios", 15);

    Dog[] dogs = new Dog[]{d1, d2, d3};
    System.out.println(Maximizer.max(dogs));

    Comparator<Dog> nc = Dog.getNameComparator();
    
    
  }
}
