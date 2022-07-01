import { STORAGE_TAG_KEY, STORAGE_KEYWORD_KEY } from './storageKey.js';

export default class Storage {
  constructor() {
    const initTags = this.getItem(STORAGE_TAG_KEY);
    if (!initTags) this.setItem(STORAGE_TAG_KEY, []);

    const initKeyword = this.getItem(STORAGE_KEYWORD_KEY);
    if (!initKeyword) this.setItem(STORAGE_KEYWORD_KEY, '');
  }

  getItem(key) {
    try {
      const storedValue = localStorage.getItem(key);
      if (!storedValue) return null;
      return JSON.parse(storedValue);
    } catch (err) {
      alert(err.message);
      return null;
    }
  }

  setItem(key, value) {
    const stringifiedValue = JSON.stringify(value);
    try {
      localStorage.setItem(key, stringifiedValue);
    } catch (err) {
      alert(err.message);
    }
  }
}

/*
  스토리지의 역할

  새로고침에도 검색어 유지.
    - 초기 렌더 시 검색어와, 태그 저장
  검색어 캐싱.
    - 검색 시 이전에 검색된 데이터였는지 체크 후에 api요청
*/
