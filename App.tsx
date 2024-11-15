import React, { useState } from 'react';

import { SafeAreaView, Text, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { ThemeProvider } from './Providers/ThemeProvider';
import Splash from './Components/TextComponent/Splash/Splash';

const { height, width } = Dimensions.get('window');

function App(): React.JSX.Element {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider>
      <Splash />
    </ThemeProvider>
  );
}

const style = StyleSheet.create({
  containerStyle: {
    height: height,
    width: width,
  },
  contentContainer: {
    height: height / 3,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueStyle: {
    fontSize: 50,
  },
  buttonView: {
    marginTop: 50,
    paddingHorizontal: 40,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
  },
  buttonAdd: {
    backgroundColor: 'green',
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSub: {
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    fontSize: 80,
  },
  textSubAdd: {
    fontSize: 15,
    color: 'white',
  },
});

export default App;
