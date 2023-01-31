package DataStructures.testing;

public class Sort {
  public static void sort(String[] arr){
    //Find the smallest item
    //Move it to the front
    //Selction sort the remaining N-1 items(without touching the front item)
    sort(arr, 0);
  }

  /**Sorts strings destructively starting from item start. */
  private static void sort(String[] arr, int start){
    if(start == arr.length){
      return;
    }
    int smallestIndex = findSmallest(arr, start);
    swap(arr, start, smallestIndex);
    sort(arr, start+1);
  }

  /**Return the smallest item in the array */
  public static int findSmallest(String[] arr, int start){
    int smallestIndex = start;
    for(int i = start+1; i < arr.length; ++i){
      if(arr[smallestIndex].compareTo(arr[i]) > 0){
        smallestIndex = i;
      }
    }
    return smallestIndex;
  }

  public static void swap(String[] arr, int a, int b){
    String temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

}