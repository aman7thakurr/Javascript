/* modifiers
g - The "g" modifier specifies a global match.
A global match finds all matches (not only the first).

gi - Global case-insensitive match

i - case-insensitive match

d - The "d" modifier specifies the start and end of match.
The "d" modifier is case-sensitive.

m -The "m" modifier specifies a multiline match.
It only affects the behavior of start ^ and end $.
^ specifies a match at the start of a string.
$ specifies a match at the end of a string.
With the "m" set, ^ and $ also match at the beginning and end of each line.
*/

//exec searches provided string and it returns object if no match found it returns null
console.log(/how/gi.exec("hello ! How are you?"))

//test searches the string for the provided pattern, and returns true or false depending on the result
console.log(/how/i.test("hello ! How are you?"))