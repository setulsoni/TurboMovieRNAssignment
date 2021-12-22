import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { colors, typography } from '../theme';

import React from 'react';

const styles = StyleSheet.create({
  button: {
    height: '6%',
    borderRadius: 20,
    backgroundColor: colors.primary,
    overflow: 'hidden'
  }
});

export const Button = props => (
  <View style={[styles.button, props.buttonContainerStyle]}>
    <Pressable
      {...props}
      disabled={props.isLoading || props.disabled}
      android_ripple={{
        color: colors.mediumDarkText,
      }}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!props.isLoading ?
        <Text
          style={[typography.label, {
            textAlign: 'center',
            textAlignVertical: 'center', color: colors.white
          }, props.textStyle]}
        >
          {props.title}
        </Text> :
        <ActivityIndicator size="small" color={colors.white} />
      }
    </Pressable>
  </View>
);
