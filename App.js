import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity, Button, Alert } from 'react-native';
import WelcomeScreen from './App/screens/WelcomeScreen';
/*
const handlePress=()=> console.log("Pressed!");
  console.log("App executed");
  const showAlert=()=>Alert.alert(
    "ALERT!",
    "Lion's app",[
      {text:"Ikr!",onPress:()=>console.log("Ikr!")},
      {text:"Bow Down",onPress:()=>console.log("Bow down")}
    ]
  )
  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>Hello React Native</Text>
      <TouchableOpacity onPress={handlePress}>
      <Image source={{
        height:300,
        width:200,
        uri:"https://picsum.photos/200/300"}}
      /> 
      </TouchableOpacity>
       
      <Button onPress={showAlert} title="Trial" style={styles.buttone}/>
      <StatusBar style="auto" />
    </View>
  );

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttone: {
    marginBottom: 4,
    backgroundColor: "orange"
  }
});
*/
export default function App() {
  return(
    <WelcomeScreen/>
  );
}


