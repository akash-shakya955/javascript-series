
// function sayMyName(){}


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }


function addTwoNumbers(num1, num2){
//    let result = num1 + num2
//    return result
    
return num1 + num2
}

// const result = addTwoNumbers(5, 5)

// console.log("Result: ", result);


function loginUserMessage(userName = "sam"){

    if(!userName){
        console.log("please enter a username");
        return
        
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Akash"));
// console.log(loginUserMessage());




function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "Akash",
    price: 199
}


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user);

handleObject({
    username: "sam",
    price: 399
});


const myNewArrray = [200, 400, 100, 600]

function returnSecoundValue(getArray){
    return getArray[1]
}

// console.log(returnSecoundValue(myNewArrray));
console.log(returnSecoundValue([200, 400, 100, 600]));
