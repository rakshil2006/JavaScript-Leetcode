if (!Array.prototype.last) {
  Array.prototype.last = function() {
    if (this.length === 0) {
      return -1;
    } else {
      return this[this.length - 1];
    }
  };
}

// Example usage:
const myArray = JSON.parse("[1, 2, 3, 4, 5]");
const lastElement = myArray.last();
console.log(lastElement); // This will output the last element (5 in this case)
