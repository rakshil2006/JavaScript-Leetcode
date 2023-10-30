/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function(arr, n) {
  function flattenArrayWithDepth(arr, depth) {
    if (depth === 0) {
      // If depth is 0, return a copy of the original array
      return arr.slice();
    }

    const result = [];

    for (const element of arr) {
      if (Array.isArray(element) && depth > 0) {
        // If the element is an array and depth is not yet reached, recursively flatten it
        const flattened = flattenArrayWithDepth(element, depth - 1);
        result.push(...flattened);
      } else {
        // If the element is not an array or depth is reached, add it to the result
        result.push(element);
      }
    }

    return result;
  }

  return flattenArrayWithDepth(arr, n);
};

// Example usage:
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 2;
const flattenedArray = flat(arr, n);
console.log(flattenedArray);
