import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {font, fontSize} from '../constants/fontSizes';
import {heightPercentageToDP as hp} from './responsiveScreen';

export const BoldText = (props: any) => {
  return (
    <Text
      {...props}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      style={[Style.BoldText, props.style]}>
      {props.title}
    </Text>
  );
};
export const RegularText = (props: any) => {
  return (
    <Text
      {...props}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      style={[Style.RegularText, props.style]}>
      {props.title}
    </Text>
  );
};

export const SemiBoldText = (props: any) => {
  return (
    <Text
      {...props}
      onPress={props.onPress}
      style={[Style.SemiBoldText, props.style]}>
      {props.title}
    </Text>
  );
};
export const MediumText = (props: any) => {
  return (
    <Text
      {...props}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      style={[Style.MediumText, props.style]}>
      {props.title}
    </Text>
  );
};

export const ItalicSemiBoldText = (props: any) => {
  return (
    <Text
      onPress={props.onPress}
      style={[Style.ItalicSemiboldText, props.style]}>
      {props.title}
    </Text>
  );
};

export const ListFooterComp = (props: any) => {
  return (
    <View style={{height: props?.pageLoading ? hp(4) : hp(2)}}>
      {props?.pageLoading ? (
        <ActivityIndicator size="small" color={'red'} />
      ) : null}
    </View>
  );
};
export const Row = (props: any) => {
  return (
    <>
      {props?.touch ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={props?.onpress}
          style={[{flexDirection: 'row', alignItems: 'center'}, props.style]}>
          {props?.children}
        </TouchableOpacity>
      ) : (
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, props.style]}>
          {props?.children}
        </View>
      )}
    </>
  );
};


const Style = StyleSheet.create({
  BoldText: {
    fontSize: fontSize.FONT_SIZE_12,
    fontFamily: font.PRIMARY_BOLD,
  },
  SemiBoldText: {
    fontSize: fontSize.FONT_SIZE_12,
    fontFamily: font.PRIMARY_SEMIBOLD,
  },
  RegularText: {
    fontSize: fontSize.FONT_SIZE_12,
    fontFamily: font.PRIMARY_REGULAR,
  },
 
  ItalicSemiboldText: {
    fontFamily: font.PRIMARY_SEMIBOLD_ITALIC,
    fontSize: fontSize.FONT_SIZE_12,
  },
  MediumText: {
    fontSize: fontSize.FONT_SIZE_12,
    fontFamily: font.PRIMARY_MEDIUM,
    textAlign: 'left',
  },
});
