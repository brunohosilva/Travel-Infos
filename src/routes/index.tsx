import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, CountryInfo } from '../screens';
import { RootStackParamList, NavigateProps } from './types';

const Stack = createStackNavigator<RootStackParamList>();

function StackRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='CountryInfo' component={CountryInfo} />
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
