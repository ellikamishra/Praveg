import React,{useState} from 'react';
import {Image, ImageBackground,StyleSheet,View,Text,Platform,StatusBar,Button,Header,TextInput,TouchableOpacity } from 'react-native';

import config from '/home/ellika/FirstApp/src/aws-exports.js';
import { withAuthenticator } from 'aws-amplify-react-native';
import { requestNotifications } from 'react-native-permissions';
const Amplify=require('aws-amplify');

Amplify.default.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function Login(props) {

    return(
        <View style={styles.container1}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        </View>
    );



}


const styles = StyleSheet.create({
    container1: {
        paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
});


export default withAuthenticator(Login);