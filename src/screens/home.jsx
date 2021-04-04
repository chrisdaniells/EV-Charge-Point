import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { PostcodeApi, OpenChargeMapApi } from '../apis';

import PostcodeInput from '../components/postcodeInput';
import ResultList from '../components/resultList';

export default function HomeScreen() {
    const [chargePointData, setChargePointData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handlePostcodeInputButtonPress(postcode) {
        setIsLoading(true);

        PostcodeApi.fetchPostcodeCoords(postcode)
            .then(coords => {
                const { longitude, latitude } = coords;
                OpenChargeMapApi.fetchPublicChargers(longitude, latitude)
                    .then(data => {
                        setIsLoading(false);
                        console.log(data);
                        setChargePointData(
                            data.map(item => ({
                                title: item.AddressInfo.Title,
                                town: item.AddressInfo.Town,
                                postcode: item.AddressInfo.Postcode,
                                distance: item.AddressInfo.Distance,
                                chargerId: item.ID
                            }))
                        );
                    })
                    .catch(err => {
                        setIsLoading(false);
                        console.log(err);
                    });
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
            });
    }

    return (
        <SafeAreaView>
            <PostcodeInput onButtonPress={handlePostcodeInputButtonPress} />

            { isLoading &&
                <Text>Loading...</Text>
            }

            { chargePointData.length > 0 &&
                <ResultList items={chargePointData} />
            }
        </SafeAreaView>
    );
}