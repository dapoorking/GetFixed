// import React, {useContext, useEffect, useState} from 'react';
// import {FlatList, ScrollView, View} from 'react-native';
// import {Icon} from 'react-native-elements';
// import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import {PRIMARYCOLOR} from '../assets/colors';
// import PostMethod from '../assets/Networkcalls/POST';
// import BackHeader from '../components/backHeader';
// import Header from '../components/header';
// import Order from '../components/userRequest';
// import baseUrl from './baseUrl';
// import Drawer from '../components/drawerContent';
// import {UserContext} from '../context/userAuthContext';
// import {
//   disconnectSocket,
//   initiateSocketConnection,
//   socketEmitHandler,
//   socketOnHandler,
// } from './socket';

// const Workerbids = () => {
//   const [data, setData] = useState('');
//   const [toggle, setToggle] = useState(false);
//   const {user, setUser, bidTask, setbidTask} = useContext(UserContext);

// //   useEffect(() => {
// //     initiateSocketConnection();

// //     socketOnHandler('passTaskToWorker', data => {
// //       alert('pass task=>', data);
// //     });

// //     return () => {
// //       disconnectSocket();
// //     };
// //   }, []);
//   // const response = await PostMethod(
//   //   {
//   //     longitude: 24.916621,
//   //     latitude: 67.121604,
//   //   },
//   //   'task/showTasks',
//   // );

//   // if (response.data) {
//   //   // dispatch(getUser(response.data))
//   //   // if (UserRole=="worker") {
//   //   //   navigation.navigate('CustomerRequest');

//   //   // }else{
//   //   //   navigation.navigate('Home');

//   //   // }
//   //   console.log(response.data, 'RAM,IS');
//   //   setData(response.data);
//   // } else {
//   //   alert('Email and Password is not Valid');
//   // }
// //   const info = {
// //     authorId: userId,
// //   };
//   const getData = async () => {
//     const response = await PostMethod(

//         {
//             longitude: 24.883176,
//             latitude: 67.083107,
//           },

//       'task/showBids',
//     );

//     if (response.data) {
//       console.log('User', response.data);
//       setData(response.data);
//     } else {
//       console.log('User', response);
//       alert(response);
//     }
//   };

//   return (
//     <View style={{flex: 1}}>




//       <FlatList
//         data={data}
//         renderItem={({item}) => (
//           <>
//             <View style={{height: hp('2%')}}></View>
//             <Order
//               serviceType={item.WorkerProfession}
//               description={item?.text}
//               userProfile=""
//               status={item?.progressStatus?.status}
//               name={item?.name}
//               address={item?.quotedAmount}

//               date={item?.postedDate}

//               data={item}
//             />
//           </>
//         )}
//       />
//       <View style={{height: hp('3%')}}></View>
//     </View>
//   );
// };

// export default Workerbids;
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PRIMARYCOLOR } from '../assets/colors';
import PostMethod from '../assets/Networkcalls/POST';
import BackHeader from '../components/backHeader';
import Header from '../components/header';
import Order from '../components/userRequest';
import baseUrl from './baseUrl';
import Drawer from '../components/drawerContent';
import { UserContext } from '../context/userAuthContext';

import { Text } from 'react-native';
import LoginButton from '../components/button';

const Workerbids = ({ route, navigation }) => {
  const [toggle, setToggle] = useState(false);
  const { user, setUser, bidTask, setbidTask } = useContext(UserContext);
  const [isAccepted, setIsAccepted] = useState(false)
  const [loader, setLoader] = useState(false)
  let data = route?.params?.data
  let taskId = route?.params?.taskId
  let assignedWorkerId = route?.params?.workerId

  const onSubmit = async (workerId, bidAmmount) => {
    try {
      let payload = {
        taskId: taskId,
        workerId: workerId,
        BidAmmount: bidAmmount
      }
      setLoader(true)
      const response = await PostMethod(
        payload
        ,
        'task/acceptBid',

      );
      console.log(response)
      if (response?.data) {
        // navigation.goBack();
        alert(response?.message)
        setLoader(false)
        setIsAccepted(true)
      } else {
        alert('Something went wrong');
        setLoader(false)
      }
    } catch (error) {
      console.log(error, "errorerror")
      setLoader(false)
    }

  }

  const Toggle = () => {
    // setState({open:!state.open})
    setToggle(!toggle);
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        title="PLUMBER APP"
        iconName2="user"
        iconType2="entypo"
        toggle={toggle}
        setToggle={setToggle}
      />
      {toggle ? (
        <View
          style={{
            width: '70%',
            height: '100%',
            backgroundColor: PRIMARYCOLOR,
            position: 'absolute',
            zIndex: 99,
          }}>
          <Icon
            name="cross"
            type="entypo"
            onPress={() => setToggle(false)}
            containerStyle={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <Drawer open={toggle} toggleDrawer={Toggle} />
        </View>
      ) : null}
      <View style={{ height: hp('3%') }}></View>

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={{
              borderRadius: 10,
              elevation: 5,
              backgroundColor: "#fff",
              padding: 15,
              marginHorizontal: 10,
              marginTop: 10
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ textTransform: "capitalize", fontSize: 16, fontWeight: "600" }}>
                  Name:
                </Text>
                <Text style={{ textTransform: "capitalize", fontSize: 16, marginLeft: 10 }}>
                  {item?.name}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ textTransform: "capitalize", fontSize: 16, fontWeight: "600" }}>
                  Email:
                </Text>
                <Text style={{ textTransform: "capitalize", fontSize: 16, marginLeft: 10 }}>
                  {item?.email}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ textTransform: "capitalize", fontSize: 16, fontWeight: "600" }}>
                  Worker Profession:
                </Text>
                <Text style={{ textTransform: "capitalize", fontSize: 16, marginLeft: 10 }}>
                  {item?.WorkerProfession}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ textTransform: "capitalize", fontSize: 16, fontWeight: "600" }}>
                  Bid Amount:
                </Text>
                <Text style={{ textTransform: "capitalize", fontSize: 16, marginLeft: 10 }}>
                  {item?.bidAmount}
                </Text>
              </View>
              <View style={{ width: "50%", alignSelf: "center", marginVertical: 10 }}>
                {
                  (isAccepted || assignedWorkerId) ?
                    <LoginButton
                      title="Accepted"
                      color="gray"
                    />
                    :
                    <LoginButton
                      title="Accept"
                      onPress={() => {
                        onSubmit(item?._id, item?.bidAmount)
                      }}
                      isLoading={loader}
                      color="green"
                    />
                }
              </View>
            </View>
          )
        }
        }
      />
      <View style={{ height: hp('3%') }}></View>
    </View>
  );
};

export default Workerbids;
