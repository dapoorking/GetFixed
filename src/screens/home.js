import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from '../styles/generalStyles';
import { HomeBg } from '../assets/images';
import SimpleInput from '../components/input';
import { Icon } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { operationsData } from '../sampleData/data';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/categories';
import { SliderBox } from 'react-native-image-slider-box';
import { PRIMARYCOLOR } from '../assets/colors';
import Dispute from '../components/dispute';
import Order from '../components/userRequest';
import Header from '../components/header';
import Drawer from '../components/drawerContent';
import MenuDrawer from 'react-native-side-drawer';
import {
  disconnectSocket,
  initiateSocketConnection,
  socketEmitHandler,
  socketOnHandler,
} from './socket';

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const [images, setImages] = useState([
    // 'https://source.unsplash.com/1024x768/?nature',
    // 'https://source.unsplash.com/1024x768/?water',
    // 'https://source.unsplash.com/1024x768/?girl',
    // 'https://source.unsplash.com/1024x768/?tree',
    "https://img.freepik.com/free-vector/repairer-concept-repair-service-electrician-plumber-call-master-work-handyman-master-male-characters-uniform-working-with-instruments-poster-banner-flyer-cartoon-people-vector-illustration_87771-14624.jpg?size=626&ext=jpg",
    "https://graphicriver.img.customer.envatousercontent.com/files/311178983/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=700cb9f58e2f415b463fab5eff8a743b",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMW1e4Fb5-Ztn_r5g8Rpjf1fYfp6nnrwNdA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDUsE9QyowG52REGwfRzSN4jVkkx9iGdP9w&usqp=CAU",
    "https://meos-handyman-painting.com/fileadmin/user_upload/Meo_s-Handyman-_-Paintin-slider-3.jpg"
  ]);
  const [state, setState] = useState({
    open: false,
  });
  const Toggle = () => {
    // setState({open:!state.open})
    setToggle(!toggle);
  };

  useEffect(() => {
    initiateSocketConnection();

    socketOnHandler('bid', data => {
      console.log('bid=>', data);

      alert('bid');
    });

    return () => disconnectSocket();
  }, []);

  let dataCategory = [
    {
      iconName: 'plumbing',
      iconType: 'materialicons',
      title: 'Plumbing',
      taskUserType: 'plumber'
    },
    {
      iconName: 'carpenter',
      iconType: 'materialicons',
      title: 'Carpenter',
      taskUserType: 'carpenter'
    },
    {
      iconName: 'format-paint',
      iconType: 'materialicons',
      title: 'Painter',
      taskUserType: 'painter'

    },
    {
      iconName: 'cleaning-services',
      iconType: 'materialicons',
      title: 'Laundry',
      taskUserType: 'laundry'
    },
    {
      iconName: 'electrical-services',
      iconType: 'materialicons',
      title: 'Electrician',
      taskUserType: 'electrician'
    },
    {
      iconName: 'build',
      iconType: 'materialicons',
      title: 'ACmaintenance',
      taskUserType: 'acmaintenance'
    },
    {
      iconName: 'cleaning-services',
      iconType: 'materialicons',
      title: 'Cleaning',
      taskUserType: 'cleaner'
    },
    {
      iconName: 'cleaning-services',
      iconType: 'materialicons',
      title: 'Homecleaner',
      taskUserType: 'homecleaner'
    },
    {
      iconName: 'wash',
      iconType: 'materialicons',
      title: 'Dishing',
      taskUserType: 'disher'
    },

  ];
  return (
    <ImageBackground source={HomeBg} style={{ flex: 1 }}>
      <ScrollView>
        <Header
          title="GETFIXED"
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

        <View style={styles.searchView}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Search here"></TextInput>
          <Icon
            name={'search1'}
            type={'antdesign'}
            size={wp('5%')}
            color={'black'}
            onPress={() => console.log('')}
          />
        </View>
        <View style={{ height: hp('2%') }}></View>
        <SliderBox
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor={PRIMARYCOLOR}
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          }}
          ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
          imageLoadingColor="#2196F3"
        />
        <View style={{ height: hp('2%') }}></View>

        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Text style={[styles.large, { textAlign: 'left', color: 'black' }]}>
            Categories
          </Text>
          <FlatList
            data={dataCategory}
            renderItem={({ item }) => (
              <Categories
                iconName={item.iconName}
                iconType={item.iconType}
                title={item.title}
                userType={item.taskUserType}
              />
            )}
            numColumns={3}
          />
        </View>
        <View style={{ height: hp('2%') }}></View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
