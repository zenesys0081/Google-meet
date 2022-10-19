/* eslint-disable react/self-closing-comp */
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('screen');
export default function Header({navigation}) {
  return (
    <View style={styles.screen}>
      <View style={styles.main_container}>
        <View style={styles.header_left}>
          <TouchableOpacity
            style={styles.icon}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Home')}>
            <Icon
              name="arrow-left"
              color={'#668fed'}
              size={25}
              style={styles.right_icon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>V4xpr8hLrLRas</Text>
        </View>
        <View style={styles.right_container}>
          <TouchableOpacity
            style={styles.left_icon_container}
            activeOpacity={0.7}
            onPress={() => alert('commimg soon')}>
            <Icon
              name="sync-alt"
              color={'#fff'}
              size={25}
              style={styles.right_icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.left_icon_container}
            activeOpacity={0.7}
            onPress={() => alert('commimg soon')}>
            <Icon
              name="volume-up"
              color={'#fff'}
              size={25}
              style={styles.right_icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  main_container: {
    height: height * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header_left: {
    width: width * 0.65,
    flexDirection: 'row',
  },
  icon: {
    width: width * 0.12,
    justifyContent: 'center',
  },
  text: {
    marginLeft: height * 0.01,
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'RobotoSlab-Regular',
    fontSize: height / 50,
    color: '#fff',
  },
  right_container: {
    width: width * 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left_icon_container: {
    justifyContent: 'center',
    width: '40%',
  },
  right_icon: {
    alignSelf: 'center',
  },
});
