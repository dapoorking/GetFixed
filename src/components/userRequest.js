import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { PRIMARYCOLOR } from '../assets/colors'
import { DummyUser } from '../assets/images'
import { UserContext } from '../context/userAuthContext'
import LoginButton from './button'
import moment from 'moment/moment'

const Order = props => {
  const navigation = useNavigation()


  const { bidTask, setbidTask } = useContext(UserContext)
  console.log('BID', bidTask)
  return (
    <View
      style={{
        width: wp('92%'),
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,

        elevation: 19,
        marginBottom: hp('1%'),
      }}
    >
      <View
        style={{
          width: wp('80%'),
          alignSelf: 'center',
        }}
      >
        <View style={{ height: hp('3%') }}></View>
        <View
          style={{
            flexDirection: 'row',
            width: wp('80%'),
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={styles.mediumText}>{props.serviceType}</Text>
          <Text
            style={[
              styles.mediumText,
              {
                backgroundColor: props.data.workerId ? "green" : "red",
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 10,
                fontSize: hp('2%'),
                fontFamily: 'Poppins-Regular',
                color: '#fff',
              },
            ]}
          >
            {/* {props.status} */}
          </Text>
        </View>
        <View style={{ height: hp('1%') }}></View>
        <Text>{props.description}</Text>
        <View style={{ height: hp('2%') }}></View>
        <View style={{ flexDirection: 'row' }}>
          <Avatar source={DummyUser} size='medium' rounded />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={[styles.mediumText, { marginBottom: -10 }]}>
              {props.name}
            </Text>
            <Text
              style={[styles.mediumText, { fontSize: hp('1.5%'), marginTop: 10 }]}
            >
              {props.address}
            </Text>
          </View>
        </View>
        <View style={{ height: hp('2%') }}></View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            size={hp('3%')}
            name={'calendar-day'}
            color={'lightgreen'}
            type={'font-awesome-5'}
          />
          <Text style={[styles.mediumText, { marginLeft: 10 }]}>
            {moment(props?.date).format("MM-DD-YYYY hh:mm a")}
          </Text>
        </View>
        <View style={{ height: hp('1%') }}></View>
        <View
          style={{
            height: hp('.1%'),
            width: wp('85%'),
            backgroundColor: 'black',
            alignSelf: 'center',
          }}
        ></View>
        <View style={{ height: hp('2%') }}></View>
        <View
          style={{
            width: wp('78%'),
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
          }}
        >
          {props.button1Text ? (
            <LoginButton
              title={`${props.button1Text}`}
              onPress={() => {
                if (props.component == "worker") {
                  navigation.navigate('TaskDetail', { component: props.component, data: props.data })
                } else if (props.component == "customer") {
                  navigation.navigate('TaskDetail', { component: props.component, data: props.data })
                } else {
                  setbidTask(props.data)
                  navigation.navigate('BiddingScreen')
                }
              }}
            />
          ) : null}
        </View>
      </View>

      <View style={{ height: hp('3%') }}></View>
    </View>
  )
}
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
})
export default Order
