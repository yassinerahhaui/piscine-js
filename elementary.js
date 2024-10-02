const abs = (num) => num >= 0 ? num : -num;
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
    a = abs(a); b = abs(b);
    let result = a;
    let i = b
    if (a === b) { return 1 }
    while (i > b) {
        result -= a
        i--
    }
    return result
}
const modulo = (a, b) => {
    a = abs(a); b = abs(b);
    while (true) {
        if (a < b) {
            return a
        }
        a -= b
    }
}

console.log(multiply(123, -22));
// console.log(divide(5, -5));
// console.log(modulo(5, 2));