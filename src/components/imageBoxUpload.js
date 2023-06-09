import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {OpenLibrary} from './ImagePicker';
import {Camera} from '../assets/images'; 
import { GRAYCOLOR, PRIMARYCOLOR } from '../assets/colors';

const ImageBoxUpload = props => {
  return (
    <TouchableOpacity
      disabled={props.isLoading}
      style={styles.container}
      {...props}>
      {props.image ? (
        <Image
          source={{uri: props.image}}
          style={{height: '100%', width: '100%', resizeMode: 'cover'}}
        />
      ) : props.isLoading ? (
        <ActivityIndicator size="large" color={PRIMARYCOLOR} />
      ) : (
        <Image
          source={Camera}
          style={{
            height: hp('7%'),
            width: hp('7%'),
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: hp('12%'),
    height: hp('12%'),
    overflow: 'hidden',
    backgroundColor: GRAYCOLOR,
    borderRadius: 10,
    justifyContent: 'center',
  },
});
export default ImageBoxUpload;
