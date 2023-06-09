import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Splash from '../screens/splash';
import PostDetail from '../screens/PostIssue';
import CustomerRequest from '../screens/cutomerRequest';
import UnderProcess from '../screens/UnderProcess';
import Location from '../screens/locationScreen';
import EditProfile from '../screens/editProfile';
import ProgressArea from '../screens/ProgressArea';
import BiddingScreen from '../screens/biddingScreen';
import Biddingaccept from '../screens/biddingaccept';
import Workerbids from '../screens/workerbidshow';
import EquipmentArea from '../screens/EquipmetArea';
import Terms from '../screens/Termsandcon';
import WorkerTasks from '../screens/workerTasks';
import TaskDetail from '../screens/taskDetails';

const Worker = createNativeStackNavigator();
const WorkerStack = () => {
    return (
        <Worker.Navigator
            initialRouteName="CustomerRequest"
            headerMode="none"
            options={{
                animationEnabled: false,
            }}>
            {/* <Worker.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            /> */}
            <Worker.Screen
                name="CustomerRequest"
                component={CustomerRequest}
                options={{ headerShown: false }}
            />
            <Worker.Screen
                name="Biddingaccept"
                component={Biddingaccept}
                options={{ headerShown: false }}
            />
            <Worker.Screen
                name="PostDetail"
                component={PostDetail}
                options={{ headerShown: false }}
            />
            <Worker.Screen
                name="Terms"
                component={Terms}
                options={{ headerShown: false }}
            />

            <Worker.Screen
                name="UnderProcess"
                component={UnderProcess}
                options={{ headerShown: false }}
            />
            <Worker.Screen
                name="Location"
                component={Location}
                options={{ headerShown: false }}
            />
            <Worker.Screen
                name="EditProfile"
                component={EditProfile}
                options={{ headerShown: false }}
            />
            <Worker.Screen
                name="EquipmentArea"
                component={EquipmentArea}
                options={{ headerShown: false }}
            />
            {/* <Worker.Screen
                name="Workerbids"
                component={Workerbids}
                options={{ headerShown: false }}
            /> */}
            <Worker.Screen
                name="ProgressArea"
                component={ProgressArea}
                options={{ headerShown: false }}
            />
            <Worker.Screen
                name="BiddingScreen"
                component={BiddingScreen}
                options={{ headerShown: false }}
            />
            <Worker.Screen
                name="WorkerTasks"
                component={WorkerTasks}
                options={{ headerShown: false }}
            />
            <Worker.Screen
                name="TaskDetail"
                component={TaskDetail}
                options={{ headerShown: false }}
            />
        </Worker.Navigator>
    );
};

export default WorkerStack;
