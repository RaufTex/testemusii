import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Ionicons,
  Foundation,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { Home } from './screens/Home/index';
import { Videos } from './screens/Videos/index';

import { MyStack } from './routesStack';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 112,
          backgroundColor: '#140D24',
          borderTopWidth: 0,

          position: 'absolute',

          overflow: 'hidden',

          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          marginTop: -14,
        },
      }}
    >
      <Screen
        name='MyStack'
        component={MyStack}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name='home-variant-outline'
                size={size}
                color={'#E6BA20'}
              />
            );
          },
        }}
      />
      <Screen
        name='Videos'
        component={Videos}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <AntDesign name='videocamera' size={size} color={'#E6BA20'} />
            );
          },
        }}
      />
      <Screen
        name='Favorites'
        component={View}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return <Feather name='star' size={size} color={'#E6BA20'} />;
          },
        }}
      />
      <Screen
        name='Account'
        component={View}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons name='person-outline' size={size} color='#E6BA20' />
            );
          },
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
