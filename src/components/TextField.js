import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, spacing } from '../theme';

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: spacing.m,
    borderRadius: spacing.m,
    width: '100%',
  },
  input: {
    paddingHorizontal: spacing.s,
    paddingVertical: spacing.s,
    color: colors.textColor
  },
});

export function TextField({ onBlur, onFocus,
  placeholder, value, textInputContainerStyle, ...rest }) {

  return (
    <View style={[styles.container, textInputContainerStyle]}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        {...rest}
        placeholderTextColor={colors.grayOne}
      />
    </View>
  );
}