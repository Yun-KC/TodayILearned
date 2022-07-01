export default class Suggestion {
  constructor({ $target, addTag }) {
    this.$target = $target;
    this.addTag = addTag;
    this.$div = document.createElement("div");
    this.$div.className = "Suggestion";
    this.$div.style.visibility = "hidden";
    $target.append(this.$div);

    // li 목록 중 클릭 시 태그로 추가
    this.$div.addEventListener("click", (e) => {
      if (e.target.tagName !== "LI") return;
      const text = e.target.innerText;
      alert(text);
      addTag(text);
    });
  }

  createLi(suggestion, keyword, select) {
    const $li = document.createElement("li");
    if (select) $li.className = "Suggestion__item--selected";
    const regex = new RegExp(keyword, "ig");
    suggestion = suggestion.replace(regex, `<span class="Suggestion__item--matched">${keyword}</span>`);
    $li.innerHTML = suggestion;
    return $li;
  }

  render(suggestionList, keyword) {
    //suggestionList의 유무
    if (suggestionList.length === 0 || keyword.length === 0) {
      this.$div.style.visibility = "hidden";
      return;
    }
    this.$div.innerHTML = "";
    const $ul = document.createElement("ul");
    for (let i = 0; i < suggestionList.length; i++) {
      const $li = this.createLi(suggestionList[i], keyword, i === 0);
      $ul.append($li);
    }
    this.$div.append($ul);
    this.$div.style.visibility = "visible";
  }

  Up() {
    const selectedElement = document.querySelector(".Suggestion .Suggestion__item--selected");
    let nextSelectedElement = selectedElement.previousSibling;
    if (nextSelectedElement === null) nextSelectedElement = selectedElement.parentElement.lastElementChild;
    nextSelectedElement.className = selectedElement.className;
    selectedElement.className = "";
  }
  down() {
    const selectedElement = document.querySelector(".Suggestion .Suggestion__item--selected");
    let nextSelectedElement = selectedElement.nextSibling;
    if (nextSelectedElement === null) nextSelectedElement = selectedElement.parentElement.firstElementChild;
    nextSelectedElement.className = selectedElement.className;
    selectedElement.className = "";
  }
  Enter() {
    const selectedElement = document.querySelector(".Suggestion .Suggestion__item--selected");
    if (selectedElement.parentElement.parentElement.style.visibility === "hidden") return;
    const text = selectedElement.innerText;
    alert(text);
    this.addTag(text);
  }
}

/*
역할

검색 결과를 화면에 뿌려줌
검색결과와 키워드에 해당하는 글자를 특정 클래스의 span으로 감쌈

키보드로 포커스를 조작할 수 있는 기능

포커스된 요소를 export 해줌

언어를 클릭 시 addTag 해줌
*/
