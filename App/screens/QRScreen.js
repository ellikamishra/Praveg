import React, { useState } from 'react';
import { Fragment } from 'react';
import { Text, View, StatusBar, Platform, StyleSheet, Linking,TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';


function QRScreen(props) {
  const [scan, setScan] = useState(false);
  const [scanResult, setScanResult] = useState(false);
  const [result, setResult] = useState(null);
  const onSuccess = (e) => {
    Linking.openURL(e.data).catch(err =>
      console.error("An error occured", err)
    );
  };

  console.log("called QR")
  return (
    <View style={styles.conatiner}>
      <Fragment>
        <StatusBar barStyle="dark-content"></StatusBar>
        <Text> Praveg scanner</Text>
        <QRCodeScanner reactivate={true} onRead={(e) => onSuccess(e)}
          topContent={
            <Text style={styles.centerText}>
              Go to{' '}
              <Text style={styles.textBold}>Praveg</Text> 
              Scan item to add in cart
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        ></QRCodeScanner>
        {/* {
                    scan&&
                } */}
      </Fragment>
    </View>
  );

}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  conatiner: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white"
  },
  textBold: {
    fontWeight: '500',
    color: 'black'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default QRScreen;

