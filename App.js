import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import 'react-native-gesture-handler';
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import CallProgress from './src/screens/CallProgress';
import ShowContact from './src/screens/ShowContact';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
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
          <Stack.Screen 
            name='CallProgress' 
            component={CallProgress}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='ShowContact' 
            component={ShowContact}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
