import * as React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import MainScreens from './src/navigation/MainScreens';
import AuthState from './src/context/auth/AuthState';

function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };
  console.log('DarkTheme: ', DarkTheme);
  return (
    <PaperProvider theme={DarkTheme}>
      <AuthState>
        <MainScreens />
      </AuthState>
    </PaperProvider>
  );
}

export default App;
