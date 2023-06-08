// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import BaseView from '../common/components/BaseView';
import Inputs from '../components/Login/Inputs';
import Title from '../components/Login/Title';

export default function LoginScreen() {
  return (
    <BaseView>
      <View
        style={{
          height: windowHeight * 0.07,
          borderWidth: 1,
          borderColor: 'black',
        }}></View>
      <Title />
      <Inputs />
      <View
        style={{
          flex: 2.7,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'orange',
        }}>
        <Text style={styles.flexText}>{'Button -> Flex: 2.7'}</Text>
      </View>
    </BaseView>
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
