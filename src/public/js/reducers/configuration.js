/// <reference path="./../../../../typings/main.d.ts" />

import * as objectInspections from './../../../Utils/objectInspections';
import {
    createAction
} from 'redux-actions';

export const CONFIGURATION_COLUMN_TYPE_CHANGED = 'CONFIGURATION_COLUMN_TYPE_CHANGED';
export const CONFIGURATION_COLUMN_NAME_CHANGED = 'CONFIGURATION_COLUMN_NAME_CHANGED';

export const configurationColumnTypeChanged = createAction(
    CONFIGURATION_COLUMN_TYPE_CHANGED,
    (columnId, optionId) => {
        return {
            columnId,
            optionId,
        };
    }
);

export const configurationColumnNameChanged = createAction(
    CONFIGURATION_COLUMN_NAME_CHANGED,
    (columnId, name) => {
        return {
            columnId,
            name,
        };
    });

var options = {
    Space: 'Empty',
    SequenceNumber: 'SequenceNumber',
    OrginalWord: 'Orginal word',
    TransalatedWord: 'Transalted word',
};

var key = 0;
var availableOptions = [];
for (let option of Object.keys(options)) {
    availableOptions.push({
        key: key,
        text: options[option]
    });
    key++;
}

var initialConfiguration = () => {
    return {
        0: {
            selectedOption: 1,
            columnName: '',
            options: availableOptions,
        },
        1: {
            // TOD Id should be used.
            selectedOption: 1,
            columnName: '',
            options: availableOptions,
        },
        2: {
            selectedOption: 1,
            columnName: '',
            options: availableOptions,
        },
        3: {
            selectedOption: 1,
            columnName: '',
            options: availableOptions,
        },
        4: {
            selectedOption: 1,
            columnName: '',
            options: availableOptions,
        },
    };
};

export function reducer(state, action) {
    if (!objectInspections.isDefined(state)) {
        state = initialConfiguration();
    }

    let createObject = (key, value) => {
        let result = {};
        result[key] = value;
        return result;
    };

    switch (action.type) {
        case CONFIGURATION_COLUMN_TYPE_CHANGED:
            let c1 = Object.assign({}, state[action.payload.columnId], {
                selectedOption: action.payload.optionId
            });
            return Object.assign({}, state, createObject(action.payload.columnId, c1));
        case CONFIGURATION_COLUMN_NAME_CHANGED:
            let c2 = Object.assign({}, state[action.payload.columnId], {
                columnName: action.payload.name
            });
            return Object.assign({}, state, createObject(action.payload.columnId, c2));
    }

    return state;
}

export default reducer;