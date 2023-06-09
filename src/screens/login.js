import React, { useContext } from 'react'
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
import axios from 'axios'
import { UserContext } from '../context/userAuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Footerr = props => {
  const { user, setUser } = useContext(UserContext)
  const navigation = useNavigation()
  const [Email, setEmail] = React.useState('')
  const [fcm, setFcm] = React.useState('')
  const [googleLoader, setGoogleLoader] = React.useState(false)
  const [Password, setPassword] = React.useState('')
  const [UserRole, setUserRole] = React.useState('')
  const [Loader, setLoader] = React.useState(false)
  const [errors, setErrors] = React.useState({
    PasswordError: '',
    EmailError: '',
    UserRoleError: '',
  })

  const loginMethod = async () => {
    if (Email.length > 1 || Password.length > 1) {
      try {
        setLoader(true)
        const response = await PostMethod(
          {
            email: Email,
            password: Password,
          },
          'auth/login',
        )

        if (response.data) {
          setUser(response.data)
          await AsyncStorage.setItem('user', JSON.stringify(response?.data))
          setLoader(false)
        } else {
          console.log(response)
          alert(response.message)
          setLoader(false)
        }
      } catch (error) {
        console.log(error, "errorerrorerror")
        setLoader(false)
      }
    } else {
      alert('Please Enter Correct Credentials')
    }
  }
  return (
    <View style={{ width: '90%', alignSelf: 'center' }}>
      <Text style={styles.textStylesMainHead}>Hello,</Text>

      <View style={{ height: hp('1%') }}></View>
      <Text style={styles.textStylesMainHead}>Welcome Back</Text>
      <View style={{ height: hp('2%') }}></View>
      <Text style={[styles.NormalSizeFont, { textAlign: 'left' }]}>
        Login to your Account
      </Text>
      <View style={{ height: hp('1%') }}></View>
      <SimpleInput
        placeholder={'Email'}
        value={Email}
        error={errors.EmailError}
        onChangeText={e => setEmail(e)}
        placeholderTextColor='#fff'
      />

      <View style={{ height: hp('1%') }}></View>
      <SimpleInput
        placeholder={'Password'}
        value={Password}
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
        placeholderTextColor='#fff'
        error={errors.PasswordError}
      />
      <View style={{ height: hp('1%') }}></View>

      <View style={{ height: hp('1%') }}></View>
      {/* {PasswordError ? (
        <></>
      ) : (
        <Text
          style={[
            styles.SmallSizeFont,
            {textAlign: 'center', fontSize: hp('1.8%')},
          ]}>
          Minimum eight characters, at least one letter, one number and one
          special character
        </Text>
      )} */}
      <TouchableOpacity
        style={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-end' }}
        onPress={() => navigation.push('Signup')}
      >
        <Text style={styles.SmallSizeFont}>Forgot Password ?</Text>
      </TouchableOpacity>
      <View style={{ height: hp('5%') }}></View>

      <View style={{ width: '50%', alignSelf: 'center' }}>
        <LoginButton
          title='Login'
          isLoading={Loader}
          // onPress={() => console.log(token)}
          // onPress={() => Validate()}
          // onPress={testSignOut}
          onPress={() => {
            // navigation.navigate('Home');
            loginMethod()
          }}
        />
      </View>
      <View style={{ height: hp('1%') }}></View>
      <View style={{ height: hp('3%') }}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: hp('2%'),
        }}
      >

      </View>
      <View style={styles.footerView}>
        <Text style={styles.SmallSizeFont}>Don't have account ? </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup')
          }}
        >
          <Text style={[styles.SmallSizeFont, { color: 'black' }]}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Login = ({ navigation, route }) => {
  return (
    <>
      <ScrollView style={{ backgroundColor: PRIMARYCOLOR }}>
        <ImageBackground
          //   source={logobox}
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
        <Footerr />
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
export default Login
