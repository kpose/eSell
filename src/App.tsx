import React from 'react';
import {View, Text} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
};
const CombinedDarkTheme = {...PaperDarkTheme, ...NavigationDarkTheme};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme; // Use Light/Dark theme based on a state

  function toggleTheme() {
    // We will pass this function to Drawer and invoke it on theme switch press
    setIsDarkTheme(isDark => !isDark);
  }
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Text>hello, welome</Text>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
