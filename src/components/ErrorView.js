import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { typography, colors } from '../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function ErrorView({ errors }) {

  if (errors.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {errors.map((error) => (
        <Text key={error} style={[typography.error, { color: colors.punchColor }]}>
          {error}
        </Text>
      ))}
    </View>
  );
}
