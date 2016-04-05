export function isDefined(object) {
    return (typeof object !== 'undefined');
}

export function isEmpty(object) {
    return !isDefined(object) || Object.keys(object).length === 0;
}

export function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}
