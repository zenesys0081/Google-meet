/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const {width, height} = Dimensions.get('screen');

export default function CustomModal(props) {
  return (
    <Modal
      isVisible={props.isModalVisible}
      animationType="fade"
      transparent={true}
      backdropOpacity={0.2}
      backdropColor={'#0005'}
      deviceWidth={1}
      deviceHeight={1}>
      <View style={styles.modal_container}>
        {/* first */}
        <TouchableOpacity
          style={styles.modal_item_container}
          onPress={() => alert('comming soon')}>
          <Image
            source={require('../../assets/image/modal-img/share.png')}
            style={styles.img}
          />
          <Text style={styles.modal_item_text}>{props.heading1}</Text>
        </TouchableOpacity>
        {/* second */}
        <TouchableOpacity
          style={styles.modal_item_container}
          onPress={() => alert('comming soon')}>
          <Image
            source={require('../../assets/image/modal-img/video.png')}
            style={styles.img}
          />
          <Text style={styles.modal_item_text}>{props.heading2}</Text>
        </TouchableOpacity>
        {/* third */}
        <TouchableOpacity
          style={styles.modal_item_container}
          onPress={() => alert('comming soon')}>
          <Image
            source={require('../../assets/image/modal-img/calendar.png')}
            style={styles.img}
          />
          <Text style={styles.modal_item_text}>{props.heading3}</Text>
        </TouchableOpacity>
        {/* four */}
        <TouchableOpacity
          style={styles.modal_item_container}
          activeOpacity={0.7}
          onPress={props.toggleModal}>
          <Image
            source={require('../../assets/image/modal-img/close.png')}
            style={styles.img}
          />
          <Text style={styles.modal_item_text}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
