# Dependency injection

종속성 주입은 개체가 종속성이라고 하는 다른 개체를 받는 기술입니다. 일반적으로 수신 객체를 **클라이언트**라고 하고 전달된('주입된') 객체를 **서비스**라고 합니다. 서비스를 클라이언트에 전달하는 코드를 **인젝터**라고 합니다.

클라이언트가 사용할 서비스를 지정하는 대신 인젝터는 클라이언트에게 사용할 서비스를 알려줍니다. '주입'은 종속성(서비스)을 사용하는 클라이언트로 전달하는 것을 말합니다.
서비스는 클라이언트 상태의 일부가 됩니다. 클라이언트가 서비스를 빌드하거나 찾도록 허용하는 대신 서비스를 클라이언트에 전달하는 것이 패턴의 기본 요구 사항입니다.
의존성 주입의 목적은 객체의 구성과 사용에 대한 관심을 분리하는 것입니다. 이것은 가독성과 코드 재사용을 증가시킬 수 있습니다.

종속성 주입은 제어 역전의 광범위한 기술의 한 형태입니다. 일부 서비스를 호출하려는 클라이언트는 해당 서비스를 구성하는 방법을 알 필요가 없습니다. 대신 클라이언트는 외부 코드(인젝터)에 위임합니다. 클라이언트는 인젝터를 인식하지 못합니다. 인젝터는 인젝터 자체에 의해 존재하거나 구성할 수 있는 서비스를 클라이언트에 전달합니다. 그런 다음 클라이언트는 서비스를 사용합니다.

이것은 클라이언트가 인젝터, 서비스 구성 방법 또는 실제로 사용 중인 서비스에 대해 알 필요가 없음을 의미합니다. 클라이언트는 서비스의 인터페이스만 알면 됩니다. 이러한 인터페이스는 클라이언트가 서비스를 사용할 수 있는 방법을 정의하기 때문입니다. 이것은 '사용'의 책임과 '건설'의 책임을 분리합니다.


클래스가 의존하는 객체 생성에서 어떻게 독립적일 수 있습니까?
개별 구성 파일에서 개체를 생성하는 방법을 어떻게 지정할 수 있습니까?
애플리케이션이 다양한 구성을 어떻게 지원할 수 있습니까?

종속성 주입은 클라이언트의 종속성 생성을 클라이언트의 동작과 분리하여 느슨하게 결합된 프로그램[7]과 종속성 반전 및 단일 책임을 촉진합니다.

- - -
인터페이스: 클라이언트가 종속성을 기대하는 유형
클라이언트는 종속성의 특정 구현을 알지 못하고 이름과 API만 알아야 합니다. 결과적으로 인터페이스 이면의 내용이 변경되더라도 클라이언트는 변경할 필요가 없습니다.