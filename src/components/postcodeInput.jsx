import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    TextInput
} from 'react-native';

export default function PostcodeInput({ onButtonPress }) {
    const [postcode, setPostcode] = useState('');

    return (
        <SafeAreaView>
            <TextInput
                onChangeText={setPostcode}
                value={postcode}
                placeholder='Enter Postcode'
            />
            <Button
                onPress={() => onButtonPress(postcode)}
                title='Search'
                accessibilityLabel='Search for nearby charge points'
                disabled={postcode.length < 5}
            />
        </SafeAreaView>
    );
};

PostcodeInput.propTypes = {
    onButtonPress: PropTypes.func
};