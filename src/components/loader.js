import Spinner from 'react-native-loading-spinner-overlay';
import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loader = ({ isloading }) => {
    return (
        <Spinner
            visible={isloading}
            color={"black"}
            size="normal"
            customIndicator={<ActivityIndicator size="large" color={"black"} />}
        />
    );
};

export default Loader;
