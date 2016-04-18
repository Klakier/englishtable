/// <reference path="./../../../../typings/main.d.ts" />

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Input from '../containers/Input';
import Configuration from '../containers/Configuration';

export default class TableApp extends Component {
    render() {
        return (
            <div>
                <Header header={"HEADER"} />
                <Input />
                <Configuration />
            </div>
        );
    }
}
