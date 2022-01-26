class Heap {
  // 최소힙의 저장소입니다.
  store = [];

  // 삽입 과정입니다.
  insert(item) {
    // store의 맨 마지막 인덱스를 저장하고, 넣으려는 값을 푸쉬해줍니다.
    let itemIdx = this.store.length;
    this.store.push(item);

    // itemIdx의 부모인덱스를 찾습니다.
    let parentIdx = this.getParentIdx(itemIdx);

    // parentIdx는 항상 0 이상입니다.
    // 최소힙이기 때문에 자식노드가 부모노드보다 작다면 두 값을 교환합니다.
    // item이 원하는 자리를 찾아갈 때 까지 반복합니다.
    while (parentIdx >= 0 && this.store[parentIdx] > this.store[itemIdx]) {
      this.swap(itemIdx, parentIdx);
      itemIdx = parentIdx;
      parentIdx = this.getParentIdx(itemIdx);
    }
  }
  // 추출 과정입니다.
  extract() {
    // store에 저장된 값이 없다면 null을 리턴합니다.
    if (this.store.length === 0) return null;
    // store의 길이가 1이라면 알고리즘 없이 바로 추출합니다.
    if (this.store.length === 1) return this.store.pop();

    let itemIdx = 0;
    // 힙의 맨 위 아이템을 가져옵니다.
    const item = this.store[0];
    // 힙의 맨 뒤 아이템을 첫 맨위로 올립니다.
    this.store[0] = this.store.pop();
    while (1) {
      // 최소 힙의 노드들은 자기 자식보다 작은 값이여야 합니다.
      let [leftIdx, rightIdx] = this.getChildIdx(itemIdx);

      // 현재 아이템과 자식의 왼쪽 아이템보다 크고, 왼쪽 아이템이 오른쪽 아이템보다 작다면
      // 현재 아이템과 왼쪽 자식 아이템과 교환합니다.
      // 만약 왼쪽 자식 아이템이 undefined라면 비교 연산자는 항상 false 를 리턴하기 때문에
      // 아래 조건문은 실행되지 않습니다.
      // 또 왼쪽 자식 아이템이 undefined라면 오른쪽 자식 아이템 또한 undefined 입니다.
      if (this.store[leftIdx] < this.store[itemIdx] && this.store[leftIdx] < this.store[rightIdx]) {
        this.swap(leftIdx, itemIdx);
        itemIdx = leftIdx;
        continue;
      } else if (this.store[rightIdx] < this.store[itemIdx]) {
        this.swap(rightIdx, itemIdx);
        itemIdx = rightIdx;
        continue;
      }
      // 위 조건문이 실행되지 않는다면 아이템은 제자리를 찾아갔다는 뜻입니다. while반복문을 종료합니다
      break;
    }
    return item;
  }

  // store의 인덱스에 해당하는 두 아이템을 교환합니다.
  swap(idx1, idx2) {
    [this.store[idx1], this.store[idx2]] = [this.store[idx2], this.store[idx1]];
  }

  // 매개변수 idx에 인덱스를 넣어 부모 인덱스를 찾습니다.
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  // 매개변수 idx에 인덱스를 넣어 자식 인덱스들을 찾습니다.
  getChildIdx(idx) {
    let childIdx = (idx + 1) * 2;
    return [childIdx - 1, childIdx];
  }
}
