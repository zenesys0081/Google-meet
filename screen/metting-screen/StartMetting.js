import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Home/Header';

const {width, height} = Dimensions.get('screen');

export default function StartMetting() {
  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
