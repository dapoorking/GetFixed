import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../styles/generalStyles';

import { Sample } from '../assets/images';
import { useNavigation } from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignupOptions');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        displaye: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={Sample} style={{ alignSelf: 'center', borderRadius: 150 }} />
    </View>
  );
};

export default Splash;
