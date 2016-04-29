/// <reference path="./../../../../typings/main.d.ts" />

import {toTable, toText} from './../../../../Utils/model-transformation';

const columnNames = {
    first: "sourceWord",
    second: "destinationWord"
};

class TextInput {
    static init() {
        return "";
    }

    static update(rows) {
        return toText(rows, columnNames);
    }

    static getRows(state) {
        let table = toTable(state, columnNames);
        return table.map((e,i) => { return {...e, rowId: i}});
    }
    
    static textChanged(newText) {
        return newText;
    }
}

export default TextInput;
