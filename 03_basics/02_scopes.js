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
// testNum();

let s = "00000001111111";
let l = 0, r = s.length - 1, ans = -1;

while(l <= r) {

  var mid = Math.floor((l + r) / 2);
   if(s[mid] == '1') {
       ans = mid;
       r = mid - 1;
   }
   else {
       l = mid + 1;
   }
}
// console.log(ans);

// function fun(){
//   for(var i = 0; i<5; i++){
//     setTimeout(()=>{
//       console.log(i)
//     },)
//   }
// }

function fun(){
  for(let i = 0; i<5; i++){
    setTimeout(()=>{
      console.log(i)
    },)
  }
}
fun()