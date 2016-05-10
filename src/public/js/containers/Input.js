/// <reference path="./../../../../typings/main.d.ts" />

import {connect} from 'react-redux';

import {
    newRowAdded,
    rowRemoved,
    tableInputChanged,
    textInputChanged,
    trySwitchToTextMode,
    trySwitchToTableMode,
    tableInputSynchronized,
    textInputSynchronized,

} from '../reducers/dictionary';

import InputTabs from '../components/InputTabs';

const mapStateToProps = (state) => {
    console.log(state.dictionary.textInput);
    
    return {
        items: state.dictionary.input,
        text: state.dictionary.textInput.text,
        selectedTab: state.dictionary.inputType.selectedTab
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTabChanged: (selectedTab, previousTab) => {
            console.log(`Selected tabs: ${selectedTab}, previous tab : ${previousTab}.`);
            if(selectedTab === 0) {
                dispatch(tableInputSynchronized());
                dispatch(trySwitchToTextMode());
            } else {
                dispatch(textInputSynchronized());
                dispatch(trySwitchToTableMode());
            }
            return selectedTab;
        },

        onTextInputChanged: (text) => dispatch(textInputChanged(text)),

        onTextInputAccepted: () => dispatch(textInputSynchronized()),
        
        onTextInputDiscarded: () =>dispatch(tableInputSynchronized()),

        onTableInputChanged: (rowId, sourceWord, destinationWord) => {
            console.log(`New text input ${sourceWord}, ${destinationWord}.`);
            dispatch(tableInputChanged({rowId, sourceWord, destinationWord}));
        },

        onRemoveRowBtnClicked: (rowId) => dispatch(rowRemoved({rowId})),

        onNewRowBtnClicked: () => dispatch(newRowAdded())
    };
};

const Input = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputTabs);

export default Input;

