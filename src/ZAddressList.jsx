
/**
 * ZAddressList.jsx
 * Component for displaying a scrollable list of Z addresses.
 */

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

/**
 * ZAddressList component.
 *
 * @param {{ theme: object }} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered ZAddressList component.
 */
const ZAddressList = ({ theme }) => {
    return (
        <ScrollView
            style={[styles.container, { width: theme.width, height: theme.height * 0.1625 }]}
            contentContainerStyle={styles.scrollContent}
        >
            <View style={[styles.overScroll, { marginLeft: theme.width * 0.05 }]}>
                {/* Z address items can be rendered here */}
            </View>
        </ScrollView>
    );
};

ZAddressList.propTypes = {
    theme: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    scrollContent: {
        flexGrow: 1,
    },
    overScroll: {
        flex: 1,
    },
});

export default ZAddressList;
