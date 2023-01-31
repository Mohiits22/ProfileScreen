import {View, Text, SafeAreaView, useWindowDimensions, TouchableWithoutFeedback} from 'react-native';
import * as React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { widthPercentageToDP } from '../../../helper/responsiveScreen';
import { styles } from './styles';
import { BoldText } from '../../../helper/Common';
import AppButton from '../../../components/appButton';




const Home = (props:any) => {
    return (
        <View style={{flex:1,  alignItems:'center', justifyContent:'center'}}>
        <AppButton title={'PROFILE'} onPress={()=>props?.navigation?.navigate('Profile')}/>
        </View>
    );
};

export default Home;
