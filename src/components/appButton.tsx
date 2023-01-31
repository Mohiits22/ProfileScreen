import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SemiBoldText} from '../helper/Common';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';
import {colors} from '../constants/colors';
import {fontSize} from '../constants/fontSizes';
export interface Props {
  title: string;
  onPress: any;
  dominantStyles?: any;
  titleStyles?: any;
  disable?: boolean;
  CustomTitleTextComp?: any;
}
export default function AppButton(props: any) {
  const {
    dominantStyles,
    title,
    titleStyles,
    onPress,
    disable,
    CustomTitleTextComp,
  } = props;
  return (
    <TouchableOpacity
      disabled={disable}
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.mainCont, dominantStyles]}>
      {!CustomTitleTextComp ? (
        <SemiBoldText style={[styles.titleText, titleStyles]} title={title} />
      ) : (
        <CustomTitleTextComp />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: colors.pink,
    borderRadius: hp(1),
    height: hp(5.5),
    paddingHorizontal: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  titleText: {
    color: colors.white,
    fontSize: fontSize.FONT_SIZE_16,
  },
});
