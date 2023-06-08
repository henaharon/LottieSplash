import React from 'react';
import {StyleSheet} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import {fonts, globalColor} from '../../common/global';

const CustomInput = ({
  label,
  error,
  forwordRef,
  onSubmitEditing,
  keyboardType,
  maxLength,
  onchangeTxt,
}) => {
  return (
    <OutlinedTextField
      onChangeText={onchangeTxt}
      label={label}
      keyboardType={keyboardType}
      tintColor={globalColor.blue}
      ref={forwordRef}
      error={error}
      style={styles.input}
      maxLength={maxLength}
      errorColor={globalColor.error}
      //   containerStyle={styles.containerStyle}
      labelTextStyle={{
        fontFamily: fonts.regular,
      }}
      onSubmitEditing={onSubmitEditing}
      returnKeyType="done"
      allowFontScaling={false}
      // inputAccessoryViewID="done"
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {fontSize: 20},
  containerStyle: {
    top: 20,
    padding: 15,
  },
});
