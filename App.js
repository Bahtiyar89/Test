import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EmulatorState from './src/context/emulator/EmulatorState';
import MainScreen from './src/screens/MainScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <EmulatorState>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="MainScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </EmulatorState>
  );
}

export default App;
