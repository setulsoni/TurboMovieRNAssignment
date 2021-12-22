import { Dimensions, StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme';

const deviceWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainerStyle: {
    width: deviceWidth / 2,
    alignSelf: 'center',
    marginTop: 16
  },
  logoStyle: {
    height: deviceWidth / 2,
    width: deviceWidth / 2
  },
  emptyText: {
    fontSize: 16,
    color: colors.textColor
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
});
