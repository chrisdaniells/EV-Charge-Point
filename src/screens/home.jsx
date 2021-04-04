import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { PostcodeApi, OpenChargeMapApi } from '../apis';

import PostcodeInput from '../components/postcodeInput';

export default function HomeScreen() {
    function handlePostcodeInputButtonPress(postcode) {
        PostcodeApi.fetchPostcodeCoords(postcode)
            .then(coords => {
                const { longitude, latitude } = coords;
                OpenChargeMapApi.fetchPublicChargers(longitude, latitude)
                    .then(data => console.log(data))
                    .catch(err => console.log(err));
            })
            .catch(error => console.log(error));
    }

    return (
        <SafeAreaView>
            <PostcodeInput onButtonPress={handlePostcodeInputButtonPress} />
        </SafeAreaView>
    );
}