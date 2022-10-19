/* eslint-disable react-native/no-inline-styles */
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Switch} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

export default function HostControl() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitchOnSecond, setIsSwitchOnSecond] = useState(false);
  const [isSwitchOnThird, setIsSwitchOnThird] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitchSecond = () => setIsSwitchOnSecond(!isSwitchOnSecond);
  const onToggleSwitchThird = () => setIsSwitchOnThird(!isSwitchOnThird);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Use these host settings to keep control your meeting.
        </Text>
        {/* toggal main container */}
        <View style={styles.toggle_container}>
          <View style={{width: width * 0.85}}>
            <Text style={styles.toggle_heading}>Host Management</Text>
            <Text style={styles.toggle_title}>
              Lets you restrict what participants can do in the meeting.
            </Text>
            <Text
              style={styles.toggle_link_text}
              onPress={() => alert('comming soon')}>
              Learn more about host management.
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
        {/* everyone container  */}
        <View style={{borderBottomColor: 'gray', borderBottomWidth: 1}}>
          <Text style={styles.toggle_heading}>Lets everyone</Text>
          <View style={styles.toggle_container}>
            <View style={{width: width * 0.85}}>
              <Text style={styles.toggle_title}>Share their screen</Text>
            </View>
            <View style={styles.switch_container}>
              <Switch
                value={isSwitchOnSecond}
                onValueChange={onToggleSwitchSecond}
                color={isSwitchOn ? 'gray' : 'red'}
              />
            </View>
          </View>
        </View>
        {/* send chat message */}
        <View style={styles.toggle_container}>
          <View style={{width: width * 0.85}}>
            <Text style={styles.toggle_title}>Send chat message</Text>
          </View>
          <View style={styles.switch_container}>
            <Switch
              value={isSwitchOnThird}
              onValueChange={onToggleSwitchThird}
              color={isSwitchOn ? 'gray' : 'red'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    marginVertical: height * 0.02,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },

  heading: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: height / 45,
    color: '#8ca9ed',
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
    fontSize: height / 52,
    fontFamily: 'RobotoSlab-Regular',
  },
  toggle_link_text: {
    color: '#8ca9ed',
    fontSize: height / 52,
  },
  switch_container: {
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
