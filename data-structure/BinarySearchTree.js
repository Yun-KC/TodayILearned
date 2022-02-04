class BinarySearchTree {
  //BST의 constructor를 구현합니다.
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // tree에 value를 추가합니다.
  insert(value) {
    // 인자의 value가 this.value보다 작을 경우, 왼쪽 노드에서 진행합니다.
    if (value < this.value) {
      // this.left에 아무것도 없을 경우, 새로운 자식 노드를 추가합니다.
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      }
      // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀를 사용합니다.
      else {
        this.left.insert(value);
      }
    }
    // 인자의 value가 this.value보다 클 경우, 오른쪽 노드에서 진행합니다.
    else if (value > this.value) {
      // this.right에 아무것도 없을 경우, 새로운 자식 노드를 추가합니다.
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      }
      // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀를 사용합니다.
      else {
        this.right.insert(value);
      }
    } else {
      // 이미 value값을 포함하고 있습니다.
    }
  }
  // tree의 value값을 탐색합니다.
  contains(value) {
    // 찾는 value값이 노드의 value와 일치한다면, true를 리턴합니다.
    if (value === this.value) {
      return true;
    }
    // 찾는 value값이 노드의 value 보다 작다면, 왼쪽에서 contains의 재귀를 진행합니다.
    if (value < this.value) {
      return !!this.left?.contains(value);
    }
    // 찾는 value값이 노드의 value 보다 크다면, 오른쪽에서 contains의 재귀를 진행합니다.
    if (value > this.value) {
      return !!this.right?.contains(value);
    }
  }
  //tree를 전위 순회 합니다.
  preorder(callback) {
    callback(this.value);
    if (this.left) {
      this.left.preorder(callback);
    }
    if (this.right) {
      this.right.preorder(callback);
    }
  }
  // tree를 중위 순회 합니다
  inorder(callback) {
    if (this.left) {
      this.left.inorder(callback);
    }
    callback(this.value);
    if (this.right) {
      this.right.inorder(callback);
    }
  }
  //tree를 후위 순회 합니다
  postorder(callback) {
    if (this.left) {
      this.left.postorder(callback);
    }
    if (this.right) {
      this.right.postorder(callback);
    }
    callback(this.value);
  }

  //노드를 제거합니다.
  remove(data) {
    if (this === null) return null;
    // 제거하려는 값과 노드의 값이 일치할 경우
    if (this.value === data) {
      // 자식노드가 없는 경우
      if (this.left === null && this.right === null) {
        return null;
      }
      // 오른쪽 노드가 없는 경우
      if (this.right === null) {
        return this.left;
      }
      // 왼쪽 노드가 없는 경우
      if (this.left === null) {
        return this.right;
      }
      // 둘다 있는 경우
      // 오른쪽 노드에서의 최솟값을 가진 노드를 가져옵니다.
      const minthis = this.right.getMin();
      this.value = minthis.value;
      this.right = this.right.remove(minthis.value);
      return this;
    } else if (this.value > data) {
      this.left = this.left?.remove(data);
      return this;
    } else if (this.value < data) {
      this.right = this.right?.remove(data);
      return this;
    }
  }
  //최솟값을 가진 노드 호출
  getMin() {
    let current = this;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
}

const BST = new BinarySearchTree(10);

BST.insert(15);
BST.insert(6);
BST.insert(8);
BST.insert(17);
BST.insert(20);
BST.insert(1);
BST.insert(13);
BST.insert(9);
BST.insert(19);
BST.inorder(console.log);

const test = BST.remove(17);
test.inorder(console.log);
