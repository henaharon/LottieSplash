import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const App = () => {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });

  const fontScaleByPixelRatio = PixelRatio.getFontScale();
  console.log('fontScaleByPixelRatio', fontScaleByPixelRatio);
  const getFontSize = size => size / fontScaleByPixelRatio;

  const {fontScale, scale} = useWindowDimensions(); // import useWindowDimensions()
  console.log('useWindowDimensions fontScale', fontScale);
  console.log('useWindowDimensions scale', scale);

  const styles = makeStyles(fontScale); // pass in fontScale to the StyleSheet

  return (
    <View style={styles.container}>
      <Text style={{fontSize: getFontSize(34)}}>text size check</Text>
      <Text style={styles.header}>Window Dimensions</Text>
      {Object.entries(dimensions.window).map(([key, value]) => (
        <Text>
          {key} - {value}
        </Text>
      ))}
      <Text style={styles.header}>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([key, value]) => (
        <Text>
          {key} - {value}
        </Text>
      ))}
    </View>
  );
};

const makeStyles = fontScale =>
  StyleSheet.create({
    container: {
      fontSize: 30 / fontScale, // divide the font size by the font scale
    },
    header: {
      fontSize: 16,
      marginVertical: 10,
    },
  });

export default App;
