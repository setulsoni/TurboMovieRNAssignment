import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const typography = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textColor
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.textColor
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textColor
  },
  error: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.red
  },
});
