import * as objectInspections from './objectInspections';
const RowSeparator = '\n';
const ColumnsSeparator = '\t';

var isString = (value) => {
    return (typeof value === 'string' || value instanceof String);
};

var splitWithoutEmptyEntries = (array, separator) => {
    return array.split(separator).filter(v => v);
};

var tryDeduceSeparator = (value) => {
    var result = [];
    let matches = value.match(/(\s+)/g);
    if(matches === null) {
        throw `Missing space in line '${value}'.`
    }
    
    matches.forEach(match => {
        var isTab = match.indexOf('\t') !== -1;
        result.push({
            priority: isTab ? match.length * 4 : match.length,
            value: match
        });
    });

    result.sort((a, b) => a.priority < b.priority);

    if (result.length === 0) {
        throw `Can not deduce separator for line '${value}'`;
    }

    var separator = result[0];
    var numberOfSeparators = result.filter(i => i.value == separator.value ).length;

    if(numberOfSeparators > 1) {
        throw `Characters '${separator.value}' was elected as separator but it contains ${numberOfSeparators} times in line '${value}'.
        Allowed is only one occurrence of selected separator`;
    }

    return separator.value;
};

var normalizeSpace = (value) => {
    return value.replace(/\s/g, ' ');
};

export function toTable(text, columnNames = {first: "left", second: "right"}) {
    if (objectInspections.isArray(text)) {
        return text;
    }

    var result = [];
    for (let row of splitWithoutEmptyEntries(text, RowSeparator)) {
        var rowValue = row.trim();
        if (rowValue === '') {
            continue;
        }
        var separator = tryDeduceSeparator(rowValue);
        var [left, right] = splitWithoutEmptyEntries(row, separator);
        left = normalizeSpace(left);
        right = normalizeSpace(right);

        result.push({
            [columnNames.first]: left,
            [columnNames.second]: right
        });
    }

    return result;
}

export function toText(rows, columnNames = {first: "left", second: "right"}) {
    if (isString(rows)) {
        return rows;
    }

    var result = '';

    for (let row of rows) {
        result += row[columnNames.first] + ColumnsSeparator + row[columnNames.second] + RowSeparator;
    }

    return result;
}