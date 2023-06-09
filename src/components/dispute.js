import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {GRAYCOLOR} from '../assets/colors';
import {DummyUser} from '../assets/images';
const Dispute = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: wp('92%'),
        alignSelf: 'center',
        borderRadius: wp('2%'),
        backgroundColor: GRAYCOLOR,
        paddingVertical: hp('2.5%'),
        marginVertical: hp('1%'),
      }}>
      <View
        style={{width: wp('85%'), alignSelf: 'center', flexDirection: 'row'}}>
        <Image
          source={DummyUser}
          style={{width: wp('38%'), height: hp('20%'), borderRadius: wp('2%')}}
        />
        <View style={{width: wp('3%')}}></View>
        <View style={{width: wp('44%'), alignSelf: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Avatar source={DummyUser} rounded size="medium" />
            <View>
              <Text style={styles.mediumText}> Jhon Doe</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: hp('-.75%'),
                }}>
                <Icon
                  name="location-pin"
                  type="entypo"
                  size={wp('5%')}
                  color={'lightgreen'}
                />
                <Text
                  style={[
                    styles.mediumText,
                    {fontSize: hp('1.45%'), fontFamily: 'Poppins-Regular'},
                  ]}>
                  San Fransisco
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp('1%'),
              }}>
              <Icon
                name="tools"
                type="entypo"
                size={wp('6%')}
                color={'lightgreen'}
              />
              <Text style={[styles.mediumText, {fontSize: hp('2%')}]}>
                {'  '}Issue
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp('1%'),
              }}>
              <Icon
                name="pie-chart"
                type="entypo"
                size={wp('5.5%')}
                color={'lightgreen'}
              />
              <Text style={[styles.mediumText, {fontSize: hp('2%')}]}>
                {' '}
                Status{' '}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text
              style={[
                styles.mediumText,
                {fontSize: hp('1.45%'), fontFamily: 'Poppins-Regular'},
              ]}>
              Engine Service
            </Text>
            <Text
              style={[
                styles.mediumText,
                {
                  fontSize: hp('1.45%'),
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
                },
              ]}>
              Pending
            </Text>
          </View>

          <Text
            style={[
              styles.mediumText,
              {
                fontSize: hp('1.45%'),
                fontFamily: 'Poppins-Regular',
                textAlign: 'right',
                marginTop: hp('3%'),
              },
            ]}>
            26 Dec 2021 - 6:15 pm
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  nameUser: {
    fontSize: hp('3.5%'),
    fontFamily: 'Poppins-Bold',
    color: 'black',
    marginTop: hp('1%'),
    textAlign: 'center',
  },
  mediumText: {
    fontSize: hp('2.2%'),
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    marginTop: hp('.5%'),
  },
});
export default Dispute;
