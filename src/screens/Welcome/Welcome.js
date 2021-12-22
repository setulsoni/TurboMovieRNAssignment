import React from 'react';
import { Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './Welcome.styles';
import { typography } from '../../theme';
import { Strings } from '../../constants';
import { logo } from '../../assets';
import { Button } from '../../components';

export function Welcome(props) {

  const onPressGettingStart = () => {
    props.navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={logo} />
      <Text style={[typography.title, { fontSize: 24 }]}>
        {Strings.welcome.toUpperCase()}
      </Text>
      <Button
        onPress={onPressGettingStart}
        title={Strings.getting_start.toUpperCase()}
        buttonContainerStyle={styles.buttonContainerStyle}
      />
    </View>
  );
}
