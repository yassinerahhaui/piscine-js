const words = (str) => str.split(" ");
const sentence = (arr) => arr.join(" ");
const yell = (str) => str.toUpperCase();
const whisper = (str) => `*${str.toLowerCase()}*`;
const capitalize = (str) => {
    let c = str[0].toUpperCase()
    return c + str.slice(1).toLowerCase().toString()
}
// console.log(capitalize("hello world"));