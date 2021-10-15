import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity, Button, Alert } from 'react-native';
import WelcomeScreen from './App/screens/WelcomeScreen';
import Login from './App/screens/Login';
import QRScreen from './App/screens/QRScreen';
const RootStack = createStackNavigator();


export default function App() {
  return(
    <NavigationContainer >
      <RootStack.Navigator>
        <RootStack.Screen name="Welcome to Praveg"component={WelcomeScreen}/>

  
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="Home" component={QRScreen}/>
        
      </RootStack.Navigator>
  
    </NavigationContainer>
    
  );
}


 //  "^3.3.2",