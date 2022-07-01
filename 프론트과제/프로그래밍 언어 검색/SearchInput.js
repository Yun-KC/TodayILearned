/*역할
  초기 렌더 시
  스토리지로 부터 저장된 값이 있나 확인 => 검색 시작
  
  검색 시
    로컬 스토리지 캐시가 있나 확인
    없다면 외부 api로 입력값 전송
    app은 상태를 검색 결과, 현재 키워드, 태그들 을 가지고 있어야함
    현재 키워드와 검색결과 state를 변경
  
  서브밋 (엔터 입력)
  Suggestion에게 현재 선택된 개발언어를 addtag을 실행하도록.

  키보드(위, 아래 입력)
  Suggestion에게 현재 검색된 목록 중 위아래를 선택되도록.  
    
  <form class="SearchInput">
    <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="" />
  </form>
*/

const searchFromAPI = (keyword) => {
  if (keyword.length < 1) return null;
  return fetch(`https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${keyword}`);
};

export default class SearchInput {
  constructor({ $target, storage, onSearch }) {
    this.storage = storage;
    this.onSearch = onSearch;

    const $SearchForm = document.createElement('form');
    $SearchForm.className = 'SearchInput';
    const $SearchInput = document.createElement('input');
    $SearchInput.className = 'SearchInput__input';
    $SearchInput.type = 'text';
    $SearchInput.placeholder = '프로그램 언어를 입력하세요.';

    $SearchForm.append($SearchInput);
    $target.insertBefore($SearchForm, $target.lastChild);

    $SearchInput.addEventListener('keyup', (e) => {});
  }

  async search(keyword) {
    keyword = keyword.trim();
    if (keyword.length === 0) return;
    const cashedResult = this.storage.getItem(keyword);
    if (cashedResult) this.onSearch(cashedResult);

    // 없다면
    const response = await searchFromAPI(keyword);
    if (!response.ok) return;
    const searchedResult = await response.json();

    // 스토리지에 검색 결과 캐시
    this.storage.setItem(keyword, searchedResult);

    this.onSearch(searchedResult);
  }
}
