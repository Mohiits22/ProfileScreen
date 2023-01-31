import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {font, fontSize} from '../../../constants/fontSizes';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../helper/responsiveScreen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollView: {
    flexGrow: 1,
    marginTop: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(5),
  },
  userImage: {
    height: heightPercentageToDP(8),
    width: heightPercentageToDP(8),
    borderRadius: heightPercentageToDP(4),
    resizeMode: 'contain',
  },
  name: {
    color: colors.white,
    fontSize: fontSize.FONT_SIZE_16,
    marginVertical: heightPercentageToDP(1),
  },
  followingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight: widthPercentageToDP(5),
  },
  dataTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataTitle: {
    color: colors.white,
    fontSize: fontSize.FONT_SIZE_20,
  },
  dataSubTitle: {
    color: colors.white,
    fontSize: fontSize.FONT_SIZE_12,
    fontFamily: font.PRIMARY_LIGHT,
    marginVertical: heightPercentageToDP(0.5),
  },
  description: {
    color: colors.white,
    fontSize: fontSize.FONT_SIZE_14,
    fontFamily: font.PRIMARY_LIGHT,
    marginVertical: heightPercentageToDP(0.5),
  },
  urlText: {
    color: colors.white,
    fontSize: fontSize.FONT_SIZE_14,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messageButton: {
    flex: 0.48,
    backgroundColor: colors.black,
    borderWidth: 1,
    borderColor: colors.pink,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockIcon:{
    height: heightPercentageToDP(6),
    width: heightPercentageToDP(6),
    resizeMode: 'contain',
    tintColor:colors.white,
    opacity:0.8
  },
  accountErrorText: {
    color: colors.white,
    fontSize: fontSize.FONT_SIZE_16,
    fontFamily: font.PRIMARY_LIGHT,
    marginVertical: heightPercentageToDP(2),
    textAlign: 'center',
  },
});
