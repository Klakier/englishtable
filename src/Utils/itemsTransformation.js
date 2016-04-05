var shuffle = require('./shuffle.js');

var splitArray = function(array, chunkSize) {
    var result = [];
    if (chunkSize === 0) {
        return result;
    }

    var i, j;
    for (i = 0, j = array.length; i < j; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }

    return result;
};

var separate = function(array) {
    var result = {
        leftColumn: [],
        rightColumn: []
    };

    array.forEach(function(element) {
        result.leftColumn.push(element.left);
        result.rightColumn.push(element.right);
    });

    return result;
};

var mix = function(array) {
    var separated = separate(array);
    var result = [];

    var leftMixed = shuffle(separated.leftColumn);
    var rightMixed = shuffle(separated.rightColumn);
    for (var i = 0; i < leftMixed.length; i++) {
        result.push({
            left: leftMixed[i],
            right: rightMixed[i]
        });
    }

    return result;
};

export function transform(dictionary, elementsPerPage) {
    if (!dictionary) {
        return [];
    }

    if (dictionary.length === 0) {
        return [];
    }
    var splited = splitArray(dictionary, elementsPerPage);
    var result = [];

    for (var i = 0; i < splited.length; i++) {
        result.push({
            index: i,
            elements: mix(splited[i])
        });
    }

    return result;
}