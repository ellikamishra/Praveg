import React,{useState} from 'react';
import {Image, ImageBackground,StyleSheet,View,Text,Platform,StatusBar,Button,Header,TextInput,TouchableOpacity } from 'react-native';
import QRScreen from './QRScreen';
import Login from './Login';
import { NavigationContainer,useNavigation,createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()
const WelcomeScreen=({navigation}) =>{
    const [setOpen,setOpenFunc]=useState(false);
    const navigator=useNavigation();
    return (
        
        <ImageBackground 
        style={styles.background}
        source={require('../assets/grocery.webp')}>
        <View style={styles.container}>
        <Button title="Let's start!"  onPress={()=>navigation.navigate('Login')}
        // onPress={()=>navigationRef.isReady()?navigator.navigate('Login'):console.log('nothing')}
        >
          
        </Button>
          </View>
        
        {/* {setOpen?<QRScreen/>:null} */}
        

        
        
        </ImageBackground>

       
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1

    },
    container:{
        paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:15,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
      loginButton: {
        backgroundColor: '#3498db',
      },
      googleButton: {
        backgroundColor: "#ff0000",
      },
      loginText: {
        color: 'white',
      },
      restoreButtonContainer:{
        width:250,
        marginBottom:15,
        alignItems: 'flex-end'
      },
      socialButtonContent:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
      },
      socialIcon:{
        color: "#FFFFFF",
        marginRight:5
      }
    
})
export default WelcomeScreen;