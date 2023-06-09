import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'; 
import {useNavigation} from '@react-navigation/native';
import { PRIMARYCOLOR } from '../assets/colors';

const BackHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.MainCompStyle}>
      <Icon
        name="arrow-back-ios"
        type="materialicons"
        color="#FFF"
        size={24}
        containerStyle={{width: '11%'}}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.NormalSizeFont}>{props.title}</Text>
      {props.type == 'Buyers' ? (
        <View
          style={{
            flexDirection: 'row',
            width: '15%',
            justifyContent: 'center',
          }}>
          {props.iconName2 ? (
            <Icon
              name={props.iconName2}
              type={props.iconType2}
              size={24}
              color={PRIMARYCOLOR}
              containerStyle={{marginHorizontal: '5%'}}
              
            />
          ) : null}
          {props.iconName3 ? (
            <Icon
              name={props.iconName3}
              type={props.iconType3}
              size={24}
              color={PRIMARYCOLOR}
              containerStyle={{marginHorizontal: '5%'}}
            />
          ) : null}
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  MainCompStyle: {
    width: '100%',
    height: 60,
    backgroundColor: PRIMARYCOLOR,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  NormalSizeFont: {
    width: '75%',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    color: '#FFF',
  },
});
export default BackHeader;
