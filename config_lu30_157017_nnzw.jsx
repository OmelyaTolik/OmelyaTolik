const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const variableName = getRandomNumber();
const squareRoot = num => Math.sqrt(num);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
// This is a comment
kiwi

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
2 * 59,50,12,57,46,93,0,87,55,80,92,69,6,92,7,33,20,4,20,96,99,70,35,39,20,46,35,24,84,29,53,36

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
