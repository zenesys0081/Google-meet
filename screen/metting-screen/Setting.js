/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('screen');

export default function Setting() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitchOnSecond, setIsSwitchOnSecond] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitchSecond = () => setIsSwitchOnSecond(!isSwitchOnSecond);

  return (
    <SafeAreaView style={styles.screen}>
      {/* video container */}
      <View style={styles.container}>
        <Text style={styles.heading}>Video</Text>
        {/* toggal main container */}
        <View style={styles.toggle_container}>
          <View style={{width: width * 0.8, marginHorizontal: height * 0.01}}>
            <Text style={styles.toggle_heading}>
              Adjust video for low light
            </Text>
            <Text style={styles.toggle_title}>
              Makes it easier to see you when your lighting is poor.
            </Text>
          </View>
          <View style={styles.switch_container}>
            <Switch
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
              color={isSwitchOn ? 'gray' : 'red'}
            />
          </View>
        </View>
      </View>
      {/* General Settings */}
      <View>
        <Text style={styles.heading}>General</Text>
        <TouchableOpacity
          style={styles.general_container}
          onPress={() => alert('comming soon')}
          activeOpacity={0.7}>
          <View style={styles.general_icon_container}>
            <Icon name="message-alert-outline" size={35} color={'#fff'} />
          </View>
          <View style={styles.general_right_container}>
            <Text style={styles.toggle_heading}>Report a Problems</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* captions container */}
      <View style={styles.container}>
        {/* <Text style={styles.heading}>Captions</Text> */}
        {/* toggal main container */}
        {/* <View style={styles.toggle_container}>
          <View style={{width: width * 0.85}}>
            <Text style={styles.toggle_heading}>Live Captions</Text>
            <Text style={styles.toggle_title}>Show captions in this call</Text>
          </View>
          <View style={styles.switch_container}>
            <Switch
              value={isSwitchOnSecond}
              onValueChange={onToggleSwitchSecond}
              color={isSwitchOn ? 'gray' : 'red'}
            />
          </View>
        </View> */}
      </View>
      {/* captions language */}
      {/* <TouchableOpacity
        style={styles.general_container}
        onPress={() => alert('comming soon')}
        activeOpacity={0.7}>
        <View style={styles.general_icon_container}>
          <Icon name="closed-caption-outline" size={35} color={'#fff'} />
        </View>
        <View style={styles.general_right_container}>
          <Text style={styles.toggle_heading}>Language of the call</Text>
          <Text style={styles.toggle_title}>English</Text>
        </View>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    marginVertical: height * 0.01,
  },

  heading: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: height / 40,
    color: '#8ca9ed',
    marginHorizontal: height * 0.01,
  },
  toggle_container: {
    flexDirection: 'row',
    marginVertical: height * 0.02,
  },
  toggle_heading: {
    color: '#fff',
    fontSize: height / 45,
    fontFamily: 'RobotoSlab-Medium',
  },
  toggle_title: {
    color: '#fff9',
    fontSize: height / 55,
    fontFamily: 'RobotoSlab-Regular',
  },
  switch_container: {
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  general_container: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  general_icon_container: {
    marginVertical: height * 0.02,
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  general_right_container: {
    width: width * 0.85,
    justifyContent: 'center',
  },
});
