package DataStructures.project1B;

public class OffByN implements CharacterComparator {

  private int N;

  public OffByN(int N){
    this.N = N;
  }

  @Override
  public boolean equalChars(char x, char y) {
    // TODO Auto-generated method stub
    return Math.abs(x - y) == N;
  }
  
}
