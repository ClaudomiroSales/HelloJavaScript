// Create an array with 10 random numbers between 0 and 1
const randomArray = Array.from({ length: 10 }, () => Math.random());

console.log(randomArray);

const randomArrayInt = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

console.log(randomArrayInt);