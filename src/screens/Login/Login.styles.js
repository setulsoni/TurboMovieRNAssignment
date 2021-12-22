import { Dimensions, StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme';

const deviceWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.white
  },
  buttonContainerStyle: {
    width: deviceWidth / 2,
    alignSelf: 'center',
    marginTop: 16
  },
  logoStyle: {
    height: deviceWidth / 2,
    width: deviceWidth / 2,
    resizeMode: 'contain'
  }
});
