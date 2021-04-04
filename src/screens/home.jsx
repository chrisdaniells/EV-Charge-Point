import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import PostcodeApi from '../apis/postcode';

import PostcodeInput from '../components/postcodeInput';

export default function HomeScreen() {
    function handlePostcodeInputButtonPress(postcode) {
        PostcodeApi.fetchPostcodeCoords(postcode)
            .then(data => {
                // Call OpenChargeMapApi
                console.log(data);
            })
            .catch(error => console.log(error));
    }

    return (
        <SafeAreaView>
            <PostcodeInput onButtonPress={handlePostcodeInputButtonPress} />
        </SafeAreaView>
    )
}