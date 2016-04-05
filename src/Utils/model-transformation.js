import * as objectInspections from './objectInspections';
const RowSeperator = '\n';
const ColumnsSepartor = '\t';

var isString = (value) => {
    return (typeof value === 'string' || value instanceof String);
};

var splitWithoutEmptyEntries = (array, separtor) => {
    return array.split(separtor).filter(v => v);
};
var tryDeduceSeparator = (value) => {
    var result = [];
    let matches = value.match(/(\s+)/g);
    matches.forEach(match => {
        var isTab = match.indexOf('\t') !== -1;
        result.push({
            priority: isTab ? match.length * 4 : match.length,
            value: match
        });
    });

    result.sort((a, b) => a.priority < b.priority);

    if (result.length === 0) {
        throw 'Can not deduce separator';
    }
    var separtor = result[0];

    return separtor.value;
};

var normalizeSpace = (value) => {
    return value.replace(/\s/g, ' ');
};

export function toTable(input) {
    if (objectInspections.isArray(input)) {
        return input;
    }

    var result = [];
    for (let row of splitWithoutEmptyEntries(input, RowSeperator)) {
        var rowValue = row.trim();
        if (rowValue === '') {
            continue;
        }
        var separator = tryDeduceSeparator(rowValue);
        var [left, right] = splitWithoutEmptyEntries(row, separator);
        left = normalizeSpace(left);
        right = normalizeSpace(right);

        result.push({
            left: left,
            right: right,
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