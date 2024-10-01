const isPositive = (num) => num > 0;
const abs = (num) => isPositive(num) ? num : -num;

console.log(isPositive(0));