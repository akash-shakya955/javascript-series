
// singleton
// object.create


// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Akash",
    "full name": "Akash Shakya",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "akash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.greeting = function(){
    console.log("hello JS user");
    
}

jsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




