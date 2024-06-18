// console.log(name);
var name = "Aman";

// (function() {
//   console.log(name);
//   var name = "Aman Thakur";
// })();

function sayHelloWorld() {
  return sayGoodbyWorld();

  var sayGoodbyWorld = function() {
    return "Hello, World!";
  };
  function sayGoodbyWorld() {
    return "Goodbye, World!";
  }
}
// console.log(sayHelloWorld());
var x = 10;
function testNum() {
  console.log(x);
  if (true) {
    var x = 20;
  }
  console.log(x);
}
testNum();