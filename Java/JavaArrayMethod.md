# Java Array 꿀팁 모음

> ## 배열의 복사
>
> Java의 배열은 한번 생성하면 그 길이를 변경할 수 없습니다. 만약 더 많은 저장 곤간이 필요하다면 보다 큰 배열을 만들고 이전 배열로부터 내용을 복사해야합니다.
>
> ```java
> class A {
>   public static void main(String[] args) {
>     int[] arr = {1 ,2 ,3, 4, 5}];
>
>     // 1 ~ 10까지 저장할 수 있는 배열을 만들고 싶다면?
>     int[] tmp = new int[10]; // 길이 10의 임시 배열을 만듭니다.
>     for (int i = 0; i < arr.length; i++) {
>       tmp[i] = arr[i]; // arr의 요소를 tmp에 차례차례 복사합니다.
>     }
>     arr = tmp; // 참조변수 arr이 새로운 배열을 가리키게 합니다.
>     System.out.println(Arrays.toString(arr));
>     // [1, 2, 3, 4, 5, 0, 0, 0, 0, 0]
>   }
> }
> ```
>
> for문 대신 **System.arraycopy()** 는 간단하고 빠르게 배열을 복사할 수 있습니다.
> for문은 배열의 요소 하나하나에 접근해 복사하지만, arraycopy()는 지정된 범위의 값들을 통째로 복사하기 때문에 더 효율적입니다.
> 어느 배열의 몇 번째 요소에서 어느 배열로 몇 번째 요소로 몇 개 의 값을 복사할 것인지 지정해야합니다.  
> **System.arraycopy(\[1\], \[2\], \[3\], \[4\], \[5\])**
>
> - \[1\]: 복사하려는 배열을 넣습니다.
> - \[2\]: 읽기를 시작할 \[1\]의 인덱스를 넣습니다.
> - \[3\]: 복사의 대상이 되는 배열입니다.
> - \[4\]: 쓰기를 시작할 \[3\]의 인덱스를 넣습니다.
> - \[5\]: 복사할 데이터의 길이입니다.
>
> ```java
> class A {
>   public static void main(String[] args) {
>     int[] arr = {1 ,2 ,3, 4, 5}];
>     int[] tmp = new int[10];
>     System.arraycopy(arr, 0, tmp, 0, arr.length);
>     arr = tmp;
>     System.out.println(Arrays.toString(arr));
>     // [1, 2, 3, 4, 5, 0, 0, 0, 0, 0]
>   }
> }
> ```
