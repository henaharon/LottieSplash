// import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import LottieView from 'lottie-react-native';
import LogoAndEnterButton from '../components/Splash/LogoAndEnterButton';

export default function App() {
  const buttonRef = useRef(LottieView);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgb(17,1,136)',
          justifyContent: 'flex-end',
          // paddingTop: 100,
          // position: 'absolute',
          // bottom: 0,
        }}>
        <LottieView
          ref={buttonRef}
          source={require('../../assets/lottie/splash_390x844.json')}
          style={{
            width: windowWidth,
            // alignSelf: 'flex-start',
            // backgroundPosition: 'top',
          }}
          autoPlay={true}
          loop={false}
          speed={1}
        />
        <LogoAndEnterButton />
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  logoAndName: {
    alignItems: 'center',
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#14008E',
  },
  scrollView: {
    flex: 1,
  },
});
