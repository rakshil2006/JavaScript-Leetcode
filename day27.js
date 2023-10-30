/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // Return non-objects or null as is
  }

  if (Array.isArray(obj)) {
    // If it's an array, compact its elements
    return obj.map(item => compactObject(item)).filter(Boolean);
  }

  const result = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = compactObject(obj[key]);

      if (Boolean(value)) {
        // Only include keys with non-falsy values
        result[key] = value;
      }
    }
  }

  return result;
};
