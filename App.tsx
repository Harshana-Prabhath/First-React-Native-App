
import React from 'react';
import TextComponent from './Components/TextComponent/TextComponent';

import {
  SafeAreaView,

Text,
StyleSheet,
Dimensions,
} from 'react-native';





const {height} = Dimensions.get('window');


function App(): React.JSX.Element {




  return (
    <SafeAreaView style={style.containerStyle}>
    <Text style={style.textColor}>THis is the first text tag</Text>
    <TextComponent TextName="My name is Harshana" />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#808b96',
    height: height,
  },
  textColor: {
    color: '#e74c3c',
  },
});



export default App;
