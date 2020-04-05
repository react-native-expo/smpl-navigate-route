import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'My home' }} />
        <Stack.Screen name="Details" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
