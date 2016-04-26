/// <reference path="./../../../../typings/main.d.ts" />

import {createAction} from 'redux-actions';
import tabTypes from './../tabTypes';
import TableInput from './Helpers/TableInput';
import TextInput from './Helpers/TextInput';
import Output from './Helpers/Output';

export const TEXT_INPUT_ACCEPTED = 'TEXT_INPUT_ACCEPTED';
export const TABLE_INPUT_CHANGED = 'TABLE_INPUT_CHANGED';
export const NEW_ROW_ADDED = "TABLE_INPUT_NEW_ROW_ADDED";
export const ROW_REMOVED = "TABLE_INPUT_ROW_REMOVED";
export const INPUT_METHOD_CHANGED = "INPUT_METHOD_CHANGED";
export const INIT = "@@INIT";

export const textInputAccepted = createAction(TEXT_INPUT_ACCEPTED, (text) => text);
export const tableInputChanged = createAction(TABLE_INPUT_CHANGED);
export const newRowAdded = createAction(NEW_ROW_ADDED);
export const rowRemoved = createAction(ROW_REMOVED);
export const inputMethodChanged = createAction(
    INPUT_METHOD_CHANGED,
    (selectedInput, prevInput) => {
        return {selectedInput, prevInput};
    }
);


let key = 0;
const getNextKey = () => {
    key += 1;
    return key;
};

const acceptTextInput = (state, textInput) => {
    var newTable = TextInput.getRows(textInput);

    return {
        textInput: textInput,
        input: TableInput.tableChanged(newTable),
        output: Output.tableChanged(newTable)
    };
};

const handleInputMethodChanged =(state, selectedInput) => {
    switch (selectedInput) {
        case 0: // TODO Has to be changed to some identifiers
            return acceptTextInput(state, state.textInput);
        case 1: // The same as above
            return {
                ...state,
                textInput: TextInput.update(state.input)
            };
        default:
            throw `Unknown input type ${selectedInput}`;
    }
};

const reducer = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case INIT:
            return {
                input: TableInput.init(),
                textInput: TextInput.init(),
                output: Output.init()
            };

        case NEW_ROW_ADDED:
            var rowId = getNextKey();
            let row = {rowId: rowId, sourceWord: '', destinationWord: ''};
            return {
                ...state,
                input: TableInput.add(state.input, row),
                output: Output.add(state.output, row)
            };

        case ROW_REMOVED:
            return {
                ...state,
                input: TableInput.remove(state.input, action.payload.rowId),
                output: Output.remove(state.output, action.payload.rowId)
            };

        case TABLE_INPUT_CHANGED:
            return {
                ...state,
                input: TableInput.inputChanged(state.input, action.payload),
                output: Output.inputChanged(state.output, action.payload)
            };
        case TEXT_INPUT_ACCEPTED:
            return acceptTextInput(state, action.payload);

        case INPUT_METHOD_CHANGED:
            return handleInputMethodChanged(state, action.payload.selectedInput);
    }

    return state;
};

export default reducer;
