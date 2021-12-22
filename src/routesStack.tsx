import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home/index';
import { Movie } from './screens/Movie/index';
import { NowPlayingList } from './components/NowPlayingList/index';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Movie' component={Movie} />
      <Stack.Screen name='NowPlayingList' component={NowPlayingList} />
    </Stack.Navigator>
  );
};
