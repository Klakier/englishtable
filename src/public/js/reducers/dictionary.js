/// <reference path="./../../../../typings/main.d.ts" />

import {createAction} from 'redux-actions';
import Input from './Input';
import Output from './output';

export const INPUT_TEXT_CHANGED = 'INPUT_TEXT_CHANGED';
export const TABLE_INPUT_CHANGED = 'TABLE_INPUT_CHANGED';

export const NEW_ROW_ADDED = "TABLE_INPUT_NEW_ROW_ADDED";
export const ROW_REMOVED = "TABLE_INPUT_ROW_REMOVED";

export const INIT= "@@INIT";

export const inputTextChanged = createAction(INPUT_TEXT_CHANGED);
export const tableInputChanged = createAction(TABLE_INPUT_CHANGED);
export const newRowAdded = createAction(NEW_ROW_ADDED);
export const rowRemoved = createAction(ROW_REMOVED);

let key = 0;
const getNextKey = () => {
    key = key + 1;
    return key;
};

const reducer = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case INIT:
            return {
                input: Input.init(),
                output: Output.init()
            };
        
        case NEW_ROW_ADDED:
            var rowId = getNextKey();
            let row = {rowId: rowId, sourceWord: '', destinationWord: ''};
            return {
                input: Input.add(state.input, row),
                output: Output.add(state.output, row)
            };

        case ROW_REMOVED:
            return {
                input: Input.remove(state.input, action.payload.rowId),
                output: Output.remove(state.output, action.payload.rowId)
            };

        case TABLE_INPUT_CHANGED:
            return {
                input: Input.inputChanged(state.input, action.payload),
                output: Output.inputChanged(state.output, action.payload)
            };
    }

    return state;
};

export default reducer;
