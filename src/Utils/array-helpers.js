export function removeItem(array, predicate) {
    let index = array.findIndex(predicate);
    if(index === -1) {
        return false;
    }
    
    array.slice(index, 1);
    return true;
}