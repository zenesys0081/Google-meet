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

const Stack = createNativeStackNavigator();

export default function Root({navigation}) {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
