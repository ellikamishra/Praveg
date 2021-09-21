import React from 'react';
import { ImageBackground,StyleSheet,View,Text,Platform,StatusBar } from 'react-native';

function WelcomeScreen(props) {
    return (
        
        <ImageBackground 
        style={styles.background}
        source={require('../assets/background.webp')}>
        <View style={styles.container}>
        <View style={styles.clickButton} >
            <Text style={{paddingLeft:5}}>Login</Text>
        </View>
        <View style={styles.clickButton}>
            <Text>Signup</Text>
        </View>
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
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-end"
    },
    clickButton:{
      
        
        backgroundColor:"white",
        width:"40%",
        height:60,
        margin:5,
        padding:5,
        
    }
    
})
export default WelcomeScreen;