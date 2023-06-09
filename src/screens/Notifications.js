import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { TextInput } from 'react-native';
// import ImageBoxUpload from '../components/ImageBoxUpload';
import { OpenLibrary } from '../components/imagePicker';
import Header from '../components/header';
import { PRIMARYCOLOR } from '../assets/colors';
import { useNavigation } from '@react-navigation/native';
import ImageBoxUpload from '../components/imageBoxUpload';
import BackHeader from '../components/backHeader';
import { Icon } from 'react-native-elements';

const Notifications = () => {
  const [data, setData] = useState('');
  // const Notifications = () => {
  //   const navigation = useNavigation();
  //   const [authorName, setAuthorName] = useState('');
  //   const [authorPicUrl, setAuthorPicUrl] = useState('');
  //   const [image1, setimage1] = useState(null);
  //   const [image2, setimage2] = useState(null);
  //   const [image3, setimage3] = useState(null);
  //   const [imageLoader1, setImageLoader1] = useState(false);
  //   const [imageLoader2, setImageLoader2] = useState(false);
  //   const [imageLoader3, setImageLoader3] = useState(false);
  //   const [submitLoader, setSubmitLoader] = useState(false);
  //   const [title, setTitle] = useState('');
  //   const [description, setDescription] = useState('');
  //   const [userId, setUserId] = useState('');

  //   const info = {
  //     authorId: userId,
  //     title,
  //     description,
  //     authorName,
  //     authorPicUrl,
  //     issueimage1: image1,
  //     issueimage2: image2,
  //     issueimage3: image3,
  //   };

  //   const onSubmit = () => {
  //     // navigation.replace('MyIssuesBuyer')
  //   };
  const getData = async () => {
    const response = await PostMethod(
      {
        longitude: 24.883176,
        latitude: 67.083107,
      },
      'task/showTasks',
    );

    if (response.data) {
      console.log('User', response.data);
      setData(response.data);
    } else {
      console.log('User', response);
      alert(response);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: PRIMARYCOLOR }}>
      <BackHeader title="Notification" />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <>
            <View style={{ height: hp('2%') }}></View>
            <Order

              description={item?.text}


              button1Text="Accept"
              button2Text="Cancel"
              date={item?.postedDate}
              statusColor="red"
              navScreen="Schedule"
              data={item}
            />
          </>
        )}
      />
      {/* <ScrollView
        style={{
          width: '100%',
          alignSelf: 'center',
          backgroundColor: '#fff',
          padding: '5%',
          marginTop: hp(4),
          borderTopLeftRadius: hp(4),
          borderTopRightRadius: hp(4),
        }}>
        <View style={{height: hp('4%')}}></View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>

          <Icon
            name={'check'}
            type={'font-awesome'}
            color="#fff"
            containerStyle={{
              backgroundColor: '#ffb05c',
              padding: 10,
              alignSelf: 'center',
              borderRadius: 10,
              width: '13%',
            }}
          />
          <Text style={{width: '55%', fontSize: hp(2.5)}}>Cleaning</Text>
          <Text
            style={{backgroundColor: '#f1fbf5', borderRadius: 10, padding: 10}}>
            In Progress
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Icon
            name={'check'}
            type={'font-awesome'}
            color="#fff"
            containerStyle={{
              backgroundColor: '#ffb05c',
              padding: 10,
              alignSelf: 'center',
              borderRadius: 10,
              width: '13%',
            }}
          />
          <Text style={{width: '55%', fontSize: hp(2.5)}}>Cleaning</Text>
          <Text
            style={{backgroundColor: '#f1fbf5', borderRadius: 10, padding: 10}}>
            In Progress
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Icon
            name={'check'}
            type={'font-awesome'}
            color="#fff"
            containerStyle={{
              backgroundColor: '#ffb05c',
              padding: 10,
              alignSelf: 'center',
              borderRadius: 10,
              width: '13%',
            }}
          />
          <Text style={{width: '55%', fontSize: hp(2.5)}}>Cleaning</Text>
          <Text
            style={{backgroundColor: '#f1fbf5', borderRadius: 10, padding: 10}}>
            In Progress
          </Text>
        </View>
          </ScrollView>}*/}

    </View>
  )

}

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
});

export default Notifications;
