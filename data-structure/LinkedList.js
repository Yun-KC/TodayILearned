// 연결 리스트에 추가할 수 있는 Node 클래스, LinkedList 클래스를 만든다.

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  head = new Node('head');
  // item을 검색합니다. 검색하려는 노드가 없을 경우 null을 리턴합니다.
  find(item) {
    let curNode = this.head;
    while (curNode.element !== item) {
      if (!curNode.next) return null;
      curNode = curNode.next;
    }
    return curNode;
  }
  // item로 검색한 노드 뒤에 새로운 노드를 삽입합니다. 기본 값과 없는 노드를 검색했을 경우 item은 head입니다.
  insert(newElement, item = 'head') {
    const newNode = new Node(newElement);
    let current = this.find(item);
    if (current === null) current = this.head;
    newNode.next = current.next;
    current.next = newNode;
  }
  // node들을 순서대로 출력합니다.
  display() {
    let curNode = this.head;
    while (curNode.next !== null) {
      console.log(curNode.next.element);
      curNode = curNode.next;
    }
  }
  // 삭제하려는 노드의 전 노드를 찾습니다.
  findPrevious(item) {
    let curNode = this.head;
    while (!(curNode.next === null || curNode.next.element === item)) {
      curNode = curNode.next;
    }
    return curNode;
  }
  // 노드를 삭제합니다.
  remove(item) {
    let preNode = this.findPrevious(item);
    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }
}
