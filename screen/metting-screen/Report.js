/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {List} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

export default function Report() {
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState('');
  const [discription, setDiscription] = useState(0);

  const handlePress = () => setExpanded(!expanded);
  const [select, setSelect] = useState('Abuse type **');

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading_title}>
            This call will be reported as abusive. Tapping 'Submit' will send
            system information from this session Google for review.
          </Text>

          {/* accordion container */}
          <View
            style={{marginVertical: height * 0.02, backgroundColor: '#fff9'}}>
            <List.Accordion
              title={select}
              expanded={expanded}
              onPress={handlePress}
              titleStyle={{color: '#fff'}}
              style={{backgroundColor: 'gray'}}>
              <List.Item
                title="Spam or unwanted content"
                onPress={() => setSelect('Spam or unwanted content')}
              />
              <List.Item
                title="Fraud,phishing,and other deceptive practices"
                onPress={() =>
                  setSelect('Fraud,phishing,and other deceptive practices')
                }
              />
              <List.Item
                title="Malware (distributed via link in the chat window)"
                onPress={() =>
                  setSelect('Malware (distributed via link in the chat window)')
                }
              />
              <List.Item
                title="Harassment and hateful content"
                onPress={() => setSelect('Harassment and hateful content')}
              />
              <List.Item
                title="Unwanted sexual content"
                onPress={() => setSelect('Harassment and hateful content')}
              />
              <List.Item
                title="Violence and gore"
                onPress={() => setSelect('Violence and gore')}
              />
              <List.Item title="other" onPress={() => setSelect('other')} />
            </List.Accordion>
          </View>
          {/* display container */}
          <View style={styles.name_display_container}>
            <View style={styles.input_container}>
              <TextInput
                style={styles.input}
                placeholder={'Display name of the abuser(s)*'}
                placeholderTextColor={'#fff9'}
                value={name}
                onChangeText={text => setName(text)}
              />
              <Text style={styles.input_sub_title}>
                Separate names using commas
              </Text>
            </View>
          </View>
          {/* describe the issue */}
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Type something"
              placeholderTextColor="#fff9"
              numberOfLines={10}
              multiline={true}
              value={discription}
              onChangeText={text => setDiscription(text.length)}
            />
          </View>
          <Text style={styles.character_counter_text}>
            Enter the total no of character's: {discription}/ 1,000.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    marginVertical: height * 0.02,
  },
  heading_title: {
    color: '#fff9',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: height / 52,
  },
  name_display_container: {
    borderWidth: 1,
    borderColor: '#fff9',
    borderRadius: 12,
  },
  input_container: {
    height: height * 0.06,
    marginHorizontal: height * 0.01,
  },
  input: {
    height: height * 0.06,
    color: '#fff',
    fontSize: height / 50,
  },
  input_sub_title: {
    height: height * 0.06,
    color: '#fff',
    fontSize: height / 52,
    marginVertical: height * 0.01,
  },
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: height * 0.05,
    padding: height * 0.01,
  },
  textArea: {
    height: height * 0.25,
    justifyContent: 'flex-start',
    color: '#fff',
    fontSize: height / 50,
  },
  character_counter_text: {
    color: '#fff',
    fontSize: height / 47,
    marginVertical: height * 0.01,
    textAlign: 'right',
  },
});
