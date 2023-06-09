import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import store from '../Redux/store';
import PostMethod from '../assets/Networkcalls/POST'


import { TextInput } from 'react-native';
// import ImageBoxUpload from '../components/ImageBoxUpload';
import { OpenLibrary } from '../components/imagePicker';
import Header from '../components/header';
import { PRIMARYCOLOR } from '../assets/colors';
import { useNavigation } from '@react-navigation/native';
import ImageBoxUpload from '../components/imageBoxUpload';
import BackHeader from '../components/backHeader';
import LoginButton from '../components/button';
import { Icon } from 'react-native-elements';

const EquipmentArea = () => {
  const navigation = useNavigation();
  const [authorName, setAuthorName] = useState('');
  const [authorPicUrl, setAuthorPicUrl] = useState('');
  const [image1, setimage1] = useState(null);
  const [image2, setimage2] = useState(null);
  const [image3, setimage3] = useState(null);
  const [imageLoader1, setImageLoader1] = useState(false);
  const [imageLoader2, setImageLoader2] = useState(false);
  const [imageLoader3, setImageLoader3] = useState(false);
  const [submitLoader, setSubmitLoader] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [userId, setUserId] = useState('');
  const [progressStatus, setProgressStatus] = useState('');


  const info = {

    price,
    name
    // authorName,
    // authorPicUrl,
    // issueimage1: image1,
    // issueimage2: image2,
    // issueimage3: image3,
  };


  const onSubmit = async () => {
    // navigation.replace('MyIssuesBuyer')
    try {
      if (name.length > 1 || price.length > 1) {
        const response = await PostMethod(
          {

            price: price,
            name: name
          }


          ,
          'task/addEquipment',

        );
        console.log(response, "responseresponseresponse")
        if (response?.data) {
          navigation.navigate('Home');
        } else {
          alert('Email and Password is not Valid');
        }
      }
      else {
        alert("Please Enter Correct Credentials")
      }
    } catch (error) {
      console.log(error, "errorerrorerror")
    }

  };



  // const onSubmit = () => {
  //   alert('progress posted ');
  //    navigation.replace('CustomerRequest')
  // };

  return (
    <View style={{ flex: 1, backgroundColor: PRIMARYCOLOR }}>
      <BackHeader title="Progress Area" />

      <ScrollView
        style={{
          width: '100%',
          alignSelf: 'center',
          backgroundColor: '#fff',
          padding: '5%',
          marginTop: hp(8),
          borderTopLeftRadius: hp(4),
          borderTopRightRadius: hp(4),
        }}>
        <View style={{ height: hp('2%') }}></View>
        <Text style={styles.normalHeading}>Equipments</Text>
        <View style={{ height: hp('1%') }}></View>
        <TextInput
          placeholder="Enter Equipment Name"
          style={[styles.descriptionBox, { height: hp('6%') }]}
          value={name}
          placeholderTextColor={'LIGHTBLUE'}
          onChangeText={text => setName(text)}
        />
        <View style={{ height: hp('1%') }}></View>
        <TextInput
          placeholder="Enter Equipment Price"
          style={[styles.descriptionBox, { height: hp('6%') }]}
          value={price}
          placeholderTextColor={'LIGHTBLUE'}
          onChangeText={text => setPrice(text)}
        />
        <View style={{ height: hp('2%') }}></View>

        <View style={{ height: hp('2%') }}></View>
        <LoginButton title="Submit Now" onPress={() => {
          onSubmit()
        }} />

        <View style={{ height: hp('4%') }}></View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '25%',
    height: hp('12%'),
    backgroundColor: 'grey',
    borderRadius: 10,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,

    fontFamily: 'Montserrat-Bold',
    color: PRIMARYCOLOR,
  },
  normalHeading: {
    fontSize: 18,

    fontFamily: 'Montserrat-SemiBold',
    color: PRIMARYCOLOR,
  },
  descriptionBox: {
    width: '100%',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    borderWidth: 1,
    alignSelf: 'flex-start',
    textAlignVertical: 'top',
    color: PRIMARYCOLOR,
    borderColor: 'grey',
    paddingLeft: '2%',
    height: hp('15%'),
  },
  circle: {
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: PRIMARYCOLOR,
    borderRadius: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});

export default EquipmentArea;



