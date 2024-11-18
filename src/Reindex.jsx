
/**
 * Reindex.jsx
 * Component for displaying a reindexing overlay with transitions and animations.
 */

import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Reindex component.
 *
 * @param {{ visible: boolean, theme: object }} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered Reindex component.
 */
const Reindex = ({ visible, theme }) => {
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
                    height: theme.height,
                    width: theme.width,
                },
            ]}
        >
            <View style={styles.overscroll}>
                {/* Additional content for the reindex section can go here */}
            </View>
        </Animated.View>
    );
};

Reindex.propTypes = {
    visible: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        transition: '500ms',
    },
    overscroll: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Reindex;
