import { Dimensions, Image, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { persistor, store } from './store';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { RootNavigator } from './navigation';
import { colors } from './theme';
import { logo } from './assets';

const deviceWidth = Dimensions.get('screen').width;

export function App() {

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])

    if (!isLoading)
        return (
            <Provider store={store}>
                <PersistGate
                    persistor={persistor}>
                    <RootNavigator />
                </PersistGate>
            </Provider>
        )
    else return (
        <View style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: colors.white
        }}>
            <Image style={{
                height: deviceWidth / 2,
                width: deviceWidth / 2,
                resizeMode: 'contain'
            }} source={logo} />
        </View>
    )
}
