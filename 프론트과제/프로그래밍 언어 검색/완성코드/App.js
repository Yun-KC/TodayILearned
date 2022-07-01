import Storage from "./Storage.js";
import SelectedTag from "./SelectedTag.js";
import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";

import { STORAGE_TAG_KEY, STORAGE_KEYWORD_KEY } from "./storageKey.js";

// state는 태그 목록과, 검색어를 가지고 있어야함
// this.state = {tags: [], keyword: ""};

export default class App {
  storage = new Storage();
  state = { tags: [], keyword: "" };
  selectedTag;
  searchInput;
  suggestionList;
  constructor({ $target }) {
    this.$target = $target;
    this.state.tags = this.storage.getItem(STORAGE_TAG_KEY);
    this.state.keyword = this.storage.getItem(STORAGE_KEYWORD_KEY);

    this.selectedTag = new SelectedTag({ $target, tags: this.state.tags, storage: this.storage });
    this.suggestion = new Suggestion({
      $target,
      addTag: (keyword) => {
        this.selectedTag.addTag(keyword);
      },
    });
    this.searchInput = new SearchInput({
      $target,
      initKeyword: this.state.keyword,
      storage: this.storage,
      onSearch: (searchedResult, keyword) => {
        this.suggestion.render(searchedResult, keyword);
      },
      onUp: () => {
        this.suggestion.Up();
      },
      onDown: () => {
        this.suggestion.down();
      },
      onEnter: () => {
        this.suggestion.Enter();
      },
    });
  }
}
