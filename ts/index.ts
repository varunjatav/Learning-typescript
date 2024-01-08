console.log("Hii, I am varun Jatav");



// TODO1: Write a program to add two numbers?
// TODO2: How to catch Errors & solve it?
// TODO3: TS Configuration file.

// func define
// @ts-ignore
function addition(a:number,b:number):number{
    return a+b
}

// func call
console.log(addition(5,10));

// boolean type;

let isTrue:boolean = true;
let isDone:boolean = false;
let isStable:boolean = false;


//function 
const isEven = (x:number):boolean => {
    if(x % 2 === 0){
        return true;
    }else{
        return false;
    }
};
console.log(isEven(4));

const isDivisibleBy4and8 = (x:number):boolean => {
    return x%4===0 && x%8===0;
}

console.log(isDivisibleBy4and8(3));

let bigNumber:bigint = 9007199254740991n;
let anotherBigNumber: bigint = BigInt("90071992547409915");
let sum:bigint = bigNumber + anotherBigNumber;
let minus:bigint = bigNumber - anotherBigNumber;
let divide:bigint = bigNumber / anotherBigNumber;
let multiply:bigint = bigNumber * anotherBigNumber;
console.log(sum,minus,divide,multiply);

