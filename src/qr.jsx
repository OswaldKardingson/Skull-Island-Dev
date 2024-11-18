
/**
 * QR.jsx
 * Component for displaying and managing a QR code scanning overlay.
 */

import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types';

/**
 * QR component.
 *
 * @param {{ qrScanning: object, theme: object }} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered QR component.
 */
const QR = ({ qrScanning, theme }) => {
    const opacity = new Animated.Value(qrScanning.opacity);

    React.useEffect(() => {
        Animated.timing(opacity, {
            toValue: qrScanning.opacity,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [qrScanning.opacity]);

    return (
        <Animated.View
            testID="container"
            style={[
                styles.container,
                {
                    top: theme.topBuffer,
                    height: theme.height,
                    width: theme.width,
                    opacity: opacity,
                },
            ]}
        >
            <View style={styles.leftContainer}>
                {/* Additional QR scanning elements can go here */}
            </View>
        </Animated.View>
    );
};

QR.propTypes = {
    qrScanning: PropTypes.shape({
        opacity: PropTypes.number.isRequired,
        display: PropTypes.string.isRequired,
    }).isRequired,
    theme: PropTypes.shape({
        topBuffer: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
    },
    leftContainer: {
        position: 'absolute',
        top: '30%',
        left: '5%',
    },
});

export default QR;
