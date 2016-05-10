/// <reference path="./../../../../typings/main.d.ts" />

import {toTable, toText} from './../../../../Utils/model-transformation';

import {notNull} from '../../../../Utils/objectInspections';

const columnNames = {
    first: "sourceWord",
    second: "destinationWord"
};

class TextInput {
    static init() {
        return {
            text: "",
            errors: []
        }
    }

    static tableChanged(rows) {
        return {
            text: toText(rows, columnNames),
            errors: []
        };
    }

    static inputAccepted(state) {
        return {
            text: state.text,
            errors: []
        };
    }
   
    static setErrors(state, errors) {
        return {
            ...state,
            errors: errors
        };
    }

    static getRows(state) {
        try {
            let table = toTable(state.text, columnNames);
            let rows = table.map((e, i) => {
                return {...e, rowId: i}
            });
            return {
                errors: [],
                items: rows
            };
        }
        catch (e) {
            const errorMessage = notNull(e.message) ? e.message : e;
            return {
                items: undefined,
                errors: [errorMessage]
            }
        }
    }

    static textChanged(state, newText) {
        return {
            ...state,
            text: newText
        };
    }
}

export default TextInput;
