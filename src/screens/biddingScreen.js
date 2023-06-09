import React, { useContext, useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { TextInput } from 'react-native'
// import ImageBoxUpload from '../components/ImageBoxUpload';
import { OpenLibrary } from '../components/imagePicker'
import Header from '../components/header'
import { PRIMARYCOLOR } from '../assets/colors'
import { useNavigation } from '@react-navigation/native'
import ImageBoxUpload from '../components/imageBoxUpload'
import BackHeader from '../components/backHeader'
import LoginButton from '../components/button'
import { Icon } from 'react-native-elements'
import { Sample } from '../assets/images'
import { UserContext } from '../context/userAuthContext'
import PostMethod from '../assets/Networkcalls/POST'
const BiddingScreen = () => {
  const navigation = useNavigation()
  const [authorName, setAuthorName] = useState('')
  const [authorPicUrl, setAuthorPicUrl] = useState('')
  const [image1, setimage1] = useState(null)
  const [image2, setimage2] = useState(null)
  const [image3, setimage3] = useState(null)
  const [imageLoader1, setImageLoader1] = useState(false)
  const [imageLoader2, setImageLoader2] = useState(false)
  const [imageLoader3, setImageLoader3] = useState(false)
  const [submitLoader, setSubmitLoader] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [userId, setUserId] = useState('')
  const [loader, setLoader] = useState(false)

  const { user, setUser, bidTask, setbidTask } = useContext(UserContext)
  console.log('Ramis', user, bidTask)
  const info = {
    authorId: userId,
    title,
    description,
    authorName,
    authorPicUrl,
    issueimage1: image1,
    issueimage2: image2,
    issueimage3: image3,
  }

  const onSubmit = async () => {
    // navigation.replace('MyIssuesBuyer')

    if (description.length > 1) {
      try {
        setLoader(true)
        const response = await PostMethod(
          {
            name: user?.name,
            address: 'asdjskadjsa',
            taskId: bidTask._id,
            text: bidTask?.text,
            BidAmmount: description,
            workerId: user?._id
          },
          'task/addBid',
        )
        if (response.data) {
          alert("Bid submitted successfully")
          setLoader(false)
          navigation.goBack()
        } else {
          console.log('User', response)
          alert(response)
          setLoader(false)
        }
      } catch (error) {
        console.log(error, "errorerrorerror")
        setLoader(false)
      }

    } else {
      alert('Please Enter Your Bid')
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: PRIMARYCOLOR }}>
      <BackHeader title='Bidding Area' />

      <ScrollView
        style={{
          width: '100%',
          alignSelf: 'center',
          backgroundColor: '#fff',
          padding: '5%',
          marginTop: hp(8),
          borderTopLeftRadius: hp(4),
          borderTopRightRadius: hp(4),
        }}
      >
        <Image source={Sample} style={{ alignSelf: 'center' }} />
        <Text style={[styles.content, { textAlign: 'center' }]}>
          {bidTask?.text}
        </Text>
        <View style={{ height: hp('2%') }}></View>
        <Text style={styles.normalHeading}>Quoted Price:</Text>
        <Text style={[styles.content, { fontWeight: 'bold' }]}>
          {bidTask?.quotedAmount} Rs
        </Text>

        <View style={{ height: hp('4%') }}></View>
        <TextInput
          placeholder='Enter Your Bid'
          style={[styles.descriptionBox, { height: hp('6%') }]}
          value={description}
          placeholderTextColor={'LIGHTBLUE'}
          onChangeText={text => setDescription(text)}
          keyboardType="numeric"
        />
        <View style={{ height: hp('2%') }}></View>

        <View style={{ height: hp('2%') }}></View>
        <LoginButton
          isLoading={loader}
          title='Submit Now'
          onPress={() => {
            onSubmit()
          }}
        />

        <View style={{ height: hp('4%') }}></View>
      </ScrollView>
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

  content: {
    fontSize: 15,

    fontFamily: 'Montserrat-SemiBold',
    color: 'grey',
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
})

export default BiddingScreen
