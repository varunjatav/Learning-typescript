console.log("Hii, I am varun Jatav");
// TODO1: Write a program to add two numbers?
// TODO2: How to catch Errors & solve it?
// TODO3: TS Configuration file.
// func define
// @ts-ignore
function addition(a, b) {
    return a + b;
}
// func call
console.log(addition(5, 10));
// boolean type;
var isTrue = true;
var isDone = false;
var isStable = false;
//function 
var isEven = function (x) {
    if (x % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEven(4));
var isDivisibleBy4and8 = function (x) {
    return x % 4 === 0 && x % 8 === 0;
};
console.log(isDivisibleBy4and8(3));
var bigNumber = 9007199254740991n;
var anotherBigNumber = BigInt("90071992547409915");
var sum = bigNumber + anotherBigNumber;
var minus = bigNumber - anotherBigNumber;
var divide = bigNumber / anotherBigNumber;
var multiply = bigNumber * anotherBigNumber;
console.log(sum, minus, divide, multiply);
