import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

const Categories = props => {
  const { iconName, iconType, title, userType } = props
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={{
        width: wp('25%'),
        height: wp('25%'),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: hp(1),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,

        elevation: 13,
        backgroundColor: '#80C3DD',
      }}
      onPress={() => navigation.navigate('PostDetail', { userType })}
    >
      <Icon name={iconName} type={iconType} color={'#FFF'} size={hp(5)} />
      <View style={{ height: hp(1) }} />
      <Text style={{ color: '#fff' }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Categories
