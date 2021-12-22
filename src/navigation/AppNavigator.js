import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION, Strings } from '../constants';
import { MovieList } from '../screens';
import { colors } from '../theme';
import { logout } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator>
      <Stack.Screen component={MovieList}
        name={NAVIGATION.movieList}
        options={{
          headerTitleAlign: 'center',
          title: Strings.movie_turbo,
          headerTintColor: colors.primary,
          headerRight: () => (
            <Text
              onPress={() => { dispatch(logout()) }}
              style={{ color: colors.punchColor }}
            >Logout</Text>
          ),
        }}
      />
    </Stack.Navigator>
  )
}
