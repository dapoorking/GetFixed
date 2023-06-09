import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { PRIMARYCOLOR } from '../assets/colors';
import { Logo } from '../assets/images';
import { UserContext } from '../context/userAuthContext';
import { useContext } from 'react';

const SignupOptions = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);
  console.log(user, "User")
  const loginSubmit = (userType) => {

    navigation.navigate('Signup', { userType });
  };
  return (
    <>
      <ScrollView style={{ backgroundColor: PRIMARYCOLOR }}>
        <ImageBackground
          style={{ height: hp('35%'), width: '100%', alignItems: 'center' }}>
          <Image
            source={Logo}
            style={{
              height: hp('25%'),
              width: hp('25%'),
              resizeMode: 'contain',

              marginTop: hp('3%'),
              backgroundColor: 'white',
              borderRadius: hp('25%'),
              padding: hp('10%'),
            }}
          />
        </ImageBackground>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <View style={{ height: hp('1%') }}></View>
          <Text style={styles.textStylesMainHead}>Create Account,</Text>
          <View style={{ height: hp('2%') }}></View>
          <Text style={[styles.NormalSizeFont, { textAlign: 'left' }]}>
            Sign up to get Started!
          </Text>
          <View style={{ height: hp('5%') }}></View>

          <TouchableOpacity
            style={styles.mainButtons}
            onPress={() => {
              loginSubmit("customer");
            }}>
            <Text style={styles.SmallSizeFont}>Sign up as Customer</Text>
            <Icon
              name="shop"
              type="entypo"
              color={'white'}
              size={hp('9%')}
              containerStyle={{ width: '40%' }}
            />
          </TouchableOpacity>

          <View style={{ height: hp('2%') }}></View>
          <Text style={[styles.NormalSizeFont, { textAlign: 'center' }]}>OR</Text>
          <View style={{ height: hp('2%') }}></View>

          <TouchableOpacity
            style={styles.mainButtons}
            onPress={() => {
              loginSubmit("worker");
            }}>
            <Text style={styles.SmallSizeFont}>Sign up as Worker</Text>
            <Icon
              name="user"
              type="font-awesome"
              color={'white'}
              size={hp('9%')}
              containerStyle={{ width: '40%' }}
            />
          </TouchableOpacity>

          <View style={{ height: hp('10%') }}></View>
          <View style={styles.footerView}>
            <Text style={styles.SmallSizeFont}>Already have account ? </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={[styles.SmallSizeFont, { width: '100%' }]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textStylesMainHead: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: hp('3.5%'),
    marginBottom: hp('-1.5%'),
  },
  NormalSizeFont: {
    fontSize: hp('2.2%'),
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    color: '#fff',
  },
  SmallSizeFont: {
    fontSize: hp('2%'),
    textAlign: 'right',
    fontFamily: 'Montserrat-Medium',
    color: '#fff',
  },
  footerView: {
    width: '100%',
    marginBottom: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButtons: {
    width: '80%',
    alignSelf: 'center',
    height: hp('12%'),
    paddingHorizontal: '10%',
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default SignupOptions;
