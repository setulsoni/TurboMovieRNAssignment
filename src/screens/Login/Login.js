
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './Login.styles';
import { logo } from '../../assets';
import { Button, TextField, ErrorView } from '../../components';
import { spacing, typography } from '../../theme';
import { Strings } from '../../constants';
import { login } from '../../actions/UserActions';

const testUserName = "admin";
const testPassword = "admin";

export function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);

  const onPressLoginBtn = () => {
    let tempError = [];
    if (username == '') {
      tempError.push('Please enter User name.');
    } else if (username != testUserName) {
      tempError.push('Please enter valid User name.');
    }
    if (password == '') {
      tempError.push('Please enter Password.');
    } else if (password != testPassword) {
      tempError.push('Please enter valid Password.');
    }
    setError(tempError)
    if (tempError.length == 0) {
      dispatch(login({ username, password }));
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={logo} />

      <TextField
        textInputContainerStyle={{ marginTop: spacing.l }}
        autoCapitalize="none"
        placeholder={Strings.user_name}
        accessibilityLabel={Strings.user_name}
        onChangeText={setUsername}
        placeholder={Strings.user_name}
        value={username}
      />
      <TextField
        secureTextEntry
        accessibilityHint={Strings.password}
        accessibilityLabel={Strings.password}
        autoCapitalize="none"
        onChangeText={setPassword}
        placeholder={Strings.password}
        textContentType="password"
        value={password}
      />
      <ErrorView errors={error} />

      <Button
        onPress={onPressLoginBtn}
        title={Strings.login.toUpperCase()}
        buttonContainerStyle={styles.buttonContainerStyle}
      />
    </View>
  );
}
