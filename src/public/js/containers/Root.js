/// <reference path="./../../../../typings/main.d.ts" />

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import TableApp from './TableApp';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <TableApp />
            </Provider>
        );
    }
}
