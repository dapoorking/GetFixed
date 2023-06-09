import React, { useContext, useEffect, useState } from 'react'
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
import { Picker } from '@react-native-picker/picker';
import { helper } from '../helper'

const Signup = ({ navigation, route }) => {
  const { user, setUser, bidTask, setbidTask } = useContext(UserContext)
  let userType = route?.params?.userType
  const [Email, setEmail] = React.useState('')
  const [Password, setPassword] = React.useState('')
  const [ConfirmPassword, setConfirmPassword] = React.useState('')
  const [Username, setUsername] = React.useState('')
  const [WorkerProfession, setWorkerProfession] = React.useState('')
  const [loader, setLoader] = React.useState(false)
  const [googleLoader, setGoogleLoader] = React.useState(false)
  const [selectedUserType, setSelectedUserType] = useState(userType ? userType : 'worker')
  const [currentCoords, setCurrentCoords] = useState({
    latitude: 24.883789,
    longitude: 67.083987
  })
  const [errors, setErrors] = React.useState({
    EmailError: '',
    PasswordError: '',
    ConfirmPasswordError: '',
    UsernameError: '',
  })
  console.log(userType, "userTypeuserTypeuserType")

  useEffect(() => {
    handleUserLocation()
  }, [])

  const handleUserLocation = async () => {
    let location = await helper.checkLocation();
    if (location == 'granted') {
      let coordinates = await helper.getCurrentLocation();
      let latitude = coordinates?.coords.latitude;
      let longitude = coordinates?.coords.longitude;

      setCurrentCoords({
        latitude,
        longitude
      })

    } else {
      handleUserLocation()
    }
  };



  const signupMethod = async () => {

    let payload = {
      name: Username,
      email: Email,
      password: Password,
      geometry: {
        coordinates: [currentCoords.latitude, currentCoords.longitude],
      },
      WorkerProfession: WorkerProfession,
      Role: userType ? userType : selectedUserType,
    }
    if (Email.length > 1 || Password.length > 1 || Username.length > 1 || WorkerProfession.length > 0 || selectedUserType.length > 0) {
      if (Password == ConfirmPassword) {
        try {
          setLoader(true)
          const response = await PostMethod(
            payload,
            'auth/signup',
          )
          console.log(response, "datadatadatadata")
          if (response.data) {
            setLoader(false)
            alert(`User registered successfully`)
            navigation.navigate("Login")
          } else {
            setLoader(false)
            console.log('User', response)
            alert(response)
          }
        } catch (error) {
          console.log(error, "errorerrorerror")
          setLoader(false)
        }
      } else {
        alert('Password does not match with confirm password ')
      }
    } else {
      alert('Please Enter Correct Credentials')
    }
  }

  console.log(userType !== undefined || (selectedUserType?.length > 0 && selectedUserType == "worker"))
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: PRIMARYCOLOR }}>
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
        <Text style={styles.textStylesMainHead}>Create Account</Text>
        <View style={{ height: hp('1%') }}></View>
        <Text style={[styles.NormalSizeFont, { textAlign: 'left' }]}>
          Signup to get started !
        </Text>
        <View style={{ height: hp('1%') }}></View>

        <SimpleInput
          placeholder={'Username'}
          value={Username}
          onChangeText={e => setUsername(e)}
          placeholderTextColor='#fff'
          error={errors.UsernameError}
        />
        <SimpleInput
          placeholder={'Email'}
          value={Email}
          onChangeText={e => setEmail(e)}
          placeholderTextColor='#fff'
          error={errors.EmailError}
        />
        <SimpleInput
          placeholder={'Password'}
          value={Password}
          onChangeText={e => setPassword(e)}
          placeholderTextColor='#fff'
          secureTextEntry={true}
          error={errors.PasswordError}
        />
        {/* {PasswordError ? (
            <></>
          ) : (
            <Text
              style={[
                styles.SmallSizeFont,
                {textAlign: 'left', fontSize: hp('1.8%')},
              ]}>
              *Minimum eight characters, at least one letter, one number and one
              special character
            </Text>
          )} */}
        <SimpleInput
          placeholder={'Confirm Password'}
          value={ConfirmPassword}
          onChangeText={e => setConfirmPassword(e)}
          placeholderTextColor='#fff'
          secureTextEntry={true}
          error={errors.ConfirmPasswordError}
        />
        {
          userType == undefined ?
            <View style={{
              borderBottomColor: "white",
              borderBottomWidth: 1
            }}>
              <Picker
                selectedValue={selectedUserType}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedUserType(itemValue)
                }
                style={{
                  color: "white",
                }}
                dropdownIconColor="white"

              >
                <Picker.Item label="Worker" value="worker" />
                <Picker.Item label="Customer" value="customer" />
              </Picker>
            </View>
            :
            null
        }
        {
          ((userType !== undefined && userType == "worker") || (selectedUserType?.length > 0 && selectedUserType == "worker")) ? <View style={{
            borderBottomColor: "white",
            borderBottomWidth: 1,
          }}>
            <Picker
              selectedValue={WorkerProfession}
              onValueChange={(itemValue, itemIndex) =>
                setWorkerProfession(itemValue)
              }
              style={{
                color: "white",
              }}
              dropdownIconColor="white"
            >
              <Picker.Item label="Plumber" value="plumber" />
              <Picker.Item label="Carpenter" value="carpenter" />
              <Picker.Item label="Painter" value="painter" />
              <Picker.Item label="Laundry" value="laundry" />
              <Picker.Item label="Electrician" value="electrician" />
              <Picker.Item label="Ac Maintenance" value="acmaintenance" />
              <Picker.Item label="Cleaner" value="cleaner" />
              <Picker.Item label="Home Cleaner" value="homecleaner" />
              <Picker.Item label="Dishing" value="disher" />
            </Picker>
          </View>
            : null
        }

        {/* {ConfirmPasswordError ? (
            <></>
          ) : (
            <Text
              style={[
                styles.SmallSizeFont,
                {textAlign: 'left', fontSize: hp('1.8%')},
              ]}>
              *Password should match
            </Text>
          )} */}

        <View style={{ width: '40%', alignSelf: 'center', marginTop: 10 }}>
          <LoginButton
            isLoading={loader}
            title='Signup'
            //   onPress={() => Validate()}
            // onPress={testSignOut}
            onPress={() => {
              signupMethod()
            }}
          />
        </View>
        <View style={styles.footerView}>
          <Text style={styles.SmallSizeFont}>Already have account ? </Text>

          <TouchableOpacity
            onPress={() => {
              // signupMethod()
              navigation.navigate("Login")
            }}
          >
            <Text style={[styles.SmallSizeFont, { color: 'black' }]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
export default Signup
