import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity, Button, Alert } from 'react-native';
import WelcomeScreen from './App/screens/WelcomeScreen';

import QRScreen from './App/screens/QRScreen';
import LoginScreen from './App/screens/LoginScreen';
import Signup from './App/screens/Signup';
import LoginNew from './App/screens/LoginNew';

const RootStack = createStackNavigator();


export default function App() {
  return(
    <NavigationContainer >
      <RootStack.Navigator>
        <RootStack.Screen name="Welcome to Praveg"component={WelcomeScreen}/>


        <RootStack.Screen name="Signup" component={Signup}/>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="LoginNew" component={LoginNew}/>
        <RootStack.Screen name="QRScreen" component={QRScreen}/>
        
      </RootStack.Navigator>
  
    </NavigationContainer>
    
  );
}


 //  "^3.3.2",