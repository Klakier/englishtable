/// <reference path="./../../../../typings/main.d.ts" />

import {connect} from 'react-redux';

import {
    newRowAdded,
    rowRemoved,
    tableInputChanged
} from '../reducers/dictionary';
import InputTabs from './../components/InputTabs';

const mapStateToProps = (state) => {
    for(let key of Object.keys(state)) {
        console.log(key);
    }
    console.log(state);
    console.log(state.dictionary.input);
    return {
        items: state.dictionary.input
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTabChanged: (selectedTab, previousTab) => {
            console.log(`Selected tab: ${selectedTab}, previous tab: ${previousTab}.`);
        },

        onTextInputChanged: (input) => console.log(`New text input ${input}.`),

        onTableInputChanged: (rowId, sourceWord, destinationWord) => {
            console.log(`New text input ${sourceWord}, ${destinationWord}.`);
            dispatch(tableInputChanged({rowId, sourceWord, destinationWord}));
        },

        onRemoveRowBtnClicked : (rowId) => dispatch(rowRemoved({rowId})),

        onNewRowBtnClicked: () => dispatch(newRowAdded())
    };
};

const Input = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputTabs);

export default Input;

