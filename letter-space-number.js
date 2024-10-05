const letterSpaceNumber = str => str.match(/([a-zA-Z]\s[0-9])(?=[^a-zA-Z0-9])/g) || []
// console.log(letterSpaceNumber('example 1, example 20'));
// console.log(letterSpaceNumber('I like 7up.'));