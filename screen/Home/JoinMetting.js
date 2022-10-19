import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

export default function JoinMetting() {
  return (
    <View style={styles.screen}>
      <View style={styles.text_container}>
        <Text style={styles.text}>
          Enter the code provide by the metting organizer.
        </Text>
      </View>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          placeholder="Example : abc-mnop-xyz"
          placeholderTextColor={'#0008'}
        />
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
        <Text style={styles.btn_text}>Join Metting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text_container: {
    marginVertical: height * 0.01,
    marginHorizontal: height * 0.02,
  },
  text: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: height / 55,
  },
  input_container: {
    width: width * 0.95,
    height: height * 0.06,
    marginVertical: height * 0.02,
    backgroundColor: '#0002',
    alignSelf: 'center',
    borderRadius: 12,
  },
  input: {
    height: height * 0.06,
    marginHorizontal: height * 0.02,
    fontFamily: 'RobotoSlab-Regular',
    fontSize: height / 45,
  },
  btn: {
    width: width * 0.94,
    height: height * 0.06,
    marginHorizontal: height * 0.02,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: '#699ff5',
  },
  btn_text: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: height / 45,
    textAlign: 'center',
  },
});
