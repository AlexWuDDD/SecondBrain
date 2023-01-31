package DataStructures.project1B;

public class Palindrome {
  
  public Deque<Character> wordToDeque(String word){
    Deque<Character> ret = new ArrayDeque<>();
    // Deque<Character> ret = new LinkedListDeque<>();
    for(int i = 0; i < word.length(); ++i){
      ret.addLast(word.charAt(i));
    }
    return ret;
  }

  public boolean isPalindrome(String word){
    Deque<Character> deque = wordToDeque(word);
    return isEqual(deque);
  }

  private boolean isEqual(Deque<Character> deque){
    
    if(deque.size() <= 1){
      return true;
    }

    char head = deque.removeFirst();
    char end = deque.removeLast();
    if(head != end){
      return false;
    }
    else{
      return isEqual(deque);
    }
  }

  public boolean isPalindrome(String word, CharacterComparator cc){
    Deque<Character> deque = wordToDeque(word);
    return isMeetCharacterComparator(deque, cc);
  }

  private boolean isMeetCharacterComparator(Deque<Character> deque, CharacterComparator cc){
    if(deque.size() <= 1){
      return true;
    }

    char head = deque.removeFirst();
    char end = deque.removeLast();
    if(!cc.equalChars(head, end)){
      return false;
    }
    else{
      return isMeetCharacterComparator(deque, cc);
    }
  }
}
