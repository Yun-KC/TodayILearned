import java.util.Arrays;


class A {
  public static void main(String[] args) {
    Car car = new Car();
    car.test();
    System.out.println(car.test.test.test.test == car);
  }
}
class Car {
  
  String color;
  String gearType;
  int door;
  Car test;
  Car() {
    this("빨강", "자동", 4);
    this.color = "보라";
    this.door = 'a';
  }
  Car(String c, String g, int d ){
    // this("노랑");
    color = c;
    gearType = g;
    door = d;
    test = this;
  }
  Car(String a) {

  }
  void test() {
    int a = 10;
    System.out.println(a);
  }
}