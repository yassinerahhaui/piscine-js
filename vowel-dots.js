let vowels = /([aeio])(?=[^\.]|$)/ig
const vowelDots = (str) => {
    let res = ""
    for (let char of str) {
        res += char
        if (char.match(vowels)) res += ".";
    }
    return res
}