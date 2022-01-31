// 양방향 연결 리스트를 구현합니다.
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
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
  // item로 검색한 노드 뒤에 새로운 노드를 삽입합니다. 기본 값과 없는 노드를 검색했을 경우 삽입할 수 없습니다.
  insert(newElement, item) {
    const newNode = new Node(newElement);
    let current = this.find(item);
    if (current === null) return '노드를 삽입할 수 없습니다.';
    newNode.next = current.next;
    newNode.previous = current;
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

  // 노드를 삭제합니다. 삭제하려는 노드의 전 노드를 검색할 필요가 없어졌습니다.
  remove(item) {
    let curNode = this.find(item);
    if (curNode.next !== null) {
      curNode.previous.next = curNode.next;
      curNode.next.previous = curNode.previous;
      curNode.next = null;
      curNode.previous = null;
    }
  }

  findLast() {
    let curNode = this.head;
    while (curNode.next !== null) {
      curNode = curNode.next;
    }
    return curNode;
  }
  dispReverse() {
    let curNode = this.head;
    curNode = this.findLast();
    while (curNode.previous !== null) {
      console.log(curNode.element);
      curNode = curNode.previous;
    }
  }
}
const a = new LinkedList();
a.insert('유재석', 'head');
a.insert('박명수', '유재석');
a.insert('길', '박명수');
a.display();
a.dispReverse();
