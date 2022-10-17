/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import React, {Fragment} from 'react';
import Header from '../../components/Home/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('screen');

const bottomIcon = [
  {
    id: '1',
    img: 'phone-alt',
    color: 'red',
    bgColor: 'red',
  },
  {
    id: '2',
    img: 'video',
    color: '#fff',
    bgColor: '#000',
  },
  {
    id: '3',
    img: 'microphone',
    color: '#fff',
    bgColor: '#000',
  },

  {
    id: '4',
    img: 'hand-paper',
    color: '#fff',
    bgColor: '#000',
  },

  {
    id: '5',
    img: 'ellipsis-v',
    color: '#fff',
    bgColor: '#000',
  },
];

export default function StartMetting({navigation}) {
  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <Header navigation={navigation} />

          <View style={styles.share_container}>
            <Text style={styles.heading_text}>You're the only one here</Text>
            <Text style={styles.heading_text}>
              Share this metting link with others you want in the meeting.
            </Text>
            <View style={styles.copy_container}>
              <View style={styles.copy_sub_container}>
                <Text style={styles.copy_metting_id}>
                  meet.googel.com/V4xpr8hLrLRas
                </Text>
                <Icon
                  name="copy"
                  color={'#fff'}
                  size={23}
                  onPress={() => alert('comming soon')}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.share_btn_container}
              activeOpacity={0.7}
              onPress={() => alert('comming soon')}>
              <Icon name="share-alt" size={20} color={'#000'} />
              <Text style={styles.share_btn_text}>Share Invite</Text>
            </TouchableOpacity>
          </View>

          {/* camara open container  */}
          <View style={styles.camara_container}>
            <View style={styles.camara_img_container}>
              <Image
                source={require('../../assets/image/metting-img/user2.jpeg')}
                style={styles.metting_img}
              />
            </View>
          </View>

          {/* bottom container */}
          <View style={styles.bottom_container}>
            <View style={styles.bottom_bar}>
              {bottomIcon.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.icon_container}
                    key={index}
                    onPress={() => alert('comming soon')}>
                    <Icon name={item.img} color={item.color} size={30} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      {Platform.OS === 'ios' ? (
        <StatusBar translucent animated={true} barStyle={'light-content'} />
      ) : (
        <StatusBar translucent animated={true} barStyle={'light-content'} />
      )}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  share_container: {
    marginVertical: height * 0.13,
  },
  heading_text: {
    marginHorizontal: height * 0.02,
    fontSize: height / 45,
    fontFamily: 'RobotoSlab-Regular',
    marginVertical: height * 0.002,
    color: '#fff',
  },
  copy_container: {
    backgroundColor: '#838385',
    width: width * 0.75,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: height * 0.02,
    marginVertical: height * 0.02,
    borderRadius: 20,
  },

  copy_sub_container: {
    flexDirection: 'row',
    marginHorizontal: height * 0.02,
  },
  copy_metting_id: {
    color: '#fff',
    fontSize: height / 60,
    fontFamily: 'RobotoSlab-Regular',
    paddingRight: height * 0.025,
  },
  share_btn_container: {
    flexDirection: 'row',
    width: width * 0.4,
    height: height * 0.05,
    backgroundColor: '#79a7ed',
    marginLeft: height * 0.02,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  share_btn_text: {
    marginLeft: height * 0.02,
    fontSize: height / 48,
    color: '#000',
    fontFamily: 'RobotoSlab-Regular',
  },
  camara_container: {
    height: height * 0.2,
  },
  camara_img_container: {
    backgroundColor: 'gray',
    width: width * 0.35,
    height: height * 0.22,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  metting_img: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  // bottam container
  bottom_container: {
    position: 'relative',
    top: 65,
    right: 0,
    left: 0,
  },
  bottom_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon_container: {
    width: width * 0.15,
    height: height * 0.065,
    alignItems: 'center',
    backgroundColor: '#606363',
    justifyContent: 'center',
    borderRadius: 40,
  },
});
