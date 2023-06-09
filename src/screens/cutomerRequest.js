import React, { useContext, useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
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
import {
  disconnectSocket,
  initiateSocketConnection,
  socketEmitHandler,
  socketOnHandler,
} from './socket';

const CustomerRequest = () => {
  const [data, setData] = useState('');
  const [toggle, setToggle] = useState(false);
  const { user, setUser, bidTask, setbidTask } = useContext(UserContext);
  console.log(user.WorkerProfession, "useruseruseruser")
  useEffect(() => {
    initiateSocketConnection();

    socketOnHandler('passTaskToWorker', data => {
      alert('pass task=>', data);
    });

    socketOnHandler('acceptBid', data => {
      console.log(data);
      alert(data.data.message);
    });

    return () => {
      disconnectSocket();
    };
  }, []);
  // const response = await PostMethod(
  //   {
  //     longitude: 24.916621,
  //     latitude: 67.121604,
  //   },
  //   'task/showTasks',
  // );

  // if (response.data) {
  //   // dispatch(getUser(response.data))
  //   // if (UserRole=="worker") {
  //   //   navigation.navigate('CustomerRequest');

  //   // }else{
  //   //   navigation.navigate('Home');

  //   // }
  //   console.log(response.data, 'RAM,IS');
  //   setData(response.data);
  // } else {
  //   alert('Email and Password is not Valid');
  // }

  const getData = async () => {
    const response = await PostMethod(
      {
        longitude: user?.geometry?.coordinates[0],
        latitude: user?.geometry?.coordinates[1]
      },
      'task/showTasks',
    );
    console.log(response)
    if (response.data) {
      console.log('User', response.data);
      setData(response.data);
    } else {
      console.log('User', response);
      alert(response);
    }
  };
  useEffect(() => {
    getData();
  }, []);
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
          let finded = item.bidders.some((item) => item._id == user._id)
          if ((user?.WorkerProfession == item?.WorkerProfession) && !finded) {
            return (
              <>
                <View style={{ height: hp('2%') }}></View>
                <Order
                  serviceType={item?.WorkerProfession}
                  description={item?.text}
                  userProfile=""
                  status={item?.progressStatus?.status}
                  name={item?.name}
                  address={item?.quotedAmount}
                  button1Text="Accept"
                  button2Text="Cancel"
                  date={item?.postedDate}
                  statusColor="red"
                  navScreen="Schedule"
                  data={item}
                />
              </>
            )
          }

        }}
        ListEmptyComponent={() => {
          return (
            <View style={{ height: hp("80%"), justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                No tasks available right now
              </Text>
            </View>
          )
        }}
      />
      <View style={{ height: hp('3%') }}></View>
    </View>
  );
};

export default CustomerRequest;
