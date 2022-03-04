import java.util.Arrays;

class A {
  public static void main(String[] args) {
    int[] iArr1 = new int[5];
    int[] chArr = {'1','2','3'};
    System.out.println(Arrays.toString(iArr1));
    System.out.println(iArr1 == chArr);
    iArr1 = chArr;
    System.out.println(Arrays.toString(iArr1));
    System.out.println(iArr1 == chArr);

  }
}