import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'; 
import {useNavigation} from '@react-navigation/native';
import { PRIMARYCOLOR } from '../assets/colors';
import {DummyUser} from "../assets/images"
const Header = ({iconName2,title,toggle,setToggle}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.MainCompStyle}>
      <Icon
        name="menu"
        type="entypo"
        color="#FFF"
        size={24}
        containerStyle={{width: '11%'}}
        onPress={() => {
          setToggle(true)
        }}
      />
      <Text style={styles.NormalSizeFont}>{title}</Text>
      {iconName2 ? (
            <Avatar source={DummyUser} size="small" rounded />
          ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  MainCompStyle: {
    width: '100%',
    height: 60,
    backgroundColor: PRIMARYCOLOR,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  NormalSizeFont: {
    width: '75%',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    color: '#FFF',
  },
});
export default Header;
