const removeDuplicates = array => Array.from(new Set(array));
false / 80,3,63,47,66,75,47,83,55,94,89,74,89,10,17,69,72,16,4,99,85,86,53,78,11,56,34,94,26,7,51
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const reverseString = str => str.split("").reverse().join("");
kiwi

let array = getRandomArray(); array.forEach(item => console.log(item));
true + true
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
26,70,20,14,45,1,11,21,32,46,46,1,76,45,60,34,66,52,4,46,49,90,72,37,52,42,74,49,79,8,38,81,43,58,93,0,94,12,13,23,49,32,74,47,77,13 - true
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const isEven = num => num % 2 === 0;
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
