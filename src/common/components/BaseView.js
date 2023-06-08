import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default BaseView = props => {
  return (
    <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
      {props.children}
    </ScrollView>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/* {props.children} */}
      <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

export const DismissKeyboardView = props => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <BaseView extraStyle={props.extraStyle}>{props.children}</BaseView>
  </TouchableWithoutFeedback>
);

export const KeyboardAvoidingViewForIOS = props => (
  <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
    <BaseView extraStyle={props.extraStyle}>{props.children}</BaseView>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'brown',
    backgroundColor: 'grey',
    flex: 1,
    paddingHorizontal: 15,
  },
});
