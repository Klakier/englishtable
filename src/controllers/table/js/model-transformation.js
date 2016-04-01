const RowSeperator = '\n';
const ColumnsSepartor = '   ';

var isString = (value) => {
    return (typeof value === 'string' || value instanceof String);
};

var isArray = (value) => {
    return Object.prototype.toString.call(value) === '[object Array]';
};

var splitWithoutEmptyEntries = (array, separtor) => {
    return array.split(separtor).filter(v => v);
};

export function toTable(input) {
    if (isArray(input)) {
        return input;
    }

    var result = [];
    for (let row of splitWithoutEmptyEntries(input, RowSeperator)) {
        var {
            left,
            right
        } = splitWithoutEmptyEntries(row, ColumnsSepartor);

        result.push({
            left: left,
            right: right
        });
    }

    return result;
}

export function toText(input) {
    if (isString(input)) {
        return input;
    }

    var result = '';

    for (let row of input) {
        result += row.left + ColumnsSepartor + row.right + RowSeperator;
    }

    return result;
}