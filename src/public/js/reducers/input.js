/// <reference path="./../../../../typings/main.d.ts" />

import {createAction} from 'redux-actions';

export const INPUT_TEXT_CHANGED = 'INPUT_TEXT_CHANGED';
export const TABLE_INPUT_CHANGED = 'TABLE_INPUT_CHANGED';

export const InputTextChanged = createAction(INPUT_TEXT_CHANGED);
export const tableInputChanged = createAction(tableInputChanged);

export function reducer(state, action) {
    switch (action.type) {
        case INPUT_TEXT_CHANGED:
            return state;
        case TABLE_INPUT_CHANGED:
            return state;
    }
}

export default reducer;
