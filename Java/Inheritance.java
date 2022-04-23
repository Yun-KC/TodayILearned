public class Inheritance {
  public static void main(String[] args) {
    // Child child = new Child();
    // Parent parent = new Parent();
    // child.b = 50;
    String numbers = "0123456789XJQK";
    System.out.println(numbers.charAt(5));
    // System.out.println(parent.b);
  }
}
class Parent {
  static int a = 10;
  int b = 20;
}
class Child extends Parent {
  int test() {
    System.out.println("무야호");
    return 7; 
  }
}