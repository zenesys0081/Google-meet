/* eslint-disable react-native/no-inline-styles */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Lottie from 'lottie-react-native';
const {width, height} = Dimensions.get('screen');
const FirstRoute = () => (
  <View style={{flex: 1}}>
    <Lottie
      source={require('../../assets/animation/home/dashboard5.json')}
      autoPlay
      loop
      style={{
        width: width * 0.95,
        height: height * 0.5,
        alignSelf: 'center',
        marginTop: height * 0.04,
      }}
    />
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1}}>
    <Lottie
      source={require('../../assets/animation/home/dashboard2.json')}
      autoPlay
      loop
      style={{
        width: width * 0.95,
        height: height * 0.5,
        alignSelf: 'center',
        marginTop: height * 0.04,
      }}
    />
  </View>
);

const ThreeRoute = () => (
  <View style={{flex: 1}}>
    <Lottie
      source={require('../../assets/animation/home/dashboard1.json')}
      autoPlay
      loop
      style={{
        width: width * 0.95,
        height: height * 0.5,
        alignSelf: 'center',
        marginVertical: height * 0.02,
        marginHorizontal: height * 0.04,
      }}
    />
  </View>
);

const FourRoute = () => (
  <View style={{flex: 1}}>
    <Lottie
      source={require('../../assets/animation/home/dashboard4.json')}
      autoPlay
      loop
      style={{
        width: width * 0.95,
        height: height * 0.5,
        alignSelf: 'center',
        marginTop: height * 0.04,
      }}
    />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  three: ThreeRoute,
  four: FourRoute,
});

export default function TabSlider() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'three', title: 'three'},
    {key: 'four', title: 'Four'},
  ]);
  const Tab = () => {
    return <View></View>;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 4) {
        setIndex(-1);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={Tab}
    />
  );
}

const styles = StyleSheet.create({});
