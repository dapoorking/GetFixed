import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import { UserContext } from '../context/userAuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WorkerStack from './WorkerStack';
import AuthStack from './AuthStack';

const Router = () => {
  const { user, setUser, bidTask, setbidTask } = useContext(UserContext)
  console.log(user, "useruseruseruseruser")

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let user = await AsyncStorage.getItem('user');
    user = JSON.parse(user);
    console.log(user, "useruseruser");
    if (user) {
      setUser(user);
    }
  };

  return (
    <NavigationContainer>
      {
        user ?
          (
            user?.Role == "worker" ? <WorkerStack />
              : user?.Role == "customer" ? <MainStack /> : null
          )
          : <AuthStack />
      }
    </NavigationContainer>
  );
};

export default Router;
