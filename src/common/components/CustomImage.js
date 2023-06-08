import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const CustomImage = ({src, width, height}) => {
  return (
    <View style={{width: width, height: height}}>
      <Image resizeMode={'contain'} style={styles.image} source={src} />
    </View>
  );
};
export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
