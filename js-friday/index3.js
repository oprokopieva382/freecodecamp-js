//Using the Test Method
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
// //Match Literal String with Different Possibilities
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/;
// let result2 = petRegex.test(petString);
//
//Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);
//Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result2 = extractStr.match(codingRegex);
