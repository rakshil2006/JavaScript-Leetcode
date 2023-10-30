/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // using built in map method:
    // return arr.map((element, index) => fn(element, index));

    // using without built in map method:
    const res = [];
    for(let i = 0; i < arr.length; i++)
    {
        res.push(fn(arr[i], i));
    }
    return res;
};
