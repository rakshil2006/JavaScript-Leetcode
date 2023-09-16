function createCounter(n) {
  return function() {
    return n++;
  };
}

// Example usage:
const myCounter = createCounter(5);

console.log(myCounter()); // Output: 5
console.log(myCounter()); // Output: 6
console.log(myCounter()); // Output: 7
