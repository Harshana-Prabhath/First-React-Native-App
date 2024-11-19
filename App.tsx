import React from 'react';
import { ThemeProvider } from './Providers/ThemeProvider';
import Splash from './Components/TextComponent/Splash/Splash';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Splash />
    </ThemeProvider>
  );
}

export default App;
