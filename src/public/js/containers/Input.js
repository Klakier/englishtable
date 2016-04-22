/// <reference path="./../../../../typings/main.d.ts" />

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { configurationColumnTypeChanged, configurationColumnNameChanged} from './../reducers/input';
import InputTabs from './../components/InputTabs';

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.inputText,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTabChanged: (selectedTab, previousTab) => {
            console.log(`Selected tab: ${selectedTab}, previous tab: ${previousTab}.`);
        },

        onTextInputChanged: (input) => console.log(`New text input ${input}.`),

        onTableInputChanged: (input) => console.log(`New text input ${input}.`),
    };
};

const Input = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputTabs);

export default Input;

