
const name = "akash";
const repoCount = 50;

// console.log(name + repoCount + "value");


console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("akash");

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf("k"));


const newString = gameName.substring(0, 2)
console.log(newString);


const anotherString = gameName.slice(-3, 1);
console.log(anotherString);


const newStringOne = "    akash    ";

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akash.com/akash%20shakya";

console.log(url.replace("%20", "-"));


console.log(url.includes("akash"));







