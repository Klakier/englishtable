/// <reference path="./../../../typings/main.d.ts" />

import keyMirror from 'keymirror';
import * as objectInspection from '../../Utils/objectInspections';

var columnTypes = keyMirror({
    SequenceNumber: null,
    Original: null,
    Translated: null,
    Space: null,
    EmptyColumn: null
});

var createDefaultConfiguration = (columnTypes) => {
    var result = {};
    for (let i = 0; i < columnTypes.length; i++) {
        result[i.toString()] = {
            id: i,
            columnName: '',
            columnType: columnTypes[i]
        };
    }

    return result;
};

var configuration = createDefaultConfiguration([
    columnTypes.SequenceNumber,
    columnTypes.Original,
    columnTypes.Space,
    columnTypes.EmptyColumn,
    columnTypes.Translated,
]);

export function getConfiguration() {
    var result = [];
    for (let key of Object.keys(configuration)) {
        result.push(configuration[key]);
    }

    return result;
}

export function updateConfiguration(option) {
    configuration[option.id] = option;
}