
/**
 * ZMain.jsx
 * Component for displaying the main Z interface with visibility transitions.
 */

import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types';

/**
 * ZMain component.
 *
 * @param {{ visible: boolean, theme: object }} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered ZMain component.
 */
const ZMain = ({ visible, theme }) => {
    const visibility = new Animated.Value(visible ? 1 : 0);

    React.useEffect(() => {
        Animated.timing(visibility, {
            toValue: visible ? 1 : 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    opacity: visibility,
                    width: theme.width,
                    height: theme.height,
                },
            ]}
        >
            <View style={styles.blackBackground}>
                {/* ZMain content can go here */}
            </View>
        </Animated.View>
    );
};

ZMain.propTypes = {
    visible: PropTypes.bool.isRequired,
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
    blackBackground: {
        backgroundColor: '#000000',
        flex: 1,
    },
});

export default ZMain;
