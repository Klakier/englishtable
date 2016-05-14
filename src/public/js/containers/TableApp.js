/// <reference path="./../../../../typings/main.d.ts" />

import React, {Component, PropTypes} from 'react';
import Header from '../components/Header';
import Input from '../containers/Input';
import ErrorNotifications from './ErrorPopup';
import Configuration from '../containers/Configuration';
import Print from '../containers/Print';

export default class TableApp extends Component {
    render() {
        return (
            <div className="container">
                <Header header={"HEADER"}/>
                <Input />
                <Configuration />
                <Print />
                <ErrorNotifications />
            </div>
        );
    }
}
