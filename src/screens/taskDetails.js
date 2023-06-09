import React, { useContext, useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PRIMARYCOLOR } from '../assets/colors';
import Header from '../components/header';
import Drawer from '../components/drawerContent';
import { UserContext } from '../context/userAuthContext';
import moment from 'moment';
import LoginButton from '../components/button';

const TaskDetail = ({ route, navigation }) => {
    const { component, data } = route?.params
    const [toggle, setToggle] = useState(false);
    const { user, setUser, bidTask, setbidTask } = useContext(UserContext);
    console.log(data.bidders, "datadatadatadata")
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
            <View style={{ width: "95%", alignSelf: "center", flex: 1, justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ textTransform: "capitalize", fontSize: 20, fontWeight: "600" }}>
                        Name:
                    </Text>
                    <Text style={{ textTransform: "capitalize", fontSize: 20, marginLeft: 10 }}>
                        {data?.name}
                    </Text>

                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ textTransform: "capitalize", fontSize: 20, fontWeight: "600" }}>
                        Category:
                    </Text>
                    <Text style={{ textTransform: "capitalize", fontSize: 20, marginLeft: 10 }}>
                        {data?.WorkerProfession}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ textTransform: "capitalize", fontSize: 20, fontWeight: "600" }}>
                        Date:
                    </Text>
                    <Text style={{ textTransform: "capitalize", fontSize: 20, marginLeft: 10 }}>
                        {moment(data?.postedDate).format("MM-DD-YYYY")}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ textTransform: "capitalize", fontSize: 20, fontWeight: "600" }}>
                        Quoted Amount:
                    </Text>
                    <Text style={{ textTransform: "capitalize", fontSize: 20, marginLeft: 10 }}>
                        {data?.quotedAmount}
                    </Text>
                </View>
                {
                    component == "worker" && <View style={{ flexDirection: "row" }}>
                        <Text style={{ textTransform: "capitalize", fontSize: 20, fontWeight: "600" }}>
                            Bid Amount:
                        </Text>
                        <Text style={{ textTransform: "capitalize", fontSize: 20, marginLeft: 10 }}>
                            {data?.bidAmount}
                        </Text>
                    </View>
                }
                {
                    data?.BidAcceptedAmount ?
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ textTransform: "capitalize", fontSize: 20, fontWeight: "600" }}>
                                Bid Accepted Amount:
                            </Text>
                            <Text style={{ textTransform: "capitalize", fontSize: 20, marginLeft: 10 }}>
                                {data?.BidAcceptedAmount}
                            </Text>
                        </View>
                        :
                        null
                }

                <View style={{}}>
                    <Text style={{ textTransform: "capitalize", fontSize: 20, fontWeight: "600" }}>
                        Description:
                    </Text>
                    <Text style={{ textTransform: "capitalize", fontSize: 20 }}>
                        {data?.text}
                    </Text>
                </View>
                {
                    component == "worker" ?
                        data?.workerId == user._id ?
                            <View style={{ width: "50%", alignSelf: "center", marginTop: 20 }}>
                                <LoginButton
                                    title="Assigned to you"
                                    color="green"
                                />
                            </View>
                            :
                            data?.workerId == ""
                                ?
                                null
                                :
                                <View style={{ width: "55%", alignSelf: "center", marginTop: 20 }}>
                                    <LoginButton
                                        title="Assigned to someone"
                                        color="gray"
                                    />
                                </View>
                        :
                        null
                }
                {
                    component == "customer" &&
                    <View style={{ width: "50%", alignSelf: "center", marginTop: 20 }}>
                        <LoginButton
                            title="Bids"
                            onPress={() => {
                                navigation.navigate("Workerbids", { data: data?.bidders, taskId: data?._id, workerId: data?.workerId })
                            }}
                        />
                    </View>
                }

            </View>

            <View style={{ height: hp('3%') }}></View>
        </View>
    );
};

export default TaskDetail;
