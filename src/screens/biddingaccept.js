import React, { useContext, useState } from 'react'

import {
  View,
  Text,
  TextSimpleInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import { PRIMARYCOLOR } from '../assets/colors'
import SimpleInput from '../components/input'
import LoginButton from '../components/button'
import Logo from '../assets/images'
import PostMethod from '../assets/Networkcalls/POST'
import { UserContext } from '../context/userAuthContext'
import store from '../Redux/store';

const Biddingaccept = ({ navigation, route }) => {
  const { user, setUser, bidTask, setbidTask } = useContext(UserContext)
  const [Name, setName] = React.useState('')
  const [Address, setAddress] = React.useState('')
  const [Text, setText] = React.useState('')
  const [Bidamount, setBidamount] = React.useState('')
  //   const [taskId, setTaskId] = useState('');
  const [taskId, setId] = useState('');
  //const [WorkerProfession, setWorkerProfession] = React.useState('')
  const [loader, setLoader] = React.useState(false)
  const [googleLoader, setGoogleLoader] = React.useState(false)
  const [errors, setErrors] = React.useState({
    NameError: '',
    AddressError: '',
    TextError: '',
    BidamountError: '',
  })


  const { _id } = store.getState().user
  const bidpost = async () => {
    if (Name.length > 1 || Address.length > 1 || Text.length > 1) {
      const response = await PostMethod(
        {
          name: Name,
          // taskId:_id,
          address: Address,
          text1: Text,
          bidamount: Bidamount,


        },
        'task/addBid',
      )

      if (response.data) {
        navigation.navigate('Home');
      } else {
        alert('Email and Password is not Valid');
      }
    }
    else {
      alert("Please Enter Correct Credentials")
    }
  };


  return (
    <>
      <ScrollView style={{ backgroundColor: PRIMARYCOLOR }}>
        <ImageBackground
          style={{ height: hp('35%'), width: '100%', alignItems: 'center' }}
        >
          <Image
            source={{
              uri:
                'https://cdni.iconscout.com/illustration/premium/thumb/plumber-3376659-4073174.png',
            }}
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
          {/* <Text style={styles.textStylesMainHead}>Create Account</Text> */}
          <View style={{ height: hp('1%') }}></View>
          {/* <Text style={[styles.NormalSizeFont, {textAlign: 'left'}]}>
            Signup to get started !
          </Text> */}
          <View style={{ height: hp('1%') }}></View>

          <SimpleInput
            placeholder={'Name'}
            value={Name}
            onChangeText={e => setName(e)}
            placeholderTextColor='#fff'
            error={errors.NameError}
          />
          <View style={{ height: hp('1%') }}></View>
          <SimpleInput
            placeholder={'Address'}
            value={Address}
            onChangeText={e => setAddress(e)}
            placeholderTextColor='#fff'
            error={errors.AddressError}
          />

          <View style={{ height: hp('1%') }}></View>
          <SimpleInput
            placeholder={'Text'}
            value={Text}
            onChangeText={e => setText(e)}
            placeholderTextColor='#fff'
            error={errors.TextError}
          />
          <View style={{ height: hp('1%') }}></View>
          <SimpleInput
            placeholder={'Bidamount'}
            value={Bidamount}
            onChangeText={e => setBidamount(e)}
            placeholderTextColor='#fff'
            error={errors.BidamountError}
          />

          <View style={{ height: hp('2%') }}></View>
          <View style={{ width: '40%', alignSelf: 'center' }}>
            <LoginButton
              isLoading={loader}
              title='Post Bid'
              //   onPress={() => Validate()}
              // onPress={testSignOut}
              onPress={() => {
                bidpost()
              }}
            />
          </View>
          <View style={{ height: hp('1%') }}></View>
          <View style={{ height: hp('1%') }}></View>

          <View style={styles.footerView}>
            {/* <Text style={styles.SmallSizeFont}>Already have account ? </Text> */}

            <TouchableOpacity
              onPress={() => {
                // signupMethod()
              }}
            >
              {/* <Text style={[styles.SmallSizeFont, {color: 'blue'}]}>Login</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  )
}


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
})
export default Biddingaccept
