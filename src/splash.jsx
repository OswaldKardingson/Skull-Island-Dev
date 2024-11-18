
/**
 * Splash.jsx
 * Component for displaying the splash screen with gradients and animations.
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

/**
 * Splash component.
 *
 * @param {{ theme: object }} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered Splash component.
 */
const Splash = ({ theme }) => {
    return (
        <View style={[styles.container, { width: theme.width, height: theme.height }]}>
            <LinearGradient
                colors={['rgba(187,150,69,1)', 'rgba(255,255,255,0)']}
                style={[styles.headerFade, { width: theme.width, height: theme.height * 0.25 }]}
            >
                {/* Splash screen content can be added here */}
            </LinearGradient>
        </View>
    );
};

Splash.propTypes = {
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
        textAlign: 'center',
    },
    headerFade: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

export default Splash;
