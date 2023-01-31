import {
  View,
  Text,
  SafeAreaView,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {widthPercentageToDP} from '../../../helper/responsiveScreen';
import {styles} from './styles';
import {BoldText, RegularText, Row, SemiBoldText} from '../../../helper/Common';
import Header from '../../../components/header';
import {ScrollView} from 'react-native-gesture-handler';
import {ImageUrls} from '../../../constants/imageUrl';
import { colors } from '../../../constants/colors';
import AppButton from '../../../components/appButton';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'justin_david01'} rightIcon={ImageUrls.more} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View><Row>
          <View>
            <Image style={styles.userImage} source={ImageUrls.userImage} />
            <SemiBoldText title={'Justin David'} style={styles.name} />
          </View>
          <Row style={styles.followingContainer}>
            <TouchableOpacity style={styles.dataTitleContainer}>
              <SemiBoldText style={[styles.dataTitle, {color:colors.blue}]} title={'26.9k'} />
              <RegularText style={styles.dataSubTitle} title={'XP'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dataTitleContainer}>
              <SemiBoldText style={styles.dataTitle} title={'26k'} />
              <RegularText style={styles.dataSubTitle} title={'Following'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dataTitleContainer}>
              <SemiBoldText style={styles.dataTitle} title={'437'} />
              <RegularText style={styles.dataSubTitle} title={'Followers'} />
            </TouchableOpacity>
          </Row>
        </Row>
        <Text style={styles.description}>
          Behind the boat, beyond the open sea, his life lies with  
            <BoldText title={ ' @unknown'} />. Facing his greatest fear, I ate his first marshmallow. yes #littlefracker
        </Text>
        <BoldText style={styles.urlText} title={ 'www.justindavid.com'} />
        <Row style={styles.buttonContainer}>
          <AppButton dominantStyles={{flex:0.48}} title={'Follow'}/>
          <AppButton dominantStyles={styles.messageButton}  title={'Message'}/>
        </Row>
        </View>
        <View style={styles.bottomContainer}>
          <Image style={styles.lockIcon}source={ImageUrls.lock}/>
          <RegularText style={styles.accountErrorText} title={'This Account is private. \n Follow this account to view videos.'}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
