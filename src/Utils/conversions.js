
export function toArray(object, keyName = 'key') {
    var result = [];
    for (let key of Object.keys(object)) {
        var o = object[key];
        o[keyName] = key;
        result.push(o);
    }
    
    return result;
}
