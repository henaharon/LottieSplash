// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
// import LoginScreen from './src/screens/Login';
import Splash from './src/screens/Splash';

export default function App() {
  return (
    // <DimeCheck />
    <Splash />

    // <LoginScreen />
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
