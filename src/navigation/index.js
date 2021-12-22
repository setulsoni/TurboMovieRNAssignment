import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppNavigator } from '../navigation/AppNavigator';
import { AuthNavigator } from '../navigation/AuthNavigator';
import { getUser } from '../selectors/UserSelectors';
import { useSelector } from 'react-redux';

export function RootNavigator() {
  const user = useSelector(getUser);
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
