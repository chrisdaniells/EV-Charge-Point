import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import PostcodeInput from '../components/postcodeInput';

export default HomeScreen = () => {
    function handlePostcodeInputButtonPress(postcode) {
        PostcodeApi.fetchPostcodeCoords('YO305GF')
            .then(data => {
                // Call OpenChargeMapApi
            })
            .catch(error => console.log(error));
    }

    return (
        <SafeAreaView>
            <PostcodeInput onButtonPress={handlePostcodeInputButtonPress} />
        </SafeAreaView>
    )
}