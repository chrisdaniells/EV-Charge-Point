import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listItemTitle: {
      fontWeight: 'bold'
    }
});

export default function ResultList({
    items,
    onItemSelect,
    selectedItemId
}) {
    function renderResultsList() {
        return items.map(item => (
            <View key={item.chargerId} style={styles.listItem}>
                <View>
                    <Text style={styles.listItemTitle}>{item.title}</Text>
                    <Text>{item.town}</Text>
                    <Text>{item.postcode}</Text>
                    <Text>{item.distance} miles away</Text>
                </View>
                <View>
                    <Button
                        onPress={() => onItemSelect(item.chargerId)}
                        title={item.chargerId === selectedItemId ? 'Selected' : 'Select'}
                        accessibilityLabel='Select Charge Point'
                        color={item.chargerId === selectedItemId ? '#57ab28' : '#2196f3'}
                    />
                </View>
            </View>
        ));
    }

    return (
        <SafeAreaView>
            {renderResultsList()}
        </SafeAreaView>
    );
};

ResultList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        town: PropTypes.string,
        postcode: PropTypes.string,
        distance: PropTypes.string,
        chargerId: PropTypes.number
    })),
    onItemSelect: PropTypes.func,
    selectedItemId: PropTypes.number
};
