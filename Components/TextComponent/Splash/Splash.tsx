import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { useThemeProvider } from '../../../Providers/ThemeProvider';
import useToggle from '../../../CusomHooks/ToggleHook';
import useFetchData from '../../../CusomHooks/FetchData';

const Splash = () => {
  const { theme } = useThemeProvider();

  const { data, isLoading } = useFetchData('https://jsonplaceholder.typicode.com/users');

  console.log(data);

  const [valueState, toggle] = useToggle(false);

  return (
    <SafeAreaView>
      <Text>{valueState ? 'ON' : 'Off'}</Text>
      <TouchableOpacity onPress={toggle}>
        <Text>Toggle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Splash;
