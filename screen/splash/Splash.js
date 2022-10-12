/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
const {width, height} = Dimensions.get('screen');

export default function Splash() {
  return (
    <View style={styles.screen}>
      <View style={styles.text_container}>
        <Text style={styles.text}>Welcome to Google Meet.</Text>
      </View>
      <Lottie
        source={require('../../assets/animation/splash3.json')}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: '#000',
  },
  text_container: {
    marginTop: 180,
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#3492eb',
    fontSize: height / 28,
    fontFamily: 'RobotoSlab-Regular',
    fontWeight: 'bold',
  },
});
