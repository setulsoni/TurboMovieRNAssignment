import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../theme';

const deviceWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  buttonContainerStyle: {
    width: deviceWidth / 2,
    alignSelf: 'center'
  },
  logoStyle: {
    height: deviceWidth / 2,
    width: deviceWidth / 2,
    resizeMode: 'contain'
  }
});
