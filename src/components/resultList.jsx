import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

export default function ResultList({ items }) {

    function renderResultsList() {
        const list = items.map(item => (
            <View key={item.chargerId}>
                <Text>{item.title}</Text>
                <Text>{item.town}</Text>
                <Text>{item.postcode}</Text>
                <Text>{item.distance}</Text>
            </View>
        ));

        return list;
    }

    return (
        <SafeAreaView>
            {renderResultsList()}
        </SafeAreaView>
    )

};

ResultList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        town: PropTypes.string,
        postcode: PropTypes.string,
        distance: PropTypes.number,
        chargerId: PropTypes.number
    }))
};
