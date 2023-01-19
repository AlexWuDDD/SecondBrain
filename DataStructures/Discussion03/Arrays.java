package DataStructures.Discussion03;

public class Arrays {
  public static int[] insert(int[] arr, int item, int position){
    if(position <0){
      return arr;
    }
    int[] newarray = new int[arr.length + 1];
    if(position >= 0 && position < arr.length){
      System.arraycopy(arr, 0, newarray, 0, position+1);
      System.arraycopy(arr, position, newarray, position+1, arr.length-position);
      newarray[position]=item;
    }
    else{
      System.arraycopy(arr, 0, newarray, 0, arr.length);
      newarray[arr.length] = item;
    }

    return newarray;
  }

  public static void reverse(int[] arr){
    int len = arr.length;
    for(int i = 0, j = len-1; i < j; ++i, --j){
      int tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }

  private static int[] createSubArr(int i){
    int[] ret = new int[i];
    for(int k = 0; k < i; ++k){
      ret[k] = i;
    }
    return ret;
  }

  public static int[] replicate(int[] arr){
    int sum = 0;
    for(int i = 0; i < arr.length; ++i){
      sum += arr[i];
    }
    int[] ret = new int[sum];
    int curPos = 0;
    for(int i = 0; i < arr.length; ++i){
      int[] subarr = createSubArr(arr[i]);
      System.arraycopy(subarr, 0, ret, curPos, arr[i]);
      curPos += arr[i];
    }
    return ret;
  }

  public static void printArray(int[] arr){
    for(int i = 0; i < arr.length; ++i){
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }

  public static void main(String[] args) {
    int[] x = {5, 9, 14, 15};
    x = Arrays.insert(x, 6, 2);
    Arrays.printArray(x);
    Arrays.reverse(x);
    Arrays.printArray(x);

    x = Arrays.insert(x, 7, 2);
    Arrays.printArray(x);
    Arrays.reverse(x);
    Arrays.printArray(x);

    int[] y = {4,3,2,1,2};
    Arrays.printArray(Arrays.replicate(y));
  }
}
