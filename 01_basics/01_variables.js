/*JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const 
*****-------------------*************
The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _.
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.
*/

const userId = 112 /* const is used to declare variables that are constant and cannot be reassigned. 
but it does prevent reassignment of the variable.

** Use const when you want to ensure that a variable will not be reassigned, which can help prevent bugs
and improve code readability.

** For objects and arrays declared with const, you can still modify their properties or elements, but you cannot 
reassign the object or array itself.

** Using const is a good practice for values that you know should not change,

*** Block-scoped, cannot be re-declared or reassigned within the same scope,
  but objects and arrays declared with const can have their contents modified.*/

let accountEmail = "abc@h.com" /**
 * Block-scoped, cannot be re-declared within the same scope, not hoisted in the same way as var.
 */
var accountPassword = "12423" /* Function-scoped or globally-scoped, can be re-declared, hoisted.*/

accountCity = "Mohali" /*When you declare a variable without var, let, or const, 
it becomes a property of the global window object (in browsers). This can lead to:

**Namespace Collisions: If multiple parts of your application or different libraries use the same variable name, they can unintentionally overwrite each other.

**Difficulty in Debugging: It can be hard to track where the variable was first defined or modified, leading to confusing bugs.

**Memory Leaks: Variables that should be scoped to a function may persist longer than intended, consuming memory unnecessarily.
*/
let accountState //unintialized variable will result in a undefined output

console.table([userId,accountEmail,accountPassword,accountCity,accountState]) //console.table prints the given variables in a tabular form