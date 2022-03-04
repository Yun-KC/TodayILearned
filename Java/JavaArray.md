# 배열(Array)

**같은 타입** 의 여러 변수를 하나의 묶음으로 다루는 것입니다.

> ### **Java와 JavaScript의 배열과 다른점은?**
>
> - Java 배열은 서로 다른 타입의 변수들로 구성된 배열을 만들 수 없습니다. 저장하려는 타입은 모두 같은 타입이여야 합니다.
>
> - JavaScript 배열은 길이도, 각 요소의 타입도 고정되어 있지 않습니다. 배열의 길이가 언제든지 늘어나거나 줄어들 수 있고 데이터를 연속적이지 않은 곳에 저장할 수 있습니다.
>
> ```js
> const arr = [1, 'a', true, [], {}];
> arr[7] = null;
> arr[8] = undefined;
> console.log(arr);
> // [1, 'a', true, Array(0), {…}, 비어 있음 × 2, null, undefined]
> ```

## 선언

배열을 선언하는 방법은 원하는 타입의 변수를 선언하고 변수 또는 타입에 배열임을 의미하는 대괄호 \[\] 를 붙이면 됩니다.  
배열을 선언한 다음에는 배열을 생성합니다. 배열을 생성하기 위해서는 연산자 'new'와 함께 배열의 타입과 길이를 지정해 줍니다.

```java
int[] arr = new int[5];
int arr[] = new int[5];
타입[] 변수이름; // 배열 선언
변수이름 = new 타입[길이]; // 배열 생성
```

위 코드에서 생성된 배열은 값을 저장할 수 있는 공간 arr\[0\] ~ arr\[4\] 까지 모두 5개이며, 변수 arr은 배열을 다루는데 필요한 참조변수일 뿐 값을 저장하기 위한 공간이 아닙니다.

---

배열에 값을 저장하고 읽어오는 방법은 '배열이름[인덱스]'를 사용합니다.

```java
int arr[] = new int[5];
arr[3] = 10;
System.out.println(arr[3]); // 10
```

### 주의할 점!

배열의 길이를 벗어나는 값을 인덱스로 사용하지 않아야합니다.

JavaScript의 경우, 배열의 길이가 고정되어있지 않아
데이터를 연속적이지 않은 곳에 저장할 수 있습니다.

```js
// JavaScript
const arr = [1, 2, 3];
arr[7] = 4;
console.log(arr); // [1, 2, 3, 비어 있음 × 4, 4];

// 배열의 length 프로퍼티의 값을 직접 수정할 수 있습니다.
const arr2 = [];
console.log(arr2); // []
arr2.length = 10;
console.log(arr2); // [비어 있음 × 10]
```

Java의 경우, 배열의 범위를 벗어난 인덱스 사용한다면,
컴파일 시에는 아무런 문제가 없지만, 실행 시에 에러가 발생하게 됩니다.

```java
// Java
int arr[] = new int[5];
arr[7] = 10;

Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 6

// Java에서는 배열을 한번 생성하면 길이를 변경할 수 없습니다.
```

---

### 배열의 초기화

```java
int[] arr = new int[]{50, 60, 70, 80, 90};
// OR
int[] arr = {50, 60, 70, 80, 90}; // OK. new int[] 생략가능

// 주의! 배열의 선언과 생성을 따로 하는 경우 new int[]를 생략할 수 없습니다.
int[] arr;
arr = {50, 60, 70, 80, 90}; // 에러. new int[] 생략불가
```

배열의 생성과 초기화를 동시에 할 수 있습니다. 저장할 값들을 괄호\{\} 안에 쉼표로 구분해서 나열하고 괄호 안의 값의 개수에 따라 배열의 길이가 자동으로 결정됩니다.

---

### 배열의 출력

```java
    int[] iArr1 = new int[5]; // 배열 생성시 초기값은 0입니다.
    for (int i = 0; i < iArr1.length; i++){
      System.out.print(iArr1[i]); // 00000
    }
    System.out.println(Arrays.toString(iArr1)); // [0, 0, 0, 0, 0];
```

```java
    int[] iArr2 = {1, 2, 3, 4, 5};
    // int[] iArr2 = new int[]{1, 2, 3, 4, 5};
    for (int i = 0; i < iArr2.length; i++){
      System.out.print(iArr2[i]); // 12345
    }
    System.out.println(Arrays.toString(iArr2)); // [1, 2, 3, 4, 5];
```

참조변수인 iArr1를 바로 출력하면, '타입@주소'의 형식으로 출력됩니다.
'[I' 는 1차원 int배열이라는 의미이고,'@' 뒤에 나오는 16진수는 배열의 주소인데 실제 주소가 아닌 내부 주소입니다.

```java
    int[] iArr1 = new int[5];
    //
    System.out.println(iArr1); // [I@4aa298b7


    char[] chArr = {'a', 'b', 'c', 'd'};
    System.out.println(chArr); // abcd
    System.out.println(Arrays.toString(chArr)); // [a, b, c, d]

```
