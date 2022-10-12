/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  Button,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
const {width, height} = Dimensions.get('screen');

import TabSlider from '../../components/Home/TabSlider';
import Modal from 'react-native-modal';

export default function Home({navigation}) {
  const layout = useWindowDimensions();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Fragment>
        <View style={styles.screen}>
          <View style={styles.button_container}>
            {/* left */}
            <TouchableOpacity
              style={styles.left_container}
              activeOpacity={0.7}
              onPress={toggleModal}>
              <Text style={styles.left_text}>New Meeting</Text>
            </TouchableOpacity>
            {/* right */}
            <TouchableOpacity
              style={styles.left_container}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('JoinMetting')}>
              <Text style={styles.left_text}>Join with a code</Text>
            </TouchableOpacity>
          </View>
          {/* screen slider  */}
          <View
            style={{
              flex: 1,
              height: layout.height,
            }}>
            <TabSlider />
          </View>
        </View>
        {/* modal contianer */}

        <Modal
          isVisible={isModalVisible}
          animationType="fade"
          transparent={true}
          backdropOpacity={0.2}
          backdropColor={'#0005'}
          deviceWidth={true}>
          <View style={styles.modal_container}>
            {/* first */}
            <TouchableOpacity
              style={styles.modal_item_container}
              onPress={() => alert('comming soon')}>
              <Image
                source={require('../../assets/image/modal-img/share.png')}
                style={styles.img}
              />
              <Text style={styles.modal_item_text}>
                Get a metting link to share
              </Text>
            </TouchableOpacity>
            {/* second */}
            <TouchableOpacity
              style={styles.modal_item_container}
              onPress={() => alert('comming soon')}>
              <Image
                source={require('../../assets/image/modal-img/video.png')}
                style={styles.img}
              />
              <Text style={styles.modal_item_text}>
                Start an instant metting
              </Text>
            </TouchableOpacity>
            {/* third */}
            <TouchableOpacity
              style={styles.modal_item_container}
              onPress={() => alert('comming soon')}>
              <Image
                source={require('../../assets/image/modal-img/calendar.png')}
                style={styles.img}
              />
              <Text style={styles.modal_item_text}>
                Schedule in google Calender
              </Text>
            </TouchableOpacity>
            {/* four */}
            <TouchableOpacity
              style={styles.modal_item_container}
              activeOpacity={0.7}
              onPress={toggleModal}>
              <Image
                source={require('../../assets/image/modal-img/close.png')}
                style={styles.img}
              />
              <Text style={styles.modal_item_text}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Fragment>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // main
  screen: {
    flex: 1,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: width * 0.02,
    paddingHorizontal: width * 0.02,
  },
  left_container: {
    width: width * 0.45,
    height: height * 0.06,
    backgroundColor: '#8ca9ed',
    borderRadius: 20,
    justifyContent: 'center',
  },
  left_text: {
    textAlign: 'center',
    fontSize: height / 45,
  },
  modal_container: {
    backgroundColor: '#0009',
    height: height * 0.3,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modal_item_container: {
    marginHorizontal: height * 0.02,
    marginVertical: height * 0.009,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  img: {
    width: 40,
    height: 40,
    tintColor: '#fff',
  },
  modal_item_text: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: height / 40,
    marginLeft: height * 0.02,
    color: '#fff',
  },
});
