package DataStructures.project1B;

public class OffByOne implements CharacterComparator{

  @Override
  public boolean equalChars(char x, char y) {
    // TODO Auto-generated method stub
    return Math.abs(x - y) == 1 ;
  }

}