import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const EventButton = () => {
  const _onPressIn = () => console.log('press in !!');
  const _onPressOut = () => console.log('press out !!');
  const _onPress = () => console.log('press  !!');
  const _onLongPress = () => console.log('long press  !!');
  // delayLongPress 속성은 onLongPress가 호출되는 시간을 조절할 수 있습니다.
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#f1c40f',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
      onLongPress={_onLongPress}
      delayLongPress={3000}
      onPress={_onPress}>
      <Text style={{color: 'white', fontSize: 24}}>Press</Text>
    </TouchableOpacity>
  );
};

export default EventButton;
