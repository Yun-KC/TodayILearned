import { STORAGE_TAG_KEY } from "./storageKey.js";

export default class SelectedTag {
  constructor({ $target, tags, storage }) {
    this.$target = $target;

    //div 태그 초기화.
    this.$div = document.createElement("div");
    this.$div.className = "SelectedLanguage";
    this.$div.style.visibility = "hidden";
    $target.append(this.$div);

    this.storage = storage;

    this.state = tags;
    this.render();
  }
  // div태그를 보여줄지 말지 결정.
  showDiv() {
    if (this.state.length === 0) {
      this.$div.style.visibility = "hidden";
      return false;
    } else {
      this.$div.style.visibility = "visible";
      return true;
    }
  }
  // 스토리지에 현재 태그를 저장.
  save() {
    this.storage.setItem(STORAGE_TAG_KEY, this.state);
  }

  // 5개가 넘는다면 앞에서부터 자르기
  checkState() {
    if (this.state.length > 5) {
      this.state = this.state.slice(-5);
    }
  }

  render() {
    // 태그 유무에 따라 div 렌더 결정
    if (!this.showDiv()) return;
    this.$div.innerHTML = "";
    const $ul = document.createElement("ul");
    for (let i = 0; i < this.state.length; i++) {
      const $li = document.createElement("li");
      $li.append(document.createTextNode(this.state[i]));
      $ul.append($li);
    }

    this.$div.append($ul);
  }
  addTag(tag) {
    // tag가 이미 state에 있는지 확인
    const findTagIdx = this.state.findIndex((el) => el === tag);

    // 있다면 삭제
    if (findTagIdx !== -1) this.state.splice(findTagIdx, 1);

    // 맨 뒤로 추가
    this.state.push(tag);

    // 길이 체크
    this.checkState();

    // 현재 태그 저장소에 저장
    this.save();

    // 렌더함수 호출
    this.render();

    return this.state;
  }
}
