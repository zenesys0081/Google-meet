/* eslint-disable no-alert */
/* eslint-disable handle-callback-err */
/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Lottie from 'lottie-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {auth} from '../../firebase/firebase';
const {width, height} = Dimensions.get('screen');

export default function Profile({navigation}) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('login_data', (err, profileData) => {
      setData(JSON.parse(profileData));
    });
  }, []);

  const logoutHandler = () => {
    setIsLoading(true);
    auth
      .signOut()
      .then(() => {
        AsyncStorage.removeItem('login_data', (err, logout) => {
          navigation.navigate('Login');
          setIsLoading(false);
        });
      })
      .catch(err => {
        setIsLoading(false);
        alert('error message', err);
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.screen}>
        {/* user image container */}
        <View style={styles.profile_container}>
          <Lottie
            source={require('../../assets/animation/profile/profile4.json')}
            autoPlay
            loop
          />
        </View>
        {/* user details container */}
        <View style={styles.profile_details}>
          <View style={styles.id_container}>
            <Text style={styles.user_profile}>User Profile Details</Text>
            <Text style={styles.profile_email}>ID:-{data?.user?.uid}</Text>
            <Text style={styles.profile_email}>
              Email:- {data?.user?.email}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btn_container}
            activeOpacity={0.7}
            onPress={logoutHandler}>
            <Text style={styles.btn_text}>
              {isLoading ? (
                <ActivityIndicator size="large" color="red" />
              ) : (
                'Logout'
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  profile_container: {
    marginVertical: height * 0.02,
    marginHorizontal: height * 0.02,
    height: height * 0.25,
  },
  profile_details: {
    marginHorizontal: height * 0.005,
    marginVertical: height * 0.05,
    height: height * 0.25,
    backgroundColor: '#76f5ce',
    borderRadius: 20,
  },
  id_container: {
    marginVertical: height * 0.02,
    marginHorizontal: height * 0.01,
    marginTop: height * 0.02,
  },

  user_profile: {
    fontSize: height / 35,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    fontStyle: 'italic',
  },
  profile_email: {
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: height / 45,
    marginTop: height * 0.01,
  },
  btn_container: {
    backgroundColor: '#8daef0',
    height: height * 0.065,
    marginHorizontal: height * 0.02,
    justifyContent: 'center',
    borderRadius: 40,
  },
  btn_text: {
    fontFamily: 'RobotoSlab-Bold',
    textAlign: 'center',
    fontSize: height / 35,
    color: '#fff',
    alignSelf: 'center',
  },
});
