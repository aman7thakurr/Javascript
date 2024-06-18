/* modifiers
g - The "g" modifier specifies a global match.
A global match finds all matches (not only the first).

gi - Global case-insensitive match

i - case-insensitive match

d - The "d" modifier specifies the start and end of match.
The "d" modifier is case-sensitive.

m -The "m" modifier specifies a multiline match. The "m" modifier is case-sensitive and not global
It only affects the behavior of start ^ and end $.
^ specifies a match at the start of a string.
$ specifies a match at the end of a string.
With the "m" set, ^ and $ also match at the beginning and end of each line.
you can use "m" with "g" and "i"
*/

//exec searches provided string and it returns object if no match found it returns null
// console.log(/how/gi.exec("hello ! How are you?"))

//test searches the string for the provided pattern, and returns true or false depending on the result
// console.log(/how/i.test("hello ! How are you?"))

// console.log(/are/mi.exec("hello ! How Are you?"));


//groups
/*
brackets[abc] specify matches to the character
inside the bracket
[abc] - any character from a ,b,c
[A-Z] - any character from A to Z
[A-z] - any character from capital A to lowercase z
[a-z] - any character from lowercase a to lowercase z
*/
// console.log(/[abc]/gi.exec("hello ! How Are you?"));
// console.log(/[a-z]/g.exec("hello ! How Are you?"));
// console.log(/[A-z]/g.exec("hello ! How Are you?"));
// console.log(/[A-Z]/g.exec("hello ! How Are you?"));

//search
const str = "hello ! How Are you?"
let n = str.search(/How/g)
console.log(n);
let z = str.match(/[A-z]/gi)
console.log(z);