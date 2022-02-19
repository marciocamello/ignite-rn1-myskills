import React, { Fragment } from 'react'
import { Home } from './src/pages/Home';

import {
    StatusBar
} from 'react-native'

export default function App() {

    return (
        <Fragment>
            <StatusBar barStyle="light-content" />
            <Home />
        </Fragment>
    )
}
