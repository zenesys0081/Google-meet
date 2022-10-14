/* eslint-disable react/self-closing-comp */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('screen');
export default function Header() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    height: height * 0.08,
  },
});
