import React, { useContext, useEffect, useState } from 'react'

import { Image, View, Text, StyleSheet, ScrollView } from 'react-native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Icon } from 'react-native-elements'
import { ProfilePic } from '../assets/images'

import { TouchableOpacity } from 'react-native'
import { PRIMARYCOLOR } from '../assets/colors'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../context/userAuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import {PRIMARYCOLOR} from '../assets/colors';

const DrawerContent = props => {
  const [name, setName] = useState('Ramis Ayoub')
  const [PhotoUrl, setPhotoUrl] = useState(null)
  const navigation = useNavigation()

  const { user, setUser, bidTask, setbidTask } = useContext(UserContext)
  console.log('Usesasdasdsr', user)
  return (
    <ScrollView style={styles.drawer}>
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
        }}
      >
        <View style={{ height: hp('70%') }}>
          <View style={styles.drawerIcon}>
            <View style={{ alignItems: 'flex-end' }}>
              <Image
                source={PhotoUrl ? { uri: PhotoUrl } : ProfilePic}
                style={styles.drawerImg}
                resizeMode='cover'
              />

              <Icon
                name='edit'
                type='entypo'
                color={PRIMARYCOLOR}
                size={10}
                containerStyle={styles.iconstyle}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
            <Text style={styles.name}>{user ? user.name : 'Muhammid'}</Text>
          </View>
          <View style={{ height: hp('2%') }}></View>
          {user?.Role == 'customer' ? (
            <TouchableOpacity
              style={styles.listbutton}
              onPress={() => navigation.navigate('Notifications')}
            >
              <Text style={styles.drawerLabel}>Notifications</Text>
            </TouchableOpacity>
          ) : null}

          {/* <TouchableOpacity
            style={styles.listbutton}
            onPress={() => navigation.navigate('Location')}
          >
            <Text style={styles.drawerLabel}>Location</Text>
          </TouchableOpacity> */}
          {user?.Role == 'customer' ? (
            <TouchableOpacity
              style={styles.listbutton}
              onPress={() => navigation.navigate('CustomerTasks')}
            >
              <Text style={styles.drawerLabel}>Tasks</Text>
            </TouchableOpacity>
          )
            : null
          }

          {user?.Role == 'worker' ? (
            <TouchableOpacity
              style={styles.listbutton}
              onPress={() => navigation.navigate('WorkerTasks')}
            >
              <Text style={styles.drawerLabel}>Tasks</Text>
            </TouchableOpacity>
          )
            : null
          }


          {/* <TouchableOpacity
            style={styles.listbutton}
            onPress={() => navigation.navigate('MyIssuesBuyer')}>
            <Text style={styles.drawerLabel}>My Issues</Text>
          </TouchableOpacity> */}

          {/* {user?.Role == 'worker' ? (
            <TouchableOpacity
              style={styles.listbutton}
              onPress={() => navigation.navigate('ProgressArea')}
            >
              <Text style={styles.drawerLabel}>Progress Area</Text>
            </TouchableOpacity>
          ) : null} */}
          <TouchableOpacity
            style={styles.listbutton}
            onPress={() => navigation.navigate('Terms')}

          >

            <Text style={styles.drawerLabel}>Terms And Condition</Text>
          </TouchableOpacity>
          {/* {user?.Role == 'worker' ? (
            <TouchableOpacity
              style={styles.listbutton}
              onPress={() => navigation.navigate('EquipmentArea')}

            >

              <Text style={styles.drawerLabel}>EquipmentArea</Text>
            </TouchableOpacity>
          )
            : null
          } */}
          <TouchableOpacity
            style={styles.listbutton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text style={styles.drawerLabel}>Account Settings</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastView}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={async () => {
              setUser(null)
              await AsyncStorage.removeItem('user')
            }}
          >
            <Text style={styles.btntext}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR,
  },

  drawerLabel: {
    color: '#fff',
    fontSize: wp('4%'),
    fontFamily: 'Montserrat-SemiBold',
    borderBottomColor: '#fff',
    width: '100%',
    paddingBottom: hp('1.5%'),
    borderBottomWidth: 1,
    marginLeft: '1%',
  },
  name: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: '3%',
    width: '60%',
  },
  listbutton: {
    marginVertical: hp('2.2%'),
  },
  drawerIcon: {
    flexDirection: 'row',

    alignItems: 'center',

    marginVertical: hp('2%'),
  },

  drawerImg: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },

  listImg: {
    height: hp('2.9%'),
    width: hp('2.9%'),
  },
  lastView: {
    flexGrow: 1,

    alignSelf: 'center',
    justifyContent: 'flex-end',
    height: hp('20%'),
  },
  logoutButton: {
    padding: '5%',
    borderRadius: 5,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  btntext: {
    color: PRIMARYCOLOR,
    fontFamily: 'Montserrat-SemiBold',
  },
  iconstyle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: -20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default DrawerContent
