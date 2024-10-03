// import { abs } from "./abs.js";

const multiply = (a, b) => {
    if (a < 0 && b < 0) {
        a = abs(a)
        b = abs(b)
    }
    if (a > b) {
        let s = a;
        a = b;
        b = s;
    }
    let result = 0;
    let i = 0
    while (i < b) {
        result += a
        i++
    }
    return result
}
const divide = (a, b) => {
    let negative = false
    if (a >= 0 && b < 0 || b >= 0 && a < 0) {
        negative = true
    }
    a = abs(a);
    b = abs(b);
    if (a < b) {
        return 0
    }
    if (a === b) { return 1 }
    let result = 0
    while(a >= b) {
        a -= b
        result++
    }
    negative ? result = -result : result
    return result
}
const modulo = (a, b) => {
    let negative = false
    if (a < 0) {
        negative = true
    }
    a = abs(a); b = abs(b);
    while (true) {
        if (a < b) {
            if (negative) {
                return -a
            }
            return a
        }
        a -= b
    }
}

console.log(multiply(123, -22));
console.log(divide(123, -22));
console.log(modulo(-123, 22));
console.log(modulo(123, -22));
console.log(modulo(-123, -22));