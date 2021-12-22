import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Text,
    View
} from 'react-native';
import { colors, typography } from '../../theme';

import { AirbnbRating } from 'react-native-ratings';
import ImageLoad from '../../components/ImageLoad';
import styles from './MovieItem.styles';

export default function MovieItem(props) {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ImageLoad
                    style={{ height: 140, width: 120 }}
                    source={{ uri: props.movieItemData?.medium_cover_image || 'null' }}
                />
                <View style={styles.infoContainer}>

                    <Text numberOfLines={2} style={[typography.label, { flexWrap: 'wrap' }]}>{props.movieItemData?.title}</Text>
                    <AirbnbRating
                        showRating={false}
                        isDisabled={true}
                        count={5}
                        size={18}
                        style={{ paddingVertical: 0 }}
                    />
                    <Text numberOfLines={2} style={[typography.text, { color: colors.primary, fontSize: 14 }]}>{props.movieItemData?.genres.join(' | ') || ''}</Text>
                </View>
            </View>
        </View>
    );
}
