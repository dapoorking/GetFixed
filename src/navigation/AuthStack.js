import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Login from '../screens/login';
import Signup from '../screens/signup';
import SignupOptions from '../screens/signupOptions';

const Auth = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Auth.Navigator
            initialRouteName="Splash"
            headerMode="none"
            options={{
                animationEnabled: false,
            }}>
            <Auth.Screen
                name="SignupOptions"
                component={SignupOptions}
                options={{ headerShown: false }}
            />
            <Auth.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Auth.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Auth.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
            />

        </Auth.Navigator>
    );
};

export default AuthStack;
