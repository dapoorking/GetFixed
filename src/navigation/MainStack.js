import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Splash from '../screens/splash';
import PostDetail from '../screens/PostIssue';
import Notifications from '../screens/Notifications';
import CustomerRequest from '../screens/cutomerRequest';
import UnderProcess from '../screens/UnderProcess';
import Location from '../screens/locationScreen';
import EditProfile from '../screens/editProfile';
import BiddingScreen from '../screens/biddingScreen';
import Biddingaccept from '../screens/biddingaccept';
import Workerbids from '../screens/workerbidshow';
import EquipmentArea from '../screens/EquipmetArea';
import Terms from '../screens/Termsandcon';
import CustomerTasks from '../screens/customerTasks';
import TaskDetail from '../screens/taskDetails';

const Main = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Main.Navigator
      initialRouteName="CustomerRequest"
      headerMode="none"
      options={{
        animationEnabled: false,
      }}>
      {/* <Main.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      /> */}
      <Main.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <Main.Screen
        name="CustomerRequest"
        component={CustomerRequest}
        options={{ headerShown: false }}
      /> */}
      <Main.Screen
        name="Biddingaccept"
        component={Biddingaccept}
        options={{ headerShown: false }}
      />

      <Main.Screen
        name="PostDetail"
        component={PostDetail}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="Terms"
        component={Terms}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="UnderProcess"
        component={UnderProcess}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="Location"
        component={Location}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="EquipmentArea"
        component={EquipmentArea}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="Workerbids"
        component={Workerbids}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="BiddingScreen"
        component={BiddingScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="CustomerTasks"
        component={CustomerTasks}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="TaskDetail"
        component={TaskDetail}
        options={{ headerShown: false }}
      />
    </Main.Navigator>
  );
};

export default MainStack;
