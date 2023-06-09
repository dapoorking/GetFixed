import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import {
//   GooglePlacesAutocomplete,
//   clear,
// } from 'react-native-google-places-autocomplete'
import MapView, {Marker, Polyline} from 'react-native-maps';
import {Input, Icon} from 'react-native-elements';
var lat = 24.68;
var long = 67.28;
const ref = React.createRef();
// import RBSheet from 'react-native-raw-bottom-sheet'
// import ProfileListCard from '../components/ProfileListCard'
import {useNavigation} from '@react-navigation/native';
const Location = () => {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <MapView
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{width: wp('100%'), height: hp('100%')}}></MapView>
      {/* <Input inputContainerStyle={{width:wp('90%'),alignSelf:'center',backgroundColor:'white'}} containerStyle={{position:'absolute',top:10}} /> */}
      {/* <GooglePlacesAutocomplete
        ref={ref}
        placeholder='Enter Your Location'
        autoFocus={false}
        fetchDetails={true}
        onPress={(data, details) => {
          // 'details' is provided when fetchDetails = true
          //   console.log(data);

          ;(lat = details.geometry.location.lat),
            (long = details.geometry.location.lng)
          console.log('lat', lat)
          console.log('long', long)
        }}
        getDefaultValue={() => {
          return '' // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyBm-xt-zBBtvE_AreqkHODWIsNvkrsU1Qw',
          language: 'en', // language of the results
          types: 'address', // default: 'geocode'
          //  components:'country:uk'
        }}
        styles={{
          container: {position: 'absolute', top: wp(8), alignSelf: 'center'},
          textInput: {
            fontSize: wp(4),
            borderWidth: .5,
            borderRadius: 10,
            backgroundColor: 'white',
            borderColor: 'black',
            width: wp('50%')
            ,height: hp('7%'),paddingLeft:wp('4%')
          },
          textInputContainer: {width: wp('90%'), alignSelf: 'center'},
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          types: 'food',
        }}
        GooglePlacesDetailsQuery={{
          // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
          fields: ['formatted_address', 'geometry'],
        }}
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3',
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      /> */}
      <View
        style={{
          backgroundColor: 'black',
          width: wp('100%'),
          height: hp('20%'),
          position: 'absolute',
          bottom: 0,
          opacity: 0.5,
        }}
      />
      <View
        style={{
          width: wp('15%'),
          height: wp('15%'),
          borderRadius: wp('15%') / 2,
          backgroundColor: '#80D883',
          position: 'absolute',
          bottom: wp(10),
          right: wp(10),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="location-searching"
          type="material"
          color="white"
          //   onPress={() => refRBSheet.current.open()}
        />
      </View>

      {/* <RBSheet
        ref={refRBSheet}
        height={hp('47%')}
        openDuration={250}
        customStyles={{
          container: {
            borderTopStartRadius: wp('5%'),

            borderTopEndRadius: wp('5%'),
          },
        }}>
        <View style={{height: hp('1.5%')}}></View>

        <View style={styles.bottomInnerStyles}></View>

        <View style={{height: hp('4%')}}></View>
        <View
          style={{
            width: wp('80%'),
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.mediumText}>Near By</Text>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.close()
              navigation.navigate('AllProfiles')
            }}>
            <Text style={styles.mediumText}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: hp('1%')}}></View>

        <ProfileListCard
          onPress={() => {
            navigation.navigate('ProfileDescription')
            refRBSheet.current.close()
          }}
        />
        <View style={{height: hp('2%')}}></View>

        <ProfileListCard
          onPress={() => {
            navigation.navigate('ProfileDescription')
            refRBSheet.current.close()
          }}
        />
        <View style={{height: hp('2%')}}></View>
      </RBSheet> */}
    </View>
  );
};
const styles = StyleSheet.create({
  bottomInnerStyles: {
    height: hp('.5%'),
    width: wp('50%'),
    backgroundColor: '#0F0F0F',
    alignSelf: 'center',
    borderRadius: wp('5%'),
  },
  mediumText: {
    fontSize: hp('2.5%'),
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
});
export default Location;
