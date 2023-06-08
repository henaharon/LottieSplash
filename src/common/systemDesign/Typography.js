// import React from 'react';
// import {PixelRatio, StyleSheet, Text} from 'react-native';
// import {colors} from './colors';

// const fonts = {
//   regular: 'PloniMLv2AAA-Regular',
//   meduim: 'PloniMLv2AAA-Medium',
//   bold: 'PloniMLv2AAA-D-Bold',
// };

// const fontScaleByPixelRatio = PixelRatio.getFontScale();
// const getFontSize = size => size / fontScaleByPixelRatio;
// // TODO - add responsive by screen resolution

// // mini - 14
// export const TextMiniWRegular = props => {
//   return (
//     <Text
//       style={[
//         styles.textStyle,
//         styles.mini,
//         styles.weightRegular,
//         props.style,
//       ]}>
//       {props.children}
//     </Text>
//   );
// };
// export const TextMiniWMedium = props => {
//   return (
//     <Text
//       style={[styles.textStyle, styles.mini, styles.weightMedium, props.style]}>
//       {props.children}
//     </Text>
//   );
// };
// export const TextMiniWBold = props => {
//   return (
//     <Text
//       style={[styles.textStyle, styles.mini, styles.weightBold, props.style]}>
//       {props.children}
//     </Text>
//   );
// };

// // small - 16
// export const TextSmallWRegular = props => {
//   return (
//     <Text
//       style={[
//         styles.textStyle,
//         styles.small,
//         styles.weightRegular,
//         props.style,
//       ]}>
//       {props.children}
//     </Text>
//   );
// };
// export const TextSmallWMedium = props => {
//   return (
//     <Text
//       style={[
//         styles.textStyle,
//         styles.small,
//         styles.weightMedium,
//         props.style,
//       ]}>
//       {props.children}
//     </Text>
//   );
// };
// export const TextSmallWBold = props => {
//   return (
//     <Text
//       style={[styles.textStyle, styles.small, styles.weightBold, props.style]}>
//       {props.children}
//     </Text>
//   );
// };

// // medium - 18
// export const TextMediumWRegular = props => {
//   return (
//     <Text
//       style={[
//         styles.textStyle,
//         styles.medium,
//         styles.weightRegular,
//         props.style,
//       ]}>
//       {props.children}
//     </Text>
//   );
// };
// export const TextMediumWMedium = props => {
//   return (
//     <Text
//       style={[
//         styles.textStyle,
//         styles.medium,
//         styles.weightMedium,
//         props.style,
//       ]}>
//       {props.children}
//     </Text>
//   );
// };
// export const TextMediumWBold = props => {
//   return (
//     <Text
//       style={[styles.textStyle, styles.medium, styles.weightBold, props.style]}>
//       {props.children}
//     </Text>
//   );
// };

// // large - 22
// export const TextLargeWRegular = props => {
//   return (
//     <Text
//       style={[
//         styles.textStyle,
//         styles.large,
//         styles.weightRegular,
//         props.style,
//       ]}>
//       {props.children}
//     </Text>
//   );
// };
// export const TextLargeWMedium = props => {
//   return (
//     <Text
//       style={[
//         styles.textStyle,
//         styles.large,
//         styles.weightMedium,
//         props.style,
//       ]}>
//       {props.children}
//     </Text>
//   );
// };
// export const TextLargeWBold = props => {
//   return (
//     <Text
//       style={[styles.textStyle, styles.large, styles.weightBold, props.style]}>
//       {props.children}
//     </Text>
//   );
// };

// // Xlarge 34
// export const TextXLargeWRegular = props => {
//   return (
//     <Text
//       style={[
//         styles.textStyle,
//         styles.xlarge,
//         styles.weightRegular,
//         props.style,
//       ]}>
//       {props.children}
//     </Text>
//   );
// };
// export const TextXLargeWMedium = props => {
//   return (
//     <Text
//       style={[
//         styles.textStyle,
//         styles.xlarge,
//         styles.weightMedium,
//         props.style,
//       ]}>
//       {props.children}
//     </Text>
//   );
// };
// export const TextXLargeWBold = props => {
//   return (
//     <Text
//       style={[styles.textStyle, styles.xlarge, styles.weightBold, props.style]}>
//       {props.children}
//     </Text>
//   );
// };

// const styles = StyleSheet.create({
//   textStyle: {
//     color: colors.black,
//   },
//   weightRegular: {
//     fontFamily: fonts.regular,
//   },
//   weightMedium: {
//     fontFamily: fonts.meduim,
//   },
//   weightBold: {
//     fontFamily: fonts.bold,
//   },
//   mini: {
//     fontSize: getFontSize(14),
//   },
//   small: {
//     fontSize: getFontSize(16),
//   },
//   medium: {
//     fontSize: getFontSize(18),
//   },
//   large: {
//     fontSize: getFontSize(22),
//   },
//   xlarge: {
//     fontSize: getFontSize(34),
//   },
// });
