# SOLID

SOLID는 아키텍처를 정의하는 원칙이다. 함수와 데이터 구조를 클래스로 배치하는 방법, 그리고 클래스를 서로 결합하는 방법을 설명해준다.

- 변경에 유연하다.
- 이해하기 쉽다.
- 많은 소프트웨어 시스템에 사용될 수 있는 컴포넌트의 기반이 된다.

### SRP: 단일 책임 원칙 (Single Responsibility Principle)

소프트웨어 모듈은 변경의 이유가 하나, 단 하나여야만 한다.

### OCP: 개방-폐쇄 원칙 (Open-Closed Principle)

기존 코드를 수정하기보다는 반드시 새로운 코드를 추가하는 방식으로 시스템의 행위를 변경할 수 있도록 설계해야만 소프트웨어 시스템을 쉽게 변경할 수 있다.

### LSP: 리스코프 치환 원칙 (Liskov Substitution Principle)

상호 대체 가능한 구성요소를 이용해 소프트웨어 시스템을 만들 수 있으려면, 이들 구성요소는 반드시 서로 치환 가능해야 한다.

### ISP: 인터페이스 분리 원칙 (interface Segregation Principle)

소프트웨어 설계자는 사용하지 않은 것에 의존하지 않아야 한다.

### DIP: 의존성 역전 원칙 (Dependency Inversion Principle)

고수준 정책을 구현하는 코드는 저수준 세부사항을 구현하는 코드에 절대로 의존해서는 안 된다. 대신 세부사항이 정책에 의존해야 한다.

---

### 목표:

- 5가지 원칙을 주제로 글쓰기.
- [의존성 주입(Dependency Injection, D.I)](https://doongji-cold-noodles.tistory.com/41) 글 완성.
