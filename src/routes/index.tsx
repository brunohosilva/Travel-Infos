import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Login } from '../screens';
import { RootStackParamList, NavigateProps } from './types';

const Stack = createStackNavigator<RootStackParamList>();

function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}

export type { NavigateProps };
export { Router };
