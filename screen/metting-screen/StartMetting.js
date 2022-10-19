/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
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
  Button,
  Alert,
  Share,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import Header from '../../components/Home/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import ModalData from '../../dummyData/ModalData';
import Clipboard from '@react-native-clipboard/clipboard';

const {width, height} = Dimensions.get('screen');

const bottomIcon = [
  {
    id: '1',
    img: 'phone-alt',
    color: 'red',
    action: 'hangup',
  },
  {
    id: '2',
    img: 'video',
    color: '#fff',
    action: 'camera',
  },
  {
    id: '3',
    img: 'microphone',
    color: '#fff',
    action: 'mic',
  },

  {
    id: '4',
    img: 'hand-paper',
    color: '#fff',
    action: 'hand',
  },

  {
    id: '5',
    img: 'ellipsis-v',
    color: '#fff',
    action: 'more',
  },
];

export default function StartMetting({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [mettingId, setMettingId] = useState('meet.googel.com/V4xpr8hLV5');
  const [enterCode, setEnterId] = useState('xrp-tzww-oww');

  // copy metting
  const [copiedText, setCopiedText] = useState('');
  const copyToClipboard = () => {
    Clipboard.setString(mettingId);
    Alert.alert('Copy Successfully');
  };

  const onAction = payload => {
    switch (payload.action) {
      case 'hangup':
        onHangupAction(payload);
        break;
      case 'camera':
        onCameraAction(payload);
        break;
      case 'mic':
        onMicAction(payload);
        break;
      case 'hand':
        onHandRaise(payload);
        break;
      case 'more':
        onMore(payload);
        break;
      default:
        console.log('Invalid action');
    }
  };

  // bottom action
  const onHangupAction = action => {
    console.log('onHangupAction', action);
  };
  const onCameraAction = action => {
    console.log('onCameraAction', action);
  };
  const onMicAction = action => {
    console.log('onMicAction', action);
  };
  const onHandRaise = action => {
    console.log('onMicAction', action);
  };
  const onMore = action => {
    console.log('modal is open');
    setModalVisible(true);
  };

  // nested modal switch case
  const onModal = payload => {
    switch (payload.path) {
      case 'Chat':
        onMessage(payload);
        break;
      case 'Share':
        onShare(payload);
        break;
      case 'Caption':
        onCaption(payload);
        break;
      case 'Setting':
        onSetting(payload);
        break;
      case 'HostControl':
        onHostControl(payload);
        break;
      case 'Report':
        onReport(payload);
        break;
      default:
        console.log('Invalid action');
    }
  };

  const onMessage = action => {
    setModalVisible(false);
    navigation.navigate(action.path);
  };

  const onShare = action => {
    setModalVisible(false);
    navigation.navigate(action.path);
  };

  const onCaption = action => {
    setModalVisible(false);
    navigation.navigate(action.path);
  };
  const onSetting = action => {
    setModalVisible(false);
    navigation.navigate(action.path);
  };
  const onHostControl = action => {
    setModalVisible(false);
    navigation.navigate(action.path);
  };
  const onReport = action => {
    setModalVisible(false);
    navigation.navigate(action.path);
  };

  const onShareLink = async () => {
    try {
      const result = await Share.share({
        message: `To join the meeting on Google Meet, click this link: ${mettingId} Or open Meet and enter this code: ${enterCode}.`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          alert('copy successfully');
        } else {
          console.log('share data error');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('cancel successfully.');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <SafeAreaView style={{marginTop: height * 0.025}}>
          <Header navigation={navigation} />

          <View style={styles.share_container}>
            <Text style={styles.heading_text}>You're the only one here</Text>
            <Text style={styles.heading_text}>
              Share this metting link with others you want in the meeting.
            </Text>
            <View style={styles.copy_container}>
              <View style={styles.copy_sub_container}>
                <Text style={styles.copy_metting_id}>{mettingId}</Text>
                <Icon
                  name="copy"
                  color={'#fff'}
                  size={23}
                  onPress={copyToClipboard}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.share_btn_container}
              activeOpacity={0.7}
              onPress={onShareLink}>
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
                    onPress={() => onAction(item)}>
                    <Icon name={item.img} color={item.color} size={30} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </SafeAreaView>
        {/* modal container  */}
        <Modal
          isVisible={isModalVisible}
          animationType="fade"
          transparent={true}
          backdropOpacity={0.2}
          backdropColor={'#0005'}
          deviceHeight={1}
          deviceWidth={1}>
          {/* modal open */}
          <View style={styles.modal_container}>
            {ModalData.map((data, index) => {
              return (
                <TouchableOpacity
                  style={styles.more_image_container}
                  key={index}
                  activeOpacity={0.7}
                  onPress={() => onModal(data)}>
                  <Image source={data.icon} style={styles.modal_img} />
                  <Text style={styles.modal_text}>{data.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Modal>
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
    // height: height * 0.2,
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
    marginHorizontal: height * 0.02,
    position: 'relative',
    bottom: Platform.OS === 'ios' ? 10 : 0,
    right: 0,
    left: 0,
    marginTop: height * 0.05,
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
  // modal css
  modal_container: {
    backgroundColor: '#4f4f52',
    height: height * 0.3,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    borderRadius: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  more_image_container: {
    width: width * 0.28,
    height: height * 0.1,
    marginVertical: height * 0.01,
    marginHorizontal: height * 0.012,
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 12,
    marginTop: height * 0.02,
  },
  modal_img: {
    alignSelf: 'center',
    width: 32,
    height: 32,
    tintColor: '#fff',
  },
  modal_text: {
    fontSize: height / 58,
    textAlign: 'center',
    color: '#fff',
  },
});
