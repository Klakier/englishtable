/// <reference path="./../../../../typings/main.d.ts" />

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { textInputChanged,  inputAccepted } from './../actions';
import TextInput from './../components/TextInput';

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.inputText,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onInputAccepted: () => dispatch(inputAccepted()),
        onChange: (text) => dispatch(textInputChanged(text))
    };
};


const Input = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextInput);

export default Input;

