import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
/*
  View는 UI를 구성하는 기본적인 요소로 <div>와 비슷한 역할을 합니다.
  
  Button 엘리먼트는 title 속성, onPress 속성을 가집니다. 
  title은 버튼 내부에 출력되는 텍스트이고,
  onPress는 버튼이 눌렸을 때 호출되는 함수를 지정합니다.
  color 속성은 ios에서 텍스트 색을, 안드로이드에서 버튼의 바탕색을 나타냅니다.
  이렇게 ios와 안드로이드가 약간씩 다르게 표현되는경우가 있습니다.
  이런 부분은 문서를 확인하는 습관을 들이는 것이 중요합니다.
  */
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Button Component</Text>
      <Button
        title="Button"
        onPress={() => {
          alert('클릭!');
        }}
        color="#aaaaaa"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default App;
