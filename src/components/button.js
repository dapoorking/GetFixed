import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PRIMARYCOLOR} from '../assets/colors';
import {Icon} from 'react-native-elements';

const LoginButton = props => {
  return (
    <TouchableOpacity
      disabled={props.isLoading || props.isDisabled}
      style={
        props.color
          ? [styles.btnView, {backgroundColor: props.color}]
          : styles.btnView
      }
      onPress={props.onPress}>
      {props.isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          {props.icon_name ? (
            <Icon
              name={props.icon_name}
              type={props.icon_type}
              color="white"
              size={hp('3%')}
              style={styles.iconstyle}
            />
          ) : (
            <></>
          )}
          <Text style={styles.btnStyles}>{props.title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnView: {
    width: '100%',
    height: hp('6%'),
    backgroundColor: 'black',
    borderRadius: hp('2%'),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnStyles: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: hp('2.2%'),
    fontFamily: 'Montserrat-Regular',
  },
  iconstyle: {
    marginRight: '10%',
  },
});
export default LoginButton;
