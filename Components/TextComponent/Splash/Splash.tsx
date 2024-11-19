import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import useToggle from '../../../CusomHooks/ToggleHook';
import ImageComponent from '../ImageComponent/ImageComponent';

const Splash = () => {
  const [valueState, toggle] = useToggle(false);

  return (
    <SafeAreaView>
      <Text>{valueState ? 'ON' : 'Off'}</Text>
      <TouchableOpacity onPress={toggle}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      <ImageComponent />
    </SafeAreaView>
  );
};

export default Splash;
