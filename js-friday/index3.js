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
// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp/i;
// let result = fccRegex.test(myString);
// //Extract Matches
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/;
// let result2 = extractStr.match(codingRegex);
// //Find More Than the First Match
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi;
// let result3 = twinkleStar.match(starRegex);
// //Match Anything with Wildcard Period
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/;
// let result4 = unRegex.test(exampleStr);
// //Match Single Character with Multiple Possibilities
// let quoteSample =
//   "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi;
// let result5 = quoteSample.match(vowelRegex);
// //Match Letters of the Alphabet
// let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi;
// let result6 = quoteSample.match(alphabetRegex);
// //Match Numbers and Letters of the Alphabet
// let quoteSample2 = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi;
// let result7 = quoteSample.match(myRegex);
//Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi;
let result = quoteSample.match(myRegex);
