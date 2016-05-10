/// <reference path="./../../../../typings/main.d.ts" />

import {createAction} from 'redux-actions';
import TableInput from './Helpers/TableInput';
import TextInput from './Helpers/TextInput';
import Output from './Helpers/Output';
import InputType from './Helpers/InputType';

export const TEXT_INPUT_CHANGED = 'TEXT_INPUT_CHANGED';

export const TABLE_INPUT_CHANGED = 'TABLE_INPUT_CHANGED';
export const NEW_ROW_ADDED = "TABLE_INPUT_NEW_ROW_ADDED";
export const ROW_REMOVED = "TABLE_INPUT_ROW_REMOVED";

export const TEXT_INPUT_SYNCHRONIZED = 'TEXT_INPUT_SYNCHRONIZED';
export const TABLE_INPUT_SYNCHRONIZED = "TABLE_INPUT_SYNCHRONIZED";
export const TRY_SWITCH_TO_TEXT_MODE = "TRY_SWITCH_TO_TEXT_MODE";
export const TRY_SWITCH_TO_TABLE_MODE = "TRY_SWITCH_TO_TABLE_MODE";
export const INIT = "@@redux/INIT";

export const textInputChanged = createAction(TEXT_INPUT_CHANGED, (text) => text);
export const tableInputChanged = createAction(TABLE_INPUT_CHANGED);
export const newRowAdded = createAction(NEW_ROW_ADDED);
export const rowRemoved = createAction(ROW_REMOVED);

export const trySwitchToTextMode = createAction(TRY_SWITCH_TO_TEXT_MODE);
export const trySwitchToTableMode = createAction(TRY_SWITCH_TO_TABLE_MODE);
export const tableInputSynchronized = createAction(TABLE_INPUT_SYNCHRONIZED);
export const textInputSynchronized = createAction(TEXT_INPUT_SYNCHRONIZED);


let key = 0;
const getNextKey = () => {
    key += 1;
    return key;
};

const reducer = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case INIT:
            return {
                inputType: InputType.init(),
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

        case TEXT_INPUT_CHANGED:
            return {
                ...state,
                textInput: TextInput.textChanged(state.textInput, action.payload)
            };

        case TABLE_INPUT_SYNCHRONIZED:
        {
            const rows = TableInput.getRows(state.input);

            return {
                inputType: InputType.clearErrors(state.inputType),
                textInput: TextInput.tableChanged(rows),
                input: TableInput.tableAccepted(state.input),
                output: Output.tableChanged(rows)
            };
        }

        case TEXT_INPUT_SYNCHRONIZED:
        {
            const rows = TextInput.getRows(state.textInput);

            if (rows.errors.length > 0) {
                return {
                    ...state,
                    inputType: InputType.setErrors(state.inputType, rows.errors),
                    textInput: TextInput.setErrors(state.textInput, rows.errors)
                }
            }

            return {
                inputType: InputType.clearErrors(state.inputType),
                textInput: TextInput.inputAccepted(state.textInput),
                input: TableInput.tableAccepted(rows.items),
                output: Output.tableChanged(rows.items)
            };
        }

        case TRY_SWITCH_TO_TEXT_MODE:
            return {
                ...state,
                inputType: InputType.trySwitchToTextMode(state.inputType)
            };

        case TRY_SWITCH_TO_TABLE_MODE:
            return {
                ...state,
                inputType: InputType.trySwitchToTableMode(state.inputType)
            };
    }

    return state;
};

export default reducer;
