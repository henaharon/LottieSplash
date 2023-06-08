// import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const windowWidth = Dimensions.get('screen').width;

export default LogoAndEnterButton = () => {
  const buttonTextPrograss = useSharedValue(0);
  const buttonWidthPrograss = useSharedValue(40);
  const buttonBorderRadiusPrograss = useSharedValue(90);
  const buttonOffset = useSharedValue(windowHeight * 0.001);
  const logoPrograss = useSharedValue(0);

  const logoReanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: logoPrograss.value,
    };
  });

  const buttonReanimatedStyle = useAnimatedStyle(() => {
    return {
      width: buttonWidthPrograss.value,
      borderRadius: buttonBorderRadiusPrograss.value,
      transform: [{translateY: buttonOffset.value}],
    };
  });

  const buttonTextReanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: buttonTextPrograss.value,
    };
  });

  useEffect(() => {
    const Du = 800;
    buttonOffset.value = withTiming(-windowHeight * 0.2, {duration: Du}, () => {
      buttonWidthPrograss.value = withTiming(windowWidth * 0.8, {
        duration: Du,
      });
      buttonBorderRadiusPrograss.value = withTiming(30, {duration: Du});
      buttonTextPrograss.value = withTiming(1, {duration: Du});
      logoPrograss.value = withTiming(1, {duration: Du});
    });
  }, []);

  return (
    <View
      style={{
        flex: 2,
        // backgroundColor: 'green',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
      }}>
      <Animated.View style={[styles.logoAndName, logoReanimatedStyle]}>
        <Image source={require('../../assets/icons/phoenix_logo.png')} />
        <View style={{height: '6%'}} />
        <Text style={{color: 'white', fontSize: 31, fontWeight: 'bold'}}>
          {'ביטוח הרכב שלך'}
        </Text>
      </Animated.View>
      <Animated.View style={[{alignSelf: 'center'}, buttonReanimatedStyle]}>
        <Pressable
          style={styles.enterButton}
          onPress={() => Alert.alert('pops')}>
          <Animated.Text
            style={[buttonTextReanimatedStyle, {color: 'white', fontSize: 13}]}>
            {'כניסה'}
          </Animated.Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};
const windowHeight = Dimensions.get('window').height;

console.log('Ratio', windowWidth / windowHeight);
const styles = StyleSheet.create({
  enterButton: {
    position: 'relative',
    borderRadius: 30,
    height: 42,
    // width: 40,
    // height: 40,
    // borderRadius: 90,
    // width: '100%',
    backgroundColor: '#FF5A23',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 100,
  },
  logoAndName: {
    // flex: 1,
    // borderWidth: 3,
    alignItems: 'center',
    fontWeight: '700',
  },
});
