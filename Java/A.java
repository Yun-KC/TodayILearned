import java.util.Arrays;


class A {
  public static void main(String[] args) {
    int[] arr = {1 ,2 ,3, 4, 5};
    int[] tmp = new int[10];
    System.arraycopy(arr, 0, tmp, 0, arr.length);
    arr = tmp;
    System.out.println(Arrays.toString(arr));
     // [1, 2, 3, 4, 5, 0, 0, 0, 0, 0]
  }
}