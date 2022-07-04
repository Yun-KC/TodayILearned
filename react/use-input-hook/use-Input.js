// use-input.js: State와 Input의 입력에 대한 로직을 관리하는 Hook이 될 거예요.

import { useState } from 'react';


// Input마다 다른 유효성을 validateValue 매개변수로 받습니다.
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState(''); // Input 값 확인
  const [isTouched, setIsTouched] = useState(false); // Input이 포커싱 됐는지 확인(한 번이라도..)

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;  // 유효성이 false이고 포커싱 됐었다면 에러 메시지가 발생하겠죠?

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
