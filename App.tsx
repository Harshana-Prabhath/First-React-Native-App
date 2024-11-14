import React, { useState } from 'react';

import { SafeAreaView, Text, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');

function App(): React.JSX.Element {
  const [value, setValue] = useState(0);

  return (
    <SafeAreaView style={style.containerStyle}>
      <View style={style.contentContainer}>
        <Text style={style.valueStyle}>{value}</Text>
        <View style={style.buttonView}>
          <TouchableOpacity style={style.buttonSub} onPress={() => setValue(value - 1)}>
            <Text style={style.textSubAdd}>Substract</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonAdd} onPress={() => setValue(value + 1)}>
            <Text style={style.textSubAdd}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
