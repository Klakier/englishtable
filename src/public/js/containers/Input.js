/// <reference path="./../../../../typings/main.d.ts" />

import {connect} from 'react-redux';

import {
    newRowAdded,
    rowRemoved,
    tableInputChanged,
    textInputChanged,
    textInputAccepted,
    inputMethodChanged
} from '../reducers/dictionary';

import InputTabs from '../components/InputTabs';

const mapStateToProps = (state) => {
    return {
        items: state.dictionary.input,
        text: state.dictionary.textInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTabChanged: (selectedTab, previousTab) => {
            dispatch(inputMethodChanged(selectedTab, previousTab));
            console.log(`Selected tab: ${selectedTab}, previous tab : ${previousTab}.`);
            return selectedTab;
        },
        
        onTextInputChanged: (text) => dispatch(textInputChanged(text)),

        onTextInputAccepted: () => dispatch(textInputAccepted()),

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

