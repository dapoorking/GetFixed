import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {PRIMARYCOLOR} from '../assets/colors';
import {Icon} from 'react-native-elements';
import {
  CheckBox,
  Divider,
  Avatar,
  BottomSheet,
  ListItem,
} from 'react-native-elements';
import LoginButton from '../components/button';
import {useNavigation} from '@react-navigation/native';
import {DummyUser} from '../assets/images';
// import {ScrollView} from 'react-native-gesture-handler'
// import EditProfileHeader from '../components/EditProfileHeader'
import {OpenLibrary} from '../components/imagePicker';
import Input from '../components/input';
import Header from '../components/header';
import BackHeader from '../components/backHeader';
const EditProfile = ({navigation}) => {
  const [FullName, setFullName] = useState('');
  const [Address, setAddress] = useState('');
  const [selfId, setSelfId] = useState('');
  const [PhotoUrl, setPhotoUrl] = useState('');
  const [UpdatedPhotoUrl, setUpdatedPhotouRl] = React.useState(null);
  const [Phone, setPhone] = useState('');
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = React.useState({
    FullNameError: '',
    AddressError: '',
  });

  return (
    <ScrollView style={{flex: 1, backgroundColor: PRIMARYCOLOR}}>
      <BackHeader title="Edit Profile" />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <View style={{height: hp('5%')}}></View>
        <View style={{alignSelf: 'center'}}>
          <Avatar
            source={
              UpdatedPhotoUrl
                ? {uri: UpdatedPhotoUrl.uri}
                : PhotoUrl
                ? {uri: PhotoUrl}
                : DummyUser
            }
            size="xlarge"
            rounded></Avatar>
          <Icon
            name="edit"
            type="entypo"
            color={PRIMARYCOLOR}
            raised
            size={12}
            containerStyle={{
              alignSelf: 'flex-end',
              position: 'absolute',
              bottom: 0,
              right: 4,
            }}
            onPress={() => {
              OpenLibrary().then(res => {
                setUpdatedPhotouRl(res);
              });
            }}
          />
        </View>
        <View style={{height: hp('2%')}}></View>

        <Input
          placeholder={'Full Name'}
          value={FullName}
          onChangeText={e => setFullName(e)}
          placeholderTextColor="#fff"
          error={errors.FullNameError}
        />

        <View style={{height: hp('1%')}}></View>
        <Input
          placeholder={'Address'}
          value={Address}
          onChangeText={e => setAddress(e)}
          placeholderTextColor="#fff"
          error={errors.AddressError}
        />
        <View style={{height: hp('1%')}}></View>

        <Text style={styles.textInputStyles}>random123@gmail.com</Text>

        <View style={{height: hp('3%')}}></View>
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            marginVertical: hp('2%'),
          }}>
          {loader ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <LoginButton title="Save" bg="#fff" onPress={() => Validate()} />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textStylesMainHead: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: hp('4%'),
    marginBottom: hp('-1.5%'),
  },
  NormalSizeFont: {
    fontSize: hp('2.5%'),
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
  },
  SmallSizeFont: {
    fontSize: hp('2.2%'),
    textAlign: 'right',
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
  },
  footerView: {
    width: '100%',
    marginBottom: hp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInputStyles: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    paddingVertical: hp('2%'),
    paddingHorizontal: '2%',
    width: '100%',
    fontFamily: 'Montserrat-Regular',
    fontSize: hp('2.2%'),
    color: '#fff',
  },
});
export default EditProfile;
