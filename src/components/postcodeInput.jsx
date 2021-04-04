import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View
} from 'react-native';

const styles = StyleSheet.create({
    input: {
        padding: 10,
        marginBottom: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    buttonContainer: {
        marginBottom: 10
    }
});

export default function PostcodeInput({ onButtonPress }) {
    const [postcode, setPostcode] = useState('');

    return (
        <SafeAreaView>
            <TextInput
                onChangeText={setPostcode}
                value={postcode}
                placeholder='Enter Postcode'
                style={styles.input}
            />
            <View style={styles.buttonContainer}>
                <Button
                    onPress={() => onButtonPress(postcode)}
                    title='Search'
                    accessibilityLabel='Search for nearby charge points'
                    disabled={postcode.length < 5}
                    color='#2196f3'
                />
            </View>
        </SafeAreaView>
    );
};

PostcodeInput.propTypes = {
    onButtonPress: PropTypes.func
};
