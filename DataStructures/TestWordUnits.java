package DataStructures;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestWordUnits {
  
  @Test
  public void testLongest(){
    List61B<String> someList = new SLList<>();
    someList.addFirst("elk");
    someList.addLast("are");
    someList.addLast("watching");
    assertEquals(WordUtils.longest(someList), "watching");
    assertTrue(WordUtils.longest(someList).compareTo("watching") == 0);

    List61B<String> someList2 = new AList<>(String[].class);
    someList2.addLast("elk");
    someList2.addLast("are");
    someList2.addLast("watching");
    assertEquals(WordUtils.longest(someList2), "watching");
    assertTrue(WordUtils.longest(someList2).compareTo("watching") == 0);

  }
}
