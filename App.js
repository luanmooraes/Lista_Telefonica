import React from 'react';

import Home from './src/screens/Home';
import Register from './src/screens/Register';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Register' 
          component={Register}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
