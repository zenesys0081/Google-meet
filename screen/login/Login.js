/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Lottie from 'lottie-react-native';
import {auth} from '../../firebase/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('screen');
export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        AsyncStorage.setItem('login_data', JSON.stringify(res));
        navigation?.navigate('SideDrawer', {
          screen: 'Home',
        });
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        alert('incorrect email and password', err.message);
        console.log('login error ==> ', err.message);
      });
  };

  return (
    <LinearGradient
      colors={['#CBCE91FF', '#EA738DFF', '#5CC8D7FF']}
      style={styles.screen}>
      <ScrollView
        style={{marginBottom: height * 0.02}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.image_container}>
          <Lottie
            source={require('../../assets/animation/login/login4.json')}
            autoPlay
            loop
          />
        </View>
        <Text style={styles.heading}>Welcome to Login page.</Text>
        <View>
          {/* email input  */}
          <View style={styles.image_main_container}>
            <View style={styles.image}>
              <Image source={require('../../assets/image/email.png')} />
            </View>
            <TextInput
              placeholder="Enter the Email"
              placeholderTextColor={'#fff'}
              style={styles.input}
              autoCapitalize="none"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          {/* password input */}
          <View style={styles.password_main_container}>
            <View style={styles.image}>
              <Image source={require('../../assets/image/pass.png')} />
            </View>
            <TextInput
              placeholder="Enter the Password"
              autoCapitalize="none"
              placeholderTextColor={'#fff'}
              style={styles.input}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          {/* login button container */}

          <TouchableOpacity
            style={styles.btn_container}
            activeOpacity={0.7}
            onPress={loginHandler}>
            <Text style={styles.btn_text}>
              {isLoading ? (
                <ActivityIndicator size="large" color="red" />
              ) : (
                'Login'
              )}
            </Text>
          </TouchableOpacity>

          {/* SignUp button container */}
          <TouchableOpacity
            style={styles.signup_container}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.btn_text}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image_container: {
    width: width * 0.9,
    height: height * 0.4,
    marginTop: height * 0.03,
    alignSelf: 'center',
  },
  heading: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: height / 30,
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  image_main_container: {
    height: height * 0.06,
    backgroundColor: '#fff5',
    width: width * 0.95,
    borderRadius: 12,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  image: {
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: width * 0.82,
    paddingHorizontal: height * 0.02,
    fontFamily: 'RobotoSlab-Regular',
    fontSize: height / 50,
  },
  password_main_container: {
    height: height * 0.06,
    backgroundColor: '#fff5',
    width: width * 0.95,
    borderRadius: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: height * 0.04,
  },
  btn_container: {
    width: width * 0.95,
    backgroundColor: '#63bab1',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 40,
    height: height * 0.07,
    marginVertical: height * 0.04,
    alignItems: 'center',
  },
  btn_text: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: height / 40,
  },
  signup_container: {
    width: width * 0.95,
    backgroundColor: '#63bab9',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 40,
    height: height * 0.07,
  },
});
