/* eslint-disable react-native/no-inline-styles */
/* eslint-disable handle-callback-err */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/splash/Splash';
import Login from '../screen/login/Login';
import SignUp from '../screen/login/SignUp';
import SideDrawer from './SideDrawer';
import JoinMetting from '../screen/Home/JoinMetting';
import AsyncStorage from '@react-native-community/async-storage';
import Profile from '../screen/Home/Profile';
import StartMetting from '../screen/metting-screen/StartMetting';
import Chat from '../screen/metting-screen/Chat';
import Setting from '../screen/metting-screen/Setting';
import HostControl from '../screen/metting-screen/HostControl';
import Report from '../screen/metting-screen/Report';
import {Platform, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {NavigationActions} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

export default function Root() {
  const [isSplash, setIsSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('login_data', (err, data) => {
      if (!data) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
      setIsSplash(false);
    });
  }, []);

  if (isSplash) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'SideDrawer' : 'Login'}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        {/* add the nested navigation */}
        <Stack.Screen
          name="SideDrawer"
          component={SideDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JoinMetting"
          component={JoinMetting}
          options={{
            headerTitle: 'Join with a code',
            headerTitleAlign: 'center',
          }}
        />
        {/* profile */}
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: 'Profile',
            headerTitleAlign: 'center',
          }}
        />
        {/* start metting  */}
        <Stack.Screen
          name="StartMetting"
          component={StartMetting}
          options={{headerShown: false}}
        />
        {/* nested modal add screen  */}
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={({navigation, route}) => {
            return {
              headerTitle: 'In call message',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#fff',
              },
              headerStyle: {
                backgroundColor: '#000',
              },

              headerLeft: () => {
                return (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="cancel" size={30} color={'#fff'} />
                  </TouchableOpacity>
                );
              },
            };
          }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={({navigation, route}) => {
            return {
              headerTitle: 'Settings',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#fff',
              },
              headerStyle: {
                backgroundColor: '#000',
              },

              headerLeft: () => {
                return (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="cancel" size={30} color={'#fff'} />
                  </TouchableOpacity>
                );
              },
            };
          }}
        />
        <Stack.Screen
          name="HostControl"
          component={HostControl}
          options={({navigation, route}) => {
            return {
              headerTitle: 'Host controls',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#fff',
              },
              headerStyle: {
                backgroundColor: '#000',
              },

              headerLeft: () => {
                return (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="cancel" size={30} color={'#fff'} />
                  </TouchableOpacity>
                );
              },
            };
          }}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={({navigation, route}) => {
            return {
              headerTitle: 'Report abuse',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#fff',
              },
              headerStyle: {
                backgroundColor: '#000',
              },

              headerLeft: () => {
                return (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="cancel" size={30} color={'#fff'} />
                  </TouchableOpacity>
                );
              },
              headerRight: () => {
                return (
                  <TouchableOpacity onPress={() => alert('comming soon')}>
                    <Text
                      style={{
                        fontFamily: 'RobotoSlab-Bold',
                        color: '#8ca9ed',
                        fontSize: 16,
                      }}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                );
              },
            };
          }}
        />
      </Stack.Navigator>
      {Platform.OS === 'ios' ? (
        <StatusBar translucent animated={true} barStyle={'dark-content'} />
      ) : (
        <StatusBar translucent animated={true} barStyle={'dark-content'} />
      )}
    </NavigationContainer>
  );
}
