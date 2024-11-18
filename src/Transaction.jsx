
/**
 * Transaction.jsx
 * Component for displaying transaction details with responsive layout.
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Transaction component.
 *
 * @param {{ theme: object }} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered Transaction component.
 */
const Transaction = ({ theme }) => {
    return (
        <View style={[styles.container, { width: theme.width, height: theme.height * 0.9 }]}>
            <View style={styles.overScroll}>
                {/* Transaction details can go here */}
            </View>
        </View>
    );
};

Transaction.propTypes = {
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
        zIndex: 98,
    },
    overScroll: {
        flex: 1,
    },
});

export default Transaction;
