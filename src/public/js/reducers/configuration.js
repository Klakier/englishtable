/// <reference path="./../../../../typings/main.d.ts" />

import * as objectInspections from './../../../Utils/objectInspections';
import {
    createAction
} from 'redux-actions';

import {columnTypes, columnNames} from './../columnTypes';

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
            name
        };
    });

var initialConfiguration = () => {
    return {
        0: {
            selectedOption: columnTypes.OrdinaryNumber,
            columnName: '',
            options: columnNames,
        },
        1: {
            // TOD Id should be used.
            selectedOption: columnTypes.OriginalWord,
            columnName: '',
            options: columnNames,
        },
        2: {
            selectedOption: columnTypes.Space,
            columnName: '',
            options: columnNames
        },
        3: {
            selectedOption: columnTypes.Space,
            columnName: '',
            options: columnNames
        },
        4: {
            selectedOption: columnTypes.TranslatedWord,
            columnName: '',
            options: columnNames
        }
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