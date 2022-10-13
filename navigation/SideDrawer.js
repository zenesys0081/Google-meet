/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Setting from '../screen/Home/Setting';
import Help from '../screen/Home/Help';
import SendFeedback from '../screen/Home/SendFeedback';
import Home from '../screen/Home/Home';
import {TouchableOpacity, Image, Dimensions, StyleSheet} from 'react-native';

const Drawer = createDrawerNavigator();
const {width, height} = Dimensions.get('screen');

export default function SideDrawer({navigation}) {
  return (
    <Fragment>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Meet',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'RobotoSlab-Regular',
              fontSize: height / 40,
            },
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: height * 0.015}}
                onPress={() => navigation.navigate('Profile')}>
                <Image source={require('../assets/image/account.png')} />
              </TouchableOpacity>
            ),

            // drawer coustem styles
            drawerActiveBackgroundColor: '#89b3f5',
            drawerInactiveBackgroundColor: '#949fb0',
            drawerActiveTintColor: '#000',
            drawerInactiveTintColor: '#fff',
            drawerLabelStyle: {
              marginLeft: -20,
              fontFamily: 'RobotoSlab-Regular',
              fontSize: height / 45,
            },
            drawerIcon: ({focused, size}) => (
              <Image
                source={require('../assets/image/drawer-img/video.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#000' : '#fff',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{
            drawerActiveBackgroundColor: '#89b3f5',
            drawerInactiveBackgroundColor: '#949fb0',
            drawerActiveTintColor: '#000',
            drawerInactiveTintColor: '#fff',
            drawerLabelStyle: {
              marginLeft: -20,
              fontFamily: 'RobotoSlab-Regular',
              fontSize: height / 45,
            },
            drawerIcon: ({focused, size}) => (
              <Image
                source={require('../assets/image/drawer-img/setting.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#000' : '#fff',
                }}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Help"
          component={Help}
          options={{
            drawerActiveBackgroundColor: '#89b3f5',
            drawerInactiveBackgroundColor: '#949fb0',
            drawerActiveTintColor: '#000',
            drawerInactiveTintColor: '#fff',
            drawerLabelStyle: {
              marginLeft: -20,
              fontFamily: 'RobotoSlab-Regular',
              fontSize: height / 45,
            },
            drawerIcon: ({focused, size}) => (
              <Image
                source={require('../assets/image/drawer-img/help.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#000' : '#fff',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="SendFeedback"
          component={SendFeedback}
          options={{
            drawerActiveBackgroundColor: '#89b3f5',
            drawerInactiveBackgroundColor: '#949fb0',
            drawerActiveTintColor: '#000',
            drawerInactiveTintColor: '#fff',
            drawerLabelStyle: {
              marginLeft: -20,
              fontFamily: 'RobotoSlab-Regular',
              fontSize: height / 45,
            },
            drawerIcon: ({focused, size}) => (
              <Image
                source={require('../assets/image/drawer-img/feedback.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#000' : '#fff',
                }}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
