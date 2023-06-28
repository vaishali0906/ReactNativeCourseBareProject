import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {

  async function getLocationHandler(){
    let { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    
    let location = await Location.getCurrentPositionAsync({});
    console.log("yfgidhbkcjnx")
    console.log(location)
  }

  return (
    <View style={styles.container}>
     <Button title='Get Location'  onPress={getLocationHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
