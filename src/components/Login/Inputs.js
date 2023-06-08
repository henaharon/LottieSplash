// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextMediumWBold} from '../../common/systemDesign/Typography';
import {colors} from '../../common/systemDesign/colors';

export default function Inputs() {
  return (
    <View style={styles.container}>
      <TextMediumWBold style={styles.flexText}>
        {'לאן לשלוח את הקוד?'}
      </TextMediumWBold>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'purple',
  },
  flexText: {
    color: colors.primaryBlue,
  },
});
