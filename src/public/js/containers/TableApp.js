/// <reference path="./../../../../typings/main.d.ts" />

import React, {Component, PropTypes} from 'react';
import Header from '../components/Header';
import Input from '../containers/Input';
import ErrorNotifications from './ErrorPopup';
import Configuration from '../containers/Configuration';

export default class TableApp extends Component {
    render() {
        return (
            <div className="container">
                <Header header={"HEADER"}/>
                <Input />
                <Configuration />
                <ErrorNotifications />
            </div>
        );
    }
}
