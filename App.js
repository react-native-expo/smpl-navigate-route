import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { HeaderButtonPage } from './pages/HeaderButtonPage';
import { Button } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomePage}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#6a51ae',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
              />
            ),
          }}
        />
        <Stack.Screen name="Details" component={DetailPage} />
        <Stack.Screen 
          name="HeaderButton" 
          component={HeaderButtonPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
