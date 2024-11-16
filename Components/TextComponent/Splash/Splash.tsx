import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Car from '../../../ClassComponents/FirstClass';
import { useThemeProvider } from '../../../Providers/ThemeProvider';
import useToggle from '../../../CusomHooks/ToggleHook';
import useFetchData from '../../../CusomHooks/FetchData';

const Splash = () => {
  const { theme } = useThemeProvider();

  const { data, isLoading } = useFetchData('https://jsonplaceholder.typicode.com/users');

  const [valueState, toggle] = useToggle(false);

  return (
    <SafeAreaView>
      <Text>{valueState ? 'ON' : 'Off'}</Text>
      <TouchableOpacity onPress={toggle}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      <Car color="blue" />
    </SafeAreaView>
  );
};

export default Splash;
