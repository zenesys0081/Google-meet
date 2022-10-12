import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Setting from '../screen/Home/Setting';
import Help from '../screen/Home/Help';
import SendFeedback from '../screen/Home/SendFeedback';
import Home from '../screen/Home/Home';
import {TouchableOpacity, Image, Dimensions} from 'react-native';

const Drawer = createDrawerNavigator();
const {width, height} = Dimensions.get('screen');
export default function SideDrawer() {
  return (
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
              onPress={() => alert('comming soon')}>
              <Image source={require('../assets/image/account.png')} />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="SendFeedback" component={SendFeedback} />
    </Drawer.Navigator>
  );
}
