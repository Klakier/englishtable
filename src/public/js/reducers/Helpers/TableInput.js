/// <reference path="./../../../../typings/main.d.ts" />

class TableInput {
    static tableChanged(newTable) {
        return newTable;
    }
}

TableInput.add = (state, row) => {
    return [
        ...state,
        row
    ];
};

TableInput.remove = (state, rowId) => {
    let index = state.findIndex(ele => ele.rowId == rowId);
    if (index === -1) {
        return state;
    }
    return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
    ];
};

TableInput.inputChanged = (state, row) => {
    console.info('Should be removed');
    let index = state.findIndex(ele => ele.rowId == row.rowId);
    if (index === -1) {
        throw `Element with rowId ${row.rowId} not found`;
    }

    return [
        ...state.slice(0, index),
        row,
        ...state.slice(index + 1)
    ]
};

TableInput.init = () => {
    return [];
};

export default TableInput;
