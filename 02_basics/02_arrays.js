const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Aman"))
// console.log(Array.from("Aman"))
console.log(Array.from({name: "Aman"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));

//array searching
const arr= ["apple","mango","banana","guava","watermelon","mango"]
//1. indexOf
/*Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence. */

// console.log(arr.indexOf("apple"));

// 2. lastIndexOf()
/* Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.*/

// console.log(arr.lastIndexOf("mango"))

//3. find() : The find() method returns the value of the first array element that passes a test function.
 const number =[1,2,32,3,23,54,231]
 const  af = number.find(myFunction)

 function myFunction (value, index,array){
    return value>32
 }
//  console.log(af);

// console.log( arr.lastIndexOf("mango"))

//array sorting
//sort,reverse

/*toSorted() method as a safe way to sort an array without altering the original array.*/

/*toReversed() method as a safe way to reverse an array without altering the original array. */
// Math.min() , Math.max()


//**********Array Iteration*******

//Array forEach
// number.forEach(eachFun)
// function eachFun(value){
//     console.log(value); 
// }

// map
// const res=number.map(myFunc)
// function myFunc(value){
//     return value *2
// }
// console.log(res);

//filter
const res=number.filter((value)=>value>10)
// console.log(res);

//reduce 
const res1= number.reduce((acc,crr)=>acc+crr)
// console.log(res1);

//every
const res2 = number.every((value)=>value>1)
// console.log(res2);

//some
const res3 = number.some((value)=>value>100)
// console.log(res3);

//spread
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year= [...q1,...q2,...q3,...q4]
// console.log(year);


