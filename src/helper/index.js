import { check, PERMISSIONS, request } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import { Linking } from 'react-native';



export const helper = {
    async getCurrentLocation() {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(resolve, error => reject(error => { }), {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
            });
        });
    },

    async checkLocation() {
        if (Platform.OS == "android") {
            return await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(
                async status => {
                    if (status == 'granted') {
                        return 'granted';
                    } else if (status == 'denied') {
                        console.log('DENIED');
                        let result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
                        console.log(result, 'resultresultresult');
                        if (result === 'granted') {
                            return "granted"
                        } else if (result == 'blocked') {
                            alert("Salman------------")
                            request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
                            // constants?.confirmationModal.isVisible({
                            //   message:
                            //     'Please turn On your Location from settings in order to get Resturants Near You',
                            //   NegText: 'Later',
                            //   PosText: 'Open Settings',
                            //   PosPress: () => Linking.openSettings(),
                            // });
                        } else {
                            request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
                        }
                    } else if (status == 'blocked') {
                        console.log('BLOCKED');
                        return 'blocked';
                    } else {
                        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
                    }
                },
            );
        }
        else {
            return await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(
                async status => {
                    console.log(status, 'STATUS_IOS');
                    if (status == 'granted') {
                        return 'granted';
                    } else if (status == 'denied') {
                        console.log('DENIED');
                        let result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
                        console.log(result, 'resultresultresult');
                        if (result === 'granted') {
                            return "granted"
                        } else if (result == 'blocked') {
                            // constants?.confirmationModal.isVisible({
                            //   message:
                            //     'Please turn On your Location from settings in order to get Resturants Near You',
                            //   NegText: 'Later',
                            //   PosText: 'Open Settings',
                            //   PosPress: () => Linking.openSettings(),
                            // });
                        } else {
                            request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
                        }
                    } else if (status == 'blocked') {
                        console.log('BLOCKED');
                        return 'blocked';
                    } else {
                        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
                    }
                },
            ).catch(err => {
                console.log(err, "err");
            })
        }
    },
}