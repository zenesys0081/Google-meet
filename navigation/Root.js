/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home/Home';
import Splash from '../screen/splash/Splash';
import Login from '../screen/login/Login';
import SignUp from '../screen/login/SignUp';
import {Dimensions} from 'react-native';
import SideDrawer from './SideDrawer';
import JoinMetting from '../screen/Home/JoinMetting';

const Stack = createNativeStackNavigator();
const {width, height} = Dimensions.get('screen');
export default function Root({navigation}) {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
  }, []);

  if (isSplash) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
