import java.util.Arrays;


class A {
  static int test = 10;
  int abc = 'b';
  public static void main(String[] args) {
    int b = new B().test1();
    
    System.out.println(b);
  }
  static int add(int x, int y) {
    test = 11;
    return x + y;
  }
}
class B {
  static int test(int a, int b) {
    System.out.println("여기 실행된여");
    return 1/1;
  }
  char test1() {
    test(1,2);
    return 'a';
  }
}