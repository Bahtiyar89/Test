import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileSvg from '../assets/tabImages/ProfileSvg';
import VideoSvg from '../assets/tabImages/VideoSvg';
import VideoMainScreen from '../screens/VideoMainScreen';
import TodoScreen from '../screens/TodoScreen';
import OtherScreen from '../screens/OtherScreen';

const VideMainStack = createNativeStackNavigator();
function VideoStackScreen() {
  return (
    <VideMainStack.Navigator
      screenOptions={({route}) => ({headerShown: false})}>
      <VideMainStack.Screen
        name="VideoMainScreen"
        component={VideoMainScreen}
      />
      <VideMainStack.Screen name="OtherScreen" component={OtherScreen} />
    </VideMainStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route, color}) => {
        console.log('route:: ', route.name);
        return {
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#161927',
            borderTopWidth: 2,
            borderTopColor:
              route.name == 'VideoScreen'
                ? '#32A7E2'
                : route.name == 'RatingsScreen'
                ? '#B548C6'
                : route.name == 'ProfileScreen'
                ? '#3066BE'
                : 'red',
            height: 60,
            paddingBottom: 10,
          },
        };
      }}>
      <Tab.Screen
        name="VideoScreen"
        options={{
          tabBarLabel: 'Пользователи',
          tabBarInactiveTintColor: '#2D303E',
          tabBarActiveTintColor: '#32A7E2',
          tabBarIcon: ({focused}) => <VideoSvg focused={focused} />,
        }}
        component={VideoStackScreen}
      />

      <Tab.Screen
        name="ProfileScreen"
        options={{
          tabBarLabel: 'Todo',
          tabBarIcon: ({focused}) => <ProfileSvg focused={focused} />,
        }}
        component={TodoScreen}
      />
    </Tab.Navigator>
  );
}
