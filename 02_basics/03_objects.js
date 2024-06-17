// singleton
// Object.create

// object literals (non-singleton)

const mySym = Symbol("key1")


const JsUser = {
    name: "Aman",
    "full name": "Aman Thakur",
    [mySym]: "mykey1",
    age: 18,
    location: "Mohali",
    email: "aman@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Aman@abc.com"
// Object.freeze(JsUser)
JsUser.email = "aman@qwe.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// const obj = {
//     person1: "abc",
//     person2: "zxc",
//     perso3: "qwe"
// }
// for (x in obj){
//     console.log(obj[x]);
// }