import React, { Fragment, useEffect } from 'react'
import { Home } from './src/pages/Home';
import SplashScreen from 'react-native-splash-screen'

import {
    StatusBar
} from 'react-native'

export default function App() {

    useEffect(() => {
        SplashScreen.hide()
    }, []);

    return (
        <Fragment>
            <StatusBar barStyle="light-content" />
            <Home />
        </Fragment>
    )
}
