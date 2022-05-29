import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';

const MyButton = props => {
  const [count, setCount] = useState(0);
  return (
    <TouchableOpacity onPress={() => setCount(count + 1)}>
      <Text style={{fontSize: 24}}>{count}번 눌렀어요</Text>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};
// props의 기본값 설정.
MyButton.defaultProps = {
  title: '나는 타이틀이 없는걸..',
};

export default MyButton;
