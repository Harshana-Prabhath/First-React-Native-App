import React from 'react';
import { Text } from 'react-native';

import { useThemeProvider } from '../../../Providers/ThemeProvider';

const Splash = () => {
  const { theme } = useThemeProvider();

  return <Text>{theme}</Text>;
};

export default Splash;
