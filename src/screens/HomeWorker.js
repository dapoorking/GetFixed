import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BackHeader from '../components/backHeader';
import Order from '../components/userRequest';

const HomeWorker = () => {
  return (
    <View style={{flex: 1}}>
      <BackHeader title="Requests" />
      <View style={{height: hp('3%')}}></View>

      <FlatList
        data={[1, 2, 4]}
        renderItem={() => (
          <>
            <View style={{height: hp('2%')}}></View>
            <Order
              serviceType="Engine Services"
              description="Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. "
              userProfile=""
              status="In Process"
              name="John Doe"
              address="San Fransisco"
              button1Text="Accept"
              button2Text="Cancel"
              date="26 Nov 2021  at 5:00 pm"
              statusColor="red"
              navScreen="Schedule"
            />
          </>
        )}
      />
      <View style={{height: hp('3%')}}></View>
    </View>
  );
};

export default HomeWorker;
