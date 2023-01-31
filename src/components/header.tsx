import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ImageUrls} from '../constants/imageUrl';
import {Row, SemiBoldText} from '../helper/Common';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';
import {fontSize} from '../constants/fontSizes';
import {colors} from '../constants/colors';

export interface Props {
  title?: string;
  leftIcon?: string;
  leftIconStyle?: ImageStyle;
  leftIconTapped?: () => {};
  rightIcon?: string;
  rightIconStyle?: ImageStyle;
  rightIconTapped?: () => {};
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

export default function Header(props: Props) {
  const {
    title,
    titleStyle,
    containerStyle,
    leftIcon,
    leftIconStyle,
    leftIconTapped,
    rightIcon,
    rightIconStyle,
    rightIconTapped,
  } = props;
  const navigation = useNavigation();

  return (
    <View style={[styles.container, containerStyle]}>
      <Row>
        <TouchableOpacity
          onPress={leftIcon ? leftIconTapped : () => navigation.goBack()}>
          <Image
            source={leftIcon || ImageUrls?.back}
            style={[styles.icon, leftIconStyle]}
          />
        </TouchableOpacity>
          <SemiBoldText title={title} style={[styles?.title, titleStyle]}/>
            
      </Row>
      <TouchableOpacity
        onPress={rightIconTapped}>
        <Image
          source={ImageUrls.more}
          style={[styles.icon, rightIconStyle]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:wp(3),
    // height: hp(5),
    backgroundColor:colors.black,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.FONT_SIZE_18,
    color: colors.white,
    textAlign: 'center',
    marginLeft:wp(5)
  },
  icon: {
    height: hp(6),
    width: wp(6),
    resizeMode:'contain',
    tintColor:colors.white
  },
  
});
