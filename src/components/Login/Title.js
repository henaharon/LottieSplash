// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  TextMediumWRegular,
  TextXLargeWBold,
} from '../../common/systemDesign/Typography';
import {colors} from '../../common/systemDesign/colors';

export default function Title() {
  return (
    <View style={styles.container}>
      <TextXLargeWBold style={styles.titleText}>{'טוב שבאת!'}</TextXLargeWBold>
      <TextMediumWRegular style={styles.subtitleText}>
        {'כדי להתחבר לחשבונך, נבצע זיהוי חד פעמי על ידי הזנת תעודת זהות'}
      </TextMediumWRegular>
      {/* <TextMediumWRegular style={styles.text}>
        {'הזנת תעודת זהות'}
      </TextMediumWRegular> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  titleText: {
    color: colors.primaryBlue,
  },
  subtitleText: {
    color: colors.primaryBlue,
    // width: '90%',
    textAlign: 'center',
  },
});
