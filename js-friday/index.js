// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }

  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
//export to Share a Code Block
const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};

export { uppercaseString, lowercaseString };
//
export default function subtract(x, y) {
  return x - y;
}
//Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
//Handle a Fulfilled Promise with then
makeServerRequest.then((result) => {
  console.log(result);
});
makeServerRequest.catch((error) => {
  console.log(error);
});
