/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    var object = {};
    for(let i = 0; i < arr1.length; i++)
    {
        var o = arr1[i];
        object[o.id] = Object.assign(object[o.id] || {}, o);
    }
    for(let i = 0; i < arr2.length; i++)
    {
        var o = arr2[i];
        object[o.id] = Object.assign(object[o.id] || {}, o);
    }
    var joinedArray = Object.values(object);
    joinedArray.sort(function(a, b){
        return a.id - b.id;
    });
    return joinedArray;
};
