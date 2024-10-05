const letterSpaceNumber = str => str.match(/(\w\s\d)(?=[^\w\d]|$)/g) || []
// console.log(letterSpaceNumber('example 1, example 20'));
// console.log(letterSpaceNumber('I like 7up.'));
// console.log(letterSpaceNumber("It's 20 past 3"));