class Heap {
  store = [];
  insert(item) {
    let itemIdx = this.store.length;
    this.store.push(item);
    let parentIdx = this.getParentIdx(itemIdx);
    while (parentIdx >= 0 && this.store[parentIdx][1] > this.store[itemIdx][1]) {
      this.swap(itemIdx, parentIdx);
      itemIdx = parentIdx;
      parentIdx = this.getParentIdx(itemIdx);
    }
  }
  extract() {
    if (this.store.length === 0) return null;
    if (this.store.length === 1) return this.store.pop();
    let itemIdx = 0;
    const item = this.store[0];
    this.store[0] = this.store.pop();
    while (1) {
      let [leftIdx, rightIdx] = this.getChildIdx(itemIdx);
      if (this.store[leftIdx] === undefined) break;
      else if (this.store[rightIdx] === undefined) {
        if (this.store[leftIdx][1] < this.store[itemIdx][1]) {
          this.swap(leftIdx, itemIdx);
          itemIdx = leftIdx;
          continue;
        } else break;
      } else if (this.store[leftIdx][1] <= this.store[itemIdx][1]) {
        if (this.store[leftIdx][1] < this.right[rightIdx][1]) {
          this.swap(leftIdx, itemIdx);
          itemIdx = leftIdx;
          continue;
        } else {
          this.swap(rightIdx, itemIdx);
          itemIdx = rightIdx;
          continue;
        }
      } else if (this.store[rightIdx][1] < this.store[itemIdx][1]) {
        this.swap(rightIdx, itemIdx);
        itemIdx = rightIdx;
        continue;
      } else break;
    }
    return item;
  }

  swap(idx1, idx2) {
    [this.store[idx1], this.store[idx2]] = [this.store[idx2], this.store[idx1]];
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getChildIdx(idx) {
    let childIdx = (idx + 1) * 2;
    return [childIdx - 1, childIdx];
  }
}
function solution(jobs) {
  if (jobs.length === 0) {
    return 0;
  }
  const answer = [];
  const sortedJobs = jobs.map((el) => [...el]).sort((a, b) => a[0] - b[0]);
  let curTime = 0;
  const heap = new Heap();
  while (heap.store.length !== 0 || sortedJobs.length !== 0) {
    const preparedJobsNum = sortedJobs.findIndex((jobs) => curTime < jobs[0]);
    sortedJobs.splice(0, preparedJobsNum < 0 ? sortedJobs.length : preparedJobsNum).forEach((jobs) => {
      heap.insert(jobs);
    });
    const runTimeJob = heap.extract();
    if (runTimeJob === null) {
      curTime++;
      continue;
    }
    curTime += runTimeJob[1];
    answer.push(curTime - runTimeJob[0]);
  }
  return Math.floor(answer.reduce((acc, cur) => acc + cur) / answer.length);
}
