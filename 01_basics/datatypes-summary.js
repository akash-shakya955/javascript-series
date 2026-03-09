
// Primitive

// 7 types :  String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// Reference  (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "akash",
    age: 22,
};


const myFunction = function(){
    console.log("hello world");
    
};


// console.log(typeof heros);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap(Non primitive)

let myYoutubename = "akashshakyadotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

// console.log(myYoutubename);
// console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl" 
};

let userTwo = userOne;

userTwo.email = "akash@google,com";

console.log(userOne.email);
console.log(userTwo.email);





