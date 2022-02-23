import React from 'react';
import {DefaultTheme , Provider as PaperProvider } from 'react-native-paper';

import 'react-native-gesture-handler';
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import CallProgress from './src/screens/CallProgress';
import ShowContact from './src/screens/ShowContact';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Update from './src/screens/Update';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name='Home' 
            component={Home}
            options={{
              headerShown: true,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'green'
              }
            }}
          />
          <Stack.Screen 
            name='Register' 
            component={Register}
            options={{
              headerTitle: 'Cadastro',
              headerShown: true,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'green'
              }
            }}
          />
          <Stack.Screen 
            name='CallProgress' 
            component={CallProgress}
            options={{
              headerShown: true,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'green'
              },
            }}
          />
          <Stack.Screen 
            name='ShowContact' 
            component={ShowContact}
            options={{
              headerShown: true,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'green'
              },
              headerTitle: 'Histórico de Chamadas'
            }}
          />
          <Stack.Screen 
            name='Update' 
            component={Update}
            options={{
              headerShown: true,
              headerTintColor: 'white',
              headerTitle: 'Atualização de Cadastro',
              headerStyle: {
                backgroundColor: 'green'
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
