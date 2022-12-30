import React, {useContext} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import BottomTabs from './BottomTabs';

import AuthContext from '../context/auth/AuthContext';
import LoginScreens from './LoginScreens';

export default function MainScreens() {
  const theme = {
    colors: {
      background: '#252836',
      border: 'rgb(39, 39, 41)',
      card: 'rgb(18, 18, 18)',
      notification: 'rgb(255, 69, 58)',
      primary: 'rgb(10, 132, 255)',
      text: 'rgb(229, 229, 231)',
    },
    dark: true,
  };
  const authContext = useContext(AuthContext);
  const {isSigned} = authContext;

  console.log('isSigned: ', isSigned);
  return (
    <NavigationContainer theme={theme}>
      {isSigned ? <BottomTabs /> : <LoginScreens />}
    </NavigationContainer>
  );
}
