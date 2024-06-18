// console.log(name);
var name = "Aman";

(function() {
  console.log(name);
  var name = "Aman Thakur";
})();

function sayHelloWorld() {
  return sayGoodbyWorld();
  var sayGoodbyWorld = function() {
    return "Hello, World!";
  };
  function sayGoodbyWorld() {
    return "Goodbye, World!";
  }
}
console.log(sayHelloWorld());
