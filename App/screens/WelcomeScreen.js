import React,{useState} from 'react';
import {Image, ImageBackground,StyleSheet,View,Text,Platform,StatusBar,Button,Header,TextInput,TouchableOpacity } from 'react-native';
import QRScreen from './QRScreen';

function WelcomeScreen(props) {
    const [setOpen,setOpenFunc]=useState(false);
    return (
        
        <ImageBackground 
        style={styles.background}
        source={require('../assets/grocery.webp')}>
        <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>
        </View>
        <TouchableOpacity style={styles.restoreButtonContainer}>
            <Text style={{color:'white',fontSize:20}}>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={{color:'white',fontSize:20}}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
          <View style={styles.socialButtonContent}>
            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
            <Text style={styles.loginText}>Sign in with google</Text>
          </View>
        </TouchableOpacity>
        {/* {setOpen?<QRScreen/>:null} */}
        </View>

        
        
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