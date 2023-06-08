// import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LottieView from 'lottie-react-native';

export default function App() {
  const buttonRef = useRef < LottieView > null;

  return (
    <SafeAreaView
      style={{
        borderWidth: 3,
        borderColor: 'brown',
        backgroundColor: 'grey',
        flex: 1,
      }}>
      <StatusBar />
      <View
        style={{
          height: windowHeight * 0.07,
          borderWidth: 1,
          borderColor: 'black',
        }}></View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'yellow',
        }}>
        <Text style={styles.flexText}>{'Flex: 2'}</Text>
      </View>
      <View
        style={{
          flex: 3.5,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'purple',
        }}>
        <Text style={styles.flexText}>{'Flex: 3.5'}</Text>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'blue',
        }}>
        <Text style={styles.flexText}>{'Flex: 2'}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'orange',
        }}>
        <Text style={styles.flexText}>{'Flex: 1'}</Text>
      </View>
    </SafeAreaView>
  );
}

const FLOATING_ACTION_BUTTON_SIZE = 70;
const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  flexText: {
    fontSize: 30,
    color: 'white',
  },
  logoAndName: {
    // flex: 1,
    // borderWidth: 3,
    alignItems: 'center',
    fontWeight: '700',
  },
  container: {
    // borderWidth: 3,
    // borderColor: 'yellow',
    // flex: 1,
    // height: windowHeight,
    flex: 1,
    backgroundColor: '#14008E',
  },
  scrollView: {
    flex: 1,
  },
});
