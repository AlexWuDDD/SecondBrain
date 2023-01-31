package DataStructures.project1B;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestArrayDeque {
  
  @Test
  public void testArrayDeque(){
    Deque<Character> deque = new ArrayDeque<>();
    deque.addFirst('a');
    deque.addFirst('b');
    deque.addFirst('c');
    deque.addFirst('d');
    deque.addFirst('e');
    deque.addFirst('f');
    deque.addFirst('g');
    deque.addFirst('h');
    deque.addFirst('i');
    deque.addFirst('j');
    deque.addFirst('k');
    deque.addLast('o');
    deque.addLast('p');
    deque.addLast('q');
    deque.addLast('r');
    assertEquals(deque.size(), 15);

    char c1 =  deque.removeFirst();
    assertEquals('k', c1);
    assertEquals(deque.size(), 14);

    char c2 =  deque.removeLast();
    assertEquals('r', c2);
    assertEquals(deque.size(), 13);

    deque.printDeque();
    deque.removeLast();
    deque.printDeque();
    deque.removeFirst();
    deque.printDeque();
    assertEquals(deque.size(), 11);

    deque.removeFirst();
    deque.removeFirst(); 
    deque.removeFirst();
    deque.removeFirst();
    deque.removeFirst();
    deque.removeFirst();
    deque.removeLast();
    deque.printDeque();
    assertEquals(deque.size(), 4);

    deque.removeLast();
    deque.removeLast();
    deque.removeLast();
    deque.printDeque();
    assertEquals(1, deque.size());
    deque.removeLast();
    deque.printDeque();
    assertEquals(0, deque.size());
    assertEquals(deque.isEmpty(), true);


  }
}
