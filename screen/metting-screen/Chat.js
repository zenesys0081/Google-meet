/* eslint-disable no-alert */
/* eslint-disable no-extra-boolean-cast */
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import socketServices from '../../socket/server';
const {width, height} = Dimensions.get('screen');

export default function Chat() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    socketServices.initializeSocket();
  }, []);

  useEffect(() => {
    socketServices.on('received_message', msg => {
      console.log('get the client side message ==>', msg);
    });
  }, []);

  const onSendMessage = () => {
    if (!!message) {
      socketServices.emit('send_message', message);
      return;
    }
    alert('please enter the message');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.left_contianer}>
          <TextInput
            style={styles.input}
            placeholder={'Send message'}
            placeholderTextColor="#fff5"
            value={message}
            onChangeText={text => setMessage(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.right_contianer}
          onPress={onSendMessage}>
          <Icon name="send" size={30} color="#000" style={styles.send_btn} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    backgroundColor: '#fff9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: height * 0.01,
    borderRadius: 12,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 10,
    right: 0,
    left: 0,
  },
  left_contianer: {
    width: width * 0.8,
    height: height * 0.06,
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: height * 0.01,
    fontSize: height / 50,
    color: '#000',
    height: height * 0.06,
  },
  right_contianer: {
    width: width * 0.2,
    justifyContent: 'center',
  },
  send_btn: {
    alignSelf: 'center',
  },
});
