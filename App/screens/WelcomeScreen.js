import React,{useState} from 'react';
import { ImageBackground,StyleSheet,View,Text,Platform,StatusBar,Button,Header } from 'react-native';
import QRScreen from './QRScreen';

function WelcomeScreen(props) {
    const [setOpen,setOpenFunc]=useState(false);
    return (
        
        <ImageBackground 
        style={styles.background}
        source={require('../assets/grocery.webp')}>
        <View style={styles.container}>
        {/* <Text style={{position:"absolute",top:"3",fontSize:1000,color:"black"}}>PRAVEG</Text> */}
        <Button style={styles.clickButton} title="Login" onPress={()=>setOpenFunc(true)}>
            
        </Button>
        {/* <View style={styles.clickButton}>
            <Text>Signup</Text>
        </View> */}
        {setOpen?<QRScreen/>:null}
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
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    clickButton:{
      
        
        color:"black",
        width:"40%",
        height:60,
        margin:5,
        padding:5,
        marginBottom:2,
        
    },
    textStyle:{
        fontStyle:"italic",
        fontWeight:"700",
        color:"white",
        
    }
    
})
export default WelcomeScreen;