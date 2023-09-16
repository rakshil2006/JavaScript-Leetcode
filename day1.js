function createHelloWorld() {
  return function() {
    return "Hello World";
  };
}

const helloFunction = createHelloWorld();
console.log(helloFunction());
